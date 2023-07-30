// Latihan Switch (Menu Makanan)
let item = toLowerCase(prompt("Silahkan Pilih Menu Makanan Dengan Memasukan Nama Makanan Dari Pilihan Menu Berikut \n ('Nasi,Daging,Susu,Hamburger,SoftDrink')"))

alert("Switch Dengan Break")
switch (item) {
    case "nasi":
        alert("anda memilih nasi")
        break
    case "daging":
        alert("anda memilih daging")
        break
    case "susu":
        alert("anda memilih susu")
        break
    case "hamburger":
        alert("anda memilih hamburger")
        break
    case "softdrink":
        alert("anda memilih softdrink")
        break
    default:
        alert("Anda Memasukan Menu Yang Salah")
        break
}

alert("Switch Tanpa Break")
switch (item) {
    case "nasi":
    case "daging":
    case "susu":
        alert("And Memilih Makanan/Minuman Sehat")
        break
    case "hamburger":
    case "softdrink":
        alert("And Memilih Makanan/Minuman Tidak Sehat")
        break
    default:
        alert("And Memilih Makanan/Minuman Tidak Sehat")
        break
}