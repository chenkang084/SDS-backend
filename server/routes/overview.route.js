let routers = function routers(app) {

    app.get('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
    });

    app.get('/api/overview/data', function(req, res, next) {
        console.log("get method request paramters %s", JSON.stringify(req.query));
        res.send({ get: 'success' });
    });

    app.post('/api/overview/data', function(req, res, next) {
        console.log("post method request paramters %s", JSON.stringify(req.query));
        res.send({ post: 'success' });
    });

    app.put('/api/overview/data', function(req, res, next) {
        console.log("put method request paramters %s", JSON.stringify(req.query));
        res.send({ put: 'success' });
    });

}

module.exports = routers;