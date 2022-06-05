export const numberWithCommas = (numberInput) => {
    return numberInput.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const API_KEY = '29b67f93ea2ed46c47e8f361056c78e1';
export const API_RAJAONGKIR = 'https://api.rajaongkir.com/starter/';
export const API_HEADER_RAJAONGKIR = {
    'key' : API_KEY
};
export const API_TIMEOUT = 120000;

export const API_HEADER_RAJAONGKIR_COST = {
    'key' : API_KEY,
    'content-type': 'application/x-www-form-urlencoded'
};

export const ORIGIN_CITY = '349'