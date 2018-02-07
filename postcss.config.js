module.exports = {
	// 此处使用postcss的插件
	plugins: [
		require('autoprefixer'),
		require('postcss-sprites')({
			retina: true,//支持retina，可以实现合并不同比例图片
		    verbose: true,
		    spritePath: './build/images/',//雪碧图合并后存放地址
		    stylesheetPath: './build',
		    basePath: './',
		})
	],
};