/**
 * Created by untung on 15/10/14.
 */
var expect = require("expect.js");
var http = require("http");

var app = require('../index');
var port = process.env.NODE_PORT || 3000;
var server = null;

describe("Simple testing server", function(){
    /**
     * Setup
     */
    before(function(done){
        server = app.listen(port, function(){
            done();
        });
    });

    it("should not error 404", function(done){
        var requestedUrl = "http://localhost:" + port + "/";
            http.get(requestedUrl, function(res){
            expect(res.statusCode).to.be.equal(200);
            done();
        });
    });

    after(function(){
        server.close();
    });
});

