# Project Name

Real Estate Website

## DESCRIPTION

This is a fully functional and responsive website that allows one to locate houses and book.

## BUILT USING

The website is using React.js,Tailwind and JSON. 

## AUTHOR

👤 Pauline Ondiek

## SOCIAL PLATFORMS

GitHub: @PAULINE-ASHLEY
Twitter: @PAULINE_ONDIEK
LinkedIn: Pauline Ondiek

## SETUP

To setup git clone https://github.com/PAULINE-ASHLEY/Real-Estate-React-Web.git 

# Getting Started with Real Estate Website

## Prerequiste

    1. Ensure you have `node` version >=14 installed. To find out about this, Open a command prompt or terminal and type `node -v`
    2. You have cloned the repo from github
    3. You have a text editor (preferably vscode) installed on your computer

## Steps

    1. Open the project folder with your desire code editor
    2. Open a built in terminal without included with your text editor
    3. To install all dependencies used in the project, type in `npm install` into the open terminal and click enter on your keyboard
    4. To ensure the project is open with rules specific by eslint used in this project, type in `npm run lint` on the terminal
    5. Next, ensure the project files are rightly formatted by typing in `npm run format`
    6. Finally, to start the development server, `npm run start`

At this Point, you should see the application running on a broswer window/tab at [http://localhost:3000]
If you encounter any issues while doing any of the above commands, kindly the sections below on the `available scripts` to find for little more insight.

## Contributing Rules

1. Clone repository
2. Checkout an "all-time" branch using the following format <_your name_>-development (e.g git checkout -b pauline-development)

NOTE: All Push and pull requests should be made toward the development branch.

## Making a Commit

Ensure to follow these steps when committing

1. git add .
2. npx lint-staged
3. git commit -m <_message here_>
4. git pull origin development
5. git push

## Opening a Pull request

1. Go to github
2. open a new Pull Request to development

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Checks if files obeys all Eslint set rules properly

### `npm run lint:fix`

This script fixes all possible eslint errors in the project

### `npm run format`

Formats all files using prettier set rules at .prettierrc

### `npm run check:format`

Checks if all files are formatted properly

### `npm run test-all`

Checks if files obeys the Eslint rules and are formatted properly
