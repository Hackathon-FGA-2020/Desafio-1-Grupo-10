// import React from 'react'
//import testData from './testDimport {parse} from 'csv'
//import {express, request} from 'express'

// function Proxy() {
/*
	console.log("A")
	const app = express();
	
	app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
	});

	app.get('/mapeamento/csvTest', (req, res) => {
	request(
		{ url: 'https://filebin.net/hv5hy1sz4roxqo31/testData.csv?t=7m2d4m82' },
		(error, response, body) => {

			
		res.json(JSON.parse(body));
		}
	)
	});

	const PORT = process.env.PORT || 3000;
	app.listen(PORT, () => console.log(`listening on ${PORT}`));
	*/
// }

// async function getNewCases() {
	/*const fetching = await fetch('https://cors-anywhere.herokuapp.com/https://filebin.net/hv5hy1sz4roxqo31/testData.csv?t=7m2d4m82')
	const testData = fetching.blob()
	var casoList = [];
	console.log(testData)*/
	
		//url: 'https://covid19.ssp.df.gov.br/resources/dados/dados-abertos.csv?param=[random]',
/*
	parse(testData, (err, data) => {
		console.log(data)
		for (var i = 0; i < data.length; i++) {
			const id = data[i][0];
			const dataRegistro = data[i][2];
			const sexo = data[i][3];
			const faixaEt = data[i][4];
			const regiao = data[i][5];
			const sitSaude= data[i][8];

			if(data[i][6] === 'DISTRITO FEDERAL') {
				const newCase = { id: {"registro": dataRegistro, "sexo": sexo, "faixaEt": faixaEt, "regiao": regiao, "sitSaude": sitSaude}};
				casoList.push(newCase);
			}
			console.log(casoList)
		}
				
		fetch('https://wcov-70df7.firebaseio.com/casos.json', {
			method: 'PUT',
			headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			},
			body: JSON.stringify(casoList)
		}).then(
			console.log(JSON.stringify(casoList))
		)
	})*/
// }

// export default Proxy