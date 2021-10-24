

function show(){
    let bttn = document.getElementById('bttn')
    let btttn = document.getElementById('btttn')
    let toshow = document.getElementById('to-show')
    toshow.style.display = 'block'
    bttn.style.display='none'
    btttn.style.display='block'
}
function hide(){
    let bttn = document.getElementById('bttn')
    let btttn = document.getElementById('btttn')
    let toshow = document.getElementById('to-show')
    toshow.style.display = 'none'
    bttn.style.display='block'
    btttn.style.display='none'
}