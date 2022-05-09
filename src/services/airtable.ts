import Airtable from 'airtable'

const AIRTABLE_API_BASE: string = process.env.AIRTABLE_API_BASE!
const AIRTABLE_API_KEY: string = process.env.AIRTABLE_API_KEY!
const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_API_BASE)

export function getAllRecords () {
  const allRecords = []

  base('access').select({
    view: 'Grid view'
  }).eachPage((records, fetchNextPage) => {
    records.forEach(record => {
      allRecords.push(record)
    })
    fetchNextPage()
  })
}

export function CreateRecord (idCampaign: string, date: string, email: string, host: string, userAgent: string, referer: string, acceptLanguage: string, ip: string) {
  base('access').create([{
    fields: { idCampaign, date, email, host, userAgent, referer, acceptLanguage, ip }
  }], (err) => {
    if (err) {
      console.error(err)
    }
  })
}
