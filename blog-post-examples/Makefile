
# Builds, (re)creates, starts, and attaches to containers for a service
image:
	@sudo docker build -t mithriltest:dev .

# Stops running containers without removing them
run:
	@sudo docker run --name mithriltestinstance -d mithriltest:dev

# Stops running containers with removing, removes service image
kill:
	@sudo docker stop mithriltestinstance
	@sudo docker rm mithriltestinstance
	@sudo docker rmi -f mithriltest:dev

# call all above commands 
refresh:
	@make kill
	@make image
	@make run
