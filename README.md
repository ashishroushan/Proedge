# Proedge

The app was made with the help of react JS acting as the frontend supporting all the UI components and the API calls to the server were handled with the help of node JS which made further calls to an external API provided by the company which returned the result and it was displayed on the frontend of the application.
The back-end of the Project is made by nodeJS and deployed on [HEROKU](https://roll-number-proedge.herokuapp.com/) and the front-end was deployed on [NETLIFY](https://proedge-roll-number.netlify.app/).

## FRONTEND [REACT JS]
### TECH USED:
1.React JS and its hooks
2.Axios
3.Material UI

## COMPONENTS:
### 1.INPUTROLL [FORM ELEMENT TO INPUT ROLL NUMBERS]

![chrome_2021-06-05_02-31-08](https://user-images.githubusercontent.com/75972049/120866665-10193180-c5ae-11eb-8ad1-d21d3175d383.png)


The form input element inputs the data with the help of controlled components.The form takes input in the form of commma separated roll numbers which is split with the help of string split function and stored in an array state. The array is passed down as a prop to the result component which handles it. The submit button renders the result component only on inputting something in the input box using conditional rendering.

### 2.RESULT [DISPLAY THE OUTPUT IN A TABULAR FASHION]

![chrome_2021-06-05_02-30-30](https://user-images.githubusercontent.com/75972049/120866708-1dceb700-c5ae-11eb-830e-e834b2d096b9.png)

The result component handles the array of roll numbers passed down as props to it by the InputRoll component. It sends the array to the local server created with node js in the form a JS object with "rollNumber" key and the array of roll numbers as the value, with the help of an axios post request. The response to the axios post request is handles by storing it as an array of Pass/Fail string array in a useState variable called resData. The resData array is then converted to a JSX table using the array map function and correlating every result to its corresponding roll number and displaying it as a table.

### 3.LOADER [CSS ANIMATION WHILE FETCHING DATA]

![chrome_2021-06-05_02-28-31](https://user-images.githubusercontent.com/75972049/120866807-4951a180-c5ae-11eb-878c-c31c0e790001.png)


The Loader components displays a Loading message while the api calls are being executed and since it takes time a loader animation is shown to keep the client a bit engaged while the table which displays the result, is being rendered. The loader animation is conditionally rendered when the resData array has some sort of value input in it which is only possible when the api call is completed and the array is assigned to the state.

OUTPUT!!

![chrome_2021-06-05_02-30-49](https://user-images.githubusercontent.com/75972049/120866889-6d14e780-c5ae-11eb-9708-accced19cd50.png)


## BACKEND [NODE JS]
### TECH/DEPENDENCIES USED:
1.Node Js
2.Express
3.CORS

FUNCTIONALITIES:
The express module is installed in the backend and an express app is created is created. The app is used to handle the POST request that the axios request made from the frontend react app. It takes the incoming array and loops over each roll number and makes an external API call for each roll number. The response from the external API is pushed in an array and at the end of fetching all the results the response is is sent back to the frontend which handles it. The "cors" module was reuired in thenode js/express application because the API calls from the client side was not allowed due to data safety protocols and the calls needed to be made made from the server side using CORS.

## TEST CASES:
### 1)5,6,9,12,18,20,25,30,32,36,37,38,40,42,45,47,49,50

![chrome_2021-06-05_02-30-30](https://user-images.githubusercontent.com/75972049/120866930-80c04e00-c5ae-11eb-9fda-3e23daf7114c.png)


### 2)1,2,3,4,5

![chrome_2021-06-05_02-30-49](https://user-images.githubusercontent.com/75972049/120866976-9afa2c00-c5ae-11eb-87ec-aa0bced551c5.png)


### 3)5,ashish8,,1,a,5,,,8[Skips if not a number]

![chrome_2021-06-05_02-33-47](https://user-images.githubusercontent.com/75972049/120866972-97ff3b80-c5ae-11eb-91df-35a1690dd1a0.png)


### 4)EMPTY FIELD
Nothing happens
![chrome_2021-06-05_02-27-47](https://user-images.githubusercontent.com/75972049/120866992-a2213a00-c5ae-11eb-8c3e-260cd61126df.png)


