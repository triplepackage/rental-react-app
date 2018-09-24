
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
