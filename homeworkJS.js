// 1
console.log("----- No.1 -----")
let hurufVokal = "The quick brown fox jumps over the lazy dog";
let ganti = hurufVokal.replace(/a|i|u|e|o/g, "*");
console.log(ganti);

// 2
console.log("----- No.2 -----")
let kurang = [1,8,9,5,3];
let jumlah = 0;
for (i = 0; i < kurang.length; i++){
    jumlah += kurang[i];
}
console.log(jumlah);
if (jumlah >= 30){
    console.log("It's Big!")
}


let angka = [1,8,9,5,10];
let total = 0;
for (i = 0; i < angka.length; i++){
    total += angka[i];
}
console.log(total);
if (total >= 30){
    console.log("It's Big!")
}

// 3
console.log("----- No.3 -----")
let array = [88,31,2,19,66];
let terbesar = Math.max.apply(Math,array);
let terkecil = Math.min.apply(Math,array);
console.log(terbesar);
console.log(terkecil);