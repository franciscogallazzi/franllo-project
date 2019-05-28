const chunkArray = function (myArray, chunk_size){
    let results = [];
    let arr = [...myArray];
    
    while (arr.length) {
        results.push(arr.splice(0, chunk_size));
    }
    
    return results;
}

export default {
    chunkArray
}