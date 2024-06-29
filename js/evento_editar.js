console.log(location.search)     // lee los argumentos pasados a este formulario
var id = location.search.substr(4)  // producto_update.html?id=1
console.log(id)
const { createApp } = Vue
createApp({
    data() {
        return {
            id: 0,
            fecha: "",
            lugar: "",
            descripcion: "",
            ubicacion: "",
            // url: 'http://127.0.0.1:5000/eventos/' + id,
            url: 'https://martinrodriguezdicarlo.pythonanywhere.com/eventos/' + id,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id = data.id,
                    this.fecha = data.fecha,
                    this.lugar = data.lugar,
                    this.descripcion = data.descripcion,
                    this.ubicacion = data.ubicacion
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        modificar() {
            let evento = {
                fecha: this.fecha,
                lugar: this.lugar,
                descripcion: this.descripcion,
                ubicacion: this.ubicacion
            }
            var options = {
                body: JSON.stringify(evento),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./eventos.html"; // navega a productos.html          
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