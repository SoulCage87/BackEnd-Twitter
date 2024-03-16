import { db } from "../db/conn.js";

const getComentario = async (req, res) => {
    try {
        const { id_publicacion } = req.params;
        const publicacion_id = id_publicacion;

        console.log(req)
        console.log(req.body)
         
       const sql = `
            SELECT usuario, comentario, id,fecha_comentario
            FROM tbl_comentario
            WHERE publicacion_id = $1 AND activo = true
        `;

        const result = await (db.query(sql, [publicacion_id]));
        res.json(result);
    } catch (e) {
        res.status(500).json(e.message); 
    }
};


const deleteComentario = async (req, res) => {
    try {
        const params = [req.params.id]

        const sql = `UPDATE tbl_comentario
               SET activo = false
               WHERE id = $1
               RETURNING 'Comentario borrado' mensaje`

        const result = await (db.query(sql, params))
        res.json(result);


    } catch (e) {
        res.status(500).json(e.message)
    }
}

const postComentario = async (req, res) => {
    try {
        const { id_publicacion, nombre_usuario } = req.params 

        const { comentario } = req.body

        console.log(req)
        console.log(req.body)

        

        const params = [comentario, id_publicacion, nombre_usuario]

        const sql = `INSERT INTO tbl_comentario
        (comentario,publicacion_id,usuario)
        VALUES
        ($1,$2,$3) RETURNING comentario, publicacion_id`

        const result = await db.query(sql, params)

        res.json(result)
    } catch (e) {
        res.status(500).json(e.message)
    }
}


export { getComentario, deleteComentario, postComentario }