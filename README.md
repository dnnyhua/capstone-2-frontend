Walkies: The Dog Walking App
=============================

## Features
- Find someone to walk your dog
- Make money from walking dogs
- Search for dogs that need to be walked in your area
- write/edit jobs that are posted by dog owners
- write/edit/delete pet profiles

## Problem We are Solving
- The problem that this app is solving is finding someone to walk your dog when you are not able to.
- This application allows the user to sign up as a dog owner to find someone to walk their dog OR the user can sign up as a dog walker to walk someone's dog.

## As a Dog Owner
- The user can add dogs to their account, and each pet will have a profile that a dog walker can view upon hiring.
- The user can post a job that will have the date of when the walk will take place, time of walk, duration, indicate which dog can go on this walk, address, city, state, and zipcode (Full address will only be displayed to walkers that are hired).
- Applications will come in for the jobs posted and the user can decide who to hire.
- The scheduled walk will be added to the dashboard and on each pet's profile you can see their schedule.

## As a Dog Walker
- The user can look for jobs posted by dog owners.
- The user can set their own rate per 30 min walk.
- The job search bar uses city, state, and zipcode and will return results matching any of the 3. For example, if there are jobs in a specific zipcode, it will return jobs within the city and if there are no jobs in that city it will return jobs within that state.
- Once the user applies to a job it will be posted on the dashboard and will show which job they were hired for and which is still going under review.

## Built With
- Database: PostgreSQL
- Backend: Node.js, Express.js, pg(node-postgres)
- Frontend: React
- API: https://github.com/dnnyhua/capstone-2-backend
- Mock up can be found here: https://drive.google.com/file/d/1hp_WTtXouqHqGmK6yMHlz3Qf8GuEFjOV/view?usp=sharing

# Setup
#### Setting up database on postgreSQL 
1. Start postgreSQL server
   ```bash
   $sudo service postgresql start
   ```

2. Go to backend directory (this is in a seperate repo: https://github.com/dnnyhua/capstone-2-backend)

3. Create database (walkies) and tables in postgreSQL. This will also create test database (walkies_test).
  ```bash
    $psql < walkies.sql
  ```

#### Starting backend
  1. Navigate to backend folder

  2.  Start backend server
    ```bash
    $nodemon server.js
    ```
 #### Starting frontend
1. Navigate to frontend folder

2. Install Necessary Packages
   ```bash
   $npm install
   ```

3. Start React App
   ```bash
   $npm start
   ```

# Testing
#### Running backend tests
In the backend directory to run test: 
   ```bash
   $jest
   ```

#### Running frontend tests
In the backend directory to run test: 

