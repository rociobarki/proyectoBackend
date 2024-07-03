const { createApp } = Vue
createApp({
    data() {
        return {
            alumnos: [],
            url: 'https://martinrodriguezdicarlo.pythonanywhere.com/alumnos',
            // url: 'http://127.0.0.1:5000/alumnos',
            // si el backend esta corriendo local  usar localhost 5000(si no lo subieron a pythonanywhere)
            //url: 'http://mcerda.pythonanywhere.com/productos',   // si ya lo subieron a pythonanywhere
            error: false,
            cargando: true,
            /*atributos para el guardar los valores del formulario */
            id: 0,
            nombre: "",
            apellido: "",
            edad: 0,
            telefono: "",
            instrumento: "",
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.alumnos = data;
                    this.cargando = false
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        eliminar(id) {
            const url = this.url + '/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    alert('Registro Eliminado')
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },
        grabar() {
            let alumno = {
                nombre: this.nombre,
                apellido: this.apellido,
                edad: this.edad,
                telefono: this.telefono,
                instrumento: this.instrumento
            }
            var options = {
                body: JSON.stringify(alumno),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./index.html";  // recarga productos.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")  // puedo mostrar el error tambien
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')
