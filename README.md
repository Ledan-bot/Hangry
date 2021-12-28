
# Hangry

This is a psuedo application meant to showcase the most ordered menus from Hungry's Washington DC area. Please try Hungry! - https://tryhungry.com/
The front-end portion of this application was built with React; the back end created with GO utilzing the Gin framework, and Mongo DB's cloud based storage Mongo Atlas to allow data persistance.


## Authors

- [@NickLedan](https://www.github.com/Ledan-bot)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGOURI=<connection-URI>`

Please contact the author if one has not been provided to you.
## Installation

As this application utlizes GO, please make sure you have GO installed on your local machine and have preconfigured to the GOPATH. Also make sure that NodeJS is also installed on the local machine and subsequently either package manager: npm (default with node) or yarn

Please contact the author if you would like a MongoDB connection URI as the data for this application is stored via Mongo Atlas
## Run Locally


Clone the repository onto your local machine from github using the following command.
```bash
  git clone <my-project-url>
```
Navigate to the root directory.

```bash
  cd <my-project>
```
Run the following command to install the packages for the front-end via npm.
```bash
   npm install
```

Now build the webpack bundle bu running the following command

```bash
  npm run webpack
```
Now that our Front-end portion has been created, we are ready to start the server which will serve the static file for the SPA, and hold the API endpoints. *Again please make sure GO is installed, and the GOPATH has been configured correctly.

Open a seperate terminal window and navigate to the root directory of the application and run either of the following commands to start the web server.
```bash
  go run main.go
```
The above command will compile and run the the application. *Note this creates a temporary file that stores the compiled binary for the program and then that file will be destroyed upon terminating the program/closing the server.

If you would like to build and store the compiled binary on your local machine run the followed lines: The first line creates the compiled binary into a file located within the main directory. The second line simply runs the compiled binary.

```bash
  go build Hangry

  ./Hangry
```


Now nativgate to http://localhost:8026/ in your broswer of choice.

## Running Tests

To run the GO tests, run the following command

```bash
  go test
```

To run the tests with Jest, run the following command

```bash
  npm run test
```


## Acknowledgements

 - [HUNGRY](https://tryhungry.com/)
 - [React](https://reactjs.org)
 - [GOLANG](https://go.dev/)
 - [Gin Web Framework](https://github.com/gin-gonic/gin)
 - [MongDB](https://www.mongodb.com)
 - [Webpack](https://webpack.js.org)


## API Reference

#### Get All Menus

```http
  GET /api/menus/all
```



#### Get Most Ordered Menus

```http
  GET /api/menus/most_ordered
```
#### Test API

```http
  GET /api/test/ping
```

## Feedback

If you have any feedback, please reach out at Nickledan5@gmail.com

