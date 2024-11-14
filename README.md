Healthcare API
This API manages a list of healthcare services, with endpoints for creating, retrieving, updating, and deleting services. Built with Node.js, Express, and MongoDB.

To clone the Repository:

git clone https://github.com/theja1661/HealthcareAPI.git
cd HealthcareAPI
Install Dependencies:


npm install

Configure Environment Variables:

Create a .env file in the project root and add the following environment variables:
makefile
Copy code
MONGO_URI=mongodb+srv://thejasurendran:rBb9xOOpmUmJI4Fx@cluster0.9yqhg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=5500

Start the Application:


node app.js
or


npm start
The server should now be running on http://localhost:5500.

Environment Variables
MONGO_URI: MongoDB URI to connect to your database.
PORT: Port number for the server (default is 5000).
API Endpoints
Add a New Service

POST /api/v1/add-service
Request Body:
json
Copy code
{
  "serviceName": "Consultation",
  "description": "General",
  "price": 100000
}
Get All Services

GET /api/v1/services
Update a Service

PUT /api/v1/update-service/:id
Replace :id with the service ID.
Request Body:
json
Copy code
{
  "serviceName": "Updated Service",
  "description": "Updated description",
  "price": 150000
}
Delete a Service

DELETE /api/v1/delete-service/:id
Replace :id with the service ID.

Testing the API
You can test the API endpoints with tools like Postman
