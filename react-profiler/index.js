const fs = require('fs/promises')
const csv = require('csvtojson/v2')
// const data = require('./src/data/test.json')
// const csv = require('./src/data/RAW_recipes.csv/RAW_recipes.csv')

const filepath = './src/data/RAW_recipes.csv/RAW_recipes.csv'
;(async () => {
  const json = await csv().fromFile(filepath)
  console.log('json', json.length)
  await fs.writeFile('./src/data/recipes.json', JSON.stringify(json), 'utf-8')
})()
