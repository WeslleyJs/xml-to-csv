const fs = require('fs');
const os = require('os');
const xml2js = require('xml2js');

const parser = new xml2js.Parser();

const direct = fs.readdirSync('./xml').toString();
console.log('aqui', direct)
const xmlToCsv = async  () => {
   await fs.readFile(__dirname + 'teste.xml',  (err, data)  => {
        parser.parseString(data,  (err, result) =>{
            const info =  result.nfeProc.NFe[0].infNFe[0].emit 
            info.forEach(async e => {
                console.table( `${e.enderEmit[0].xLgr}, ${e.enderEmit[0].nro}, ${e.enderEmit[0].xBairro}`)
                await fs.promises.writeFile(`input.csv`, [
                    `${e.enderEmit[0].xLgr},${e.enderEmit[0].xBairro},${e.enderEmit[0].nro}`
                    ].join('\n'));
            })
        })
    })
}

xmlToCsv()

