import express from 'express';
import {insertStudent} from "../handlers/student/insertStudent.js";
import {getStudents} from '../handlers/student/getStudents.js';
import {getOneStudent} from '../handlers/student/getOneStudent.js';
import { getStudentsFiltered } from '../handlers/student/getStudentsFiltered.js';
import { checkLogin } from '../handlers/student/checkLogin.js';

const router = express.Router();

router.post("/students",insertStudent);

router.get("/students", getStudents);

router.get("/students/:id_student", getOneStudent);

router.get("/filtered", getStudentsFiltered);

router.post("/login", checkLogin);

export {router};