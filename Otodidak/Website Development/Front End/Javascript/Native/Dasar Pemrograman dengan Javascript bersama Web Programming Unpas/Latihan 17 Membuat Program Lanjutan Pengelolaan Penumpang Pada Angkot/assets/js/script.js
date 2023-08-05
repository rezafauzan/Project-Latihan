// Membuat Program Lanjutan Pengelolaan Penumpang Pada Angkot
    let penumpang = []
    function tambahPenumpang(namaPenumpang, penumpang) {
        if (penumpang.length == 0) {
            penumpang.push(namaPenumpang)
            return penumpang
        } else {
            
            for (let i = 0 ; i < penumpang.length ; i++) {

                if ( penumpang[i] == undefined ) {
                    penumpang[i] = namaPenumpang
                    return penumpang
                } else if( penumpang[i] == namaPenumpang ) {
                    for (let j = 0 ; j <= i ; j++) {
                        if (penumpang[j] == penumpang[i]) {
                            console.log(penumpang[j] + 'sudah ada di dalam angkot')
                            return penumpang
                        }
                    }
                } 
                else if ( i == penumpang.length - 1) {
                    penumpang.push(namaPenumpang)
                    return penumpang
                } 

            }
        } 
    }   

    function hapusPenumpang(namaPenumpang, penumpang) {
        if (penumpang.length == 0) {
            console.log('Angkot Kosong!');
            return penumpang
        }else{
            for (let i = 0; i < penumpang.length; i++) {
                
                if(penumpang[i] == namaPenumpang){
                    penumpang[i] = undefined
                    return penumpang
                }
                
            }
            
            console.log('Tidak ada penumpang dengan nama : ' + namaPenumpang)
            return penumpang
        }
    }