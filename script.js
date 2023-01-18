//Responsive BTN
const BTN = document.getElementsByClassName('menu')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navbarLogin = document.getElementsByClassName('navbar-login')[0]


BTN.addEventListener('click', () => {
    navbarLogin.classList.toggle('active')
    BTN.classList.toggle('active')
})


//Shop Script

function calculateBeef(){
    let beef = parseFloat(document.getElementById('beef').value);
    let sumofTotalBeef = beef * 600;
    document.getElementById('beef-price').innerHTML = sumofTotalBeef
    document.getElementById('beef-demo').innerHTML = beef + ' Kilos of Beef';
    document.getElementById('success1').innerHTML = 'Successfully Added on your Cart';
    document.getElementById('success1').style.color = 'Green';
}
function calculateChicken(){
    let chicken = parseFloat(document.getElementById('chicken').value);
    let sumofTotalChicken = chicken * 200;
    document.getElementById('chicken-price').innerHTML = sumofTotalChicken
    document.getElementById('chicken-demo').innerHTML = chicken + ' Kilos of Chicken';
    document.getElementById('success2').innerHTML = 'Successfully Added on your Cart';
    document.getElementById('success2').style.color = 'Green';
}
function calculatePork(){
    let pork = parseFloat(document.getElementById('pork').value);
    let sumofTotalPork = pork * 300;
    document.getElementById('pork-price').innerHTML = sumofTotalPork
    document.getElementById('pork-demo').innerHTML = pork + ' Kilos of Pork';
    document.getElementById('success3').innerHTML = 'Successfully Added on your Cart';
    document.getElementById('success3').style.color = 'Green';
}
function calculateGoat(){
    let goat = parseFloat(document.getElementById('goat').value);
    let sumofTotalGoat = goat * 420;
    document.getElementById('goat-price').innerHTML = sumofTotalGoat
    document.getElementById('goat-demo').innerHTML = goat + ' Kilos of Goat';
    document.getElementById('success4').innerHTML = 'Successfully Added on your Cart';
    document.getElementById('success4').style.color = 'Green';
  
}


function totalSum() {
    let beef = parseFloat(document.getElementById('beef').value);
    let sumofTotalBeef = beef * 600;
    let chicken = parseFloat(document.getElementById('chicken').value);
    let sumofTotalChicken = chicken * 200;
    let pork = parseFloat(document.getElementById('pork').value);
    let sumofTotalPork = pork * 300;
    let goat = parseFloat(document.getElementById('goat').value);
    let sumofTotalGoat = goat * 420;

  
    const arr = [sumofTotalBeef,sumofTotalChicken,sumofTotalPork,sumofTotalGoat]
    let sum = 0;
    for(const value of arr) {
        sum += value;
    document.getElementById('total').innerHTML = sum;
    }

}