const { createApp } = Vue
createApp({
    data() {
        return {
            eventos: [],
            url: 'https://martinrodriguezdicarlo.pythonanywhere.com/eventos',
            // url: 'http://127.0.0.1:5000/eventos',
            // si el backend esta corriendo local  usar localhost 5000(si no lo subieron a pythonanywhere)
            //url: 'http://mcerda.pythonanywhere.com/productos',   // si ya lo subieron a pythonanywhere
            error: false,
            cargando: true,
            /*atributos para el guardar los valores del formulario */
            id: 0,
            fecha: "",
            lugar: "",
            descripcion: "",
            ubicacion: "",
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.eventos = data;
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
            let evento = {
                fecha: this.fecha,
                lugar: this.lugar,
                descripcion: this.descripcion,
                ubicacion: this.ubicacion
            }
            var options = {
                body: JSON.stringify(evento),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./eventos.html";  // recarga productos.html
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
