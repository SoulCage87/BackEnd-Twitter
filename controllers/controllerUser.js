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

const getUsuario = async (req,res) => {

try{

   const nombre_usuario = req.params.nombre_usuario;

   const sql = `SELECT nombre_usuario,
                       nombre,
                       apellido
                       FROM tbl_usuarios WHERE nombre_usuario = $1`
     
   const result = await db.query(sql,[nombre_usuario]);
   if (result.lenght === 0){
    res.status(404).json({mensaje: "No hay registros por mostrar"})
   }else {
    res.status(200).json(result)
   }                    

}catch(e){
    res.status(500).json(e.message)
}

}

const putUsuario = async (req,res) => {

  try{

     const {correo_electronico,
            nombre,
            apellido} = req.body;

    const nombre_usuario = req.params.nombre_usuario;

    const params = [correo_electronico,nombre,apellido,nombre_usuario];

    const sql = `UPDATE tbl_usuarios
                 SET correo_electronico = $1,
                 nombre = $2,
                 apellido = $3
                 WHERE nombre_usuario = $4 RETURNING correo_electronico, 'Actualizado con Exito!' mensaje`

     const result = await db.query(sql,params);
     
     if(result.lenght === 0) {
        res.status(404).json({mensaje: 'Registro no Existente, por lo tanto no se puede modificar'})
     }else{
        res.status(200).json(result);
     }


  }catch(e){
     res.status(500).json({mensaje: `No se pudo completar la operacion ${e.message}`})
  }

}

export {postUsuario,getUsuario,putUsuario} 