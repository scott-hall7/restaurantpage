(()=>{"use strict";const e=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const t=document.createElement("p");t.textContent="We specialize in creating REAL, definitely real, food that tastes very good and natural. Come on in and try our REAL food for yourself.";const n=document.createElement("img");return n.src="images/homeImage.jpeg",n.alt="definitely a real burrito",e.appendChild(t),e.appendChild(n),e}())};const t=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu");const t=document.createElement("h3");return t.textContent="Our Very Real Menu of Foods",e.appendChild(t),e.appendChild(function(){const e=document.createElement("div");e.classList.add("menuItem");const t=document.createElement("h4");t.textContent="Hardboiled Egg";const n=document.createElement("p");n.textContent="Just a plain-old hardboiled egg. Emphasis on hard. Very real!";const c=document.createElement("img");return c.src="images/egg.jpeg",c.alt="just an egg",e.appendChild(t),e.appendChild(n),e.appendChild(c),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("menuItem");const t=document.createElement("h4");t.textContent="Bacon";const n=document.createElement("p");n.textContent="We only cook our bacon extra crispy, so expect a crunch.";const c=document.createElement("img");return c.src="images/bacon.jpeg",c.alt="just bacon",e.appendChild(t),e.appendChild(n),e.appendChild(c),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("menuItem");const t=document.createElement("h4");t.textContent="Waffle";const n=document.createElement("p");n.textContent="Our waffles are also really hard, we struggle to cook soft things.";const c=document.createElement("img");return c.src="images/waffle.jpeg",c.alt="A waffle",e.appendChild(t),e.appendChild(n),e.appendChild(c),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("menuItem");const t=document.createElement("h4");t.textContent="Pineapple";const n=document.createElement("p");n.textContent="The softest thing on the menu.";const c=document.createElement("img");return c.src="images/pineapple.jpeg",c.alt="Pineapple",e.appendChild(t),e.appendChild(n),e.appendChild(c),e}()),e}())};function n(){const n=document.createElement("header"),a=document.createElement("p");return a.textContent="Maybe Food?",n.appendChild(a),n.appendChild(function(){const n=document.createElement("nav"),a=document.createElement("button");a.classList.add("buttonNav"),a.textContent="Home",a.addEventListener("click",(t=>{t.target.classList.contains("active")||(c(a),e())}));const o=document.createElement("button");o.classList.add("buttonNav"),o.textContent="Menu",o.addEventListener("click",(e=>{e.target.classList.contains("active")||(c(o),t())}));const d=document.createElement("button");return d.classList.add("buttonNav"),d.textContent="Contact",d.addEventListener("click",(e=>{e.target.classList.contains("active")||(c(d),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("h3");t.textContent="Contact Us!";const n=document.createElement("p");n.textContent="Phone Number: (777) 777 - 7777";const c=document.createElement("p");c.textContent="Location: The Bermuda Triangle";const a=document.createElement("img");return a.src="images/location.jpg",a.alt="the bermuda triangle",e.appendChild(t),e.appendChild(n),e.appendChild(c),e.appendChild(a),e}())}())})),n.appendChild(a),n.appendChild(o),n.appendChild(d),n}()),n}function c(e){document.querySelectorAll(".buttonNav").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const t=document.getElementById("content");t.appendChild(n()),t.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),t.appendChild(function(){const e=document.createElement("footer"),t=document.createElement("a"),n=document.createTextNode("Head Chef: scott-hall7 on GitHub");return t.appendChild(n),t.title="Head Chef: scott-hall7 on GitHub",t.href="https://github.com/scott-hall7",e.appendChild(t),e}()),c(document.querySelector(".buttonNav")),e()}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEQsWUFBWXlELEdBRVpELENBQ1QsQ0FNc0JNLElBRXBCeEIsRUFBZ0J6QyxTQUFTa0UsY0FBYyxlQUN2QyxHQUNGLENFM0ZBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICBcIldlIHNwZWNpYWxpemUgaW4gY3JlYXRpbmcgUkVBTCwgZGVmaW5pdGVseSByZWFsLCBmb29kIHRoYXQgdGFzdGVzIHZlcnkgZ29vZCBhbmQgbmF0dXJhbC4gQ29tZSBvbiBpbiBhbmQgdHJ5IG91ciBSRUFMIGZvb2QgZm9yIHlvdXJzZWxmLlwiO1xuXG4gIGNvbnN0IGhvbWVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGhvbWVJbWFnZS5zcmMgPSBcImltYWdlcy9ob21lSW1hZ2UuanBlZ1wiO1xuICBob21lSW1hZ2UuYWx0ID0gXCJkZWZpbml0ZWx5IGEgcmVhbCBidXJyaXRvXCI7XG5cbiAgaG9tZS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZUltYWdlKTtcblxuICByZXR1cm4gaG9tZTtcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lO1xuIiwiZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cbiAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSBcIk91ciBWZXJ5IFJlYWwgTWVudSBvZiBGb29kc1wiO1xuXG4gIG1lbnUuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgbWVudS5hcHBlbmRDaGlsZChlZ2coKSk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoYmFjb24oKSk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQod2FmZmxlKCkpO1xuICBtZW51LmFwcGVuZENoaWxkKHBpbmVhcHBsZSgpKTtcblxuICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gZWdnKCkge1xuICBjb25zdCBlZ2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlZ2cuY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtXCIpO1xuXG4gIGNvbnN0IGVnZ1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBlZ2dUaXRsZS50ZXh0Q29udGVudCA9IFwiSGFyZGJvaWxlZCBFZ2dcIjtcblxuICBjb25zdCBlZ2dEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBlZ2dEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgXCJKdXN0IGEgcGxhaW4tb2xkIGhhcmRib2lsZWQgZWdnLiBFbXBoYXNpcyBvbiBoYXJkLiBWZXJ5IHJlYWwhXCI7XG5cbiAgY29uc3QgZWdnSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBlZ2dJbWFnZS5zcmMgPSBcImltYWdlcy9lZ2cuanBlZ1wiO1xuICBlZ2dJbWFnZS5hbHQgPSBcImp1c3QgYW4gZWdnXCI7XG5cbiAgZWdnLmFwcGVuZENoaWxkKGVnZ1RpdGxlKTtcbiAgZWdnLmFwcGVuZENoaWxkKGVnZ0Rlc2NyaXB0aW9uKTtcbiAgZWdnLmFwcGVuZENoaWxkKGVnZ0ltYWdlKTtcblxuICByZXR1cm4gZWdnO1xufVxuXG5mdW5jdGlvbiBiYWNvbigpIHtcbiAgY29uc3QgYmFjb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYWNvbi5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1cIik7XG5cbiAgY29uc3QgYmFjb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgYmFjb25UaXRsZS50ZXh0Q29udGVudCA9IFwiQmFjb25cIjtcblxuICBjb25zdCBiYWNvbkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJhY29uRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgIFwiV2Ugb25seSBjb29rIG91ciBiYWNvbiBleHRyYSBjcmlzcHksIHNvIGV4cGVjdCBhIGNydW5jaC5cIjtcblxuICBjb25zdCBiYWNvbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgYmFjb25JbWFnZS5zcmMgPSBcImltYWdlcy9iYWNvbi5qcGVnXCI7XG4gIGJhY29uSW1hZ2UuYWx0ID0gXCJqdXN0IGJhY29uXCI7XG5cbiAgYmFjb24uYXBwZW5kQ2hpbGQoYmFjb25UaXRsZSk7XG4gIGJhY29uLmFwcGVuZENoaWxkKGJhY29uRGVzY3JpcHRpb24pO1xuICBiYWNvbi5hcHBlbmRDaGlsZChiYWNvbkltYWdlKTtcblxuICByZXR1cm4gYmFjb247XG59XG5cbmZ1bmN0aW9uIHdhZmZsZSgpIHtcbiAgY29uc3Qgd2FmZmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2FmZmxlLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbVwiKTtcblxuICBjb25zdCB3YWZmbGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgd2FmZmxlVGl0bGUudGV4dENvbnRlbnQgPSBcIldhZmZsZVwiO1xuXG4gIGNvbnN0IHdhZmZsZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHdhZmZsZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICBcIk91ciB3YWZmbGVzIGFyZSBhbHNvIHJlYWxseSBoYXJkLCB3ZSBzdHJ1Z2dsZSB0byBjb29rIHNvZnQgdGhpbmdzLlwiO1xuXG4gIGNvbnN0IHdhZmZsZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgd2FmZmxlSW1hZ2Uuc3JjID0gXCJpbWFnZXMvd2FmZmxlLmpwZWdcIjtcbiAgd2FmZmxlSW1hZ2UuYWx0ID0gXCJBIHdhZmZsZVwiO1xuXG4gIHdhZmZsZS5hcHBlbmRDaGlsZCh3YWZmbGVUaXRsZSk7XG4gIHdhZmZsZS5hcHBlbmRDaGlsZCh3YWZmbGVEZXNjcmlwdGlvbik7XG4gIHdhZmZsZS5hcHBlbmRDaGlsZCh3YWZmbGVJbWFnZSk7XG5cbiAgcmV0dXJuIHdhZmZsZTtcbn1cblxuZnVuY3Rpb24gcGluZWFwcGxlKCkge1xuICBjb25zdCBwaW5lYXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwaW5lYXBwbGUuY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtXCIpO1xuXG4gIGNvbnN0IHBpbmVhcHBsZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBwaW5lYXBwbGVUaXRsZS50ZXh0Q29udGVudCA9IFwiUGluZWFwcGxlXCI7XG5cbiAgY29uc3QgcGluZWFwcGxlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGluZWFwcGxlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIlRoZSBzb2Z0ZXN0IHRoaW5nIG9uIHRoZSBtZW51LlwiO1xuXG4gIGNvbnN0IHBpbmVhcHBsZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgcGluZWFwcGxlSW1hZ2Uuc3JjID0gXCJpbWFnZXMvcGluZWFwcGxlLmpwZWdcIjtcbiAgcGluZWFwcGxlSW1hZ2UuYWx0ID0gXCJQaW5lYXBwbGVcIjtcblxuICBwaW5lYXBwbGUuYXBwZW5kQ2hpbGQocGluZWFwcGxlVGl0bGUpO1xuICBwaW5lYXBwbGUuYXBwZW5kQ2hpbGQocGluZWFwcGxlRGVzY3JpcHRpb24pO1xuICBwaW5lYXBwbGUuYXBwZW5kQ2hpbGQocGluZWFwcGxlSW1hZ2UpO1xuXG4gIHJldHVybiBwaW5lYXBwbGU7XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTtcbiIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gIGNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBtYWluVGl0bGUudGV4dENvbnRlbnQgPSBcIk1heWJlIEZvb2Q/XCI7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuXG4gIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25OYXZcIik7XG4gIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICBzZXRBY3RpdmVCdXR0b24oaG9tZUJ1dHRvbik7XG4gICAgbG9hZEhvbWUoKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbk5hdlwiKTtcbiAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZUJ1dHRvbihtZW51QnV0dG9uKTtcbiAgICBsb2FkTWVudSgpO1xuICB9KTtcblxuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uTmF2XCIpO1xuICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlQnV0dG9uKGNvbnRhY3RCdXR0b24pO1xuICAgIGxvYWRDb250YWN0KCk7XG4gIH0pO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG5cbiAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbikge1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b25OYXZcIik7XG5cbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBpZiAoYnV0dG9uICE9PSB0aGlzKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblwiKTtcbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblxuICBjb25zdCBoZWFkQ2hlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29uc3QgaGVhZENoZWZUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJIZWFkIENoZWY6IHNjb3R0LWhhbGw3IG9uIEdpdEh1YlwiKVxuICBoZWFkQ2hlZi5hcHBlbmRDaGlsZChoZWFkQ2hlZlRleHQpO1xuICBoZWFkQ2hlZi50aXRsZSA9IFwiSGVhZCBDaGVmOiBzY290dC1oYWxsNyBvbiBHaXRIdWJcIjtcbiAgaGVhZENoZWYuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0LWhhbGw3XCI7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKGhlYWRDaGVmKTtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBpbml0YWxXZWJzaXRlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICBzZXRBY3RpdmVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25OYXZcIikpO1xuICBsb2FkSG9tZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0YWxXZWJzaXRlO1xuIiwiZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG5cbiAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXMhXCI7XG5cbiAgY29uc3QgY29udGFjdFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnRhY3RQaG9uZS50ZXh0Q29udGVudCA9IFwiUGhvbmUgTnVtYmVyOiAoNzc3KSA3NzcgLSA3Nzc3XCI7XG5cbiAgY29uc3QgY29udGFjdExvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnRhY3RMb2NhdGlvbi50ZXh0Q29udGVudCA9IFwiTG9jYXRpb246IFRoZSBCZXJtdWRhIFRyaWFuZ2xlXCI7XG5cbiAgY29uc3QgaW1hZ2VMb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlTG9jYXRpb24uc3JjID0gXCJpbWFnZXMvbG9jYXRpb24uanBnXCI7XG4gIGltYWdlTG9jYXRpb24uYWx0ID0gXCJ0aGUgYmVybXVkYSB0cmlhbmdsZVwiO1xuXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0UGhvbmUpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RMb2NhdGlvbik7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoaW1hZ2VMb2NhdGlvbik7XG5cbiAgcmV0dXJuIGNvbnRhY3Q7XG59XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDtcbiIsImltcG9ydCBpbml0aWFsV2Vic2l0ZSBmcm9tIFwiLi93ZWJzaXRlXCI7XG5cbmluaXRpYWxXZWJzaXRlKCk7Il0sIm5hbWVzIjpbIm1haW4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImhvbWUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGVzY3JpcHRpb24iLCJob21lSW1hZ2UiLCJzcmMiLCJhbHQiLCJjcmVhdGVIb21lIiwibWVudSIsIm1lbnVUaXRsZSIsImVnZyIsImVnZ1RpdGxlIiwiZWdnRGVzY3JpcHRpb24iLCJlZ2dJbWFnZSIsImJhY29uIiwiYmFjb25UaXRsZSIsImJhY29uRGVzY3JpcHRpb24iLCJiYWNvbkltYWdlIiwid2FmZmxlIiwid2FmZmxlVGl0bGUiLCJ3YWZmbGVEZXNjcmlwdGlvbiIsIndhZmZsZUltYWdlIiwicGluZWFwcGxlIiwicGluZWFwcGxlVGl0bGUiLCJwaW5lYXBwbGVEZXNjcmlwdGlvbiIsInBpbmVhcHBsZUltYWdlIiwiY3JlYXRlTWVudSIsImNyZWF0ZUhlYWRlciIsImhlYWRlciIsIm1haW5UaXRsZSIsIm5hdiIsImhvbWVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJjb250YWlucyIsInNldEFjdGl2ZUJ1dHRvbiIsIm1lbnVCdXR0b24iLCJjb250YWN0QnV0dG9uIiwiY29udGFjdCIsImNvbnRhY3RUaXRsZSIsImNvbnRhY3RQaG9uZSIsImNvbnRhY3RMb2NhdGlvbiIsImltYWdlTG9jYXRpb24iLCJjcmVhdGVDb250YWN0IiwiY3JlYXRlTmF2IiwiYnV0dG9uIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0aGlzIiwicmVtb3ZlIiwiY29udGVudCIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZU1haW4iLCJmb290ZXIiLCJoZWFkQ2hlZiIsImhlYWRDaGVmVGV4dCIsImNyZWF0ZVRleHROb2RlIiwidGl0bGUiLCJocmVmIiwiY3JlYXRlRm9vdGVyIiwicXVlcnlTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=