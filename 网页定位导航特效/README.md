>[网页定位导航特效](http://www.imooc.com/learn/56) 笔记：

#解决问题流程：
分析 → 设计 → 实现

## 特效分析

实现效果：
- 特效分为左右两部分：
- 左侧为内容，右侧为悬浮的导航菜单
- 左侧内容滚动时，右侧内容不改变位置
- 点击右侧导航链接，左侧可定位到相应栏目左侧滚动到相应的栏目，右侧定位到对应链接

重难点：
1. 左侧栏目和右侧导航菜单的显示样式实现
2. 导航与滚动条之间的定位关联

## 特效设计
技术点：
1. 锚点（anchor）：锚点是网页设计中超链接的一种，又名命名锚记。锚点是一种页面内的超级链接。
2. 关于滚动条定位的事件和方法（借助jQuery）：
    - `scroll([data],fn)`:当用户滚动指定的元素时，会发生scroll事件。
例如：当页面滚动条变化时，执行函数……：`$(window).scroll(function(){/*……*/});`
    - `scrollTop([val])`:获取匹配元素相对滚动条顶部的偏移。
    - `offset()`:获取匹配元素的相对偏移。返回对象包含两个整型属性：top 和 left，以像素计。

## 特效实现

`ul>li*5>a`：
```
<ul>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
</ul>
```

浏览器兼容：
```
/*
 * ie6不支持 position: fixed;
 * ie6 hack
 */

* html,* html body {
    background-image: url(about:blank);
    background-attachment: fixed;
}

* html #menu {
    /*position: fixed;*/
    position: absolute;
    top: expression(((e=document.documentElement.scrollTop)? e:document.body.scrollTop) + 100 + 'px');
}
```

----
课程：[网页定位导航特效](http://www.imooc.com/learn/56)





