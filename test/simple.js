// note: i like how @epeli did it: https://github.com/epeli/node-hbsfy/blob/31545b/test/test.js

var test = require('tap').test
var fs = require('fs')
var path = require('path')
var jadeify = require('../.')

test('simple', function(t) {
  t.plan(1)
  var viewPath = path.join(__dirname, 'views', 'simple.jade')
  var compiledPath = path.join(__dirname, 'views', 'simple-bundle.js')
  var read = fs.createReadStream(viewPath)
  var write = fs.createWriteStream(compiledPath)
  read.pipe(jadeify(viewPath)).pipe(write).on('close', function(){
    var render = require(compiledPath)
    var res = render({foo:'bar'})
    t.equal(res,'<h1>bar</h1>')
  })
})