const beanies = require('./clothing/beanies.json')
const facemasks = require('./clothing/facemasks.json')
const gloves = require('./clothing/gloves.json')
const abiplos = require('./manufacturers/abiplos.json')
const ippal = require('./manufacturers/ippal.json')
const okkau = require('./manufacturers/okkau.json')
const umpante = require('./manufacturers/umpante.json')
const niksleh = require('./manufacturers/niksleh.json')
const laion = require('./manufacturers/laion.json')
const juuran = require('./manufacturers/juuran.json')
const hennex = require('./manufacturers/hennex.json')

module.exports = () => {
    return {
        beanies: beanies,
        facemasks: facemasks,
        gloves: gloves,
        abiplos: abiplos,
        ippal: ippal,
        okkau: okkau,
        umpante: umpante,
        niksleh: niksleh,
        laion: laion,
        juuran: juuran,
        hennex: hennex
    }
}