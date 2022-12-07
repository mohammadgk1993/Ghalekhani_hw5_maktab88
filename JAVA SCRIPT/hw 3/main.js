function separator(n) {
    if (({}).toString.call(n) != '[object Number]') {
        return 'invalid input'
    }
    if (n.toFixed() != n) {
        return 'invalid input'
    }
    if (String(n).length < 4) {
        return n
    }
    let separated = [String(n)[0]]
    for (let i = 1 ; i < String(n).length ; i += 3) {
        separated.push(',' + String(n).slice(i,i+3))
    }
    return separated.join('')
}