const obj = {
    name: 'gio',
    age: 16,
    'key-three': true,
    sayMyName: function(){
        console.log(this.name);
    }
};
obj.hobby = 'gym'; //add information 
delete obj.hobby; //delete information

console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj['key-three']);
console.log(obj);

// Object.keys() .values() .entries()


//Big-O time complexity
//Instert - O(1)
//Remove - O(1)
//Access - O(1)
//Search - O(n)
//Object.keys() - O(n)
//Object.entries() - O(n)