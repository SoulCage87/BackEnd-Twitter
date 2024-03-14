import express from 'express';
const user = express();

import { postUsuario, getUsuario, putUsuario, UserAuth } from '../controllers/controllerUser.js';
user.use(express.json());

user.post('', postUsuario);
user.get('/:nombre_usuario',getUsuario);
user.get('/auth/:nombre_usuario/:contrasena', UserAuth)
user.put('/:nombre_usuario', putUsuario);

export{user};
