let isim = prompt("Lutfen isminizi giriniz:");
let myName = document.querySelector("#myName");
myName.innerHTML = ` ${isim}`;

function zaman() {

    const tarih = new Date;

    let saat = tarih.getHours();
    let dakika = tarih.getMinutes();
    let saniye = tarih.getSeconds();


    let gun = ["Pazartesi", "Salý", "Çarþamba", "Perþembe", "Cuma", "Cumartesi", "Pazar"];
    let gunName = gun[tarih.getDay()]

    let clock = document.querySelector("#myClock");
    clock.innerHTML = `${saat}:${dakika}:${saniye} ${gunName}`;
}

setInterval(zaman, 1000);
