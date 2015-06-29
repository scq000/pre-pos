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
        var item = format_str(array[i]);
        temp[item[0]] = temp[item[0]] ? temp[item[0]] + item[1] : item[1];
    }
    for (var char in temp) {
        result.push({
            key: char,
            count: temp[char]
        });
    }
    return result;
}

function format_str(str) {
    var count_array = [];
    if (str.length === 1) {
        return count_array = [str, 1];
    }
    count_array[0] = str[0];
    count_array[1] = str[2];
    if (str[1] === '[') {
        for (var i = 3; i < str.length - 1; i++) {
            count_array[1] += str[i];
        }
    } else {
        for (var i = 3; i < str.length; i++) {
            item[1] += str[i];
        }
    }
    count_array[1] = Number(count_array[1]);
    return count_array;
}
