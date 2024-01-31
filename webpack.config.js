const path = require('path')

module.exports = {
    entry: './src/webpackWillBundleThis.js',
    mode:'development',
    optimization:{
        minimize:false,
    },
    devServer:{
        static:{
            directory: path.join(__dirname, 'public'),
        },
        open:true
    },
    output:{
        filename:'main.js',
        path: path.resolve(__dirname, 'dist/bundle')
    }
}