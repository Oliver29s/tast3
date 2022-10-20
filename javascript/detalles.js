
function imprimirCartas(array,id) {
    document.querySelector(`#${id}`).innerHTML = ""
    array.forEach(event =>{
        document.querySelector(`#${id}`).innerHTML =
            `
            <div class=" card p-1" style="width: 15rem; ">
                    <img src="${event.image}" class="card-img-top" alt="imagen1">
                    <div class="card-body">
                        <h5 class="card-title">${event.name}</h5>
                        <p class="card-text"></p>    
                        <div class="d-flex justify-content-between">
                            <h6>Price: ${event.price}</h6>
                        <a href="../htmls/detalles.html" class="btn btn-primary">Comprar</a>
    
                        </div>
                    </div>
                </div>
    
            `
    })
}
imprimirCartas(events,"contenedor_informacion")