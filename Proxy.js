// // 1.target:要拦截的对象;handler:拦截对象后进行的操作
// let target ={
//     name:'hah',
//     age:13
// }
// let handler={
//     get:(target,name)=>{
//         return "success"
//     }
// }
// let pro= new Proxy(target,handler);

// console.log(pro.name);

// 2.当handler没有相应的操作时,直接执行要被拦截的target对象
// let target={
//     name:'hahaha',
//     age:12
// }
// let handler={};
// let pro = new Proxy(target,handler);
// console.log(pro.name);
// console.log(pro.age);

// // Proxy作为其他对象的原型对象使用
// let target={
//     name:'hhh',
//     age:11
// }
// let handler={
//     get(target,name){
//         return "success"
//     }
// }
// let pro =new Proxy(target,handler);
// let a=Object.create(pro);
// console.log(a.name);

// // get(target,name,property)方法--用于拦截某个读取原型的操作
let target={
    grade:'kkk',
    age:22
}
let handler={
    get:function(target,name,property){
        if(name in target){
            console.log('success');
        }else{
            console.log("error")
        }
        return Reflect.get(target,name,property);
    }
}
let pro =new Proxy(target,handler);
pro.grade;
pro.age;

// // set(target,name,value,property)方法--用于拦截某个属性的赋值操作
// let target={
//     sex:'女',
//     age:22
// }
// let handler={
//     set:function(target,name,value,property){
//         if(typeof value !='string'){
//             console.log("error");
//         }else{
//             console.log("success");
//             return Reflect.set(target,name,value,property);
//         }
//     }
// }
// let pro =new Proxy(target,handler);
// pro.sex="男";
// pro.age=2;

// // has(target,key)方法--用于拦截对象是否具有某个属性值的操作
// let target={
//     name:'aa',
//     age:11
// }
// let handler={
//     has:function(target,key){
//         if(key[0]!='n'){
//             return false
//         }
//         return true
//     }
// }
// let pro = new Proxy(target,handler);
// console.log("name" in pro);
// console.log("age" in pro);