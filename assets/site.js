// タブ（公開授業・学年別分科会）
document.querySelectorAll('.tabbar button').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.tabbar button').forEach(function (b) { b.classList.remove('on'); });
    document.querySelectorAll('.tabpanel').forEach(function (p) { p.classList.remove('on'); });
    btn.classList.add('on');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('on');
  });
});

// スマホのメニュー開閉
var toggle = document.querySelector('.nav-toggle');
var gnav = document.querySelector('.gnav');
if (toggle && gnav) {
  toggle.addEventListener('click', function () {
    var open = gnav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  gnav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { gnav.classList.remove('open'); });
  });
}
