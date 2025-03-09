const express = require('express');
const app=express();
const mongoose = require('mongoose');
const productRoutes = require('./routes/product.route.js');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

require('dotenv').config();

//routes
app.use("/api/products", productRoutes);

//database connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Connected to MongoDB'); 
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });   
})
.catch((err)=>{
    console.log('Error:',err);
})       


// app.get('/',(req,res)=>{
//     res.send('Hello World');
// });

// app.get('/api/products', async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// });

// app.get('/api/product/:id', async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// });

// app.post('/api/products', async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// });

// app.put('/api/product/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);

//         if(!product){
//             return res.status(400).json({message:"Product not found"});
//         }

//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// });

// app.delete('/api/product/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if(!product){
//             return res.status(400).json({message:"Product not found"});
//         }

//         res.status(200).json({message:"Product deleted successfully"});
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// });