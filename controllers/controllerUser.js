import { db } from '../db/conn.js';

const postUsuario = async (req,res) => {
    try{

        const { nombre_usuario,
            correo_electronico,
            contrasena,
            nombre,
            apellido,
            confirmacion_con } = req.body;

const params = [nombre_usuario,
            correo_electronico,
            contrasena,
            nombre,
            apellido,
            ];

    const sql = `INSERT INTO tbl_usuarios
                 (nombre_usuario,correo_electronico,contrasena,nombre,apellido)
                 VALUES
                 ($1,$2,$3,$4,$5) RETURNING nombre_usuario, 'Creado con exito' mensaje`

         if(contrasena === confirmacion_con){
             const result = await db.query(sql,params);
             res.status(200).json(result);
         }  else {
            res.status(500).json({mensaje: "Las contraseñas no coinciden"})
         }      

    }catch(e){
        res.status(500).json(e.message)
    }
}

export {postUsuario} 