// 1. Syntax Percabangan if ( Kepenulisan Kode)
// 1 kondisi //

var totalBelanja = 20000;

if ( totalBelanja > 10000) {
    document.getElementById("if").innerHTML = "Selamat Kamu dapat Piring";
}

// 2. Syntax Percabangan if else
// 2 kondisi, benar dan salah //

var umurPengunjung = 17;

if(umurPengunjung >= 17){
    document.getElementById("ifelse").innerHTML = "Selamat kamu boleh masuk wahana";
}else{
    document.getElementById("ifelse").innerHTML = "Selamat kamu tidak boleh masuk wahana";
}
   

// 3.  Syntax Percabangan if else if
// memasukan banyak kondisi //

var tiket = 8;

if(tiket =6){
    document.getElementById("ifelseif").innerHTML = "dapat popcron";
}else if(tiket>=2){
    document.getElementById("ifelseif").innerHTML = " dapat permen";
}else if(tiket>=4){
    document.getElementById("ifelseif").innerHTML = " dapat jajan";
}else{
    document.getElementById("ifelseif").innerHTML = "tidak dapet snak";
}


// 4. Syntax Percabangan Switch Case
// fersi ribet if else

// cara Pertama
// var umurPengunjung = prompt("Masukan Umur Anda!");
// var wahana;

// switch(true){
//     case umurPengunjung>= 18:
//         wahana = "Boleh Masuk Kora Kora";
//         document.getElementById("switchcase").innerHTML =wahana;
//         break;

//         case umurPengunjung>= 16:
//         wahana = " Boleh Masuk Flying Fox ";
//         document.getElementById("switchcase").innerHTML =wahana;
//         break;

//         case umurPengunjung>= 14:
//         wahana = " Boleh Masuk Hlilintar";
//         document.getElementById("switchcase").innerHTML =wahana;
//         break;

//          default:
//             wahana = "Terimakasih Sudah Berkunjung";
//             document.getElementById("switchcase").innerHTML =wahana;

// }

// cara Kedua

// var nilai = prompt("Masukan Nilai Anda");
// var grade ="";

// switch(true){
//    case nilai > 80:
//     grade = "A+";
//     document.getElementById("switchcase").innerHTML =wahana;
//     break;

//     case nilai > 70:
//     grade = "B+";
//     document.getElementById("switchcase").innerHTML =wahana;
//     break;

//     case nilai > 60:
//     grade = "C+";
//     document.getElementById("switchcase").innerHTML =wahana;
//     break;

//     case nilai > 50:
//     grade = "D+";
//     document.getElementById("switchcase").innerHTML =wahana;
//     break;

//     default:
//     grade = "F";
//     document.getElementById("switchcase").innerHTML =wahana;

// }

// 5. Syntax Percabangan Ternary ?
// fersi singkat if else

// var tanya = prompt("Apakah Serang Ibu Kota Banten ?");

// var jawaban = (tanya.toUpperCase() == "IYA")? "Benar": "Salah";
// document.getElementById("ternary").innerHTML = jawaban;

// 6. Syntax Percabangan Nested

var user = {
    nama: "Firdha",
    email: "firdha@gmail.com",
    password: "1234",
    role: "admin",
};

function masuk(){
    var email = document.getElementById("email"). value ;
    var password = document.getElementById("password"). value ;

    console.log(email);
    // untuk melihat di console
    if(user.email == email){
        if(user.password == password){
            if(user.role == "admin"){
                alert("Selamat Datang  "   + user.nama);
            }
        }else{
            alert("Tidak Bisa Masuk");
        }
    }else{
        alert("Bukan Admin Oii!");
    }

}



