function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var collection_b = collection_b.join("").split(",");
  var result = [];
  for(var index in collection_a){
    if(collection_b.indexOf(collection_a[index]) !== -1){
      result.push(collection_a[index]);
    }
  }
  return result;
}
