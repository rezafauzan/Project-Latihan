// Object
    let karyawan = {} 

    karyawan = {
        nama : 'Reza',
        umur : 19,
        kpi : [99,99,99,99,99],
        alamat : {
            jalan : 'JL. Terusan Cipatik No.16 Kp.Sukarame RT:03 RW:01 Desa Parungserab Kec.Soreang Kab.Bandung Jawa Barat',
            kota : 'Bandung',
            provinsi : 'Jawa Barat'
        }
    }

    console.log('nama : ' + karyawan.nama)
    console.log('umur : ' + karyawan['umur'])
    console.log('umur : ' + karyawan.kpi[1])
    console.log('umur : ' + karyawan.alamat['kota'])
    console.log('umur : ' + karyawan['alamat']['jalan'])
    console.log('umur : ' + karyawan['alamat'].provinsi)

    // Cara-Cara Membuat Object Di Javascript
        // Object Literal 
        let siswa = {
            nama : 'Reza',
            nip  : '0405',
            jurusan : 'Rekayasa Perangkat Lunak'
        }

        let siswa2 = {
            nama : 'Denita',
            nip  : '0504',
            jurusan : 'Rekayasa Perangkat Lunak'
        }

        // Function Declaration
        function itemBaru(namaItem,idItem){
            let item = {}
            item.namaItem,
            item.idItem
            return item
        }

        let item = itemBaru('Sendok',1)
        let item2 = itemBaru('Garpu',2)

        // Constructor
        function Buku(namaBuku,idBuku){
            // bisa dianggap terdapat let this = {}
            this.namaBuku = namaBuku
            this.idBuku = idBuku
        }

        let buku = new Buku('Catatan.docx',2)
        // let buku = Buku('Catatan.docx',2) akan dianggap function declaration dan mengembalikan nilai undefined karena tidak ada object pada function Buku