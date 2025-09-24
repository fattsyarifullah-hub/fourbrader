// function persegi
function luasdankelilingpersegi() {
    let sisi = document.getElementById ('sisi').value;
    let keliling_persegi = 4 * sisi;
    let luas_persegi = sisi * sisi;
    document.getElementById('keliling_persegi').innerText = ('nilai keliling persegi adalah = ' + keliling_persegi);
    document.getElementById('luas_persegi').innerText = ('nilai luas persegi adalah = ' + luas_persegi);
}

// function persegi panjang
function luasdankelilingpersegipanjang() {
    let panjang = document.getElementById ('panjang').value;
    let lebar = document.getElementById ('lebar').value;
    let keliling_PP = 2 * panjang + 2 * lebar;
    let luas_PP = panjang * lebar;
    document.getElementById('keliling_PP').innerText = ('nilai keliling persegi panjang adalah = ' + keliling_PP);
    document.getElementById('luas_PP').innerText = ('nilai luas persegi panjang adalah = ' + luas_PP);
}

// function segitiga
function luasdankelilingsegitiga() {
    let sisi1 = parseFloat(document.getElementById ('sisi1').value);
    let sisi2 = parseFloat(document.getElementById ('sisi2').value);
    let sisi3 = parseFloat(document.getElementById ('sisi3').value);
    let keliling_segitiga = sisi1 + sisi2 + sisi3;
    document.getElementById('keliling_segitiga').innerText = ('nilai keliling segitiga adalah = ' + keliling_segitiga);
    
    let alas = document.getElementById ('alas').value;
    let tinggi = document.getElementById ('tinggi').value;
    let luas_segitiga = 1 / 2 * alas * tinggi;
    document.getElementById('luas_segitiga').innerText = ('nilai luas segitiga adalah = ' + luas_segitiga);
}