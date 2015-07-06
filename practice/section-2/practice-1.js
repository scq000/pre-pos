function count_same_elements(collection) {
  var result = [];
  var counts = {};
  for (var i = 0; i < collection.length; i++) {
    counts[collection[i]] = (counts[collection[i]] + 1) || 1;
  }
  for (var char in counts) {
    result.push({ key: char, count: counts[char]});
  }
  return result;
}
