const input = require('prompt-sync')({sigint: true});
var flag1=false;
var validasiAngka = /^[-+]?[0-9]+$/;

do{
    var nilai = input('Masukan angka: ');
    if (nilai.match(validasiAngka)){
        validasi(nilai);
    }else{
        console.log("harap masukan angka!")
    }
}while(flag1==false)


function validasi(x) {
    
    if(x<0){
        console.log("Angka tidak boleh negatif");
        flag1=false;
    }else if(x%2!=0){
        console.log("Angka tidak boleh ganjil");
        flag1=false;
    }else{
        console.log("akar pangkat 2 dari "+ x +" adalah " + Math.sqrt(x));
        flag1=true;
    }

}