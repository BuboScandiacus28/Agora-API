import { QueryResult } from "pg";
import db from "../db";

interface IAuthOtpAdd {
  phone: string;
  otp: number;
  language: string;
}

export default {
  add: ({ phone, otp, language }: IAuthOtpAdd): Promise<QueryResult> => {
    return db.query(
      `INSERT INTO auth_otp(
        phone, 
        otp, 
        language_code, 
        issued_at, 
        created_at, 
        updated_at
      ) VALUES (
        $1, 
        $2, 
        $3, 
        (SELECT NOW() + interval '1 minute'), 
        (SELECT NOW()), 
        (SELECT NOW())
      ) RETURNING *`,
      [phone, otp, language]
    );
  },

  getOne: (id: number): Promise<QueryResult> => {
    return db.query(
      `SELECT * FROM auth_otp
      WHERE id = $1`,
      [id]
    );
  },

  getAll: (): Promise<QueryResult> => {
    return db.query(`SELECT * FROM auth_otp`);
  },
};
