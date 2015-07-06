function count_same_elements(collection) {
  var result = [];
  var counts = {};
  for (var i = 0; i < collection.length; i++) {
    var item = formatItem(collection[i]);
    counts[item.char] = (counts[item.char] + item.count) || item.count;
  }
  for (var char in counts) {
    result.push({ key: char, count: counts[char] });
  }
  return result;
}

function formatItem(item) {
  if(item.length === 1){
    return { char: item, count: 1 };
  }
  return { char: item[0], count: Number(item.substring(2)) };
}
