const csvFilePath = "./cities.csv";
const writePath = "./src/Data/cities.json";

const csv = require("csvtojson");
const fs = require("fs");

csv({
  noheader: true
})
  .fromFile(csvFilePath)
  .then(jsonObj => {
    const tableArray = jsonObj.map(row =>
      Object.values(row).map(
        value =>
          value
            .replace(",", "")
            .replace('"', "")
            .replace("#", "no.") //must chage '#', since it is a special url charachter
      )
    );

    fs.writeFile(writePath, JSON.stringify(tableArray), function(err) {
      if (err) throw err;
      console.log("complete");
    });
  });
