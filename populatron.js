const fs = require("fs");

// function onFinished() {
//   return fs.readFile("cities.csv", "utf8", (error, result) =>
//     console.log(error, result)
//   );
// }
module.exports = {
  totalPopulation(onFinished) {
    fs.readFile("cities.csv", "utf8", (error, result) => {
      if (error) throw error;
      let total = result
        .split("\n")
        .slice(1)
        .reduce((add, line) => {
          return (add += Number(line.split(",")[2]));
        }, 0);
      onFinished(total);
    });
  },
};
