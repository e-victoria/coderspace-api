const MongoClient = require('mongodb').MongoClient;

function connectToDb() {
    const uri = "mongodb+srv://admin:mongo@flash-0qeyy.gcp.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    return client;
}

function getDataFromDb(table, query, getData) {
    const client = connectToDb();
    client.connect(() => {
        const collection = client.db("coderspace").collection(table);
        collection.find(query).toArray(function(err, result) {
            if (err) throw err
            getData(result);
        });
    });
    client.close();
}

function addNewData(table, data) {
    const client = connectToDb();
    client.connect(() => {
        const collection = client.db("coderspace").collection(table);
        collection.insertOne(data);
    });
    client.close();
}

module.exports = {getDataFromDb, addNewData};
