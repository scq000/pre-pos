function collect_same_elements(collection_a, object_b) {
  var arrayA = [];
  collection_a.forEach(function(item) {
    arrayA.push(item.key);
  });
  var result = arrayA.filter(function(item) {
    return object_b.value.indexOf(item) != -1;
  });
  return result;
}
