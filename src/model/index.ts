import { Sequelize, DataType } from "sequelize";
import dbconfig from "../config/dbconfig";

const sequelize = new Sequelize(dbconfig.db, dbconfig.user, dbconfig.password, {
  host: dbconfig.host,
  dialect: dbconfig.dialect,
  port: 3306,
  pool: {
    acquire: dbconfig.pool.acquire,
    max: dbconfig.pool.max,
    min: dbconfig.pool.min,
    idle: dbconfig.pool.idle,
  },
});
sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("connected", err);
  });

const db: any = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({ focus: false }).then(() => {
  console.log("yes migrant");
});

export default db;
