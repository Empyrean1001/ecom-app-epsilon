# Nodejs Express API Backend for Shop System with SQL Database

Credits for the fake product data to [Fake Store API](https://fakestoreapi.com/).

## Installation

In the .dev.env file add the NeonDB connection URL for your project.

Run the commands in the .sql extension files on NeonDB SQL editor to make your own database. The URL will connect the App backend with your DB!

After creating the NeonDB, go to the terminal and run the following commands:

This will install all the dependencies mentioned in the package.json and package-lock.json files.
```bash
npm install
```

This will create the dist folder as mentioned in the tsconfig.json file.
```bash
npm tsc
```

## Usage

To start the server, run:

```bash
npm start
```

In case of any errors mentioning failed to fetch products/product details, check the shop.js file in the dist folder and your NeonDB connection URL.
