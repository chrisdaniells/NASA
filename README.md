# NASA Image API Viewer

## Built using:
- React
- React Router
- Webpack
- Grunt
- SCSS/BEM
- Jasmine


## To Run Locally:
- run `npm i`
- run `grunt` and `webpack`
- run `test` for Jasmine tests

## Things to be improved:
- Unfortunately IE11 & Microsoft Edge do not support hash history pushes programatically. As such I have had to change the hash URL manually using `window.location`.  I would wish to look for a cleaner solution given more time, but unfortunately I was unaware of IE's lack of compatability with hash history routing before I begun. Were this app to use normal URL routing, ths would not be an issue.
Previous code: `this.props.history.push('/path')`
- More tests
- Improve Styling
- Clean up handling of API endpoints. The two media types returned different data sets, making it difficult to cleanly make API calls.
