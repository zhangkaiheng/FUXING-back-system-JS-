//切换tabs标签
var spans = document.getElementById("new_title").getElementsByTagName("span");
var divs = document.getElementById("new_detail").getElementsByTagName("div");
for (let i = 0; i <= spans.length - 1; i++) {
    spans[i].index = i;
    spans[i].onclick = function() {
        for (var i = 0; i <= spans.length - 1; i++) {
            spans[i].className = "";
            divs[i].className = "";

        }
        this.className = "current";
        divs[this.index].className = "current";
    };
}
//切换title背景图状态
for (let i = 0; i < spans.length; i++) {
    spans[i].addEventListener('click', function() {
        this.style.backgroundImage = "url('icons/mouse_click_" + i + ".png')"
        this.style.backgroundSize = "100% 100%";
        this.style.color = 'white';
        this.childNodes[1].style.backgroundImage = "url('icons/blank_" + i + ".png')";
    })
}
//高级设置里本地上传拖拽
var new_span = document.getElementById('new_span');
var new_a = document.getElementById('new_a');
console.log(new_a);

var new_input = document.getElementById('new_input');
var as = document.getElementById('new_photo').getElementsByTagName('a');
var inputs = document.getElementById('new_photo').getElementsByTagName('input');
var spans = document.getElementById('new_photo').getElementsByTagName('span');
var lis = document.getElementById('new_photo').getElementsByTagName('li');
var ul = document.getElementById('new_photo').getElementsByTagName('ul');
//触发本地上传
for (let i = 0; i < as.length; i++) {
    as[i].addEventListener('click', function() {
        if (as.length < 1) return;
        inputs[i].click();
    })
}
// function addImage() {
//     new_input.click();
// }
new_input.addEventListener('change', function() {
    var reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    reader.onloadend = function(e) {
        // console.log(e.target.result);
        for (let i = 0; i < as.length; i++) {
            as[i].style.background = "url('" + e.target.result + "') no-repeat";
            as[i].style.backgroundSize = "100% 100%";
            as[i].firstChild.nodeValue = '';
            // as[i].parentNode.removeChild(as[i]);
            as[i].setAttribute('id', '');
            as[i].parentNode.removeChild(inputs[i]);
            //删除图片
            spans[i].style.display = 'block';
            spans[i].addEventListener('click', function() {
                this.parentNode.parentNode.parentNode.removeChild(this);
            }, false)
        }
        //增加上传标签
        var new_li = document.createElement('li');
        var new_a = document.createElement('a');
        var new_input = document.createElement('input');
        var new_span = document.createElement('span');
        new_li.appendChild(new_a);
        new_li.appendChild(new_input);
        new_a.appendChild(new_span);
        //设置a标签属性
        new_a.setAttribute('href', 'javascript:void(0)');
        // 设置input属性
        new_input.setAttribute('type', 'file');
        new_input.style.display = 'none';
        new_input.setAttribute('id', 'new_input');
        ul[0].appendChild(new_li);
        //设置span文本
        new_span.innerHTML = 'X';
        new_span.setAttribute('id', 'new_span');
        new_a.innerHTML = '上传图片';
        new_a.setAttribute('id', 'new_a');
        new_a.onclick = function() {
            new_input.click();
        }
    }
})