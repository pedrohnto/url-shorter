var MongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectID;
var url = "mongodb://localhost:27017";

async function saveUrl(urlToSave) {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }
  try {
    const db = client.db("url");
    let collection = db.collection("url");
    let res = await collection.insertOne(urlToSave);
    return res;
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

async function getUrl(shortPath) {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db("url");
    let collection = db.collection("url");
    let query = { short: shortPath };
    let res = await collection.findOne(query);
    return res;
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

async function getUrlById(id) {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db("url");
    let collection = db.collection("url");
    let query = { _id: new ObjectId(id) };
    let res = await collection.findOne(query);
    return res;
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

async function getUrlByDate(creationDate) {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db("url");
    let collection = db.collection("url");
    let query = { creationDate: new Date(creationDate) };
    let res = await collection.findOne(query);
    return res;
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

module.exports = {
  saveUrl: saveUrl,
  getUrl: getUrl,
  getUrlByDate: getUrlByDate,
  getUrlById: getUrlById,
};
