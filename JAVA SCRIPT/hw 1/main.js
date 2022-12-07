function arrDepth(arr) {
    if (!Array.isArray(arr)) {
        return 'invalid input'
    }
    if (!arr.some(item => Array.isArray(item))) {
        return 0
    }
    let flated = arr
    let depth = 0
    while (flated.some(item => Array.isArray(item))) {
        flated = flated.flat()
        depth += 1
    }
    return depth
}