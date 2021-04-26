const express = require('express');
require('dotenv').config();

const {Clients, AccountTypes} = require('./models');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.urlencoded({extended: false}));

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
    res.redirect('/users');
})


// Users
app.get('/users', async(req, res) => {
    try{
        let results = await Clients.findAll({raw:true, order: [['id', 'ASC']]});
        res.render("users", {users: results});
    }catch(error){
        console.log(error);
        res.status(400).send("Something's wrong");
    }
})

app.post('/users', async(req, res) => {
    const {first_name, last_name, telephone, email} = req.body;
    try{
        await Clients.create({first_name, last_name, telephone, email});
        res.redirect('/users');
    }catch(error) {
        console.log(error);
        res.status(400).send("Something's wrong");
    }
})

app.get('/users/update/:id', async(req, res) => {
    let id_user = parseInt(req.params.id)
    let results = await Clients.findOne({where: {id: id_user}});
    res.render("update_user", {user: results});
})

app.post(`/users/update/:id`, async(req, res) => {
    const {first_name, last_name, telephone, email} = req.body;
    try{
        await Clients.update({first_name: first_name,
                            last_name: last_name,
                            telephone: telephone,
                            email: email},
                            {where: {id: req.params.id}});
        res.redirect('/users');
    }catch(error) {
        console.log(error);
        res.status(400).send("Something's wrong");
    }
})

app.get('/users/delete/:id', async(req, res) => {
    try{
        await Clients.destroy({where: {id: req.params.id}});
        res.redirect('/users');
    }catch(error) {
        console.log(error);
        res.status(400).send("Something's wrong");
    }
})






// Account types
app.get('/account_types', async(req, res) => {
    try{
        let results = await AccountTypes.findAll({raw:true, order: [['id', 'ASC']]});
        res.render("account_types", {account_types: results});
    }catch(error){
        console.log(error);
        res.status(400).send("Something's wrong");
    }
})

app.post('/account_types', async(req, res) => {
    const {name, description} = req.body;
    try{
        await AccountTypes.create({name, description});
        res.redirect('/account_types');
    }catch(error) {
        console.log(error);
        res.status(400).send("Something's wrong");
    }
})

app.get('/account_types/update/:id', async(req, res) => {
    let id_account_type = parseInt(req.params.id)
    let results = await AccountTypes.findOne({where: {id: id_account_type}});
    res.render("update_account_type", {account_type: results});
})

app.post(`/account_types/update/:id`, async(req, res) => {
    const {name, description} = req.body;
    try{
        await AccountTypes.update({name: name,
                                    description: description},
                                    {where: {id: req.params.id}});
        res.redirect('/account_types');
    }catch(error) {
        console.log(error);
        res.status(400).send("Something's wrong");
    }
})

app.get('/account_types/delete/:id', async(req, res) => {
    try{
        await AccountTypes.destroy({where: {id: req.params.id}});
        res.redirect('/account_types');
    }catch(error) {
        console.log(error);
        res.status(400).send("Something's wrong");
    }
})


app.listen(PORT, () => {
    console.log('Server listening a port', PORT)
})