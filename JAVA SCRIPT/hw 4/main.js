function searchInsensitive(str1,str2) {
    if (typeof(str1) != 'string' || typeof(str2) != 'string')  {
        return 'invalid input'
    }
    return (new RegExp(str2,'i')).test(str1)
}