// 思路，我们只需要每次把每个要展示图片的 z-index 修改为 10，不展示的设置为 1.就可以实现轮播

// 特殊处理，便于选择 就是定义一个$ 是一个函数 里面有一个参数 s 当调用$s的时候，相当于调用
// document.querySelector(s) 方便选择，调用的是原生的 DOM

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

//点击下面的点，要知道是第几个点，然后改变 a 链接，然后把 a 链接的 z-index 设为 10
//事件代理，绑定到复用器上,
$('.carousel .dots').onclick = function (e) {
    // console.log(this);
    // console.log(e.target);
    // 如果没有点在点上,则什么都不用做
    if (e.target.tagName !== 'SPAN') return;
    // 要知道点的是什么
    let index = Array.from($$('.carousel .dots span')).indexOf(e.target);
    // console.log(index);
    // 改变下标的状态,都去掉 active
    $$('.carousel .dots span').forEach(dot => dot.classList.remove('active'));
    // 把点击到的设置为 active,两步,点小点就有效果了
    $$('.carousel .dots span')[index].classList.add('active');

    //变上面的面板
    $$('.carousel .panels a').forEach(panel => panel.style.zIndex = 1);
    $$('.carousel .panels a')[index].style.zIndex = 10;

};

// 上一页和下一页
$('.pre').onclick = function (e) {
    //看看当前拥有 active 的 span 是当前的第几个
    let index = Array.from($$('.carousel .dots span')).indexOf($('.carousel .dots .active'));
    // 处理 index, $$('.carousel .dots .span').length 为 span 也就是点的个数
    index = (index - 1 + $$('.carousel .dots .span').length) % $$('.carousel .dots .span').length;

}