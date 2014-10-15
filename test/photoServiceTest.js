/**
 * Created by untung on 15/10/14.
 */
var expect = require("expect.js");
var http = require("http");

var server = require("../index");

before(function(){
    server.listen(3000);
});

describe("Photo service API", function(){
    var requestedUrl = "http://localhost:3000/photo/1/";
    describe("Testing GET data from database", function(){
        var expectedResponse = require("./DummyPhotoData");
        it("user request should registered", function(done){
            http.get(requestedUrl, function(response){
                response.on('data', function(data){
                    var resData = JSON.parse(data.toString());
                    expect(resData.user).to.be.equal('1');
                    done();
                });
            });
        });
    });
});