// ================= HOME =================
if(document.body.classList.contains("home-page")){
  const msg=document.getElementById("welcome-message"),
        slides=[...document.querySelectorAll(".slide")];
  let i=0;
  setInterval(()=>{let d=new Date();msg.textContent=`Welcome to Bali! Today is ${d.toDateString()} and the time is ${d.toLocaleTimeString()}`},1000);
  document.getElementById("color-btn").onclick=()=>document.body.style.backgroundColor=`#${Math.floor(Math.random()*16777215).toString(16)}`;
  const show=n=>slides.forEach((s,j)=>s.style.display=j===n?"block":"none");
  const next=()=>show(i=(i+1)%slides.length),prev=()=>show(i=(i-1+slides.length)%slides.length);
  document.querySelector(".next").onclick=next;document.querySelector(".prev").onclick=prev;
  setInterval(next,5000);show(i);
}

// ================= ABOUT =================
if(document.body.classList.contains("about-page")){
  const dest={history:"Bali’s history stretches back over a thousand years, shaped by Hindu kingdoms and maritime trade.",
              culture:"Visitors today witness a blend of Indian, Chinese, and indigenous influences in temple architecture and art.",
              attractions:["Ubud’s Monkey Forest","Tegallalang rice terraces","Mount Batur sunrise trek","Tanjung Benoa water sports"]};
  document.getElementById("destination-info").innerHTML=`<h2>History & Culture</h2><p>${dest.history}</p><p>${dest.culture}</p>
    <h2>Must-See Attractions</h2><ul>${dest.attractions.map(x=>`<li>${x}</li>`).join("")}</ul>`;
  const extra=document.getElementById("extra-info"),btn=document.getElementById("toggle-btn");
  btn.onclick=()=>{let s=extra.style.display==="none";extra.style.display=s?"block":"none";btn.textContent=s?"Show Less":"Show More"};
  const facts=["The Balinese calendar has 210 days.","Bali has 20,000+ temples.","First surfing comp in 1938.","Daily offerings called canang sari.","Mount Agung is sacred."];
  document.getElementById("random-fact").textContent=facts[Math.floor(Math.random()*facts.length)];
}

// ================= GALLERY =================
if(document.body.classList.contains("gallery-page")){
  const figs=[...document.querySelectorAll(".gallery-grid figure")],
        box=document.getElementById("lightbox"),
        img=document.getElementById("lightbox-img"),
        cap=document.getElementById("lightbox-caption");
  figs.forEach(f=>{
    f.onmouseover=()=>f.style.transform="scale(1.05)";
    f.onmouseout =()=>f.style.transform="scale(1)";
    f.onclick=()=>{img.src=f.querySelector("img").src;cap.textContent=f.querySelector("figcaption").textContent;box.style.display="flex"}
  });
  document.getElementById("close-lightbox").onclick=()=>box.style.display="none";
  document.querySelectorAll(".filter-buttons button").forEach(b=>
    b.onclick=()=>figs.forEach(f=>f.style.display=b.dataset.filter==="all"||f.dataset.category===b.dataset.filter?"block":"none"));
}
