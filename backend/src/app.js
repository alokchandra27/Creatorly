const express = require('express');
require('dotenv').config();
const connectDB = require('./db/db');
const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes')
const storeRoutes = require('./routes/store.routes');
const publicStoreRoutes = require('./routes/publicStore.routes');
const cookieParser = require('cookie-parser');
const cors = require('cors');



const app = express();
app.use(express.json());
app.use(cookieParser());
connectDB();

const allowedOrigins = [
  "http://localhost:5173",
  "https://prompt-vault-xi-umber.vercel.app" 
];

app.use(cors({
  origin: function (origin, callback) {
    // Postman ya server-to-server requests ke liye jinka origin nahi hota
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('CORS policy violation: This origin is not allowed.'), false);
    }
    return callback(null, true);
  },
  credentials: true,
}))


app.use('/api/auth', authRoutes );
app.use('/api/products', productRoutes);
app.use('/api/store', storeRoutes );
app.use('/api/shop', publicStoreRoutes);

module.exports = app;