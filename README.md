# FUO-CBT-BACKEND
A backend cbt for university

- Express JS APP.
- API.
- Role Based Access Control (Admin, Lecture, Student).
- Onboard Lecture and Student (Admin)
- Add Exam Questions And Answer(Lectures)
- Take Exam Question and See Result (Student)

## What do we need?

- API
- CRUD Operation
- config, dotenv
- validation
- pagination
- sequelize, mysql2, express-validator, express.

### Installation

- Clone the repository: `bash git clone cd `
- Install dependencies: `bash npm install `
- Create a MySQL database and comment out the port in the db.config.js file to work locally on MySQL database, hence add Port in db.config.js file for production database to run
- Configure environment variables:
- Copy .env.example to .env
- Update the values in .env with your configuration
- Start the server: ```bash

#### Development

- npm run dev

##### Production

- npm start ```

###### API Endpoints

# Authentication
