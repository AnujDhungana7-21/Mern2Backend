"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbconfig = {
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
exports.default = dbconfig;
