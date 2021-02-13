const { fetchJson } = require('fetch-json')
const fs = require('fs')
// fs.readdir('./download')

// download fresh ones from bad api, when server starts and periodically based on the 5minute internal cache?
// if downloaded are old compared fresh ones, then delete and replace

const productURL = 'https://bad-api-assignment.reaktor.com/v2/products/'
const manufacturerURL = 'https://bad-api-assignment.reaktor.com/v2/availability/'
const productCategories = ['beanies', 'facemasks', 'gloves']

const getProducts = async () => {
    const manufacturers = new Set()
    for (const category of productCategories) {
        await fetchJson.get(productURL + category).then((data) => {
            for (i = 0; i < data.length; i++) manufacturers.add(data[i].manufacturer)
            fs.writeFileSync(`./download/${category}.json`, JSON.stringify(data))
        })
    }
    return manufacturers
}

// Theoretically a list of manufacturers would negate the need for the parsing of product category data on L#17
// Practically for this assignment parsing through one of the categories should be enough
// If no list is received and different categories have different manufacturers, then above solution is best

const getManufacturers = async () => {
    const manufacturers = await getProducts()      
    manufacturers.forEach(manufacturer => {
        fetchJson.get(manufacturerURL + manufacturer).then((data) => {
            fs.writeFileSync(`./download/${manufacturer}.json`, JSON.stringify(data.response))
        })
    })
}

// getManufacturers()

exports.getManufacturers = getManufacturers