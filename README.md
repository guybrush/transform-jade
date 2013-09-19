# transform-jade

a browserify-transform-stream for jade-files

this is mostly a copy of https://gist.github.com/spion/5200049

# example

```
echo "document.body.innerHTML = require('./path/to/some.jade')({foo:'bar'})" > main.js
browserify -t transform-jade main.js > bundle.js
```

