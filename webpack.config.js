/* se importa el modulo path para las rutas */
const path = require('path');

module.exports = {
    /* se pone la ruta de la entrada del archivo js que se quiere compilar con wbpack */
    entry: './src/app.js',
    /* se pone la ruta donde pondra el archivo ya compilado y empaquetado */
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        /* se configuran los loader que se va  a usar en este caso es transformar los css */
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    }
}