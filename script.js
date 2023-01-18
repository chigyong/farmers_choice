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
    document.getElementById('demo').innerHTML = sumofTotalBeef;
    document.getElementById('beef-demo').innerHTML = beef + ' Kilos of Beef';
    alert('Successfully Added to your Cart')
}
function calculateChicken(){
    let chicken = parseFloat(document.getElementById('chicken').value);
    let sumofTotalChicken = chicken * 200;
    document.getElementById('demo').innerHTML = sumofTotalChicken;
    document.getElementById('chicken-demo').innerHTML = chicken + ' Kilos of Chicken';
    alert('Successfully Added to your Cart')

     
}
function calculatePork(){
    let pork = parseFloat(document.getElementById('pork').value);
    let sumofTotalPork = pork * 300;
    document.getElementById('demo').innerHTML = sumofTotalPork;
    document.getElementById('pork-demo').innerHTML = pork + ' Kilos of Pork';
    alert('Successfully Added to your Cart')


}
function calculateGoat(){
    let goat = parseFloat(document.getElementById('goat').value);
    let sumofTotalGoat = goat * 420;
    document.getElementById('demo').innerHTML = sumofTotalGoat;
    document.getElementById('goat-demo').innerHTML = goat + ' Kilos of Goat';
    alert('Successfully Added to your Cart')

}