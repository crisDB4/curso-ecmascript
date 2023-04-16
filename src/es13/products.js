// llamado a una API
import fetch from "node-fetch";

const response = await fetch('https://api.escuelajs.co/api/v1/products');
// objeto json
const products = await response.json();

export { products };

//ahora se puede utilizar await sin async