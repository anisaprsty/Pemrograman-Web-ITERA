//NOMOR 1
let changeText = document.querySelector('#text');
changeText.innerText = 'Tugas Individu 3';

//NOMOR 2 
let newElemen = document.createElement('p');
newElemen.innerHTML = 'ini adalah text baru yang dibuat';
console.log(newElemen);
let newClass = document.querySelector('#teks');
newClass.appendChild(newElemen);

//NOMOR 3
let newElement = document.createElement('p');
newElement.innerHTML = 'Anda menekan <span id="count">0</span> kali';
document.body.appendChild(newElement);
let cat = document.getElementById('tex');

cat.addEventListener('click', function (event) {
  document.querySelector('#count').innerText++;
});