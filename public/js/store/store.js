'use strict'

var store = {

    /**
     * 添加数据
     * @param val
     * @returns {*}
     */
    addData:function(val){
        var list = localStorage.getItem('normalList');
        if(!list){
            list = [];
        }else{
            list = JSON.parse(list);
        }
        list.push(val);
        localStorage.setItem('normalList',JSON.stringify(list));
        return list;
    }

};

modoules.exprots = store;