function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  collection_b = object_b.value;
  for(var index in collection_a){
    if(collection_b.indexOf(collection_a[index]) !== -1){
      result.push(collection_a[index]);
    }
  }
  return result;
}
