const repository = require("../../db/repository.js");

async function saveUrl(urlString) {
  var urlToSave = {
    url: urlString,
    short: generateShortHash(),
  };
  var result = await repository.saveUrl(urlToSave);
  return result ? urlToSave : null;
}

async function getUrl(shortPath) {
  return await repository.getUrl(shortPath);
}

function generateShortHash() {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

module.exports = {
  saveUrl: saveUrl,
  getUrl: getUrl,
};
