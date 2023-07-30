let jmlAngkot = 10
let angkotBeroperasi = 6

for( let noAngkot = 1 ; noAngkot <= jmlAngkot ; noAngkot++ ){
    if( noAngkot <= 6 && noAngkot != 5){
        console.log( 'Angkot No. ' + noAngkot + ' beroperasi dengan baik.' )
    }
    else if( noAngkot === 5 || noAngkot === 9  || noAngkot === 10 ){
        console.log( 'Angkot No. ' + noAngkot + ' sedang lembur.' )
    }
    else{
        console.log( 'Angkot No. ' + noAngkot + ' sedang tidak beroperasi.' )
    }
}