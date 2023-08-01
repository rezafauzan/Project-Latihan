//Function
function hitungDuaVolumeKubus(sisiKubusA , sisiKubusB){
    let volumeKubusA = sisiKubusA * sisiKubusA * sisiKubusA
    let volumeKubusB = sisiKubusB * sisiKubusB * sisiKubusB

    return volumeKubusA + volumeKubusB
}

let sisiKubusA = prompt('Masukan Panjang Sisi Kubus A')
let sisiKubusB = prompt('Masukan Panjang Sisi Kubus B')

alert('Hasilnya adalah ' + hitungDuaVolumeKubus(sisiKubusA , sisiKubusB))


