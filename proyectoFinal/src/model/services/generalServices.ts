import { User } from "../types/User.js";
import { db } from "../../config.js";
import { RowDataPacket } from "mysql2";
import { LoginResult } from "../types/LoginResult.js";

function checkUserLogin(user: User, callback: Function) {
  const queryString = "SELECT * FROM user WHERE email = ? AND password = ?";
  db.query(queryString, [user.email, user.password], (err, result) => {
    let isOk = true;
    if (err || (result as RowDataPacket[]).length == 0) {
      isOk = false;
    }
    const loginResult: LoginResult = {
      isOk: isOk,
    };
    callback(null, loginResult);
  })
};

export { checkUserLogin };