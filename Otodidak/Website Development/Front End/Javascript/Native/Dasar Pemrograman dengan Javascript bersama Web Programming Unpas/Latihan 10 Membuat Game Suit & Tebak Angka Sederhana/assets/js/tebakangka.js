// Membuat Game Tebak Angka Sederhana
let trueNumber = Math.floor(Math.random(10) * 10) + 1
let nyawa = 3
while (nyawa > 0){
    let tebakan = prompt('Tebak Angka Nya 1~10')
    if ( tebakan == trueNumber ) {
        alert('Benar ! Selamat Ya ! Sisa Nyawa : ' + nyawa)
    } else if ( tebakan < trueNumber ) {
        nyawa--
        alert('Angka Tebakanmu Lebih Kecil Dari True Number Sisa Nyawa : ' + nyawa)
    } else if ( tebakan > trueNumber ) {
        nyawa--
        alert('Angka Tebakanmu Lebih Besar Dari True Number Sisa Nyawa : ' + nyawa)
    } else {
        nyawa--
        alert('Input Salah ! Bukan Angka ! Sisa Nyawa : ' + nyawa)
    }
}