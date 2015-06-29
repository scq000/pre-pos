function create_updated_collection(collection_a, object_b) {
    //在这里写入代码
    var array_b = object_b.value;
    var collection_c = merge_same_item(collection_a);
    for (var i = 0; i < collection_c.length; i++) {
        for (var j = 0; j < array_b.length; j++) {
            if (collection_c[i].key === array_b[j]) {
                collection_c[i].count -= Math.floor(collection_c[i].count / 3);
            }
        }
    }
    return collection_c;
}

function merge_same_item(array) {
    var temp = []; // ["a": 1, "b": 2]
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        temp[item] = temp[item] ? temp[item] + 1 : 1;
    }
    for (var char in temp) {
        result.push({
            key: char,
            count: temp[char]
        });
    }
    return result;
}
