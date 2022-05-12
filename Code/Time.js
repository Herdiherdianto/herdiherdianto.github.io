var time = new Date();
let months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
let myDays = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum&#39;at", "Sabtu"];
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let thisDay = date.getDay();
thisDay = myDays[thisDay];
let yy = date.getFullYear();
let year = yy < 1000 ? yy + 1900 : yy;
document.getElementById("Tanggal").innerHTML = thisDay + "," + day + " " + months[month] + " " + year;
document.getElementById("WAKTU").innerHTML = thisDay + "," + day + " " + months[month] + " " + year;

alert("Terima kasih Sudah Berkunjung XD Salam Hangat Dari HerdiHerdianto");
