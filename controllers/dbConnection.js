function connectToDb() {
    var MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://admin:mongo@flash-0qeyy.gcp.mongodb.net/test?retryWrites=true&w=majority";    return new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

function getDataFromDb(table, query, getData) {
    console.log(query)
    const client = connectToDb();
    console.log('1')
    client.connect(() => {
        console.log(2)
        const collection = client.db("coderspace").collection(table);
        collection.find(query).toArray(function(err, result) {
            if (err) throw err
            console.log('ddddd')
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
