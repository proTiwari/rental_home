import firebaseConfig from "./firebaseConfig";

import {getAuth} from "firebase/firebase-auth";
import {initializeApp} from "firebase/firebase-app";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default app;
export {auth}