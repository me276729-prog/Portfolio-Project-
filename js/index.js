
(function(){
  var root=document.documentElement;
  // theme
  try{var t=localStorage.getItem('theme');if(t)root.setAttribute('data-theme',t)}catch(e){}
  document.getElementById('theme').addEventListener('click',function(){
    var dark=root.getAttribute('data-theme')==='dark'||(!root.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme: dark)').matches);
    var next=dark?'light':'dark';root.setAttribute('data-theme',next);
    try{localStorage.setItem('theme',next)}catch(e){}
  });
  // typing
  var words=['مصمم مواقع ويب','محلل بيانات','مطوّر Laravel وPHP'],el=document.getElementById('typed'),w=0,c=0,del=false;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){el.textContent=words.join(' و ')}
  else{(function tick(){
    var s=words[w];c+=del?-1:1;el.textContent=s.slice(0,c);
    var d=del?45:95;
    if(!del&&c===s.length){del=true;d=1400}
    else if(del&&c===0){del=false;w=(w+1)%words.length;d=350}
    setTimeout(tick,d);
  })()}
  // filters
  var btns=document.querySelectorAll('.filters button'),cards=document.querySelectorAll('.card');
  btns.forEach(function(b){b.addEventListener('click',function(){
    btns.forEach(function(x){x.setAttribute('aria-pressed','false')});b.setAttribute('aria-pressed','true');
    var f=b.dataset.f;cards.forEach(function(k){k.classList.toggle('hide',f!=='all'&&k.dataset.k!==f)});
  })});
  // contact form (opens the visitor's email app)
  document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault();
    var n=document.getElementById('name').value.trim(),m=document.getElementById('email').value.trim(),g=document.getElementById('msg').value.trim(),s=document.getElementById('status');
    if(!n||!/^\S+@\S+\.\S+$/.test(m)||!g){s.textContent='أكمل الحقول وتأكد من كتابة بريد إلكتروني صحيح.';return}
    location.href='mailto:your@email.com?subject='+encodeURIComponent('رسالة من '+n)+'&body='+encodeURIComponent(g+'\n\n'+n+' - '+m);
    s.textContent='تم فتح تطبيق البريد لإرسال رسالتك.';
  });
  document.getElementById('year').textContent=new Date().getFullYear();
})();

