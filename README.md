# agoradevs.com

## Backed 

To run the backend you need to add this object into the config folder and create a file named default.json. 


* Create your collection at MongoDB anf get the mongo URI.
* Define a secret word.
* Create a new OAuth App at github https://github.com/settings/developers to get clientId   and github Secret.

```
 {
    "mongoURI": ,
    "jwtSecret": ,
    "githubClientId": ,
    "githubSecret": 
} 
```