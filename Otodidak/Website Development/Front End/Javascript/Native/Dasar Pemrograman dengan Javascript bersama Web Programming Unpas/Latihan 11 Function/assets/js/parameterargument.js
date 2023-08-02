//Function : Parameter dan Argument
function hitungDuaVolumeKubus(sisiKubusA , sisiKubusB /* ini adalah parameter */){
    let volumeKubusA = sisiKubusA * sisiKubusA * sisiKubusA
    let volumeKubusB = sisiKubusB * sisiKubusB * sisiKubusB

    return volumeKubusA + volumeKubusB
}

function kaliDuaVolumeKubus(volumeKubus /* ini adalah parameter */){
    return volumeKubus = volumeKubus*2
}

let sisiKubusA = prompt('Masukan Panjang Sisi Kubus A')
let sisiKubusB = prompt('Masukan Panjang Sisi Kubus B')

alert('Hasilnya adalah ' + kaliDuaVolumeKubus(hitungDuaVolumeKubus(sisiKubusA , sisiKubusB /* ini adalah argument */)) )

function tambah(a,b /* b akan diisi undefined*/) {
    return a + b
}

tambah(10)

function kurang(a,b /* b akan diisi undefined*/) {
    return a - b
}

tambah(10,20,30 /* 30 akan diabaikan */)

function jumlahArgument(){
    let hasil = 0
    for (let i = 0; i < arguments.length; i++) {
        hasil += arguments[i]
    }
    return hasil
}

console.log(jumlahArgument(20,30,40,40))


