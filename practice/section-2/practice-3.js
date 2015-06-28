function count_same_elements(collection) {
  //在这里写入代码
  var result_object = [];
  var result = {};
  var temp_object ={};
  for(var index in collection){
    var item =collection[index].split(/[^(a-z)\d]/);
    if(item.length === 1){
      result[item] = result[item] ? result[item]+1:1;
    }
    else{
      result[item[0]] =  result[item[0]]? result[item[0]] + Number(item[1]): Number(item[1]);
    }
  }
 for(var char in result){
   result_object.push({name: char,summary:result[char]});
 }

  return result_object;
}
