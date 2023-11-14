const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const cors = require('cors');

const categories = require ('./models/categories');
const products = require ('./models/products');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// Set up MongoDB connection
const connectDB=()=>{
  mongoose.connect('mongodb://localhost/shoping-List-Malka', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}


app.get('/categories', async (req, res) => {
    try {
      const categoriesList = await categories.find();
      res.json(categoriesList);
    } catch (error) {
      // Handle any errors that occur during the database query
      console.error('Error retrieving categories:', error);
      throw error;
    }
  
});



app.get('/products', async (req, res) => {
  try {
    const sortedProducts = await products.find().sort({ category: 1 });
    res.json(sortedProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});



app.post('/products', async (req, res) => {
  try {
    
    const{category,name,comments}   =  req.body;

    // Check if the product already exists in the collection
    const existingProduct = await products.findOne({ name, category });
    console.log(existingProduct);

    if (existingProduct) {
      // If the product exists, increase the quantity by one
      existingProduct.quantity += 1;
      await existingProduct.save();
    } else {
      // If the product does not exist, create a new product with quantity set to 1
      const newProduct = new products({
        name,
        category,
        comments,
        quantity: 1,
      });
      await newProduct.save();
    }

    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});


app.get('/total', async (req, res) => {
  try {
    const count = await products.countDocuments();
    console.log(count);
    return count;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
});

const initializeCategories = async () => {
  try {
      // Connect to MongoDB
      connectDB();

      // Default categories
      const defaultCategories = [
          { name: 'מוצרי חלב' },
          { name: 'מוצרי נקיון' },
          { name: 'מוצרי מאפיה' },
          { name: 'פירות וירקות' },
          { name: 'בשר ודגים' },
          { name: 'כללי' }
      ];
    // Check collection count
    const count = await categories.countDocuments();
    if (count === 0) {
      // Insert default categories
      await categories.insertMany(defaultCategories);
      console.log('Default categories inserted successfully');
    } else {
      console.log('Collection already has items. Skipping default categories insertion.');
    }

      // Close the connection
      // await mongoose.connection.close();
      // console.log('Connection to MongoDB closed');

  } catch (error) {
      console.error("Error initializing categories:", error);
      process.exit(1);
  }
};

// Run the initialization function
initializeCategories();

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});





