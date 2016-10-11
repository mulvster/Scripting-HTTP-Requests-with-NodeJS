var request = require("request");

var fs = require("fs");

var repoOwner = process.argv[2];
var repoName = process.argv[3];

var getRepoContributors = ("repoOwner", "repoName", (err, result) => {
  if (err) {
    console.log("Errors:", err);
  }

  let endPoint  = 'https://api.github.com';
  let options = {
    url:        endPoint + '/repos/' + repoOwner + '/' + repoName + '/contributors',
    json: true,
    headers: {
      'User-Agent': 'nicadams'
    }
  };


  request.get(options, function (err, response, body) {
    if (err) {
      console.log(err);
    }

    console.log(body);

  });

  // result.forEach (function (user) {
  //   var url = user.avatar_url;
  //   var filePath = './avatars/' + user.login;
  //   downloadImageByURL(url, filePath);
  // })

});

getRepoContributors();


function downloadImageByURL(url, filePath) {

  request.get(url, function(err, response, body) {
    if (err) {
      console.log(err);
    }
    console.log("Success: ", filePath);

    var fileType = response.headers['content-type'].split('/')[1];
    request(url).pipe(fs.createWriteStream(filePath + '.' + fileType));
    // console.log("Response body:", body);


    // var fileType = response.headers['content-type'].split('/')[1];
    // this.pipe(fs.createWriteStream(filePath + '.' + fileType));

  });

}

// var url = user.avatar_url;
// var filePath = './avatars/';

// downloadImageByURL();
