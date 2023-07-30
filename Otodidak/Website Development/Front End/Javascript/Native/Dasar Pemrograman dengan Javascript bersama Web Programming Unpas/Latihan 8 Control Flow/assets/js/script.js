// Control Flow
    // Pengulangan
    console.log("Pengulangan")
        // While Loop
            // while (true) {
            //     console.log("Halo Ini Hasil While Loop" +" ini akan menghasilkan infinity loop,lihat catatan.docx")
            // }
            let kondisi = 0
            while (kondisi<10) {
                console.log("Ini Adalah Iterasi ke - " + kondisi + " Dari Pengulangan While")
                kondisi++
            }
        // For
            for (let nilaiAwal = 1 ; nilaiAwal < 10 ; nilaiAwal++){
                console.log("Ini Adalah Iterasi ke - " + nilaiAwal + " Dari Pengulangan For")
            }
    // Percabangan / Pengkondisian
        // If Else
            let angka = prompt("Masukan Angka")
            if ( angka%2 == 0 ) {
                alert("Angka " + angka + "Merupakan Bilangan Genap dan ini merupakan hasil dari if")
            } else {
                alert("Angka " + angka + "Merupakan Bilangan Ganjil dan ini merupakan hasil dari else")
            }
        // Else If
            angka = prompt("Masukan Angka")
            if ( angka%2 == 0 ) {
                alert("Angka " + angka + "Merupakan Bilangan Genap dan ini merupakan hasil dari if")
            } else if ( angka%2 != 0 ) {
                alert("Angka " + angka + "Merupakan Bilangan Ganjil dan ini merupakan hasil dari else if")
            }
            else {
                alert(angka + " Bukan Merupakan Sebuah Angka dan ini merupakan hasil dari else")
            }

