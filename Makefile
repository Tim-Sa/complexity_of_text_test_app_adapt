
run:
	docker-compose up --build -d

stop:
	docker-compose down --rmi all 

restart:
	make stop
	make run

r:
	make restart