import './style.scss';
//import component from './component';

import { API_URL } from "./API_URL.js";
import { mostrarHTML } from "./showData.js";

document.addEventListener("DOMContentLoaded", obtenerDatos);

async function obtenerDatos(){
    try {
        const respuesta = await axios.get(API_URL)
        mostrarHTML(respuesta);
    } catch (error) {
        console.log(error);
    }
}

export default obtenerDatos