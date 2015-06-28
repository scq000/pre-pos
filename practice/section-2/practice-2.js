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
   var item = char.split("-");
   result_object.push({key: item[0],count:item.length>1 ? Number(item[1]): result[char]});
 }
  return result_object;
}
