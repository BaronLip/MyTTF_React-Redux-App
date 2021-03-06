import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
// Provider is a specific Class component from 'react-redux'.
// Provider makes the Redux store available to the app by wrapping it. The store/state is available by using "connect()" function, mapping state to props.
import { Provider } from 'react-redux';
// 
import { store } from "./store";



// Using store.getState() will show the current state.
console.log(store)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
