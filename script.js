document.addEventListener("DOMContentLoaded",()=>{
  const reveals=document.querySelectorAll(".reveal");
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("show")});
  },{threshold:.12});
  reveals.forEach(el=>observer.observe(el));

  const menu=document.querySelector(".menu-toggle");
  const nav=document.querySelector(".site-nav");
  if(menu) menu.addEventListener("click",()=>nav.classList.toggle("open"));

  document.querySelectorAll(".site-nav nav a").forEach(link=>{
    link.addEventListener("click",()=>nav?.classList.remove("open"));
  });

  function heart(){
    const el=document.createElement("span");
    el.className="heart-particle";
    el.textContent=["♥","♡","✦","✧"][Math.floor(Math.random()*4)];
    el.style.left=Math.random()*100+"vw";
    el.style.setProperty("--drift",(Math.random()*160-80)+"px");
    el.style.color=["#ff7899","#ffb0c0","#fff","#d88ba0"][Math.floor(Math.random()*4)];
    el.style.fontSize=(12+Math.random()*20)+"px";
    el.style.animationDuration=(5+Math.random()*4)+"s";
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),9500);
  }
  setInterval(heart,1100);

  const celebrate=document.getElementById("celebrate");
  if(celebrate){
    celebrate.addEventListener("click",()=>{
      for(let i=0;i<55;i++){
        setTimeout(()=>{
          const s=document.createElement("span");
          s.className="burst";
          s.textContent=["♥","♡","✦","✨","🎉"][Math.floor(Math.random()*5)];
          s.style.left="50%";s.style.top="55%";
          s.style.setProperty("--x",(Math.random()*650-325)+"px");
          s.style.setProperty("--y",(Math.random()*450-225)+"px");
          s.style.color=["#ff7899","#ffb0c0","#fff","#ffd8e0"][Math.floor(Math.random()*4)];
          document.body.appendChild(s);
          setTimeout(()=>s.remove(),1400);
        },i*22);
      }
      celebrate.textContent="Birthday magic sent ❤️";
      setTimeout(()=>celebrate.textContent="Make a little birthday magic ✨",3200);
    });
  }
});
