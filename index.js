const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors=require('cors')
const port = process.env.PORT || 5000;
// pappuovi8
//49YBUjc3OnHZOLcZ

app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect('mongodb+srv://pappuovi8:49YBUjc3OnHZOLcZ@blog-reciepes-data.devec5p.mongodb.net/?retryWrites=true&w=majority&appName=blog-reciepes-data');

  app.get('/', (req, res) => {
    res.send('Recipe App Server is running.')
  })
}

main().then(()=> console.log("Mongodb Connected Successfully!")).catch(err => console.log(err));


const ItemRoutes=require("./src/routes/itemRoute");
const CategoryRoutes=require("./src/routes/categoryRoute")

app.use('/api',ItemRoutes);
app.use('/api',CategoryRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})