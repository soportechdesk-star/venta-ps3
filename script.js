const menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav');
function closeMenu(){if(!menu||!nav)return;nav.style.display='none';menu.setAttribute('aria-expanded','false');}
menu?.addEventListener('click',()=>{if(!nav)return;const open=nav.style.display==='flex';if(open){closeMenu();}else{nav.style.display='flex';nav.style.position='absolute';nav.style.top='105px';nav.style.left='14px';nav.style.right='14px';nav.style.padding='18px';nav.style.background='#fff';nav.style.border='1px solid #e4e7ec';nav.style.borderRadius='16px';nav.style.flexDirection='column';nav.style.alignItems='stretch';nav.style.boxShadow='0 20px 50px rgba(0,0,0,.12)';menu.setAttribute('aria-expanded','true');}});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=950)closeMenu();}));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
window.addEventListener('resize',()=>{if(innerWidth>950){nav?.removeAttribute('style');menu?.setAttribute('aria-expanded','false');}});
