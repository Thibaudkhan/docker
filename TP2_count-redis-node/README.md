##Pour que votre projet fonctionne il faut avoir
-node
-npm
-docker

##Il faut éxecuter les commandes suivantes dans l'ordre :
`npm install`
`docker pull node`
`docker pull redis`

`docker build node:redis .`


###Pour lancer redis
`docker run redis`

###Lancer le container avec docker compose
`docker-compose up --build`

