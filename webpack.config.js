

// nodejs 中的path模块
var path = require('path');
module.exports = {
    entry: {
        // index:'./src/js/index.js',
        main:'./src/js/main.js'
      },
      output: {
        filename: 'main.js'
      },
    

    resolve:{
        extensions: ['', '.js', '.vue'],
        alias:{
           // components:path.join(__dirname,"./components")
        }
    },
    module: {
           rule: [
            {
                test: /\.vue$/,
                use:[{
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader?{"presets":["es2015"],"plugins": ["transform-object-rest-spread"]}',
                        css: 'vue-style-loader!css-loader'
                    }
                }
            }],
                exclude: /node_modules/
            },
            // {
            //     test: /\.jsx?$/,
            //     exclude: /node_modules/,
            //     loader: 'babel-loader'
            //   },
            {
                test: /\.js$/,
                
                use: [
                    {
                        loader:'babel-loader',
                        options:{
                            presets: ['es2015'],
                            plugins: ['transform-runtime']

                        }
                    },

                    //  {
                    //     loader:'eslint-loader',
                    //      options:
                    //     {
                    //          configFile: './.eslintrc.js'
                    //      }
                    
                    // }
                ],   
                exclude: /node_modules/,                   
              },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
          
        ]}

  

    // eslint:{
    //     configFile: './.eslintrc.js'
    //   },

    // babel:{
      
    
    // }

};