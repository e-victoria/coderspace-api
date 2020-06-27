const dataBaseController = require('../dbConnection');

function checkLogin(app) {

    app.get('/api/projects', function (req, res) {
        const query = `{}`;

        function getData(result) {
            console.log(result)
            res.send(JSON.stringify(result));
            res.status(200).end();
        }

        dataBaseController.getDataFromDb("projects", query, getData);

    })
}

module.exports = { checkLogin };
