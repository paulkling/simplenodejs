# simplenodejs

### Install node modules
npm install
### Run app with
* grunt
* node app.js

### webserver at:
1. http://127.0.01:3000/
2. http://127.0.0.1:3000/api/nodejs
3. http://127.0.0.1:3000/api/java


##Docker
###Build docker image
docker build -t app .

###Run docker image
docker run -p 3000:3000 app

###Run docker image in background
docker run -d -p 3000:3000 app

docker run --link javaspring:javaring -p 3000:3000 app
