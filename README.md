This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

# Things to consider when using Webcomponents inside angular

in app.module.ts

import `CUSTOM_ELEMENTS_SCHEMA`
add schemas array to the @NgModule decorator with the `CUSTOM_ELEMENTS_SCHEMA`

# Deploy on github pages

To deploy on github pages, first make sure that you have the following installed globally

`
npm install -g angular-cli-ghpages
`

Then run ```npm run deploy```

# CircleCI and Heroku

## SSH
https://gist.github.com/lauraturk/93742fd34101a0f15b988f3d3b27104d
https://circleci.com/docs/2.0/add-ssh-key/
