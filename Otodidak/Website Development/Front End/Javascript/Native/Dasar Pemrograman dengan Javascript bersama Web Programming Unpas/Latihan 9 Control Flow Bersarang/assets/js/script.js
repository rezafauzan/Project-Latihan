// Control Flow Bersarang
let string = ''
let char = prompt('Isi dengan 1 symbol apapun')
let baris = prompt('ingin berapa baris?')
let kolom = prompt('ingin berapa kolom?')

for ( let i = 0 ; i < baris ; i++ ) {
    
    for ( let j = 0 ; j < kolom ; j++ ) {
        string += char
    }
    string += '\n'
}

alert(string)

string = ''
for ( let i = 0 ; i <= baris ; i++ ) {
    
    for ( let j = 0 ; j <= i ; j++ ) {
        string += char
    }
    string += '\n'
}

alert(string)

string = ''
for ( let i = baris ; i >= 0 ; i-- ) {
    
    for ( let j = 0 ; j <= i ; j++ ) {
        string += char
    }
    string += '\n'
}

alert(string)

string = ''
for ( let i = baris ; i >= 0 ; i-- ) {
    
    for ( let j = 0 ; j <= i ; j++ ) {
        string += char
    }
    string += '\n'
}

for ( let i = 0 ; i <= baris ; i++ ) {
    
    for ( let j = 0 ; j <= i ; j++ ) {
        string += char
    }
    string += '\n'
}
alert(string)

string = ''
for ( let i = 0 ; i <= baris ; i++ ) {
    
    for ( let j = 0 ; j <= i ; j++ ) {
        string += char
    }
    string += '\n'
}

for ( let i = baris ; i >= 0 ; i-- ) {
    
    for ( let j = 0 ; j <= i ; j++ ) {
        string += char
    }
    string += '\n'
}

alert(string)