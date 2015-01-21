/*
Tue Nov 25 2014 08:42:29 GMT+0800 (CST)
combined files by KMD:

index.js
*/

KISSY.add('kg/unfold-up/1.0.0/index',["node","base"],function(S ,require, exports, module) {
var $ = require('node').all;
var Base = require('base');

var UnfoldUp = Base.extend({
    initializer:function(){
        var height = this.get('closeable') ? this.get('min') : this.get('max');
        this.get('container').css({
            "overflow": "hidden",
            "height": height
        });
        this._bind();
    },
    _bind:function(){
        var self = this;
        var close = this.get('closeable');
        this.get('action').on('click',function(){
            var height = close ? self.get('max') : self.get('min');
            self._animate(height);
            close = !close;
        });
    },
    _animate:function(height){
        var self = this;
        this.get('container').animate({
            height: height
        },0.4,undefined,function(){
            var eventName = height == self.get('min') ? 'close' : 'open';
            self.fire(eventName);
        });
    }
},{
    ATTRS:{
        min: 0,
        max: 300,
        closeable: true,
        action:{
            value:'',
            getter:function(v){
                return $(v);
            }
        },
        container:{
            value:'',
            getter:function(v){
                return $(v);
            }
        }
    }
});

module.exports = UnfoldUp;




});