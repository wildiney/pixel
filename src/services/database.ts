import path from 'path'
import sqlite3 from 'sqlite3'

const db = new sqlite3.Database(path.resolve(__dirname, '..', 'database', 'database.db'))
db.run('CREATE TABLE IF NOT EXISTS pixelTracker (id TEXT, date TEXT, idCampaign TEXT, email TEXT, ip TEXT, userAgent TEXT, host TEXT, referer TEXT, acceptLanguage TEXT)')

export default db
