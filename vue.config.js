const path = require('path')
const resolve= (dir)=> path.join(__dirname, dir)
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
        .set('@', resolve('src'))
        .set('components', resolve('src/components'))
        .set('views', resolve('src/views'))
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.0.9:8889/',
                ws:true,
                changeOrigin: true
            }
        }
    }
}