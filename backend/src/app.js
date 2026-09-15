const express = require('express');
require('dotenv').config();
const connectDB = require('./db/db');
const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes')
const storeRoutes = require('./routes/store.routes');
const cookieParser = require('cookie-parser');




const app = express();
app.use(express.json());
app.use(cookieParser());
connectDB();

app.use('/api/auth', authRoutes );
app.use('/api/products', productRoutes);
app.use('/api/store', storeRoutes );

module.exports = app;