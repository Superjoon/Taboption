$(function (){
/*
    $('#appSwitch li').each(function (index){
        /!*each 遍历所有的li标签 function中的index在为每个匹配元素执行一个函数*!/

        $(this).mouseover(function (){
            // this == appSwitch li 鼠标移动到这个元素的时候执行函数内容.

            $('div.opContent').removeClass('opContent');
            // 函数内容:找到content 并且删除这个样式类

            $('#appSwitch li.option').removeClass('option');
            // 函数内容:找到li的option并删除这个样式类.

            $('div.contentFirst').eq(index).addClass('opContent');
            // 函数内容:为没有执行删除类样式的元素添加上一级元素删除的类样式;

            $(this).addClass('option');
        });
    });
*/

    $('.appSwitch li').each(function (index){
        var liNode = $(this);
       $(this).mouseover(function (){
           timeoutId=setTimeout(function (){
               $('.opContent').removeClass('opContent');
               $('.appSwitch li.option').removeClass('option');

               $('.contentFirst').eq(index).addClass('opContent');
               liNode.addClass('option');
           },100)

       }).mouseout(function (){
           clearTimeout(timeoutId)
       });
    });

    $('.contentSecond').load('Mytab-1.html');
    // load 加载页面文件

    $('.tabSecond li').each(function (index){
        var liTab = $(this);
        liTab.click(function (){
            $('.tabSecond li.option').removeClass('option');
            liTab.addClass('option');

            if (index == 0){
                $('.contentSecond').load('Mytab-1.html');
            }else if (index == 1){
                $('.contentSecond').load('Mytab-2.html');
            }else if (index == 2){
                $('.contentSecond').load('Mytab-3.html');
            };
        });
    });
































});