function collect_same_elements(collection_a, collection_b) {
  var arrayB = collection_b.toString().split(',');
  var result = collection_a.filter(function(item) {
    return arrayB.indexOf(item) != -1;
  });
  return result;
}
