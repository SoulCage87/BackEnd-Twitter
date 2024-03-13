import express from 'express';
const user = express();

import { postUsuario } from '../controllers/controllerUser.js';
user.use(express.json());

user.post('', postUsuario);

export{user};
