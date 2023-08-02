// Function
// function hitungDuaVolumeKubus(sisiKubusA , sisiKubusB /* ini adalah parameter */){
//     let volumeKubusA = sisiKubusA * sisiKubusA * sisiKubusA
//     let volumeKubusB = sisiKubusB * sisiKubusB * sisiKubusB

//     return volumeKubusA + volumeKubusB
// }

// let sisiKubusA = prompt('Masukan Panjang Sisi Kubus A')
// let sisiKubusB = prompt('Masukan Panjang Sisi Kubus B')

// alert('Hasilnya adalah ' + hitungDuaVolumeKubus(sisiKubusA , sisiKubusB /* ini adalah argument */))

// Hasil Refactor Code Diatas

function hitungDuaVolumeKubus(sisiKubusA , sisiKubusB){
    return sisiKubusA * sisiKubusA * sisiKubusA + sisiKubusB * sisiKubusB * sisiKubusB
}

let sisiKubusA = prompt('Masukan Panjang Sisi Kubus A')
let sisiKubusB = prompt('Masukan Panjang Sisi Kubus B')

alert('Hasilnya adalah ' + hitungDuaVolumeKubus(sisiKubusA , sisiKubusB))

