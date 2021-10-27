const screen_names = { 
	'clientes': 'Client',
	'proveedores': 'Supplier',
	'articulos': 'Product'
};

function getScreenName($collection_name){
	return screen_names[$collection_name];
}

export { getScreenName };