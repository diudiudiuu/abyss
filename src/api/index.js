/**
 * 
 * 自动导入api模块
 * 使用import
 * 
 **/

const apis = import.meta.globEager('./*.js')

const modules = {}

Object.keys(apis).forEach(key => {
    if (key === './index.js') return
    modules[key.replace(/(\.\/|\.js)/g, '')] = apis[key].default
})

export default modules

