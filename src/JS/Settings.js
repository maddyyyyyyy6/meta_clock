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
    })
})


// Change theme Implementation

