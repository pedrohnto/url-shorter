const service = require("../services/urlService.js");

exports.post = async (req, res, next) => {
  let saved = await service.saveUrl(req.body.url);
  if (saved) {
    var fullUrl = req.protocol + "://" + req.get("host") + "/" + saved.short;
    res.status(200).send(fullUrl);
  } else {
    res.status(400).send("Cannot Create Url");
  }
  res.status(201).send();
};
exports.get = async (req, res, next) => {
  let url = await service.getUrl(req.params.path);
  if (url) {
    res.status(200).send(url.url);
  } else {
    res.status(404).send("Url doesnt exists");
  }
};
