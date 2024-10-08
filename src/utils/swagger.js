// import swaggerJsdoc from "swagger-jsdoc";
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const { version } = require("../../package.json");
const fs = require('fs');
const path = require('path');

const schemasFolder = path.join(__dirname, '../schemas');  // Make sure the path is correct from your current file

const schemas = {};

const files = fs.readdirSync(schemasFolder);

files.forEach(file => {
    if (file.endsWith('.js')) {
        const filePath = path.resolve(schemasFolder, file);
        const imports = require(filePath);

        Object.keys(imports).forEach(key => {
            schemas[key] = imports[key];
        });
    }
});
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "COLABO API DOCS",
            version
        },
        components: {
            schemas: schemas,
            securtiySchemas: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
        security: [{
            bearerAuth: []
        }]
    },
    apis: [path.join(__dirname, '../routes/*.js')],
}



const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app, port) => {
    //swagger page
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    //Docs in JSON format
    app.get("/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json")
        res.send(swaggerSpec)
    })
    console.log(`Docs available at http://localhost:${port}/docs`);

}
module.exports = swaggerDocs;