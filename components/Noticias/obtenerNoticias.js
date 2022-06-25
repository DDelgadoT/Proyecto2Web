async function obtenerNoticias(){
    return await fetch("https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=5L6Nk6ZCiQUPVNYTR1M69PnPlqUam93j")
    .then(response => response.json())
    .then(data => data.results)
};

export default obtenerNoticias;