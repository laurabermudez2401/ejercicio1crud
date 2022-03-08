let formulario = document.getElementById('formulario');
let btnCorreo = document.getElementById('btnCorreo');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');

let url = 'https://crudmariobros.herokuapp.com/usuarios/'

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('id').style.display = 'none'
    document.getElementById('label-edit').style.display = 'none'
})

formulario.addEventListener('submit', async e => {
    e.preventDefault()

    let name = document.getElementById('name').value
    let lastName = document.getElementById('lastName').value
    let email = document.getElementById('email').value

    if (name != '' || lastName != '' || email != '') {

        await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                nombre: name,
                apellido: lastName,
                correo: email
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        Swal.fire({
            title: 'Ya quedó!',
            text: 'Bienvenido a la familia MarioBross.',
            imageUrl: 'https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2020/10/Super-Mario-Bros-1-1280x720-1.jpg?resize=1250%2C720&ssl=1',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })


        formulario.reset()

    } else {
        Swal.fire(
            'Oops!',
            'Debes llenar todos los campos',
            'question'
        )

    }
})

btnCorreo.addEventListener('click', async () => {

    document.getElementById('id').style.display = 'inline-block'
    document.getElementById('label-edit').style.display = 'inline-block'

    let email = document.getElementById('email').value;

    if (email != '') {
        let resp = await fetch(url)
        let data = await resp.json()

        let modificar = data.find(user => user.correo.toLocaleLowerCase().includes(email.toLocaleLowerCase()))

        console.log(modificar);

        if (modificar != undefined) {
            const { nombre, apellido, correo, id } = modificar

            document.getElementById('name').value = nombre
            document.getElementById('lastName').value = apellido
            document.getElementById('email').value = correo
            document.getElementById('id').value = id
        }
        else {
            Swal.fire(
                'Oops! No te encontramos',
                'El usuario que buscas no existe, intenta revisar si el correo ingresado es corecto',
                'question'
            )

            document.getElementById('id').style.display = 'none'
            document.getElementById('label-edit').style.display = 'none'
        }
    } else {
        Swal.fire(
            'Oops!',
            'Debes ingresar un correo para ser buscado',
            'question'
        )
    }







})

btnEditar.addEventListener('click', async () => {
    let idModificar = document.getElementById('id').value
    let nameModificar = document.getElementById('name').value
    let lastNameModificar = document.getElementById('lastName').value
    let emailModificar = document.getElementById('email').value

    if (idModificar == '' || nameModificar == '' || lastNameModificar == '' || emailModificar == '') {
        Swal.fire(
            'Oops!',
            'Debes buscar mendiante un correo el usuario que deseas modificar',
            'question'
        )
    } else {
        await fetch(url + idModificar, {
            method: 'PUT',
            body: JSON.stringify({
                id: idModificar,
                nombre: nameModificar,
                apellido: lastNameModificar,
                correo: emailModificar
            }),
            headers: {
                'Content-Type': 'application/json; chartset=UTF-8'
            }
        })

        Swal.fire(
            'Bien hecho!',
            'Haz editado tu usuario correctamente',
            'success'
        )

        formulario.reset()

        document.getElementById('id').style.display = 'none'
        document.getElementById('label-edit').style.display = 'none'
    }
})

btnEliminar.addEventListener('click', async () => {
    let idEliminar = document.getElementById('id').value;

    let idModificar = document.getElementById('id').value
    let nameModificar = document.getElementById('name').value
    let lastNameModificar = document.getElementById('lastName').value
    let emailModificar = document.getElementById('email').value

    if (idModificar != '' || nameModificar != '' || lastNameModificar != '' || emailModificar != '') {
        await fetch(url + idEliminar, {
            method: 'DELETE'
        })

        Swal.fire(
            'Eliminado!',
            'Haz eliminado tu usuario correctamente',
            'success'
        )

        formulario.reset()
    }
    else {
        Swal.fire(
            'Oops!',
            'Ingresa el correo para buscar el usuario que deseas eliminar',
            'question'
        )
    }


})

