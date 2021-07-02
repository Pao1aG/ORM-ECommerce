# ORM-ECommerce
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This application runs with Node.js, Express.js, Sequelize, and MySQL. The user can view, add, and delete products, product categories, and product tags. These changes are reflected on the MySQL database. The GET, POST, PUT, and DELETE requests can be tested on Insomnia.  

## Table of Contents

* [License](#license)

* [Installation](#installation)

* [Usage](#usage)

* [Credits](#credits)

* [Questions](#questions)

---

## License

This project is licensed under the MIT License. To learn more visit:   
> [MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)

## Installation

To install the necessary dependencies, right-click on the root directory, open the intregrated terminal, and run this command:

```
npm i
```

If the package.json file is missing, run these following commands:

```
npm init -y
```
```
npm i dotenv
```
```
npm i mysql
```
```
npm i express
```
```
npm i sequelize
```
```
npm i -D nodemon
```

## Usage

To initialize the app, right-click open the integrated terminal for the root directory. Start the mysql dependency with this command:

```
mysql -u root
```

To create the tables copy the absolute path of the schema.sql. Then type in source in the terminal and paste the path:

```
source: <file path to schema.sql>
```
Then exit MySQL by typing "exit".

To seed the tables through the Models, run this command:

```
node seeds/seed
```

To test the paths and to view, update, or delete from the database, open up the Insomnia application. For each of the routes you can use these paths for requests:

> GET: http://localhost:3001/api/model_route

> POST: http://localhost:3001/api/model_route

> Example: http://localhost:3001/api/products


> PUT: http://localhost:3001/api/model_route/:id

> DELETE: http://localhost:3001/api/model_route/:id

> Example: http://localhost:3001/api/products/2

For a demo of thils application, [Watch Here]()

## Credits

MIT badge was accessed from GitHub user [Lukas Himsel](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

## Questions

If you have any questions, please contact me at: paolaagonzalezm@email.arizona.edu.

