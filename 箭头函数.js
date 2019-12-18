let single=a=>a
console.log(single('hello world'));

let log = ()=>{
    console.log('hello china');
}
log();

let add=(a,b)=>a+b;
console.log(add(3,9));

let add2 = (a,b) =>{
    if(typeof a =='number' && typeof b== 'number'){
        return a+b;
    }else{
        return 0;
    }
}
console.log(add2(1,1));

var getHash = arr =>{
    return({
        name:'aa',
        age:11
    })
}
console.log(getHash());

let arr= [1,9,2,8,4,6,0].sort((a,b)=>{
    if(a-b>0){
        return 1
    }else{
        return -1;
    }
})
console.log(arr);
