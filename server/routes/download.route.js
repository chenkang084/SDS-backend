/**
 * Created by chenkang1 on 2017/7/11.
 */
const fs = require('fs');

let routers = function routers(app) {
    app.get("/download", function(req, res, next) {
        // res.download('public/favicon.ico');
        console.log(11)
        var img = fs.readFileSync('public/favicon.ico');
        res.writeHead(200, {'Content-Type': 'image/gif' });
        res.end(img, 'binary');
    });


};

module.exports = routers;