const { fetchJson } = require('fetch-json')
const _ = require('lodash')
const fs = require('fs')
const beanies = require('./clothing/beanies.json')
const facemasks = require('./clothing/facemasks.json')
const gloves = require('./clothing/gloves.json')
const missingManufacturers = require('./manufacturers/missing.json')

const productURL = 'https://bad-api-assignment.reaktor.com/v2/products/'
const manufacturerURL = 'https://bad-api-assignment.reaktor.com/v2/availability/'
const productCategories = ['beanies', 'facemasks', 'gloves']
const currentFiles = { 'beanies': beanies, 'facemasks': facemasks, 'gloves': gloves }


const getProducts = async () => {
    const manufacturers = new Set(missingManufacturers)
    for (const category of productCategories) {
        await fetchJson.get(productURL + category).then((data) => {
            if (!_.isEqual(data, currentFiles[category])) {
                console.log("new category coming in")
                for (i = 0; i < data.length; i++) manufacturers.add(data[i].manufacturer)
                fs.writeFileSync(`./clothing/${category}.json`, JSON.stringify(data))
            } else {
                console.log("no change in category")
            }
        })
    }
    return manufacturers
}

const getManufacturers = async () => {
    const missingManufacturers = []
    const manufacturers = await getProducts()
    manufacturers.forEach(manufacturer => {
        fetchJson.get(manufacturerURL + manufacturer).then((data) => {
            if (data.response === "[]") {
                missingManufacturers.push(manufacturer)
                console.log("error detected, empty array from manufacturer " + manufacturer)
            } else {
                fs.writeFileSync(`./manufacturers/${manufacturer}.json`, JSON.stringify(data.response))
            }

        })
    })
    console.log(missingManufacturers)
    fs.writeFileSync(`./manufacturers/missing.json`, JSON.stringify(missingManufacturers))
}

exports.getManufacturers = getManufacturers