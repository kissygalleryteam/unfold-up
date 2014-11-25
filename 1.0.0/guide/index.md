## 综述

UnfoldUp是动效组件库基础动效之一，它展示的是上下展开收起的动画效果。

## 初始化组件

```HTML
	<div id="demo1">
	    <div class="effect-unfold-up close">
	        <div class="effect-unfold-up-content">
	            <p>测试文本</p>
	            <p>测试文本</p>
	            <p>测试文本</p>
	            <p>测试文本</p>
	            <p>测试文本</p>
	            <p>测试文本</p>
	            <p>测试文本</p>
	        </div>
	        <div class="effect-unfold-up-bar">
	            <span class="text">展开</span>
	        </div>
	    </div>
	</div>
```
	
```Javascript	
    S.use('kg/unfold-up/1.0.0/index', function (S, UnfoldUp) {
        var unfoldUp = new UnfoldUp({
            min: 0,
            max: 260,
            closeable: true,
            container: '#demo1 .effect-unfold-up',
            action: '#demo1 .effect-unfold-up-bar'
        });
        unfoldUp.on('close',function(){
            this.get('container').replaceClass('open','close');
            this.get('action').all('span').text('展开');
        });
        unfoldUp.on('open',function(){
            this.get('container').replaceClass('close','open');
            this.get('action').all('span').text('收起');
        });
    })
```

## API说明

**Event**

* close
    收起后触发close事件

* open
    展开后触发open事件