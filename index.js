import express from 'express'
import cors from 'cors'
import { user } from './routes/routeUser.js';
import { publicacion } from './routes/routePublicaciones.js';
import { comentario } from './routes/routeComentario.js';
const app = express();
const port = 4000;

const corsOptions = {
    origin : 'http://localhost:5173', 
    credentials : true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}


//MiddleWares
app.use(express.json());
app.use(cors(corsOptions));

//Rutas
app.use('/api/usuario', user)
app.use('/api/publicacion', publicacion)
app.use('/api/comentario',comentario)



//Levantamos el web service
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})