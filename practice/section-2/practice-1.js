function count_same_elements(collection) {
    //在这里写入代码
    var result = [];
    var temp = {};  // like {'a':2,'b':3,'c':1}
    for (var i = 0; i < collection.length; i++) {
        var item = collection[i];
        temp[item[0]] = temp[item] ? temp[item] + 1 : 1;
    }
    for (var char in temp) {
        result.push({
            key: char,
            count: temp[char]
        });
    }
    return result;
}
