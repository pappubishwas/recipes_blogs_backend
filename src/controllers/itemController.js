const Item = require("../model/ItemModel");

const getAllItems = async (req, res) => {
  try {
    const result = await Item.find().sort({ createdAt: -1 });
    //console.log('Query Result:', result);  // Add this log to see the query result
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getSearchItems = async (req, res) => {
  const { q } = req.query;
  try {
    let items;
    if (q) {
      items = await Item.find({ name: { $regex: q, $options: "i" } });
    }
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "No items found" });
  }
};


const getSingleItem=async(req,res)=>{
  const {id}=req.params;
  try{
    const item=await Item.findById(id);
    res.json(item);
  }catch(error){
    res.status(500).json({message: "No itmes found."});
  }
};

module.exports = {
  getAllItems,
  getSearchItems,
  getSingleItem,
};
