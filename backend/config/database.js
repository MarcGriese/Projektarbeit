const sql = require('mssql')

const connectDatabase = async () => {
  try {
    const conn = await sql.connect(process.env.MSSQL_URI)

    console.log(`SQL Server connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDatabase