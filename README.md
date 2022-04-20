# windyfi-frontend

Windyfi Frontend MVP

Custom webapp that utilizes ReactMapGL to create a interactive map.
Uses react-map-gl-draw to create custom map objects to represent hardstands, wtgs, roads and cables

#### Hosting

This website is hosted on Heroku with heroku ci/cd that deploys from the main branch.

## Getting started

To get started, run the following commands in the following order: 
`npm install`
`npm start`

<!-- | Command                                                         | Description               |
| --------------------------------------------------------------- | ------------------------- |
| `git clone git@github.com:spireconsulting/windify-frontend.git` | clone project             |
| `cd windify_frontend`                                           | navigate into root folder |
| `npm install`                                                   | install dependencies      |
| `Create a file called .env and add provided file content`       | Ask fredrik for content   |
| `npm start`                                                     | run project in browser    | -->

## Coding

This repository follows the company guidelines and code conventions. Can be found here: https://github.com/spireconsulting/frontend-template/wiki/Code-Convetions

### Lint

Lint software has been added to help developers follow the code conventions: <br />
The linter will find any "errors" (code that deviate from the conventions) and fix them automatically:

| Command            | Description       |
| ------------------ | ----------------- |
| `npm run lint`     | Find any "errors" |
| `npm run lint:fix` | Fix the "errors"  |

Note that some "errors" cannot be fixed automatically by the linting software, in that case you have to fix them manually.

### Prettier

Prettier is recomended to format on save. Follow these steps to activate
| Command | Description |
| ---------------------------------------------------------------- | ------------------------- |
| `ctrl + shift + p` and click on "Preferences: open settings(Json)| Open vscode settings.json |
| `Add the following line: "editor.formatOnSave": true, | Fix the "errors" |
