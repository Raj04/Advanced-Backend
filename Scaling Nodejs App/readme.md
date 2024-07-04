# Vertical Scaling in Nodejs App

- JS will use only one processor as its a single threaded
- Multi core CPU doesnt matter, only single core is being used unlike Java/Go/Rust
  where we write multithreaded codes and thread pool, AWS CPUs are being used efficiently
- Run inifinite loop in Nodejs app, that will run the expensive operation only on one thread not all, otherwise other application that are running will be interrupted
- Implement horizontal scaling using Cluster Module https://projects.100xdevs.com/tracks/hor-ver-scaling/Horizontal-and-vertical-scaling--Indexes-in-DBs-3

# Capacity Estimation

- Aggregate requests service inform auto scaling group that there is a spike in no of requests then it increases servers acc to serve requests acc
- We have to have syystems in place for system to scale up and down whenever there is a huge traffic
- ASG(Auto Scaling Groups) will have avg CPU usage as 50%, but when the CPU usage say is above 80%, then scale up the infra or machines, say for 30% ASG will delete the machines not being used
- So basically we will have set of machines serving users, but we will also have a service which will inform another machine in every 5min or so, that is our nodeJS process about no. of requests per second will help in scale up or down acc to traffic

# Capacity estimation in chess application

- https://projects.100xdevs.com/tracks/hor-ver-scaling/Horizontal-and-vertical-scaling--Indexes-in-DBs-4
- Challenges here are to move swiftly change the users server in case of scale up
- Some client side logic can be written for above
-

# Capacity estimation in video transcoder, replit application

-
