import express from 'express';
const user = express();

import { postUsuario, getUsuario, putUsuario } from '../controllers/controllerUser.js';
user.use(express.json());

user.post('', postUsuario);
user.get('/:nombre_usuario',getUsuario);
user.put('/:nombre_usuario', putUsuario);

export{user};
