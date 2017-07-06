let routers = function routers(app) {
  app.get("/", function(req, res, next) {
    var callbackUrl = "http://localhost:4000/oauth_callback"; // your endpoint

    // initialize OAuth
    var Evernote = require("evernote");
    var client = new Evernote.Client({
      consumerKey: "chenkang084",
      consumerSecret: "a8730df33f6ebad8",
      sandbox: true, // change to false when you are ready to switch to production
      china: false // change to true if you wish to connect to YXBJ - most of you won't
    });

    client.getRequestToken(callbackUrl, function(
      error,
      oauthToken,
      oauthTokenSecret
    ) {
      if (error) {
        // do your error handling here
      }
      console.log(oauthToken);

      var authenticatedClient = new Evernote.Client({
        token:
          "S=s1:U=93d31:E=1646ddd2a6f:C=15d162bfd80:P=1cd:A=en-devtoken:V=2:H=30a90ae0d394265ce71c3da76428ec4a",
        consumerKey: "chenkang084",
        consumerSecret: "a8730df33f6ebad8",
        sandbox: true, // change to false when you are ready to switch to production
        china: false
      });
      var noteStore = authenticatedClient.getNoteStore();
      noteStore
        .listNotebooks()
        .then(function(notebooks) {
          console.log(notebooks); // the user's notebooks!
        })
        .catch(error => {
          console.log(error);
        });
    });

    res.render("index", { title: "Express" });
  });

  app.get("/api/overview/data", function(req, res, next) {
    console.log("get method request paramters %s", JSON.stringify(req.query));
    res.send({ get: "success" });
  });

  app.post("/api/overview/data", function(req, res, next) {
    console.log("post method request paramters %s", JSON.stringify(req.query));
    res.send({ post: "success" });
  });

  app.put("/api/overview/data", function(req, res, next) {
    console.log("put method request paramters %s", JSON.stringify(req.query));
    res.send({ put: "success" });
  });
};

module.exports = routers;
