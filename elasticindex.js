 
  const fs = require('fs');
  const elasticsearch = require('elasticsearch');

  const esClient = new elasticsearch.Client({
    host: '127.0.0.1:9200',
    log: 'error'
  });

  const bulkIndex = function bulkIndex(index, type, data) {
    const bulkBody = [];

    data.forEach(item => {    //this is what/where its getting stuck because json objkect does not have a foreach!!!!
      bulkBody.push({
        index: {
          _index: index,
          _type: type,
          _id: item.id  //random id assoc.
        }
      });

      bulkBody.push(item);
    });

    esClient.bulk({body: bulkBody})
    .then(response => {
      let errorCount = 0;
      response.items.forEach(item => {
        if (item.index && item.index.error) {
          console.log(++errorCount, item.index.error);
        }
      });
      console.log(`Successfully indexed ${data.length - errorCount} out of ${data.length} items`);
    })
    .catch(console.err);
  };

console.log('*****');

    function ObjectLength(object) {
      return Object.keys(object).length;
    }

   const test = function test() {
   const fda_food = fs.readFileSync('fda_food.json');
    const fda1 = JSON.parse(fda_food);
    console.log(JSON.stringify(fda1));

   console.log(ObjectLength(fda1));

    console.log(`${ObjectLength(fda1)} items parsed from data file`);
 
    bulkIndex('library', 'article', fda1);
  };

  test(); //gets clled first

  module.exports = {
    bulkIndex
  };
