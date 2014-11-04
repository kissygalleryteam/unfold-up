/*
Tue Nov 04 2014 13:27:34 GMT+0800 (CST)
combined files by KMD:

index.js
*/

KISSY.add('kg/unfold-up/1.0.0/index',["node","base"],function(S ,require, exports, module) {
var $ = require('node').all;
var Base = require('base');

var UnfoldUp = Base.extend({
    initializer:function(){
        var self = this;
        var $target = self.get('$target');
    }
},{
    ATTRS:{
        $target:{
            value:'',
            getter:function(v){
                return $(v);
            }
        }
    }
});

module.exports = UnfoldUp;




});