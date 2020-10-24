import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import firebasecf from "./config/firebase/config";
import {
  createFirestoreInstance,
  reduxFirestore,
  getFirestore,
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import firebase from "firebase/app";
import loading from "./components/projects/1.gif";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, firebasecf)
  )
);

const profileSpecificProps = {
  userProfile: "users",
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false,
  config: firebasecf,
};

const rrfProps = {
  firebase,

  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <div className="center">
        <h1>LOADING...</h1>
        <img src={loading} width="150px" height="150px" alt="LOADING" />
      </div>
    );
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// console.log("store", store);
// console.log("state", store.getState());
serviceWorker.unregister();
