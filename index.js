import express from 'express'
import { user } from './routes/routeUser.js';
import { publicacion } from './routes/routePublicaciones.js';
import { comentario } from './routes/routeComentario.js';
const app = express();
const port = 4000;



//MiddleWares
app.use(express.json());

app.use('/api/usuario', user)
app.use('/api/publicacion', publicacion)
app.use('/api/comentario',comentario)



//Levantamos el web service
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})