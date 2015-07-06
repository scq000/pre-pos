function create_updated_collection(collection_a, object_b) {
  var collection_c = mergeSameItem(collection_a);
  for (var i = 0; i < collection_c.length; i++) {
    if (object_b.value.indexOf(collection_c[i].key) != -1) {
      collection_c[i].count -= Math.floor(collection_c[i].count / 3);
    }
  }
  return collection_c;
}

function mergeSameItem(collection) {
  var result = [];
  var counts = {};
  for (var i = 0; i < collection.length; i++) {
    counts[collection[i]] = (counts[collection[i]] + 1) || 1;
  }
  for (var char in counts) {
    result.push({ key: char, count: counts[char] });
  }
  return result;
}
