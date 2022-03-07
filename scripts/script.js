let btnCategory1 = document.getElementById('btnCategory1')

const getElementos = async (url)=>{
    let mostrarElementos =  document.querySelector('.grid-elementos')
    mostrarElementos.innerHTML = ''

    //petición

    const resp = await fetch (url)
    const data = await resp.json()
    data.forEach(element => {
        const{name, imagen, genero } = element;

        mostrarElementos.innerHTML += `
        <div class="col elementos">
            <a href="#" class="enlace-detalle-elemento">
                <div class="card bg-dark text-white gradiente">                
                    <img src="${img}" class="card-img" alt="...">
                    <div class="card-img-overlay">
                            <h5 class="card-title body2Bold">${name}</h5>
                            <p class="card-text body2Regular">${genero}</p>
                    </div>
                </div>
            </a>
        </div>
        `

    });
}

btnCategory1.addEventListener('click', ()=>{
    getElementos('')
})

