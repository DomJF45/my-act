const express = require('express');
const connectDB = require('./config/db')
const app = express();
const dotenv = require('dotenv').config();
const colors = require('colors');
const cors = require('cors')
const PORT = process.env.PORT || 4000;

connectDB();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/exercise/init', require('./routes/exerciseRoutes'));

// app.post('/register', (req, res) => {
//   sql.connect(config, (err) => {
//     if (err) console.log(err);

//     const request = new sql.Request();

//     request.query(`INSERT INTO User (UserId, Email, FirstName, Password), VALUES(${req.body.id},${req.body.name}, ${req.body.email}, ${req.body.password})`, (err, recordset) => {
//       if (err) console.log(err);

//       res.send(recordset);
//     })

//   })
// })

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})