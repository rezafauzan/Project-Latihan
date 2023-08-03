// Function Declaration & Function Expression
    //Function Declaration
        function identifierAtauNama(argumentOptional){
            let functionBody
        }

        a() //pemanggilan bisa sebelum deklarasi di Source Code karena konsep Hoisting
        function a(argumentOptional){
            let functionBody
        }
    
    //Function Expression
    let a = function(argumentOptional){
        let functionBody
    }
    a(a) //pemanggilan hanya bisa setelah deklarasi dan bisa digunakan sebagai argument

