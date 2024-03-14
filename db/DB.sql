-- Active: 1705367913692@@127.0.0.1@5432@twitter_db@public
CREATE TABLE tbl_usuarios(
    nombre_usuario VARCHAR(30) PRIMARY KEY,
    correo_electronico VARCHAR(50),
    contrasena VARCHAR(20),
    nombre VARCHAR(30),
    apellido VARCHAR(30),
    fecha_creacion TIMESTAMP DEFAULT current_timestamp, 
    activo BOOLEAN DEFAULT true
)

CREATE TABLE tbl_publicaciones (
    id SERIAL PRIMARY KEY,
    imagen bytea,
    mime_type VARCHAR(500),
    nombre_archivo VARCHAR(500),
    caption VARCHAR(250),
    nombre_usuario VARCHAR(30) REFERENCES tbl_usuarios(nombre_usuario),
    fecha_post TIMESTAMP DEFAULT current_timestamp, 
    activo bool DEFAULT true
)

CREATE TABLE tbl_comentario(
    id SERIAL PRIMARY KEY,
    comentario VARCHAR(200),
    publicacion_id INT REFERENCES tbl_publicaciones(id),
    usuario VARCHAR(30) REFERENCES tbl_usuarios(nombre_usuario),
    fecha_comentario TIMESTAMP DEFAULT current_timestamp,
    activo bool DEFAULT true
)

SELECT * from tbl_publicaciones

INSERT INTO tbl_comentario
(comentario,publicacion_id,usuario)
VALUES
('coincido muy buen publicacion',2, 'C0ND3N4S' )

SELECT *
FROM tbl_comentario

  SELECT usuario, comentario
            FROM tbl_comentario
            WHERE publicacion_id = 2 AND activo = true
            

 

