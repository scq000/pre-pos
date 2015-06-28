function collect_same_elements(collection_a, collection_b) {
    //在这里写入代码
    var result = [];
    for (var i = 0; i < collection_a.length; i++) {
        for (var j = 0; j < collection_b.length; j++) {
            for (var k = 0; k < collection_b[j].length; k++) {
                if (collection_a[i] === collection_b[j][k]) {
                    result.push(collection_b[j][k]);
                }
            }
        }
    }
    return result;
}
