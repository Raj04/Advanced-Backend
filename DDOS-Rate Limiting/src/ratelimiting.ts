import Express from "express";

const app = Express();
const PORT = 3000;

app.use(Express.json());

//store OTPs in a simple in-memory object
const otpStore: Record<string, string> = {};

//endpoint to generate and log otp
app.post("/generate-otp", (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[email] = otp;

  console.log(`otp for ${email} : ${otp}`); //log the otp to console
  res.status(200).json({ message: "OTP Generated and logged" });
});

//endpoint to reset password

app.post("/reset-password", (req, res) => {
  const { email, otp, newPassword } = req.body;

  if (!email || !otp || !newPassword) {
    res
      .status(400)
      .json({ message: "Email, OTP and new Password are required" });
  }

  if (otpStore[email] === otp) {
    console.log(`Password for ${email} has been reset to: ${newPassword}`);
    delete otpStore[email];
    res.status(200).json({ message: "Password has been reset successfully" });
  } else {
    res.status(401).json({ message: "Invalid OTP" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
