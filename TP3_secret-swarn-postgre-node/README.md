#Il faut avoir pour ce projet
-Docker

#Pour définir son user et mot de passe 
Se rendre sur le dossier secrets ensuite pour modifier son mot de passe, ouvrir fichier le password.txt. Pour changer le user modifier le username.txt

# On télécharge les images nécessaires
docker pull postgres
docker pull adminer

# On build notre docker-compose
docker-compose up --build -d

# On initialise Swarm
docker swarm init

# 
docker stack deploy --compose-file=docker-compose.yml stack
