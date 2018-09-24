# ReactJS App With Docker 

Sample ReactJS application which utilizes a REST service to retrieve data and display in ReactTable. The project contains a Dockerfile for running in a containerized environment.

### Run Application Locally

To change the default port, set value in .env file:
<pre>
PORT=3009
</pre>

Run locally
<pre>
Johns-MBP:rental-react-app admin$ npm start

Compiled successfully!

You can now view rental-react-app in the browser.

  Local:            http://localhost:3009/
  On Your Network:  http://192.168.1.175:3009/

Note that the development build is not optimized.
To create a production build, use npm run build.

</pre>

### Run Application In Docker Container
Build the docker container
<pre>
docker build -t rental-react-app . -f ./infrastructure/docker/Dockerfile
</pre>

Run the docker container
<pre>
docker run -p 3009:3009 65371f32a445

Johns-MBP:rental-react-app admin$ docker run -p 3009:3009 65371f32a445

> rental-react-app@0.1.0 start /usr/src/app
> react-scripts start

Starting the development server...

Compiled successfully!

You can now view rental-react-app in the browser.

  Local:            http://localhost:3009/
  On Your Network:  http://172.17.0.7:3009/

Note that the development build is not optimized.
To create a production build, use npm run build.
</pre>

Verify application is working

![Alt text](images/image01.jpg?raw=true "Rental React App")
