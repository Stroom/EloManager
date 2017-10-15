package ee.stroom;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EloApplication {
	/*
	cd ./docker
	docker build -t sstroom/elomanager ./
	docker tag sstroom/elomanager sstroom/elomanager:test
	docker login
	docker push sstroom/elomanager:test
	docker run -d --name backend -e "JAVA_OPT=-Dspring.profiles.active=prod" -p 8443:8443 sstroom/elomanager:test
	*/
	public static void main(String[] args) {
		
		SpringApplication.run(EloApplication.class, args);
	}
}
