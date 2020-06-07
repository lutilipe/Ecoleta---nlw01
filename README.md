# Ecoleta
> Developed during Next Level Week

Ecoleta is a project that improve the recycling by connecting people to companies that collect waste, showing points on the map of nearby collection sites. All of this thanks to [Rocketseat](https://rocketseat.com.br/).

## Technologies
  - Node.js
  - React
  - React Native
  - Expo
  - Knex
  - MySQL
  
## Installation

You'll need installed on your computer the package manager 
[yarn](https://yarnpkg.com/getting-started), 
[git](https://git-scm.com/) and
[NodeJs](https://nodejs.org/en/).

```bash
# Clone the repository
$ git clone https://github.com/lutilipe/Ecoleta---nlw01.git
```

### API
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
### Web
 ```bash
# Go to web directory
$ cd web

# To install the dependencies
$ yarn install

# Run the web application
$ yarn start
```

### Mobile
For this part, it's recommend to install Expo on your cellphone and use it. But you can also use a Android/IOS simulator.
 ```bash
# Go to mobile directory
$ cd mobile

# To install the dependencies
$ yarn install

# Run the mobile application
$ yarn start
```

## License
To see the license, check out [MIT](https://choosealicense.com/licenses/mit/)!
