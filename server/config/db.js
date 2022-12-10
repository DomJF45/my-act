const sql = require('mssql');

const connectDB = async () => {
  try {
    const config = await sql.connect(`Server=actapp.database.windows.net,1433;Database=actdatabase;User Id=actadmin;Password=Tequila.7;Encrypt=true'`);
    
    console.log('db connected');
  } catch(err) {
    console.log(err)
    process.exit(1);
  }
}

module.exports = connectDB;