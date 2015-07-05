"use strict";

let fs = require('fs');
let path = require('path');
let assert = require('chai').assert;
let sample = require('./sample');
let delorme = require('../server/delorme');

describe('DeLorme handler', function() {

  it("extracts link from email", function(done) {
    sample.getFile('delorme.eml')
    .then(function(email) {
      let url = delorme.extractUrlFromEmail(email);
      assert.equal(url, 'https://explore.delorme.com/textmessage/txtmsg?mo=6cf76ee244ec40a0ab0170c05040102322740101&adr=jan%40miksovsky.com');
      done();
    })
    .catch(function(err) {
      done(err);
    });
  });
  
  it('extracts ID and GUID from DeLorme web page', function(done) {
    
  });

});
