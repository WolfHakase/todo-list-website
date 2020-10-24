A project meant to showcase some programming ability. In this mono-repo you will find a Go backend, a React frontend and E2E tests using Selenium. 
The backend will be a dockerized REST api written in Go using PostgresDB.

To start the frontend run `yarn start` in the directory `..\todo-list-website\frontend\todo-list-website`. 
For more instructions on the frontend see the readme in the directory `..\todo-list-website\frontend\todo-list-website`.

To start the selenium tests navigate to the directory of that test and then run `node <test_name>.js`.
For example to run `test_selenium_works.js`. Navigate to `..\todo-list-website\e2e`. Then run `node test_selenium_works.js`.
