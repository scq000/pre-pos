function create_updated_collection(collection_a, object_b) {
    //在这里写入代码
    var array_b = object_b.value;
    for (var i = 0; i < collection_a.length; i++) {
        for (var j = 0; j < array_b.length; j++) {
            if (collection_a[i].key === array_b[j]) {
                collection_a[i].count -= 1;
            }
        }
    }
    return collection_a;
}
