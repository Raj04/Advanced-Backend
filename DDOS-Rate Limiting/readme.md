# Common place to add rate limiting

- login (send 100 req from single IP/sec, not much aggresive like 10 req/IP)
- Recovering password (OTP verification)
  - while clicking on forgot password we can enter others gmail and OTP goes to their gmail/phone
  - now hackers can try to exploit by sending many requests to match the auto generated OTPs
  - so should be heavily rate limited like 1-2/min
- read about various status codes

# DDOS and Captchas
