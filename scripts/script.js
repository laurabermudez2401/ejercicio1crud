let btnCategory1 = document.getElementById('btnCategory1')
let btnCategory2 = document.getElementById('btnCategory2')

let divForm = document.querySelector('.div-usuario')

const getElementos = async (url)=>{
    let mostrarElementos =  document.querySelector('.grid-elementos')
    mostrarElementos.innerHTML = ''

    //petición

    const resp = await fetch (url)
    const data = await resp.json()
    data.forEach(element => {
        const{name, img, genero } = element;

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
    getElementos('https://crudmariobros.herokuapp.com/mariobros')
})


btnCategory2.addEventListener('click', ()=>{

    window.location.href = './formulario.html'
    
})


