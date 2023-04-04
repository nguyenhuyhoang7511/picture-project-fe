pull:
	git pull origin main

re-deploy: pull
	sudo docker compose -f docker-compose.prod.yml build
	sudo docker compose -f docker-compose.prod.yml stop
	sudo docker compose -f docker-compose.prod.yml up -d
