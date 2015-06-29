function count_same_elements(collection) {
    //在这里写入代码
    var result = [];
    var temp = {};
    for (var i = 0; i < collection.length; i++) {
        var item = format_str(collection[i]);
        temp[item[0]] = temp[item[0]] ? temp[item[0]] + item[1] : item[1];
    }
    for (var char in temp) {
        result.push({
            name: char,
            summary: temp[char]
        });
    }
    return result;
}
// update the function to support '"[]",":","-" as separator
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
