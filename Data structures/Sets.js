const set = new Set([1,2,3]);
set.add(4);//Add Information
set.add(4);//It will be ignored
console.log(set.has(4));//Search if set has some Value
set.delete(3);
console.log(set.size);//check set size
set.clear();//Delete all the values in set
for(const item of set){
    console.log(item);
};