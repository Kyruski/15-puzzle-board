# 15 puzzle board

This is a Game board for the 15 puzzle game. Currently, it only has functionality to: 


1. Move a single adjacent square
2. Move a whole row/column with the use of the control arrows

### IMPORTANT

**_THE BOARD IS RANDOMLY GENERATED AND IS NOT NECESSARILY CODED TO ALWAYS BE SOLVABLE. THE BOARD MAY BE IMPOSSIBLE_**


## Built With

This project was bootstrapped with [ViteJS](https://vitejs.dev/).

In addition, this project utilizes the following technologies/packages:

`React`

`Typescript`

`Styled Components`

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

[Node](http://nodejs.org/) and [yarn](https://yarnpkg.com/) are required.

It is recommended to install Node using Node Version Manager (NVM).

The following is a tutorial on how to install NVM: [Install Node via NVM](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/).

```
You should be able to run the following command after the installation procedure
below.

% nvm ls
->     v14.16.0

% yarn --version
  1.22.10
```

Additionally, Make sure you have an accessible MongoDB. Add the DB location to your `.env` file as `DATABASE_URL=[your url]` without the brackets.

### Installing

A step by step series of examples that tell you how to get the server running.

Once you are in the terminal and have changed your current directory to the repo, run the following command to install all necessary dependencies, build the bundle, and run the app:

```
yarn start
```

Alternatively, to open the App once `yarn start` has been ran once:

```
yarn dev
```

## Relevant Available Scripts

In the project directory, you can run:

### `yarn start`

Installs all dependancies through `yarn` and runs the app in ViteJS dev mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn dev`

Runs the app in ViteJS after all dependancies have been installed

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.