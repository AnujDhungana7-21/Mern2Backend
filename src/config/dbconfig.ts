type Database = {
  host: string;
  user: string;
  password: string;
  db: string;
  dialect: "mysql" | "postgres" | "sqlite";
  pool: {
    max: number;
    min: number;
    idle: number;
    acquire: number;
  };
};
const dbconfig: Database = {
  host: "localhost",
  user: "root",
  password: "",
  db: "project2backend",
  dialect: "mysql",
  pool: {
    idle: 10000,
    max: 5,
    min: 0,
    acquire: 10000,
  },
};
export default dbconfig;
