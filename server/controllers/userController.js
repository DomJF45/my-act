const sql = require('mssql');

const config = {
  user: 'actadmin',
  password: 'Tequila.7',
  server: 'actapp.database.windows.net',
  database: 'actdatabase'
}

const registerUser = async (req, res) => {
  const { id, name, email, password } = req.body;

  sql.connect(config, (err) => {
    if (err) console.log(err);

    const request = new sql.Request();

    try {
      request.query(`INSERT INTO [dbo].[User2] (Email, FirstName, Password) VALUES('${email}', '${name}', '${password}')`, (err, recordset) => {
        if (err) console.log(err);
  
        res.send(recordset);
      })
    } catch (err) {
      console.log(err)
    }
    

  })
  
}

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  sql.connect(config, (err) => {
    if (err) console.log(err);

    const request = new sql.Request();
    let user;
    try {
      request.query(`SELECT TOP 1 FirstName, Email FROM [dbo].[User2] WHERE Email = '${email}' AND '${password}' = Password`, (err, result, fields) => {
        if (err) throw err;
        console.log(result)
        res.send(result)
      })
      
      
      
    } catch (e) {
      console.log(e)
    }
  })
}

module.exports ={
  registerUser,
  loginUser
}