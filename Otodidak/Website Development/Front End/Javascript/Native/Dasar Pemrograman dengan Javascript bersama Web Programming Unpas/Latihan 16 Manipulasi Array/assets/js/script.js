// Manipulasi Array
    // Menambah isi Array
    let arr = []
    arr[0] = "Element 1"
    arr[2] = "Element 2"
    arr[3] = "Element 3"
    arr[4] = "Element 4"
    arr[5] = "Element 5"
    // menambahkan array bisa langsung dengan mengisi index yang kosong atau menimpa nilai pada index tersebut
    
    // Menghapus isi array
    arr[0] = undefined
    // Menghapus Element pada array bisa langsung dengan menimpa index dengan undefined

    // Menampilkan isi array
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
    // Untuk menampilkan seluruh isi array bisa dengan menggunakan pengulangan untuk menampilkan element pada semua index array

// Method Pada Array
    // join
    let buah = ['apel', 'jeruk', 'mangga']
    console.log(buah.join('-' /* bisa diisi string apapun sebagai separator */))
    
    // push
    buah.push('strawberry' , 'lemon')
    console.log(buah.join(' - '))

    //pop
    buah.pop()
    console.log(buah.join(' - '))

    // unshift
    buah.unshift('belimbing')
    console.log(buah.join(' - '))

    // shift
    buah.shift()
    console.log(buah.join(' - '))

    // slice
    let fruit = buah.slice(2,4) // akan menghasilkan array baru
    console.log(buah.join(' - '))
    console.log(fruit.join(' - '))

    // splice
    buah.splice( 2, 0, 'jambu', 'rambutan' /*indexAwal, berapaElementYangAkanDihapus, elementBaru1, elementBaruN*/)
    console.log(buah.join(' - '))
    buah.splice( 2, 2, 'Blueberry', 'Anggur' /*indexAwal, berapaElementYangAkanDihapus, elementBaru1, elementBaruN*/)
    console.log(buah.join(' - '))

    // foreach
    let item = ['sekop', 'gelas', 'teko', 'piring']
    
        // looping array dengan for
        // for (let i = 0; i < item.length; i++) {
        //     console.log(item[i]);
        // }

        // looping array dengan foreach 
            item.forEach(function (e /* untuk element */, i /* untuk index */){
                 console.log(e /* untuk element */, i /* untuk index */) 
                })
    
    // map
    let angka = [1,2,4,3,5,6,9,7,8]
    let angka2 = item.map(function (e /* untuk element */, i /* untuk index */){
        return e * 2 // sebagai array baru
    })

    // sort
    console.log(angka.join(' - '))
    angka.sort(function (a,b) { return a-b })
    console.log(angka.join(' - '))

    // filter
    let angka3 = angka2.filter(function (x) { return x <= 9 /* Bisa Menggunakan Operator Logika */ })
    console.log(angka3.join(' - '))

    // find
    let angka4 = angka3.find(function (x) { return x == 9 /* Bisa Menggunakan Operator Logika */ })
    console.log(angka4)

    // dan masih banyak lagi