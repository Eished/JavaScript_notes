const img1 = document.getElementById('img1')
img1.onload = function () {
    console.log('img loaded')
}

window.addEventListener('load', function () {
    console.log('window loaded')
})

document.addEventListener('DOMContentLoaded', function () {
    console.log('dom content loaded')
})