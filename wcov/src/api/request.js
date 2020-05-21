export default function get() {
	const axios = require('axios')

	axios({
		url: 'https://covid19.ssp.df.gov.br/resources/dados/dados-abertos.csv?param=[random]',
		method: 'GET',
		responseType: 'blob', // important
	}).then((response) => {
		const url = window.URL.createObjectURL(new Blob([response.data]));
		const link = document.createElement('a');
		link.href = url;
		link.setAttribute('download', 'file.csv');
		document.body.appendChild(link);
		link.click();
		link.remove()
	});
	return axios
}