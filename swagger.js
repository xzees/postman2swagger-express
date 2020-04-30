const swaggerUi = require('swagger-ui-express');
const express = require('express');

const app = express();

const YAML = require('yamljs');
const swaggerDocument = YAML.load('swagger_collection/data-out.yaml');
 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(function (req, res) {
    res.status(404).send('Page not found');
});

app.listen(3000, () => console.log(`Example app listening on port ${3000}!`))

module.exports = app;
