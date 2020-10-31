const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const valuesArr=  Object.values(collection);//this work with arr and onj alike
      valuesArr.forEach(el=> callback(el))
      return collection;
    },

    map: function(collection, callback) {
      const valuesArr=  Object.values(collection);
      const newArr= valuesArr.map(el=> callback(el));
      return newArr;

    },

    reduce: function(collection, callback, acc) {
      let valuesArr=  Object.values(collection);
      if (acc === undefined) {
        acc = valuesArr[0];
        valuesArr = valuesArr.slice(1);
      };
      const newArr= valuesArr.reduce(callback,acc);
      return newArr;
    },

    find: function(collection, predicate){
      const valuesArr=  Object.values(collection);
      const found= valuesArr.find(el =>predicate(el));
      return found;
    },

    filter: function(collection,predicate){
      const valuesArr=  Object.values(collection);
      const found= valuesArr.filter(el =>predicate(el));
      return found;
    },

    size: function(collection){
      const valuesArr=  Object.keys(collection);
      return valuesArr.length;
    },

    first: function (arr, num) {
      if (!num) {
        return arr[0];
      }else {
        const newArr= arr.slice(0,num);
      return newArr;
      }
    },

    last: function (arr, num) {
      const lastIndex= arr.length-1;
      if (!num) {
        return arr[lastIndex];
      }else {
        const newArr= arr.slice(arr.length-num);
      return newArr;
      }
    },

    compact: function (arr) {
      const newArr= arr.filter(el=>{
      if (el){
        return el;
        }
      })
      return newArr;
    },

    sortBy: function (collection, callback) {
      let arr = [...collection];

      return arr.sort( (a, b) => callback(a) - callback(b));
    },

    flatten: function flatten(arr, shallow){
      if(shallow){
        const newArr= arr.flat()
        // console.log(newArr)
        return newArr
      }else{
        let newArr= []
        arr.forEach( el => {
          if(Array.isArray(el)){
            newArr = newArr.concat(...el)
            newArr = flatten(newArr)
            return newArr
          }else{
            newArr.push(el)
          }
          return newArr
        })
        return newArr
      }
    },

    uniq: function(array, isSorted, callback) {
      if(callback){

        const cbArr = []
        const result = []
        for(let el of array){
          let newEl = callback(el)
          if(!cbArr.includes(newEl)){
            cbArr.push(newEl)
            result.push(el)
          }
        }
        return result
      }else if(!isSorted){
        let unique = [...new Set(array)]
        return unique.sort( (a, b) => a-b)
      }else{
        const unique = [...new Set(array)]
        return unique
      }
    },

    keys: function (object) {
      const keys = Object.keys(object)
      return keys
    },

    values: function (object) {
      const values = Object.values(object)
      return values
    },

    functions: function(fi) {
      const arrFunc= []
      for (const [key, value] of Object.entries(fi)) {
       if(typeof value === "function"){
         arrFunc.push(key)
       }
      }
      const sorted= arrFunc.sort()
      return sorted
    }


  }
})()

fi.libraryMethod()
