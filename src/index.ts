import express from 'express';
import { promises as fsPromises } from 'fs';
import csv from 'csvtojson';

const app = express();
const port = 3000;

const inputFile = './users.csv';
const outputFile = 'users.json';

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

//define a route handler for the dafault home page

app.get('/convert', (req, res) => {
  res.send('conversion in progress!')
  csv()
    .fromFile(inputFile)
    .then((data) => {
      console.log(data);
      let newData = data.map((item: {
        first_name: string; last_name: string; phone: string;

      }) => {
        let first = item.first_name;
        let last = item.last_name;
        let phone = item.phone;
        if (item.phone === "") {
          phone = 'missing data';
        }
        // return a new object
        return { first, last, phone };

      });
      console.log('converted: ' + JSON.stringify(newData))
      fsPromises.writeFile(outputFile, JSON.stringify(newData));
    })
});