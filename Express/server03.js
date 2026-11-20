const express = require("express")
const app = express()
const PORT = 3000;
const cors = require("cors")
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const data = require("./data.json");

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))


const users = []




app.get("/promotions", function (req, res) {
    res.json(data)
})

app.get("/promotion/:id", (req, res) => {
    let id = req.params.id;
    let promotion = data.promotions.find(promotion => promotion.id === id);
    res.json(promotion);

})

app.get("/product/:id", (req, res) => {
    let id = req.params.id;
    let product = data.products.find(product => product.id === id);
    res.json(product);
})

app.get("/products", (req, res) => {
    const products = data.products;
    res.json(products);
})

app.post("/createUser", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        res.json({ registered: false, exists: true });
    }
    else {
        const newUser = { email, password };
        users.push(newUser);
        res.json({ registered: true, exists: false });
    }

})

app.post("/loginUser", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    const existingUser = users.find(user => user.email === email && user.password === password);

    if (existingUser) {
        res.cookie('email', email);
        res.json({ status: "logged", email: email });
    }
    else {
        res.json({ status: "notlogged" });
    }

})
app.post("/logoutUser", (req, res) => {
    res.clearCookie('email');
    res.json({ status: "logout" })

})

app.post("/getCurrentUser", (req, res) => {
    // pobranie emaila z ciastka
    const email = req.cookies.email;

    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        res.json({ status: "authorized", email: email })
    }
    else {
        res.json({ status: "notlogged" });
    }

})



app.use(express.static('static'))

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})