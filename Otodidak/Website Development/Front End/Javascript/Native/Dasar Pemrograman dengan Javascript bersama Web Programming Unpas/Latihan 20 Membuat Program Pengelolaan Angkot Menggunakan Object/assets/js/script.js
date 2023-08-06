// Latihan Object dengan Membuat Program Pengelolaan Angkot
    function Angkot( supir, trayek, daftarPenumpang, kas ) {
        this.kas = kas
        this.supir = supir
        this.trayek = trayek
        this.daftarPenumpang = daftarPenumpang

        this.penumpangNaik = function (namaPenumpang, daftarPenumpang) {
            if (daftarPenumpang.length == 0) {
                daftarPenumpang.push(namaPenumpang)
                return daftarPenumpang
            } else {
                
                for (let i = 0 ; i < daftarPenumpang.length ; i++) {
    
                    if ( daftarPenumpang[i] == undefined ) {
                        daftarPenumpang[i] = namaPenumpang
                        return daftarPenumpang
                    } else if( daftarPenumpang[i] == namaPenumpang ) {
                        for (let j = 0 ; j <= i ; j++) {
                            if (daftarPenumpang[j] == daftarPenumpang[i]) {
                                console.log(daftarPenumpang[j] + 'sudah ada di dalam angkot')
                                return daftarPenumpang
                            }
                        }
                    } 
                    else if ( i == daftarPenumpang.length - 1) {
                        daftarPenumpang.push(namaPenumpang)
                        return daftarPenumpang
                    } 
    
                }
            } 
        }   
    
        this.penumpangTurun = function (namaPenumpang, daftarPenumpang) {
            if (daftarPenumpang.length == 0) {
                console.log('Angkot Kosong!');
                return daftarPenumpang
            }else{
                for (let i = 0; i < daftarPenumpang.length; i++) {
                    
                    if(daftarPenumpang[i] == namaPenumpang){
                        
                        //Sistem Tarif
                        if ( this.trayek[0] == 'Soreang' && this.trayek[1] == 'Bandung' ) {
                            console.log( 'Naik di ' + trayek[0] + ' Turun di ' + trayek[1] + ' Tarif : Rp.' + 8000 + ',-')
                            this.kas += 8000
                        } else if ( this.trayek[0] == 'Soreang' && this.trayek[1] == 'Banjaran') {
                            console.log( 'Naik di ' + trayek[0] + ' Turun di ' + trayek[1] + ' Tarif : Rp.' + 7000 + ',-')
                            this.kas += 7000
                        } else if ( this.trayek[0] == 'Soreang' && this.trayek[1] == 'Ciwidey') {
                            console.log( 'Naik di ' + trayek[0] + ' Turun di ' + trayek[1] + ' Tarif : Rp.' + 7500 + ',-')
                            this.kas += 7500
                        } else if ( this.trayek[0] == 'Soreang' && this.trayek[1] == 'Cimahi') {
                            console.log( 'Naik di ' + trayek[0] + ' Turun di ' + trayek[1] + ' Tarif : Rp.' + 7500 + ',-')
                            this.kas += 7500
                        } else if ( this.trayek[0] == 'Soreang' && this.trayek[1] == 'Cililin') {
                            console.log( 'Naik di ' + trayek[0] + ' Turun di ' + trayek[1] + ' Tarif : Rp.' + 6500 + ',-')
                            this.kas += 6500
                        } else { 
                            // Jauh Dekat 10000
                            console.log( 'Naik di ' + trayek[0] + ' Turun di Pertengahan' + ' Tarif Jauh Dekat : Rp.' + 10000 + ',-')
                            this.kas += 10000 
                        }

                        daftarPenumpang[i] = undefined
                        return daftarPenumpang
                    }
                    
                }
                
                console.log('Tidak ada penumpang dengan nama : ' + namaPenumpang)
                return daftarPenumpang
            }
        }
    }

    let angkot1 = new Angkot('supir1', ['Soreang', 'Bandung'],  [], 0)
    let angkot2 = new Angkot('supir2', ['Soreang', 'Banjaran'], [], 0)
    let angkot3 = new Angkot('supir3', ['Soreang', 'Ciwidey'],  [], 0)
    let angkot4 = new Angkot('supir4', ['Soreang', 'Cimahi'],   [], 0)
    let angkot5 = new Angkot('supir5', ['Soreang', 'Cililin'],  [], 0)

    alert( 
           'angkot 1 dengan supir : '+ angkot1['supir'] + ' dan trayek dari ' + angkot1['trayek'][0] + ' ke ' + angkot1['trayek'][1] + ' Mulai Beroperasi.'
        +'\nangkot 2 dengan supir : '+ angkot2['supir'] + ' dan trayek dari ' + angkot2['trayek'][0] + ' ke ' + angkot2['trayek'][1] + ' Mulai Beroperasi.'
        +'\nangkot 3 dengan supir : '+ angkot3['supir'] + ' dan trayek dari ' + angkot3['trayek'][0] + ' ke ' + angkot3['trayek'][1] + ' Mulai Beroperasi.'
        +'\nangkot 4 dengan supir : '+ angkot4['supir'] + ' dan trayek dari ' + angkot4['trayek'][0] + ' ke ' + angkot4['trayek'][1] + ' Mulai Beroperasi.'
        +'\nangkot 5 dengan supir : '+ angkot5['supir'] + ' dan trayek dari ' + angkot5['trayek'][0] + ' ke ' + angkot5['trayek'][1] + ' Mulai Beroperasi.'
    )

    function angkot1Naik(){
        let namaPenumpang = prompt('Masukan Nama Penumpang(Tidak Sensitive Case)').toLowerCase()
        angkot1.penumpangNaik(namaPenumpang, angkot1.daftarPenumpang)
        alert(namaPenumpang + ' telah naik. \nlist penumpang : \n'+ angkot1.daftarPenumpang)

    }
    function angkot2Naik(){
        let namaPenumpang = prompt('Masukan Nama Penumpang(Tidak Sensitive Case)').toLowerCase()
        angkot2.penumpangNaik(namaPenumpang, angkot2.daftarPenumpang)
        alert(namaPenumpang + ' telah naik. \nlist penumpang : \n'+ angkot2.daftarPenumpang)
    }
    function angkot3Naik(){
        let namaPenumpang = prompt('Masukan Nama Penumpang(Tidak Sensitive Case)').toLowerCase()
        angkot3.penumpangNaik(namaPenumpang, angkot3.daftarPenumpang)
        alert(namaPenumpang + ' telah naik. \nlist penumpang : \n'+ angkot3.daftarPenumpang)
    }
    function angkot4Naik(){
        let namaPenumpang = prompt('Masukan Nama Penumpang(Tidak Sensitive Case)').toLowerCase()
        angkot4.penumpangNaik(namaPenumpang, angkot4.daftarPenumpang)
        alert(namaPenumpang + ' telah naik. \nlist penumpang : \n'+ angkot4.daftarPenumpang)
    }
    function angkot5Naik(){
        let namaPenumpang = prompt('Masukan Nama Penumpang(Tidak Sensitive Case)').toLowerCase()
        angkot5.penumpangNaik(namaPenumpang, angkot5.daftarPenumpang)
        alert(namaPenumpang + ' telah naik. \nlist penumpang : \n'+ angkot5.daftarPenumpang)
    }

    function angkot1Turun(){
        let namaPenumpang = prompt('Masukan Nama Penumpang(Tidak Sensitive Case)').toLowerCase()
        angkot1.penumpangTurun(namaPenumpang, angkot1.daftarPenumpang)
        alert(namaPenumpang + 'Telah Membayar! Kas Angkot Sekarang = Rp.'+ angkot1.kas +',-')
        alert(namaPenumpang + ' telah turun. \nlist penumpang : \n'+ angkot1.daftarPenumpang)
    }
    function angkot2Turun(){
        let namaPenumpang = prompt('Masukan Nama Penumpang(Tidak Sensitive Case)').toLowerCase()
        angkot2.penumpangTurun(namaPenumpang, angkot2.daftarPenumpang)
        alert(namaPenumpang + 'Telah Membayar! Kas Angkot Sekarang = Rp.'+ angkot2.kas +',-')
        alert(namaPenumpang + ' telah turun. \nlist penumpang : \n'+ angkot2.daftarPenumpang)
    }
    function angkot3Turun(){
        let namaPenumpang = prompt('Masukan Nama Penumpang(Tidak Sensitive Case)').toLowerCase()
        angkot3.penumpangTurun(namaPenumpang, angkot3.daftarPenumpang)
        alert(namaPenumpang + 'Telah Membayar! Kas Angkot Sekarang = Rp.'+ angkot3.kas +',-')
        alert(namaPenumpang + ' telah turun. \nlist penumpang : \n'+ angkot3.daftarPenumpang)
    }
    function angkot4Turun(){
        let namaPenumpang = prompt('Masukan Nama Penumpang(Tidak Sensitive Case)').toLowerCase()
        angkot4.penumpangTurun(namaPenumpang, angkot4.daftarPenumpang)
        alert(namaPenumpang + 'Telah Membayar! Kas Angkot Sekarang = Rp.'+ angkot4.kas +',-')
        alert(namaPenumpang + ' telah turun. \nlist penumpang : \n'+ angkot4.daftarPenumpang)
    }
    function angkot5Turun(){
        let namaPenumpang = prompt('Masukan Nama Penumpang(Tidak Sensitive Case)').toLowerCase()
        angkot5.penumpangTurun(namaPenumpang, angkot5.daftarPenumpang)
        alert(namaPenumpang + 'Telah Membayar! Kas Angkot Sekarang = Rp.'+ angkot5.kas +',-')
        alert(namaPenumpang + ' telah turun. \nlist penumpang : \n'+ angkot5.daftarPenumpang)
    }

    function angkot1Kas(){
        alert('Kas Angkot 1 Sekarang Adalah Rp.' + angkot1.kas + ',-')
    }
    function angkot2Kas(){
        alert('Kas Angkot 2 Sekarang Adalah Rp.' + angkot2.kas + ',-')
    }
    function angkot3Kas(){
        alert('Kas Angkot 3 Sekarang Adalah Rp.' + angkot3.kas + ',-')
    }
    function angkot4Kas(){
        alert('Kas Angkot 4 Sekarang Adalah Rp.' + angkot4.kas + ',-')
    }
    function angkot5Kas(){
        alert('Kas Angkot 5 Sekarang Adalah Rp.' + angkot5.kas + ',-')
    }