<a href='https://github.com/lutilipe/Ecoleta---nlw01'>
  <p align="center" style="border-radius:6px">
    <kbd>
    <img width="700" height="auto" src='https://github.com/lutilipe/Ecoleta---nlw01/blob/master/recycling.jpg'>
    </kbd>
  </p>
</a>


# Ecoleta
> Developed during Next Level Week #01.

Ecoleta is a project that improve the recycling by connecting people to companies that collect waste, showing points on the map of nearby collection sites. All of this thanks to [Rocketseat](https://rocketseat.com.br/) :rocket:.

## :rocket: Technologies
  - Node.js
  - React
  - React Native
  - Expo
  - Knex
  - MySQL

## :information_source: Installation

You'll need to have installed on your computer before starting the project:
[yarn](https://yarnpkg.com/getting-started), 
[NodeJs](https://nodejs.org/en/).

```bash
# Clone the repository
$ git clone https://github.com/lutilipe/Ecoleta---nlw01.git
```
 
### Configuring the DataBase and Server
```bash
$ cd server/knexfile.ts
$ cd server/src/database/connection.ts
```
 Change the password '******' in those two files to be your database password .

### :computer: API
```bash
# Go to server directory
$ cd server

# To install the dependencies
$ yarn install

# Create the DataBase
$ yarn knex:migrate
$ yarn knex:seed

# Run the server
$ yarn dev
```
### :computer: Web 
 ```bash
# Go to web directory
$ cd web

# To install the dependencies
$ yarn install

# Run the web application
$ yarn start
```

### :iphone: Mobile 
For this part, it's recommend to install Expo on your cellphone and use it. But you can also use a Android/IOS simulator.
 ```bash
# Go to mobile directory
$ cd mobile

# To install the dependencies
$ yarn install

# Run the mobile application
$ yarn start
```

## :pencil: License
To view the license, check out [MIT](https://choosealicense.com/licenses/mit/)!
