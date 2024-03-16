import express from 'express'
const comentario = express();
import { postComentario, deleteComentario, getComentario } from '../controllers/ControllerComentario.js';

comentario.use(express.json())

comentario.post('/:id_publicacion', postComentario);
comentario.delete('/:id', deleteComentario);
comentario.get('/:id_publicacion', getComentario);

export {comentario}