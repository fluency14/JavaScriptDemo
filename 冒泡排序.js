//思路：先比较一轮一次，然后用for循环比较一轮多次，然后再加for循环比较多轮多次
    //从大到小排序
    var array=[10,20,9,8,79,65,100];
    //比较轮数
    function a(){
        for ( var i=0;i<array.length-1;i++){
            // console.log(array[i])
            // 每轮比较次数，次数=长度-1-此时的轮数
            for (var j=0;j<array.length-1-i;j++) {
                if (array[j] > array[j + 1]) {
                    var temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                } //end if
                console.log(j);
            }//end for 次数
            // console.log(i);
        } //end for 轮数
        return array;
    }

   a();
    console.log(array)
