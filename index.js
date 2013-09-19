// note: this is mostly a copy of https://gist.github.com/spion/5200049

var through = require('through')
var jade = require('jade')

module.exports = function (file) {
  if (!/\.jade$/.test(file)) return through()
  var data = ''
  return through(write, end)
  function write (buf) { data += buf }
  function end () {
    var result = compile(file, data)
    this.queue(result)
    this.queue(null)
  }
}

module.exports.root = null

function compile(file, tmpl) {
  var fn = jade.compile(tmpl, {client:true, filename:file})
  return "var jade=require('jade/lib/runtime.js');module.exports="+fn.toString()
}