# Basic Redis Usage on Express
Simple Prevention Multiple Request from Frontend with Redis.
Inspired from the [Kennard Wicoady's Golang Redis](https://github.com/wicoady1/redissimulation)

### Getting Started
**express-redissimulation** is one of simple example on how to utilize Redis technology into Express webapp usage. This example utilizes redis to prevent multiple requests from frontend in certain period of time (in this case, 10 seconds).

### Pre-requisites
- Node 6.0.0 or Above (https://nodejs.org/en/download/)
- Redis Server 3.0.6 or Above (https://redis.io/download)

### Installing
1. Make sure you have fulfilled all prerequisites above
2. Clone repo to your local computer
```
git clone https://github.com/Paskalouis/express-redissimulation.git
```
3. Do npm install
(This code example for UNIX Command, Windows and other Linux Distro may use different commands)
```
npm install
```
4. Start the app
```
node app.js
```
5. Go to browser and access link below
```
localhost:3000
```

### Authors
- Paskalouis Patressi (Express Version)
- Kennard Wicoady (Go Version)

### License
ISC Licensed