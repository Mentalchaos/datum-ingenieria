deploy:
	docker build -t "drakosddos/datum-frontend:v$(version)" .
	docker push "drakosddos/datum-frontend:v$(version)"
