# agoradevs.com

![](https://i.imgur.com/u1kZK7N.png)


## Stack

* React.js
* Redux
* Node.js
* Express
* MongoDB

## Frontend

Go to this route  -> agoradevs.com/client/ 
Install node modules
```
npm i 
```

## Backed 

At root install node modules

```
npm i 
```
To run the backend you need to add this object into the config folder and create a file named default.json. 


* Create your collection at MongoDB and get the mongo URI.
* Define a secret word.
* Create a personal access token, here you can see instruccions -> 
https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token

```
 {
    "mongoURI": ,
    "jwtSecret": ,
    "githubClientId"": 
} 
```

You can run the project at root with 

```
npm run dev
```