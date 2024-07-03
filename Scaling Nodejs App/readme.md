# Vertical Scaling in Nodejs App

- JS will use only one processor as its a single threaded
- Multi core CPU doesnt matter, only single core is being used unlike Java/Go/Rust
  where we write multithreaded codes and thread pool, AWS CPUs are being used efficiently
- Run inifinite loop in Nodejs app, that will run the expensive operation only on one thread not all, otherwise other application that are running will be interrupted
- Implement horizontal scaling using Cluster Module https://projects.100xdevs.com/tracks/hor-ver-scaling/Horizontal-and-vertical-scaling--Indexes-in-DBs-3
