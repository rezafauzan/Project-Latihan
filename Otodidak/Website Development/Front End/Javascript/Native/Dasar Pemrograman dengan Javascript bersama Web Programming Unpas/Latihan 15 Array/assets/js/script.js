// Array
    let bahasa = ['javascript', 'php', 'java', 'c++', 'python'] // deklarasi array
    console.log(typeof(bahasa)) // akan mengembalikan 'object'
    console.log(bahasa.length)  // method pada array untuk menghitung jumlah element
    console.log(bahasa[1])      // akan memunculkan element pada index 1 yaitu php karena index dimulai dari 0
    
    function lorem(){
        let kosong
    }

    let arr = ['text' /* String */, 1945 /* Number */, true /* Boolean */, lorem /* Function */, [1,2,3] /* Multi Dimension Array */]

    console.log(arr[4][1]) //pemanggilan array multi dimensi, akan menghasilkan angka 2