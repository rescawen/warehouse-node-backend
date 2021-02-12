const { fetchJson } = require('fetch-json')
const fs = require('fs')
// fs.readdir('./download')

// download fresh ones from bad api, when server starts and periodically based on the 5minute internal cache?
// find out from product category, which manufacturers to download and download them
// if downloaded are old compared fresh ones, then delete and replace

const productURL = 'https://bad-api-assignment.reaktor.com/v2/products/'
const manufacturerURL = 'https://bad-api-assignment.reaktor.com/v2/availability/'
const productCategories = ['beanies', 'facemasks', 'gloves']
const manufacturers = new Set()

function getProducts(callback) {
    productCategories.forEach(category => {
        fetchJson.get(productURL + category).then((data) => {
            for (i = 0; i < data.length; i++) manufacturers.add(data[i].manufacturer)
            fs.writeFileSync(`./download/${category}.json`, JSON.stringify(data))
            console.log(manufacturers.size)
            callback()
        })
    })
}

function getManufacturers() {
    console.log('coming here ' + manufacturers.size)
    manufacturers.forEach(manufacturer => {
        console.log('coming inside this foreach')
        fetchJson.get(manufacturerURL + manufacturer).then((data) => {
            fs.writeFileSync(`./download/${manufacturer}.json`, JSON.stringify(data.response))
        })
    })
}

getProducts(getManufacturers)

// manufacturers.forEach(manufacturer => {
//     fetchJson.get(manufacturerURL + manufacturer).then((data) => {
//         fs.writeFileSync(`./download/${manufacturer}.json`, JSON.stringify(data))
//     })
// })

// if (manufacturers.size > 5) {
//     console.log(manufacturers.size)
//     manufacturers.forEach(manufacturer => {
//         fetchJson.get(manufacturerURL + manufacturer).then((data) => {
//             fs.writeFileSync(`./download/${manufacturer}.json`, JSON.stringify(data))
//         })
//     })
// }

