const http = require("http");

function requestOptions(url, callback) {
  var requestOptions = {
    host: "example.com",
    path: "/"
  };

  http.get(requestOptions, function printHTML(htmlData) {    // HTTP Response Callback

    htmlData.setEncoding("utf8");             // Use UTF-8 encoding

    htmlData.on("data", function (data) {           // On Data Received
      console.log("Chunk Received. Data:",data);
    });

    htmlData.on("end", function () {                // On Data Completed
      console.log("Response stream complete.");
    });

  });
}
requestOptions();