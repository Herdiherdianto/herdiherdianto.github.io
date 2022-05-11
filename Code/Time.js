var time = new Date();
var day = time.getDay();
document.getElementById("Tanggal").innerHTML = time.toLocaleDateString();
document.getElementById("Jam").innerHTML = time.toLocaleTimeString();
var dayarray = new Array("minggu,", "Senin,", "Selasa,", "Rabu,", "Kamis,", "Jumat,", "Sabtu,");
