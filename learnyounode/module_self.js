var listfiles = require('./module_function');

listfiles(process.argv[2], process.argv[3], function (err, data) {
  if (err)
    return console.log(err);
  data.forEach(function (element) {
    console.log(element);
  });
});
