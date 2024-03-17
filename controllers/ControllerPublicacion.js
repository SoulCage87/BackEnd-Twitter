import { db } from "../db/conn.js";


const putPublicacion = async (req, res) => {

    try {
        const { caption } = req.body

        const { id } = req.params

        const params = [caption, id]

        const sql = `UPDATE tbl_publicaciones
                 SET caption = $1
                 WHERE id = $2
                 RETURNING caption, 'Publicacion Editada' mensaje`

        const result = await (db.query(sql, params))
        res.status(200).json(result)
    } catch (e) {
        res.status(500).json(e.message)
    }


}


const postPublicacion = async (req, res) => {

    try {

        const { caption,
            nombre_usuario } = req.body

            console.log(req)
            console.log(req.body)
            console.log(req.file)

        const { buffer, mimetype, originalname } = req.file;

        const params = [buffer, mimetype, originalname, caption, nombre_usuario];

        const sql = `INSERT INTO tbl_publicaciones
             (imagen, mime_type,nombre_archivo,caption,nombre_usuario)
             VALUES
             ($1,$2,$3,$4,$5)
             RETURNING id, nombre_usuario, 'Insercion Exitosa' mensaje`

        const result = await (db.query(sql, params))

        res.json(result)
        console.log(result)

    } catch (e) {
        res.status(500).json(e.message)
    }

}

const deletePublicacion = async (req, res) => {
    try {

        const params = [req.params.id]

        const sql = `UPDATE tbl_publicaciones
             SET activo = false
             WHERE id = $1
             RETURNING 'Publicacion Borrada' mensaje`

        const result = await (db.query(sql, params))
        res.json(result)


    } catch (e) {
        res.status(500).json(e.message)
    }
}

const getPublicacion = async (req, res) => {
    try {
        const sql = `SELECT id, 
                     caption, 
                     nombre_usuario,
                     mime_type, 
                     encode(imagen, 'base64') imagen,
                     fecha_post  
                     FROM tbl_publicaciones 
                     WHERE activo = true
                     ORDER BY fecha_post DESC`

        const result = await db.query(sql);

        if (result.length > 0) {
            res.json(result);
        } else {
            res.status(404).json({ mensaje: "Sin datos que mostrar" });
        }

    } catch (e) {
        res.status(500).json(e.message)
    }

}

export { postPublicacion, putPublicacion, deletePublicacion, getPublicacion }