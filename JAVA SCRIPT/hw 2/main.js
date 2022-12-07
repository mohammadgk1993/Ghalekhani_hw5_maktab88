function flatter(arr) {
    if (!Array.isArray(arr)) {
        return 'invalid input'
    }
    if (!arr.some(item => Array.isArray(item))) {
        return arr
    }
    while(arr.some(item => Array.isArray(item))) {
        for (let i of arr) {
            if (Array.isArray(i)) {
                let newArr = i
                arr.splice(arr.indexOf(i),1)
                for (let j of newArr) {
                    arr.push(j)
                }
            }
        }
    }
    return arr
}