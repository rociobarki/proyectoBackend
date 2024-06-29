console.log(location.search)     // lee los argumentos pasados a este formulario
var id = location.search.substr(4)  // producto_update.html?id=1
console.log(id)
const { createApp } = Vue
createApp({
    data() {
        return {
            id: 0,
            nombre: "",
            apellido: "",
            edad: 0,
            instrumento: "",
            url: 'https://martinrodriguezdicarlo.pythonanywhere.com/alumnos/' + id,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id = data.id,
                    this.nombre = data.nombre,
                    this.apellido = data.apellido,
                    this.edad = data.edad,
                    this.instrumento = data.instrumento
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        modificar() {
            let alumno = {
                nombre: this.nombre,
                apellido: this.apellido,
                edad: this.edad,
                instrumento: this.instrumento
            }
            var options = {
                body: JSON.stringify(alumno),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./alumnos.html"; // navega a productos.html          
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')