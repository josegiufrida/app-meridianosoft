

const BASE = 'https://meridianosoft.com.ar/api/';

const VERSION = 'v1.0/';


const API = { 
	CLIENTS: BASE + VERSION + 'clients',
	LOGIN: BASE + 'login',
	FILTERS: {
		CLIENTS: BASE + VERSION + 'filters/clients',
	}
}; 


export default API;