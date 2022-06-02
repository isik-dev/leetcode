function hammingWeight(n) {
    var unsigned = n.toString();
    var res;
    for (var i = 0; i < unsigned.length; i++) {
        if (n === 1) {
            res = res + 1;
        }
    }
    return res;
}
hammingWeight(189024912400000000000);
