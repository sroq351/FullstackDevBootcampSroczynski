window.onload = function () {
    const button = document.querySelector('#przycisk')
    button.addEventListener ("click", (e) => {
    alert (e.target.name + ' ' + e.target.value)
    })
}