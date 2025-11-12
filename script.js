const hamburger = document.querySelector(".ri-menu-3-line");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click" , () => {
    menu.classList.toggle("menu-active");
});

window.onscroll = () => {
    menu.classList.remove("menu-active");
};


function LuasPersegi() {
    let s = document.getElementById("sisiPersegi").value;
    let hasil = s * s;
    document.getElementById("hasilPersegi").innerText = "Luas Persegi =" + hasil;
}

function LuasPP() {
    let p = document.getElementById("panjangPP").value;
    let l = document.getElementById("lebarPP").value;
    let hasil = p * l;
    document.getElementById("hasilPP").innerText = "Luas Persegi Panjang = " + hasil
}

function LuasLingkaran() {
    let r = document.getElementById("jari-jari").value;
    let hasil = 3.14 * r * r;
    document.getElementById("hasilLingkaran").innerText = "Luas Lingkaran = " + hasil;
}

function VolumeBalok() {
    let p = document.getElementById("panjangBalok").value;
    let l = document.getElementById("lebarBalok").value;
    let t = document.getElementById("tinggiBalok").value;
    let hasil = p * l * t;
    document.getElementById("hasilBalok").innerText = "Volume Balok = " + hasil;
}

function VolumeKubus() {
    let s = document.getElementById("panjangSisi").value;
    let hasil = s * s * s;
    document.getElementById("hasilKubus").innerText = "Volume Kubus = " + hasil;
}

function VolumeTabung() {
    let r = document.getElementById("jari-jariAlas").value;
    let t = document.getElementById("tinggiTabung").value;
    let hasil = 3.14 * r * r * t;
    document.getElementById("hasilTabung").innerText = "Volume Tabung =" + hasil;
}
