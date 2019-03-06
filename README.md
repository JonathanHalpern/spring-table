# Spring Table

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It uses [React Spring](https://github.com/react-spring/react-spring) for the transitions

You can view a live version [here](https://spring-table.netlify.com/) 


To run the project locally

 ```
    git clone https://github.com/JonathanHalpern/spring-table
    cd ./spring-table
    yarn or npm i
 ```

## Available Scripts

In the project directory, you can run:

### `yarn bootstrap`

Runs a node programme which looks for a csv file at the root of the project called data.csv<br>
Transforms the data into an array of arrays and writes it to a json file at src/Data/data.json<br>
You must run this function if you make changes to the csv file or even use a new data set

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
