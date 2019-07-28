React & Redux Crash Course

Video (https://www.youtube.com/watch?v=93p3LxR9xfM&t=481s)

Step 1. Create React App

npx create-react-app name-app

cd name-app

npm start

Step 2 Create Components 

src create new folder components 

inside components folder create 2 files
    Posts.js
    Postform.js

hint* use extention tab rcc gives you class based commponent or rcf tab  gives funtional commponent(ES7 React/Redux/GraphQL/React-Native snippets).

step 3 In Posts.js create your component.

Make request to API to fetch the Post using life-cycle method componentWillMount()

Hint* we are using fake API from http://jsonplaceholder.typicode.com/posts

Step 4. PostForm.js create your component and form. 

Step 5. Install Redux libary 

npm i redux react-redux redux-thunk

after instilattion import it to App.js 
import{Provider} from 'react-redux'; // glue for react and redux

Step 6. Store is not defined.

Need to create store

const store = createStore(() => [],{}, applyMiddleware()); 
