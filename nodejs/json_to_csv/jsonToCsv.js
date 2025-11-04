// run:  node .\jsonToCsv.js 

import { createObjectCsvWriter } from 'csv-writer'

const csvWriter = createObjectCsvWriter({
    path: 'output.csv',
    header: [
        { id: 'name', title: 'Name' },
        { id: 'age', title: 'Age' },
        { id: 'email', title: 'Email' }
    ]
})

const data = [
    { name: 'Alice', age: 30, email: 'alice@example.com' },
    { name: 'Bob', age: 25, email: 'bob@example.com' },
    { name: 'Charlie', age: 35, email: 'charlie@example.com' }
]

csvWriter.writeRecords(data)
    .then(() => {
        console.log('CSV file written successfully!')
    })
