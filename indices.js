//to see if indexing is correct and connection info
    const elasticsearch = require('elasticsearch');
    const esClient = new elasticsearch.Client({
      host: '127.0.0.1:9200',
      log: 'error'
    });
  
    const indices = function indices() {
      return esClient.cat.indices({v: true})
      //if improper connection
      .then(console.log)
      .catch(err => console.error(`Error connecting to the es client: ${err}`));
    };
  
    
    const test = function test() {
      console.log(`elasticsearch indices information:`);
      indices();
    };
  
    test();
  
    module.exports = {
      indices
    };
  