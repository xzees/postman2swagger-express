var transformer = require('api-spec-transformer');
const fs = require('fs');

var postmanToSwagger = new transformer.Converter(transformer.Formats.POSTMAN, transformer.Formats.SWAGGER);

postmanToSwagger.loadFile('postman_collection/API.postman_collection.json', function(err) {
  if (err) {
    console.log(err.stack);
    return;
  }

  postmanToSwagger.convert('yaml')
    .then(function(convertedData) {
        fs.writeFileSync('swagger_collection/data-out.yaml', convertedData, 'utf8');
    })
    .catch(function(err){
      console.log(err);
    });
});