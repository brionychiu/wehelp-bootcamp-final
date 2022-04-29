const path = require("path");
module.exports = {
    mode:"production",
    entry:"./index.js",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist")
    },
    devServer:{
        static:"./dist"
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:["style-loader","css-loader"]
            },
            {
                test: /\.m?js$/i,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    }
}