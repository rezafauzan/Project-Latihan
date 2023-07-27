// Angka Dalam Javascript
console.log('Angka Dalam Javascript');

// tanpa desimal
console.log('tanpa desimal');
let angka = 10
console.log(angka);
console.log('\n')

// dengan desimal
console.log('dengan desimal');
angka = 0.2
console.log(angka);
console.log('\n')

// Eksponen
console.log('eksponen');
angka = 123e5
let angka2 = 123e-5
console.log(angka);
console.log(angka2);
console.log('\n')

// Negatif
console.log('negatif');
angka = -2
console.log(angka);
console.log('\n')

// Oktal
console.log('oktal');
angka = 022
console.log(angka);
console.log('\n')

// Hexadesimal
console.log('hexa desimal');
angka = 0xFF
console.log(angka);
console.log('\n')

// Special Number
console.log('Special Number');

// Infinity & -Infinity
console.log('Infinity & -Infinity');
angka = Infinity // 2/0
angka2 = -Infinity // -2/0
console.log(angka);
console.log(angka2);
console.log('\n')

// NaN
console.log('NaN');
angka = NaN // 2/"String"
console.log(angka);
console.log('\n')

// Operasi Matematika akan dijalankan juga jika sebuah angka dioperasikan pada string angka
console.log('Operasi Matematika akan dijalankan juga jika sebuah angka dioperasikan pada string angka');
angka = 100/"10"
console.log(angka);