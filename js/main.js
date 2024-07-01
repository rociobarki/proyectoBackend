document.getElementById("header").innerHTML = ` <nav class="navbar navbar-expand-sm navbar-light bg-light">
<div class="container">
    <a class="navbar-brand" href="index.html">Codo a Codo</a>
    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
                <a class="nav-link active" href="index.html" aria-current="page">Home<span class="visually-hidden">(current)</span></a>
            </li>
        
            <li class="nav-item dropdown" id="crud"   >
                <a class="nav-link dropdown-toggle" href="#" id="dropdownId"  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CRUD</a>
                <div class="dropdown-menu" aria-labelledby="dropdownId" >
                    <a class="dropdown-item" href="alumnos.html">Alumnos</a>
                    <a class="dropdown-item" href="eventos.html">Eventos</a>
                </div>
            </li>
            <li class="nav-item dropdown" id="options"   >
                <a class="nav-link dropdown-toggle" href="#" id="dropdownId"  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">OPCIONES</a>
                <div class="dropdown-menu" aria-labelledby="dropdownId" >
                    <a class="dropdown-item" href="alumno_nuevo.html">Ingresa tus datos</a> 
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="registro.html">Registro</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="login.html">Login</a>
            </li>
        </ul>
        <button type="button" class="btn btn-default btn-sm">
        <span class="glyphicon glyphicon-log-out"></span> Log out
        </button>

        </div>
    </div>
</div>
</nav>
`
if (sessionStorage.getItem("adm") == "1") {
    document.querySelector("#crud").setAttribute('style', 'display:on')
    document.querySelector("#options").setAttribute('style', 'display:none')
} else if (sessionStorage.getItem("adm") == "0") {
    document.querySelector("#options").setAttribute('style', 'display:on')
    document.querySelector("#crud").setAttribute('style', 'display:none')
} else {
    document.querySelector("#crud").setAttribute('style', 'display:none')
    document.querySelector("#options").setAttribute('style', 'display:none')
}
// if (sessionStorage.getItem("adm") != "1") {
//     document.querySelector("#crud").setAttribute('style', 'display:none')
// } else {
//     document.querySelector("#crud").setAttribute('style', 'display:on')
// }

