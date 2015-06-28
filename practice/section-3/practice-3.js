function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var array_b = object_b.value;
  var collection_c = [];
  var result_array = []; // ["a": 1, "b": 2]

  for(var index in collection_a){
    var item = collection_a[index];
    result_array[item] = result_array[item]? result_array[item] + 1 : 1;
  }
  for(var char in result_array){
    collection_c.push({key: char,count:result_array[char]});
  }
  for(var index in collection_c){
    if(array_b.indexOf(collection_c[index].key) !== -1){
      collection_c[index].count  -= Math.floor(collection_c[index].count / 3)  ;
    }
  }
  return collection_c;
}
