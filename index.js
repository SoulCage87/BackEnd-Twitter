import express from 'express'
import { user } from './routes/routeUser.js';
const app = express();
const port = 4000;



//MiddleWares
app.use(express.json());

app.use('/api/usuario', user)


//Levantamos el web service
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})