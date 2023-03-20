# Country Population
This is a GraphQL API with queries and mutations to create, update and fetch country population records. The API was created using the NestJS framework. Technologies used include
- TypeScript
- MongoDB
- Mongoose
- GraphQL
- Apollo
- NestJS
- Yarn

## GraphQL implementation
The NestJS code-frist approach was used for the GraphQL implementation in the application. More information on that can be read following this link https://docs.nestjs.com/graphql/quick-start#code-first

## Testing
Unit tests were written for several functions in the API, with high code coverage of the entire application. The framework used for testing is Jest.

## Environmental Variables
Before running the application make sure the necessary environmental variables are set. Take a look at the .env.example file which specifies environmental varaibles used by the appication.

## Scripts
Several scripts are specified in the package.json file. To install packages, after cloning, use
```
yarn install
```

To run the application in dev mode run
```
yarn start:dev
```

To run tests run
```
yarn test
```

To run tests with code coverage
```
yarn test:cov
```

## App Demo
Click on the link below to watch a demo video of the application
https://drive.google.com/file/d/1kOWWjv_V7sKyJmFMvBspzTtVJ76uum5C/view?usp=share_link
