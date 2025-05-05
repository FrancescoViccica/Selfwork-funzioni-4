function palindromo(stringa) {
    
    stringa = stringa.replace(/\W/g,"")

    let reversed = stringa.split('').reverse().join('')

    if (stringa == reversed) {
        return true
    }else {
        return false
    }
}

console.log(palindromo('ciao a tutti'));
console.log(palindromo('i topi non avevano nipoti'));

