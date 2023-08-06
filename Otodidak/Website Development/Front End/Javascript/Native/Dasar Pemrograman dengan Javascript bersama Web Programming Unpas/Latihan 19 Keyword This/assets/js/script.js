// Keyword this
    // this context Global 
    console.log(this) // secara default this akan mengembalikan context yang dimana this ini sekarang akan mengembalikan object window atau object global
    console.log(window) // ini dan yang diatas sama
    console.log(this === window) 

    let a = 'Variable Global'
    console.log(a) 
    console.log(this.a) 
    console.log(window.a) 
    //ketiga ini pun sama



// Object
    // Cara-Cara Membuat Object Di Javascript
        // Object Literal 
        let obj = {}
        obj.halo() = function(){
            console.log(this) // this disini contextnya adalah obj maka akan this disini akan mengembalikan let obj ini atau this disini mengembalikan object yang bersangkutan
            console.log('halo')
        }

        let obj1 = {buah:'apple' , item:'garpu'}
        obj.halo() = function(){
            console.log(this)
            console.log('halo')
        }

        // Function Declaration
        function halo(){}
        halo()
        this.halo()
        window.halo()
        // karena function ini dibuat didalam object window maka context this disini adalah window

        // Constructor
        function Halo(){
            console.log(this) // this disini akan mengembalikan instance dari Halo
            console.log('halo')
        }
        let halo1 = new Halo() // this disini contextnya adalah instance(halo1) maka akan mengembalikan object halo1 
        let halo2 = new Halo() // this disini contextnya adalah instance(halo2) maka akan mengembalikan object halo2
        let halo3 = new Halo() // this disini contextnya adalah instance(halo3) maka akan mengembalikan object halo3
        // this mengembalikan object yang baru dibuat