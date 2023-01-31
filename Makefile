build:
	docker compose build 
up:
	docker compose up -d
start:
	docker compose start
stop:
	docker compose stop
down:
	docker compose down
restart:
	docker compose restart
logs:
	docker compose logs -f
ps:
	docker compose ps
shell:
	docker compose exec resource bash