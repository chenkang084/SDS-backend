let routers = function routers(app) {

    // app.get('/table', function(req, res, next) {
    //     res.render('index', { title: 'Express' });
    // });

    app.get('/table', function(req, res, next) {
        res.send({ title: 'table' });
    });


    

}

module.exports = routers;