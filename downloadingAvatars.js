const request = require("request");
const dotenv = require('dotenv').config();
const fs = require("fs");
var gitHubApiToken = process.env['gitHubApiToken'];

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
      'User-Agent': 'request',
      'Authorization': 'token ' + gitHubApiToken,
    }
  };

  request.get(options, function (err, response, body) {
    if (err) {
      console.log(err);
    }

    body.forEach (function (user) {
      let url = user.avatar_url;
      let filePath = './avatars/' + user.login;
      downloadImageByURL(url, filePath);
    })
  });

  function downloadImageByURL(url, filePath) {

    request.get(url, function(err, response, body) {
      if (err) {
        console.log(err);
      }
      console.log("Success: ", filePath);

      let fileType = response.headers['content-type'].split('/')[1];
      request(url).pipe(fs.createWriteStream(filePath + '.' + fileType));
    });
  }
});

getRepoContributors();


