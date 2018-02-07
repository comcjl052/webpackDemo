var path = require('path');

let ExtractTextPlugin = require('extract-text-webpack-plugin');

let extractLESS = new ExtractTextPlugin('stylesheets/[name].less');

module.exports = {
    // entry:path.resolve(__dirname,'src/page/index/index.js'),
    entry:[
    	'babel-polyfill',
	    'webpack/hot/dev-server',
	    'webpack-dev-server/client?http://localhost:8080',
	    path.resolve(__dirname,'src/page/index/index.js')
	],
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    },
    module:{
	    loaders:[
	    	{
		        loader:'babel-loader',
		        exclude:[
		            //在node_modules的文件不被babel理会
		            path.resolve(__dirname,'node_modules'),
		        ],
		        include:[
		            //指定app这个文件里面的采用babel
		            path.resolve(__dirname,'src'),
		        ],
		        test: /\.(js|jsx)?$/,
		        query:{
		            plugins:['transform-runtime'],
		            presets:['es2015','stage-0','react']
		        }
	    	},
	    	{
	            test: /\.less$/,
	            use: [
	                'style-loader',
	                'css-loader',
	                'less-loader'
	            ],
	        },
	    	{
		        test: /\.css$/,
		        loaders: [
		           'style-loader',
		           'css-loader',
		           'postcss-loader',
		           'less-loader',
		        ]
		    },
		    {
	            test: /\.(jpeg|jpg|png|gif)$/,
	            loaders: 'url-loader?limit=10240'
	        },
	    ]
	},
	devServer: {
        compress: true, // 启用gzip压缩
        contentBase: path.join(__dirname, 'build'),
        // port: 3000, // 运行端口3000
        inline: false,
        hot: true,
        historyApiFallback: true,
    },
};