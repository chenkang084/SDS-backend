module.exports = function routes(app){

    require("./overview.route.js")(app)
    require("./tables.route.js")(app)
    require("./download.route.js")(app)

}