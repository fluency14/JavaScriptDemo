function* foo(){
    yield "a";
    yield "b";
}
function* gen(x,y){
      yield 1;
      yield 2;
      yield* foo();
      yield 3;
}
var g = gen();
console.log(g.next());//{value: 1, done: false}
console.log(g.next());//{value: 2, done: false}
console.log(g.next());//{value: "a", done: true}
console.log(g.next());//{value: "b", done: true}
console.log(g.next());//{value: "3", done: true}


//大厨的活
   function* chef(){
          console.log("fired chicken");//炒鸡
          yield "worker";//交由伙计处理
          console.log("sdd ingredients");//上料
          yield "worker";//交由伙计处理
   }
   //伙计的活
   function* worker(){
       console.log("prepare chicken");//准备工作
       yield "chef";//交由大厨处理
       console.log("stewed chicken");
       yield "chef";//交由大厨处理
       console.log("serve chicken");//上菜
   }
   var ch = chef();
   var wo = worker();
   //流程控制
   function run(gen){
       var v = gen.next();
       if(v.value =="chef"){
          run(ch);
       }else if(v.value =="worker"){
       	  run(wo);
       }
   }
   run(wo);//开始执行
           
