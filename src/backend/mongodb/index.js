import * as Realm from "realm-web";

const REALM_APP_ID = process.env.REACT_APP_MONGODB_API_KEY; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });

export default app