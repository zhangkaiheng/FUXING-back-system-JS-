// 高级设置js
var spans = document.getElementById("new_title").getElementsByTagName("span");
var articles = document.getElementById("new_detail").getElementsByTagName("article");

for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function () {
    manage_change(this);
  }
}

function manage_change(obj) {
  for (var i = 0; i < spans.length; i++) {
    if (spans[i] == obj) {
      $("#new_title span").eq(i).addClass('current');
      $("#new_detail article").eq(i).addClass('current');
    } else {
      $("#new_title span").eq(i).removeClass('current');
      $("#new_detail article").eq(i).removeClass('current');
    }
  }
}
//切换title背景图状态
for (let i = 0; i < spans.length; i++) {
  spans[i].addEventListener('click', function () {
    this.style.backgroundImage = "url('icons/mouse_click_" + i + ".png')"
    this.style.backgroundSize = "100% 100%";
    this.style.color = 'white';
    this.childNodes[1].style.backgroundImage = "url('icons/blank_" + i + ".png')";
  })
}
window.onload = function () {
  spans[0].click();
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
//福利详情
// 默认样式
// 切换文本和图片
var default_title = document.getElementById('default_title').getElementsByTagName('button');
var default_content = document.getElementById('default_content').getElementsByTagName('section');

for (var i = 0; i < default_title.length; i++) {
  default_title[i].onclick = function () {
    default_change(this);
  }
}

function default_change(obj) {
  for (var i = 0; i < default_title.length; i++) {
    if (default_title[i] == obj) {
      $("#default_title button").eq(i).addClass('current');
      $("#default_content section").eq(i).addClass('current');
    } else {
      $("#default_title button").eq(i).removeClass('current');
      $("#default_content section").eq(i).removeClass('current');
    }
  }
}

// 添加图片
var default_input = document.getElementById('default_input');
var phone_content = document.getElementById('phone_content');
function default_add_img() {
  default_input.click();
}
var default_img_id = 0;
default_input.addEventListener('change', function () {
  var reader = new FileReader();
  reader.readAsDataURL(this.files[0]);
  reader.onloadend = function (e) {
    var new_img = document.createElement('img');
    var new_div = document.createElement('div');
    var new_i = document.createElement('i');
    // var details_li = document.createElement('li');

    new_img.src = e.target.result;
    new_img.style.width = '320px';
    new_img.id = 'img_' + random_id();
    new_i.style.backgroundColor = '#cccccc';
    new_div.style.position = 'relative';
    new_i.innerHTML = ' X ';
    new_div.appendChild(new_img);
    new_div.appendChild(new_i);
    phone_content.appendChild(new_div);
    $('#default_img')[0].src = e.target.result;
    new_i.addEventListener('click', function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    })
    // details_ul.appendChild(details_li);
    setTimeout(() => {
      $('#phone_content').sortable();
      $('#phone_content>div').on('click', function () {
        $('#default_img')[0].src = $(this).children('img')[0].src;
        default_img_id = $(this).children('img').attr('id');
        // console.log(default_img_id);
      })
    }, 1);
  }
})
// 默认样式更换图片
$('#default_change_img').on('click', function () {
  $('#default_change_input').click();
})
$('#default_change_input').on('change', function () {
  var reader = new FileReader();
  reader.readAsDataURL(this.files[0]);
  reader.onloadend = function (e) {
    var new_img = document.createElement('img');
    var src = e.target.result;
    $('#' + default_img_id).attr('src', src);
    $('#default_img').attr('src', src);
  }
})
// 添加文本
$('#default_button_text').on('click', default_add_text);
function default_add_text() {
  var phone_content_children = document.getElementById('phone_content_children');
  var details_ul = document.getElementById('details_ul');
  var details_li = document.createElement('li');
  var new_i = document.createElement('i');
  var new_div = document.createElement('div');
  new_i.style.backgroundColor = '#cccccc';
  new_i.style.top = '-5px';
  new_i.style.right = '-5px';
  new_div.style.height = '30px';
  new_div.style.lineHeight = '30px';
  new_div.style.border = '2px dotted #f86f4d';
  // new_input.style.display ='block';
  // new_input.style.width ='100%';
  // new_input.style.height ='25px';
  // new_input.style.border ='0px';
  new_input.style.outline = 'none';
  // new_div.style.marginBottom = '5px';
  new_div.style.position = 'relative';
  // new_p.style.resize = 'none';
  new_i.innerHTML = ' X ';
  // new_div.appendChild(new_input);
  current_defaultID = random_id();
  new_div.innerHTML = '<input tyle="text" onkeyup="change_text1(value, id)" style="display: block;width: 100%;height: 25px;border: 0px;outline: none;" id="phoneInput_' + current_defaultID + '"/>'
  new_div.appendChild(new_i);
  // new_input.id = 'phoneInput_' + current_defaultID;
  phone_content_children.appendChild(new_div);
  details_li.innerHTML = '<input style="margin-bottom: 10px" tpye="text" onkeyup="change_text(value, id)" id="ulInput_' + current_defaultID + '"/>';

  new_i.addEventListener('click', function () {
    this.parentNode.parentNode.removeChild(this.parentNode);

    var ul_inputs = document.getElementById('details_ul').getElementsByTagName('input');

    for (var i = 0; i < ul_inputs.length; i++) {
      if ($(this).prev()[0].id.slice(11) === ul_inputs[i].id.slice(8)) {
        ul_inputs[i].parentNode.parentNode.removeChild(ul_inputs[i].parentNode);
      }
    }
  })
  details_ul.appendChild(details_li);
  setTimeout(() => {
    $('#phone_content_children').sortable();
  }, 1);
}
//增加内容绑定
function change_text1() {
  var phone_inputs = document.getElementById('phone_content_children').getElementsByTagName('input');
  var ul_inputs = document.getElementById('details_ul').getElementsByTagName('input');

  for (var i = 0; i < phone_inputs.length; i++) {

    if (phone_inputs[i].id.slice(11) == ul_inputs[i].id.slice(8)) {
      ul_inputs[i].value = phone_inputs[i].value;
    }
  }

}
function change_text() {
  console.log(2);

  var phone_inputs = document.getElementById('phone_content_children').getElementsByTagName('input');
  var ul_inputs = document.getElementById('details_ul').getElementsByTagName('input');

  for (var i = 0; i < ul_inputs.length; i++) {

    if (phone_inputs[i].id.slice(11) == ul_inputs[i].id.slice(8)) {
      phone_inputs[i].value = ul_inputs[i].value;
    }
  }
}
// 切换样式
var details_buttons = document.getElementById("details_title").getElementsByTagName("button");
var details_divs = document.getElementById("details_content").getElementsByTagName("div");

for (var i = 0; i < details_buttons.length; i++) {
  details_buttons[i].onclick = function () {
    details_change(this);
    // 清除当前页手机内容
    // delete_phone();
    (function delete_phone() {
      phone_content.innerHTML = '';
    }())
  }
};

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
$("#details_title button").eq(1).click(function () {
  $('#custom_text_div').attr('class', 'current');
})
// var phone_i = 0;
// var details_ul = document.getElementById('details_ul');
// var new_phone = document.getElementById('new_phone');

// function add_text(num) {
//   phone_i++;
//   var input_id = 'input_' + phone_i;
//   var p_id = 'p_' + phone_i;
//   var details_li = document.createElement('li');
//   var details_span = document.createElement('span');
//   var details_input = document.createElement('input');
//   var details_p = document.createElement('p');

//   if (num === 1) {
//     details_li.innerHTML = '<input tpye="text" onkeyup="change_text(value)" id="' + input_id + '"/>'

//     details_ul.appendChild(details_li);
//     details_p.setAttribute('id', p_id);
//     new_phone.appendChild(details_p);
//     details_p.style.border = '2px dotted #f86f4d';
//     details_p.style.height = '20px';
//     details_p.style.marginLeft = "27%";
//   } else if (num === 2) {
//     var details_img = document.createElement('img');
//     details_li.innerHTML = '<img src="" alt="">'
//   }
//   details_li.appendChild(details_span);
//   details_span.innerHTML = 'X';
//   details_input.style.marginBottom = '10px';
//   details_span.addEventListener('click', function () {
//     this.parentNode.parentNode.removeChild(this.parentNode);
//   })
// }
// // var details_ps = document.getElementById('new_phone').getElementsByClassName('p');
// // var details_inputs = document.getElementById('details_ul').getElementsByClassName('input');
// // for (let i = 1; i < details_inputs.length; i ++ ) {
// //   var details_input = document.getElementById('input_' + i);
// //   var details_p = document.getElementById('p_' + i);
// // }
// var data = {};
// Object.defineProperty(data, "test", {
//   set: function (newVal) {
//     document.getElementById("p_" + phone_i).innerHTML = newVal;
//   }
// })
// function change_text(e) {
//   data.test = e;
// }

// 自定义样式
var custom_button = document.getElementById("custom_button").getElementsByTagName("button");
var custom_div = document.getElementById("custom_div").getElementsByTagName("div");

for (let j = 0; j < custom_button.length; j++) {
  custom_button[j].onclick = function () {
    custom_change(this);
  }
}

function custom_change(obj) {
  for (let j = 0; j < custom_button.length; j++) {
    if (custom_button[j] == obj) {
      $("#custom_button button").eq(j).addClass('current');
      $("#custom_div div").eq(j).addClass('current');
    } else {
      $("#custom_button button").eq(j).removeClass('current');
      $("#custom_div div").eq(j).removeClass('current');
    }
  }
}

$('#custom_button').on('click', 'button', function () {
  var index = $(this).index();
  if (index === 1) {
    var new_textarea = document.createElement('textarea');
    var new_div = document.createElement('div');
    var new_i = document.createElement('i');
    new_div.style.width = 'auto';
    new_div.style.border = '2px dotted #F86F4D';
    new_div.style.position = 'relative';
    new_div.style.cssFloat = 'left';
    new_div.setAttribute('class', 'ui-widget-content');
    // new_div.style.width = new_textarea.width + '10' + 'px';
    new_i.innerHTML = ' X ';
    new_i.style.backgroundColor = '#999999';
    new_div.appendChild(new_textarea);
    new_div.appendChild(new_i);
    // new_div.style.border = '2px dotted #f86f4d';
    new_textarea.style.height = '30px';
    new_textarea.style.marginBottom = '0px';
    new_textarea.style.maxWidth = '320px';
    phone_content.appendChild(new_div);
    new_i.addEventListener('click', function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    })
    setTimeout(() => {
      $('#phone_content>div').draggable({
        containment: 'parent',
        // scroll: true
      });

    }, 1);
  } else if (index === 4) {
    $('#custom_bg_img').next().click(function () {
      $('#custom_bg_input').click();
    });
    $('#custom_bg_input').on('change', function () {
      var reader = new FileReader();
      reader.readAsDataURL(this.files[0]);
      reader.onloadend = function (e) {
        phone_content.style.background = "url(" + e.target.result + ") no-repeat";
        phone_content.style.backgroundSize = 'cover';
      }
    })
  } else if (index === 5) {
    var phone_span = document.createElement('span');
    phone_span.innerHTML = '我是按钮';
    phone_span.style.display = 'block';
    phone_span.style.width = '120px';
    phone_span.style.height = '40px';
    phone_span.style.textAlign = 'center';
    phone_span.style.lineHeight = '40px';
    phone_span.style.backgroundColor = '#cccccc';
    phone_span.style.position = 'relative';

    phone_span.id = 'btn_' + random_id();
    phone_content.appendChild(phone_span);

    var new_i = document.createElement('i');
    new_i.innerHTML = ' X ';
    new_i.style.backgroundColor = '#999999';
    phone_span.appendChild(new_i);
    new_i.addEventListener('click', function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    })
    setTimeout(() => {
      $('#phone_content>span').draggable();
      $('#phone_content>span').resizable();
      $('#phone_content>span').on('click', function () {
        current_btn_ID = $(this)[0].id;
        $('#btn_input')[0].value = $(this)[0].firstChild.nodeValue;
      })
    }, 1);
  }
})
// 更换按钮内容
$('#btn_input').on('change', function () {
  $('#' + current_btn_ID)[0].innerHTML = this.value;
  $('#btn_input')[0].value = '';
})
// 更换按钮颜色
function change_btn_color(e) {
  $('#' + current_btn_ID).css('backgroundColor', e);
}
// 自定义样式-文本-input
var custom_text_input = document.getElementById("custom_text_input").getElementsByTagName("input");
var custom_text_p = document.getElementById("custom_text_p").getElementsByTagName('p');

for (let j = 0; j < custom_text_input.length; j++) {
  custom_text_input[j].onclick = function () {
    custom_text_change(this);
  }
}
function custom_text_change(obj) {
  for (let j = 0; j < custom_text_input.length; j++) {
    if (custom_text_input[j] == obj) {
      $("#custom_text_input input").eq(j).addClass('current');
      $("#custom_text_p p").eq(j).addClass('current');
    } else {
      $("#custom_text_input input").eq(j).removeClass('current');
      $("#custom_text_p p").eq(j).removeClass('current');
    }
  }
}

function custom_add_text() {
  console.log(1);
  var new_p = document.createElement('p');
  new_p.style.height = '30px';
  new_p.style.border = '1px solid blue';
  new_p.style.marginBottom = '0px';
  new_p.style.resize = 'none';
  console.log(phone_content);
  phone_content.appendChild(new_p);
}
// 自定义样式-图片
var custom_input = document.getElementById('custom_input');
var custom_img = document.getElementById('custom_img');
function change_custom_img() {
  custom_input.click();
  $('#custom_img').css("background-image", "");
  $('#custom_img')[0].src = '';
}

//添加随机ID
function random_id() {
  var id = '';
  var str = '7418520963'
  for (var i = 0; i < 8; i++) {
    id += str[~~(Math.random() * str.length)]
  }
  return id;
}
var currentID = 0;
var current_defaultID = 0;
var current_btn_ID = 0;
// 自定义样式添加图片
custom_input.addEventListener('change', function () {
  var reader = new FileReader();
  reader.readAsDataURL(this.files[0]);
  reader.onloadend = function (e) {
    custom_img.style.background = "url('" + e.target.result + "') no-repeat";
    custom_img.style.backgroundSize = "contain";
    var phone_img = document.createElement('img');
    var phone_div = document.createElement('div');
    phone_div.appendChild(phone_img);
    phone_div.style.position = 'relative';
    phone_div.style.display = 'inline-block';
    phone_img.src = e.target.result;
    phone_img.style.width = '100%';
    phone_img.id = 'img_' + random_id();
    phone_content.appendChild(phone_div);
    var new_i = document.createElement('i');
    new_i.innerHTML = ' X ';
    new_i.style.backgroundColor = '#999999';
    phone_div.appendChild(new_i);
    new_i.addEventListener('click', function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    })
    setTimeout(() => {
      $('#phone_content>div').draggable();
      $('#phone_content>div').resizable({});
      $('#phone_content>div').on('click', function () {
        // console.log($(this).children('img')[0].src);
        $('#custom_img').css("background-image", "");
        $('#custom_img')[0].src = $(this).children('img')[0].src;
        currentID = $(this).children('img').eq(0).attr('id');
      });
    }, 1);
  }
})
$('#phone_content>div').on('focus', function () {
  $(this).css('border', '2px dotted #F86F4D')
})
// 更换图片
function custom_change_img() {
  $('#custom_change_input').click();
}

$('#custom_change_input').on('change', function () {
  var reader = new FileReader();
  reader.readAsDataURL(this.files[0]);
  reader.onloadend = function (e) {
    var src = e.target.result;
    $("#" + currentID).attr("src", src);
    $('#custom_img')[0].src = src;
  }
})
//更换背景色
function change_bg_color(e) {
  $('#phone_content').css('backgroundColor', e);
}
//分享设置
var share_input = document.getElementById('share_input');
function share_upload_img() {
  share_input.click();
}
share_input.addEventListener('change', function () {
  var me = this;
  var reader = new FileReader();
  reader.readAsDataURL(this.files[0]);
  reader.onloadend = function (e) {

    me.parentNode.childNodes[3].style.background = "url('" + e.target.result + "') no-repeat";
    me.parentNode.childNodes[3].style.backgroundSize = "cover";
    console.log(me.parentNode.childNodes[5].firstChild);
    me.parentNode.childNodes[5].innerHTML = "更换图片";
  }
})
