// Rekursif
    // for (let i = 0; i < 10; i++) {
    //     console.log(i)
    // }

    // function cetakMundur(n) {
    //     return cetakMundur(n-1)
    // }

    // cetakMundur(10)
    // ini akan menghasilkan infinity call loop karena tidak memiliki base case

    function cetakMundur(n) {
        if (n === 0) return
        return cetakMundur(n-1)
    }

    cetakMundur(10)