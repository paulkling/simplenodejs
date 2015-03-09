var http = require('http');

/*
 * Serve JSON to our AngularJS client
 */

exports.java = function (req, res) {
  return http.get({
          host: 'localhost',
          port: '8080',
          path: '/api'
      }, function(response) {
          // Continuously update stream with data
          var body = '';
          response.on('data', function(d) {
              body += d;
          });
          response.on('end', function() {
              var parsed = JSON.parse(body);
              res.json(parsed);
          });
      }).on("error", function (){
        res.json({'name': 'Erorr calling java web service'});
        console.log("GET request error")
      });
};


exports.nodejs = function (req, res) {
  return http.get({
          host: 'jsonstub.com',
          path: '/subject/1',
          headers: {
              'Content-Type': 'application/json',
              'JsonStub-User-Key': 'bc0c2471-5af2-4283-9d36-90b99d992daa',
              'JsonStub-Project-Key': 'e85f0f48-a2fd-4d32-ab74-f7fb0623181e'
          }
      }, function(response) {
          // Continuously update stream with data
          var body = '';
          response.on('data', function(d) {
              body += d;
          });
          response.on('end', function() {
              // Data reception is done, do whatever with it!
              var parsed = JSON.parse(body);
              //convert json format to another format..
              /*res.json({
                  name: parsed.firstname
              });*/
              //raw json returned from ws
              res.json(parsed);
          });
      });
};
