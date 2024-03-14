import express from 'express'
const publicacion = express();
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({storage : storage});

import { deletePublicacion, postPublicacion, putPublicacion,getPublicacion } from "../controllers/ControllerPublicacion.js";


publicacion.use(express.json());
publicacion.post('', upload.single('imagen'), postPublicacion);
publicacion.put('/:id', putPublicacion)
publicacion.delete('/:id', deletePublicacion)
publicacion.get('', getPublicacion)

export{publicacion}