// Membuat Game Suit Sederhana
let main = true

while (main) {
    let player = prompt('pilih : Batu atau Gunting atau Kertas').toLowerCase()

    let computer = Math.random()

    if ( computer < 0.34 ){
        computer = 'batu'
    }
    else if ( computer >= 0.34 && computer < 0.67 ){
        computer = 'gunting'
    }
    else{
        computer = 'kertas'
    }

    let hasil = ''
    if( player == computer ){
        hasil = 'Seri !'
        alert( 'Player Memilih ' + player + ' Computer Memilih ' + computer )
        alert( 'Hasil Pertandingannya Adalah ' + hasil )
    } else if ( player == 'batu' )
    {
        hasil = ( computer == 'kertas' ) ? 'Kalah !' : 'Menang !'
        alert( 'Player Memilih ' + player + ' Computer Memilih ' + computer )
        alert( 'Hasil Pertandingannya Adalah ' + hasil )
    }
    else if ( player == 'gunting' )
    {
        hasil = ( computer == 'batu' ) ? 'Kalah !' : 'Menang !'
        alert( 'Player Memilih ' + player + ' Computer Memilih ' + computer )
        alert( 'Hasil Pertandingannya Adalah ' + hasil )
    }
    else if ( player == 'kertas' ){
        hasil = ( computer == 'gunting' ) ? 'Kalah !' : 'Menang !'
        alert( 'Player Memilih ' + player + ' Computer Memilih ' + computer )
        alert( 'Hasil Pertandingannya Adalah ' + hasil )
    }
    else {
        alert( 'Player Memasukan Pilihan Yang Salah !!!')
    }

    main = confirm('Main Lagi?')
}

