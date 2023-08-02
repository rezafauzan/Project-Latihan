// Variable Scope
    // Global Scope / Window Scope
    let a = 1
    function lorem(){
        let b
    }
    console.log(b) // ini tidak akan bisa jalan karena b ada di scope Function Lorem
    
    function loremipsum(){
        console.log(a) // sedangkan a bisa diakses karena a berada di scope Global
    }

    function dolor(){
        // name conflict
        let a = 2  // variable a disini beda dengan a yang ada di global tapi namanya bisa sama
        // kecuali diakses dengan
        window.a = 3 
        
        a = 4 // apabila tidak ada declarasi variable a di dalam scope local maka akan mencari di global 

        z = 0 
        // apabila tidak ada declarasi variable di dalam dan di luar maka akan secara otomatis dibuatkan variable di global
    }
    console.log(a) // dan ini akan menghasilkan nilai a di global 

    function sit(a /* akan menjadi local variable */){
        console.log(a) // dan a disini akan mengambil dari local variable
    }

    sit(a /* a disini merupakan a yang ada pada global */)