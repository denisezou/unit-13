var petsData = require("../data/pets.js");

module.exports = function(app) {
  app.get("/api/pets", function(req, res) {
    res.json(petsData);
  });

  app.post("/api/pets", function(req, res) {
    let newSurvey = req.body;
    let toppoints = 99;
    let bestpetposition = 0;

    for (var i = 0; i < petsData.length; i++) {
      let newpoints = 0;
      let diff = 0;

      for (var j = 0; j < 10; j++) {
        diff = Math.abs(
          parseInt(newSurvey.scores[j]) - parseInt(petsData[i].scores[j])
        );
        newpoints += diff;

        if (newpoints < toppoints) {
          bestpetposition = i;
          toppoints = newpoints;
        }
      }
    }

    petsData.push(req.body);

    res.json(petsData[bestpetposition]);
  });
};
