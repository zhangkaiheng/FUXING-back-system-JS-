//切换tabs标签
var spans = document.getElementById("new_title").getElementsByTagName("span");
var divs = document.getElementById("new_detail").getElementsByTagName("div");

for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        change(this);
    }
}

function change(obj) {
    for (var i = 0; i < spans.length; i++) {
        if (spans[i] == obj) {
            spans[i].className = "cur";
            divs[i].className = "cur";
        } else {
            spans[i].className = "";
            divs[i].className = "";
        }
    }
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

//高级设置-拖拽
$(function() {
    $("#sortable").sortable({
        containment: '#sortable',
    });
    $("#sortable").disableSelection();
});
//上传图片
var upload_img = document.getElementById('upload_img');
var ul = document.getElementById('sortable');
var lis = document.getElementById('sortable').getElementsByTagName('li');

function addImage() {
    new_input.click();
}

new_input.addEventListener('change', function() {
    if (lis.length >= 6) return;
    var reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    reader.onloadend = function(e) {
        var li = document.createElement('li');
        var span = document.createElement('span');
        span.innerHTML = 'X';
        li.appendChild(span);
        li.style.background = "url('" + e.target.result + "') no-repeat";
        li.style.backgroundSize = "100% 100%";
        ul.appendChild(li);
        span.style.display = 'block';
        span.addEventListener('click', function() {
            this.parentNode.parentNode.removeChild(this.parentNode);
        })
    }
})