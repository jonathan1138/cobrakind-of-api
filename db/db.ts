import pgPromise from "pg-promise";

export const pgp = pgPromise();

const devURL = "postgres://cobrakind_admin:pioneer123@localhost:5432/cobrakinddb";

export const db = pgp(process.env.DATABASE_URL || devURL);

// Update Model files... 
// npm run update-metadata