var request = require("request");

var fs = require("fs");

// var getRepoContributors = ("repoOwner", "repoName", (err, result) => {
//   let endPoint  = 'https://api.github.com';
//   let options =

//   console.log("Errors:", err);
//   console.log("Result:", result);
// });

// getRepoContributors();


function downloadImageByURL(url, filePath) {

  request.get(url, function(err, response, body) {
    if (err) {
      console.log(err);
    }
    console.log("Success: ", filePath);
    debugger;
    request(url).pipe(fs.createWriteStream(filePath));
    // console.log("Response body:", body);


    // var fileType = response.headers['content-type'].split('/')[1];
    // this.pipe(fs.createWriteStream(filePath + '.' + fileType));

  });

}

downloadImageByURL('https://avatars.githubusercontent.com/u/8368880?v=3', './avatars/' + user.ID + );