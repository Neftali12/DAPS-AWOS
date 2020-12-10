const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productoSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: [true, 'Id necesario']
    },
    nombre: {
        type: String,
        unique: true,
        required: [true, 'El nombre es obligatorio']
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    precioUni: {
        type: Number,
        unique: true,
        required: [true, 'El precio es obligatorio']
    },
    disponible: {
        type: Boolean,
        default: true
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria'
    }


});

module.exports = mongoose.model('Producto', productoSchema);