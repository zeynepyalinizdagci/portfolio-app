const pageTurnBtn=document.querySelectorAll(".nextprev-btn");pageTurnBtn.forEach((t,e)=>{t.onclick=()=>{const s=t.getAttribute("data-page"),o=document.getElementById(s);o.classList.contains("turn")?(o.classList.remove("turn"),setTimeout(()=>{o.style.zIndex=20-e},500)):(o.classList.add("turn"),setTimeout(()=>{o.style.zIndex=20+e},500))}});const pages=document.querySelectorAll(".book-page.page-right"),contactMeBtn=document.querySelector(".btn.contact-me");contactMeBtn.onclick=()=>{pages.forEach((t,e)=>{setTimeout(()=>{t.classList.add("turn"),setTimeout(()=>{t.style.zIndex=20+e},500)},(e+1)*200+100)})};let totalPages=pages.length,pageNumber=0;function reverseIndex(){pageNumber--,pageNumber<0&&(pageNumber=totalPages-1)}const backProfileBtn=document.querySelector(".back-profile");backProfileBtn.onclick=()=>{pages.forEach((t,e)=>{setTimeout(()=>{reverseIndex(),pages[pageNumber].classList.remove("turn"),setTimeout(()=>{reverseIndex(),pages[pageNumber].style.zIndex=20+e},500)},(e+1)*200+100)})};const coverRight=document.querySelector(".cover.cover-right"),pageLeft=document.querySelector(".book-page.page-left");setTimeout(()=>{coverRight.classList.add("turn")},2100),setTimeout(()=>{coverRight.style.zIndex=-1},2800),setTimeout(()=>{pageLeft.style.zIndex=20},3200),pages.forEach((t,e)=>{setTimeout(()=>{reverseIndex(),pages[pageNumber].classList.remove("turn"),setTimeout(()=>{reverseIndex(),pages[pageNumber].style.zIndex=20+e},500)},(e+1)*200+2100)});
