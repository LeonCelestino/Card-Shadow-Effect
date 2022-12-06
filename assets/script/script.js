document.querySelector('#card').addEventListener('mousemove', e => {
    let x = (window.innerWidth / 2 - e.pageX);
    let y = (window.innerHeight / 2 - e.pageY);


    document.querySelector('#card').style.boxShadow = `${(x) / 10}px ${(y) / 10}px 50px #F2E3D588, ${(y) / 50}px ${(x) / 50}px 100px #F2E3D588`
})


document.querySelector('#card').addEventListener('mouseenter', e => {
    document.querySelector('#card').style.transition = 'none'
})

document.querySelector('#card').addEventListener('mouseleave', e => {
    document.querySelector('#card').style.transition = 'all 0.5s ease'
    document.querySelector('#card').style.boxShadow = 'none'
})