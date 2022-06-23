# cReport

## Run dev app

```
```

## Setup .env file

```
#change NODE_ENV to select configuration file e.g datasources.production.js or datasources.development.js
NODE_ENV=development
PASSWORD=****
#set NODE_INIT_DATA = true to init database e.g ACL, user
NODE_INIT_DATA=true
#to force update INIT and TEST data
NODE_FORCE_INIT_DATA=true
#to init test data
NODE_INIT_TEST_DATA = false
PORT=4001
HOST=creport.bworks.app
#these setting used for external production server e.g nginx to communicate with outside clients.
#in this project used for email verify and reset password.
#setting below appropriately to NGINX settings in production mode.
DOMAIN=creport.bworks.app
EXTERNAL_PORT=4001
EXTERNAL_PROTOCOL=http
```
