const beanies = require('./clothing/beanies.json')
const facemasks = require('./clothing/facemasks.json')
const gloves = require('./clothing/gloves.json')

module.exports = () => {
    return {
        beanies: beanies,
        facemasks: facemasks,
        gloves: gloves
    }
}