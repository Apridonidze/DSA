const map = new Map([['a', 1],['b',2]]);

map.set('c',3);//Add new object to Map
map.delete('c');//Delete x value from Map
console.log(map.has('a'));//Check if Map has x value
console.log(map.size);//Check Map's size
map.clear();//Delete all objects from map

for(const [key,value] of map){
    console.log(`${key}: ${value}`);
};