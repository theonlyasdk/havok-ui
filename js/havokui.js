document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('.dropdown-menu').forEach(function(menu){
    if(menu.querySelector('.hv-dropdown-inner'))return;
    var wrap=document.createElement('div');
    wrap.className='hv-dropdown-inner';
    while(menu.firstChild)wrap.appendChild(menu.firstChild);
    menu.appendChild(wrap);
  });
});
