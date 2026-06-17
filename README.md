# NodeJS Express Rest

![GitHub release](https://img.shields.io/github/v/release/letsdevapps/nodejs-express-rest)
![GitHub last commit](https://img.shields.io/github/last-commit/letsdevapps/nodejs-express-rest)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/letsdevapps/nodejs-express-rest/build-ci.yml)

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-API-blue)
![Docker](https://img.shields.io/badge/Docker-enabled-blue)
![Docker](https://img.shields.io/badge/CI-enabled-blue)
![Docker](https://img.shields.io/badge/CD-enabled-blue)
![Docker](https://img.shields.io/badge/Kubernetes-enabled-blue)
![Status](https://img.shields.io/badge/status-active-success)

## Documentação

Para informações mais detalhadas sobre o projeto, acesse nossa Wiki:

[NodeJS Express Rest Wiki](https://github.com/letsdevapps/nodejs-express-rest/wiki)

---

## Endpoint Principal (health check/index)

	GET /

Resposta:

	----- NodeJS Express Rest | Index -----

## Sobre

Este projeto é uma API REST desenvolvida com Node.js e Express, criada como boilerplate para aplicações futuras.

Ele demonstra conceitos de:
- Criação de API REST
- Estruturação de projeto backend
- Boas práticas de desenvolvimento
- Containerização com Docker
- Integração e entrega contínua (CI/CD)
- Preparação para Kubernetes
- Documentação Wiki

---

## Tecnologias

- Node.js
- Express
- Docker
- CI/CD pipelines
- Kubernetes (k8s)

---

## Como executar o projeto

Localmente

	node src/server.js

Ou

	npm install
	npm run start
	
Mode Dev com autoreload

	npm install --save-dev nodemon
	npm run dev

Com Docker

	docker build -t nodejs-express-rest .
	docker run --rm -it -p 3000:3000 nodejs-express-rest

Com Kubernetes, aplicar os Manifests

	kubectl apply -f k8s/

- Em ambiente local (Minikube): minikube service <service-name>

	minikube service nodejs-service
	
	minikube service nodejs-service --url

- Em ambiente Kubernetes externo, O acesso depende da configuração do cluster:

via LoadBalancer

	http://<external-ip>:<port>

via Ingress

	http://<domain>/nodejs

---

## Estrutura do projeto

	src/
	 ├── controllers/
	 ├── data/
	 ├── routes/
	 ├── services/
	 ├── config/
	 ├── server.js
	 └── app.js

## CI/CD

O projeto está preparado para pipelines de integração e entrega contínua, permitindo automação de testes e deploy.

- CI configurado para acionar via push-origin/pull-request main
- CD configurado para acionar via push-origin tag

## Futuras melhorias

* Autenticação JWT
* Logs centralizados
* Monitoramento
* Testes automatizados
* Deploy em cloud
