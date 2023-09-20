import express from 'express'

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('<h1>Welcome to Home page.</h1>')
})


app.get("/about", (req, res) => {
    res.send('<h1>Welcome to About us Page page.</h1>')
})



app.get("/contact", (req, res) => {
    res.send(`<h1>Welcome to Contact us page.</h1>
     <h3>contact us at fnassiir22@gmail.com </h3> <h3> or 0704590094 </h3> `)
})

app.listen(port,() => {
    console.log(`Server is running at port ${port}.`)
})