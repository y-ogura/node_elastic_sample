// const { Client } = require('@elastic/elasticsearch')
const elasticsearch = require('elasticsearch')

const client = new elasticsearch.Client({
	host: 'http://34.84.115.107:9200',
	httpAuth: 'user:pass'
})


client.search({
  index: 'order'
}, (err, result) => {
  if (err) {
    console.error('elasticsearch cluster is down')
	console.error(err)
  } else {
    console.log(result.body.hits.hits)
  }
})
