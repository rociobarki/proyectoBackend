const logout = () => {
    sessionStorage.removeItem("adm")
    window.location.href = './index.html'
}


const logoutButton = document.querySelector('logoutButton')
logoutButton.addEventListener('click', logout)







