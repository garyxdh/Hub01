
module.exports = {
    devtool: 'inline-source-map',
    entry:['./client/client.js'],
    output:{
        path:'./dist',
        filename:'bundle.js',
        publicPath:''
    },
    moudle:{
        loders:[
            {
                test: /\.js$/,
                loders: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}