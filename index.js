

function changeColor() {
    if (document.body.style.backgroundColor == 'whitesmoke') {
    document.body.style.backgroundColor = '#1D2C38';
    document.body.style.color = 'whitesmoke';
    document.getElementById("btn").style.backgroundColor = 'whitesmoke';
    document.getElementById("btn").style.color = '#333333';
    } else {
    document.body.style.backgroundColor = 'whitesmoke'
    document.body.style.color = '#333333';
    document.getElementById("btn").style.backgroundColor = '#1D2c38';
    document.getElementById("btn").style.color = 'whitesmoke';
    }
}