const mongoose = require ('mongoose')
const url_db = 'mongodb://localhost:27017//utma'

mongoose.connect(url_db)
.then(() =>{
    console.log ('Conexion Exitosa')
})
.catch((err) => {
    console.log('Conexion Fallida')

})