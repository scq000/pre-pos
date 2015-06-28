function count_same_elements(collection) {
  //在这里写入代码
  var result_object = [];
  var result = {};
  var temp_object ={};
  for(var index in collection){
    var item =collection[index];
    result[item] = result[item] ? result[item]+1:1;
  }
 for(var char in result){
    result_object.push({key: char,count:result[char]});
 }
  return result_object;
}
