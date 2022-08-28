const color_btn = document.getElementById('color-mode-changer');
const color_modes = document.getElementById('color-modes')

const color_mode_list = document.querySelectorAll('.color_mode')


color_btn.addEventListener('click', () => {
    color_modes.classList.toggle('show-option')

})


color_mode_list.forEach(color => {
    color.addEventListener('click', () => {
        var text = color_btn.querySelector('span')
        text.innerText = color.innerText
        color_modes.classList.toggle('show-option')
        var body = document.body
        body.className = ""
        var mode = (color.innerText == 'Dark') ? 'dark_theme' : 'light_theme'
        body.className = mode
        localStorage.setItem('theme', mode);
    })
})


// Change theme Implementation


window.onload = () => {
    let body = document.body
    let currenttheme = localStorage.getItem('theme')
    body.className = currenttheme
}







