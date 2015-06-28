function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var array_b = object_b.value;
  for(var index in collection_a){
    if(array_b.indexOf(collection_a[index].key) !== -1){
      collection_a[index].count -= 1;
    }
  }
  return collection_a;
}
