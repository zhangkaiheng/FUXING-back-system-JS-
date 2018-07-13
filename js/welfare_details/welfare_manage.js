// 高级设置js
var spans = document.getElementById("new_title").getElementsByTagName("span");
var divs = document.getElementById("new_detail").getElementsByTagName("div");

for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function () {
    manage_change(this);
  }
}

function manage_change(obj) {
  for (var i = 0; i < spans.length; i++) {
    if (spans[i] == obj) {
      $("#new_title span").eq(i).addClass('current');
      $("#new_detail div").eq(i).addClass('current');
    } else {
      $("#new_title span").eq(i).removeClass('current');
      $("#new_detail div").eq(i).removeClass('current');
    }
  }
}
//切换title背景图状态
for (let i = 0; i < spans.length; i++) {
  spans[i].addEventListener('click', function () {
    this.style.backgroundImage = "url('icons/mouse_click_" + i + ".png')"
    this.style.backgroundSize = "100% 100%";
    this.style.color = 'white';
    this.childNodes[0].style.backgroundImage = "url('icons/blank_" + i + ".png')";
  })
}
$(function () {
  $("#sortable").sortable({
    containment: '#sortable',
    cancel: '#four'
  });
  $("#four").disableSelection();
});
//上传图片
var upload_img = document.getElementById('upload_img');
var ul = document.getElementById('sortable');
var lis = document.getElementById('sortable').getElementsByTagName('li');
var last_li = document.getElementById('last_li');

function addImage() {
  new_input.click();
}

new_input.addEventListener('change', function () {
  if (lis.length >= 7) return;
  var reader = new FileReader();
  reader.readAsDataURL(this.files[0]);
  reader.onloadend = function (e) {
    var li = document.createElement('li');
    var span = document.createElement('span');
    span.innerHTML = 'X';
    li.appendChild(span);
    li.style.background = "url('" + e.target.result + "') no-repeat";
    li.style.backgroundSize = "100% 100%";
    ul.insertBefore(li, last_li);
    // span.style.display = 'block';
    span.addEventListener('click', function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    })
  }
})
//福利详情js
var details_buttons = document.getElementById("details_title").getElementsByTagName("button");
var details_divs = document.getElementById("details_content").getElementsByTagName("div");

for (var i = 0; i < details_buttons.length; i++) {
  details_buttons[i].onclick = function () {
    details_change(this);
  }
}

function details_change(obj) {
  for (var i = 0; i < details_buttons.length; i++) {
    if (details_buttons[i] == obj) {
      $("#details_title button").eq(i).addClass('current');
      $("#details_content div").eq(i).addClass('current');
    } else {
      $("#details_title button").eq(i).removeClass('current');
      $("#details_content div").eq(i).removeClass('current');
    }
  }
}
var phone_i = 0;
var details_ul = document.getElementById('details_ul');
var new_phone = document.getElementById('new_phone');

function add_text(num) {
  phone_i++;
  var input_id = 'input_' + phone_i;
  var p_id = 'p_' + phone_i;
  var details_li = document.createElement('li');
  var details_span = document.createElement('span');
  var details_input = document.createElement('input');
  var details_p = document.createElement('p');

  if (num === 1) {
    details_li.innerHTML = '<input tpye="text" onkeyup="change_text(value)" id="' + input_id + '"/>'

    details_ul.appendChild(details_li);
    details_p.setAttribute('id', p_id);
    new_phone.appendChild(details_p);
    details_p.style.border = '2px dotted #f86f4d';
    details_p.style.height = '20px';
  } else if (num === 2) {
    var details_img = document.createElement('img');
    details_li.innerHTML = '<img src="" alt="">'
  }
  details_li.appendChild(details_span);
  details_span.innerHTML = 'X';
  details_input.style.marginBottom = '10px';
  details_span.addEventListener('click', function () {
    this.parentNode.parentNode.removeChild(this.parentNode);
  })
}
// var details_ps = document.getElementById('new_phone').getElementsByClassName('p');
// var details_inputs = document.getElementById('details_ul').getElementsByClassName('input');
// for (let i = 1; i < details_inputs.length; i ++ ) {
//   var details_input = document.getElementById('input_' + i);
//   var details_p = document.getElementById('p_' + i);
// }
var data = {};
Object.defineProperty(data, "test", {
  set: function (newVal) {
    document.getElementById("p_" + phone_i).innerHTML = newVal;
  }
})
function change_text(e) {
  data.test = e;
}
// 自定义样式
var custom_button = document.getElementById("custom_button").getElementsByTagName("button");

var custom_div = document.getElementById("custom_div").getElementsByTagName("div");

for (var i = 0; i < custom_button.length; i++) {
  custom_button[i].onclick = function () {
    custom_change(this);
  }
}

function custom_change(obj) {
  for (var i = 0; i < custom_button.length; i++) {
    if (custom_button[i] == obj) {
      $("#custom_button button").eq(i).addClass('current');
      $("#custom_div div").eq(i).addClass('current');
    } else {
      $("#custom_button span").eq(i).removeClass('current');
      $("#custom_div div").eq(i).removeClass('current');
    }
  }
}