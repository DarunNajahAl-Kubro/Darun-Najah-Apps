const homeScreen = document.getElementById('home-screen');
const istighosahScreen = document.getElementById('istighosah-screen');
const btnIstighosah = document.getElementById('btn-istighosah');
const btnBack = document.getElementById('btn-back');
const kontenIstighosah = document.getElementById('konten-istighosah')
btnIstighosah.addEventListener('click', function(){
 homeScreen.classList.add('hidden');
 istighosahScreen.classList.remove('hidden');
});
btnBack.addEventListener('click', function(){
  istighosahScreen.classList.add('hidden');
  homeScreen.classList.remove('hidden');
})

function tampilkanIstighosah() {
  kontenIstighosah.innerHTML = '';
  dataIstighosah.forEach(function(item) {
    const divKalimat = document.createElement('div');
    divKalimat.classList.add('item-istighosah');
    divKalimat.innerHTML = `
    <p class ='teks-arab'>${item.arab}</p>
    <p class ='teks-arti'>${item.arti}</p>
    `;
    kontenIstighosah.appendChild(divKalimat);
  });
}
tampilkanIstighosah();