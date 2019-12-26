const express = require('express')
const cookieParser = require('cookie-parser')
const randomString = require('random-string')
const app = express()

const testJSON = {

}

app.use(cookieParser());
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

app.get('/', (req, res) => {

    if (req.query.status) {
        return res.sendStatus(req.query.status)
    }
    // if (req.query.test) {
        return res.send({
            method: req.method,
            getParams: req.query,
            bodyParams: req.body,
            params: req.params,
            headrs: req.headers
        })
    // }

})

app.post('/', (req, res) => {

    if (req.query.status) {
        return res.sendStatus(req.query.status)
    }
    // if (req.query.test) {
        return res.send({
            method: req.method,
            getParams: req.query,
            bodyParams: req.body,
            params: req.params,
            headrs: req.headers
        })
    // }
})

app.put('/', (req, res) => {

    if (req.query.status) {
        return res.sendStatus(req.query.status)
    }
    // if (req.query.test) {
        return res.send({
            method: req.method,
            getParams: req.query,
            bodyParams: req.body,
            params: req.params,
            headrs: req.headers
        })
    // }
})

app.delete('/', (req, res) => {

    if (req.query.status) {
        return res.sendStatus(req.query.status)
    }
    // if (req.query.test) {
        return res.send({
            method: req.method,
            getParams: req.query,
            bodyParams: req.body,
            params: req.params,
            headrs: req.headers
        })
    // }
})

app.get('/user', (req, res) => {
    res.send(testJSON)
})

app.post('/user', (req, res) => {
    if (req.body.user) {
        const key = randomString()
        testJSON[key] = req.body.user;
        return res.send({id: key})
    }

    res.sendStatus(404)
})

app.put('/user/:id', (req, res) => {

    if (req.body.user && req.params.id) {
        testJSON[req.params.id] = {...testJSON[req.params.id], ...req.body.user};
        return res.sendStatus(200)
    }

    res.sendStatus(404)
})

app.delete('/user/:id', (req, res) => {

    if (req.params.id) {
        delete testJSON[req.params.id];
        return res.sendStatus(200)
    }

    res.sendStatus(404)
})

app.listen(2832, () => {
    console.log('Server startd on port 2832');
});