function strArray(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof(item) != 'string')) {
        return 'invalid input'
    }
    let newArr = []
    for (let i = 0 ; i < arr[0].split('-').length ; i++) {
        let subArr = []
        for (let j = 0 ; j < arr.length ; j++) {
            subArr.push(arr[j].split('-')[i])
        }
        newArr.push(Array.from(new Set(subArr)))
    }
    return newArr
}