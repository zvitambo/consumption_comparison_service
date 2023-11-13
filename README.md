# Consumption Comparison Service 


This is the Consumption Comparison Service. it has the following responsibilities:

-	A service/ platform to compare electricity prices
-	The service can estimate  annual cost based on consumption
-	The service interacts with an external provider to get  Electricity Tariffs 
-	The service does appropriate calculations depending on user input and the tariff type.


## Getting started 🏁

To get started run these commands:

- `npm i` install all dependencies 
- `npm test` run all tests 
- `npm start` start the service 

- Navigate to `http://localhost:5000/api/v1/compare/?consumption=1000`To test api with get request in postman or browser



# Run on Linux with Node already installed
- To run on Linux cd into root folder and run `npm i && npm start`

# Run on Linux WITHOUT Node installed 
- To install node on Linux with nvm 
- `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.3/install.sh | bash`
- `source ~/.nvm/nvm.sh` this will refresh the available commands in your system path
- `nvm install node` nb - Optionally for specific version of node used on the service `nvm install 16.13.2`
- Verify installation `node --version`
- To run on Linux cd into root folder and run `npm i && npm start`


# Containerization 

- the project root folder has a docker file in place 
- run `docker build -t consumption-comparison-service`.
- run `docker run -p 5000:5000 consumption-comparison-service`
