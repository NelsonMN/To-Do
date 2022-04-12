(()=>{"use strict";var t={138:(t,e,o)=>{o.d(e,{IK:()=>n,iQ:()=>d,m8:()=>s});const d=(t,e,o,d,n,s)=>({getTitle:()=>t,setTitle:e=>t=e,getDescription:()=>e,setDescription:t=>e=t,getDate:()=>o,setDate:t=>o=t,getPriority:()=>d,setPriority:t=>d=t,getStatus:()=>n,setStatus:t=>n=t,getId:()=>s,setId:t=>s=t}),n=(t,e)=>{let o=[];return{getTasks:()=>o,getProjectTitle:()=>t,getProjectId:()=>e,setProjectTitle:e=>t=e,setProjectId:t=>e=t,getTask:t=>o.find((e=>e.getId()===t)),addTask:t=>{o.push(t)},removeTask:t=>{o=o.filter((e=>e.getId()!==t))}}},s=()=>{let t=[];return{getProject:e=>t.find((t=>t.getProjectId()===e)),getProjects:()=>t,addProject:e=>{t.push(e)},removeProject:e=>{t=t.filter((t=>t.getProjectId()!==e))}}}},23:(t,e,o)=>{var d=o(138);const n=document.querySelectorAll("[data-modal-target]"),s=document.querySelectorAll("[data-close-button]"),a=document.getElementById("overlay");function c(t){null!=t&&(t.classList.add("active"),a.classList.add("active"))}function l(t){null!=t&&(t.classList.remove("active"),a.classList.remove("active"))}n.forEach((t=>{t.addEventListener("click",(()=>{c(document.querySelector(t.dataset.modalTarget))}))})),s.forEach((t=>{t.addEventListener("click",(()=>{l(t.closest(".form"))}))})),(0,d.m8)();const r=(0,d.IK)("Default Project"),i=document.getElementById("due-date"),u=(new Date).toISOString().slice(0,10);let m;i.value=u,document.querySelector(".tasks").addEventListener("click",(t=>{if(t.target.matches("span")&&"edit"==t.target.textContent){c(document.querySelector("#edit-form"));const e=t.target.parentNode.parentNode.id;console.log(e);const o=r.getTask(e);m=e;const d=document.getElementById("edit-title"),n=document.getElementById("edit-description"),s=document.getElementById("edit-due-date"),a=document.getElementById("edit-priority"),l=document.getElementById("edit-status");d.value=o.getTitle(),n.value=o.getDescription(),s.value=o.getDate(),a.value=o.getPriority(),"Complete"==o.getStatus()?l.checked=!0:l.checked=!1}else if(t.target.matches("span")&&"delete"==t.target.textContent){const e=t.target.parentNode.parentNode;r.removeTask(e.id),e.remove()}else if(t.target.matches("button")&&"Details"==t.target.textContent){const e=t.target.parentNode.parentNode.id,o=r.getTask(e);m=e;const d=document.getElementById("task-title-output"),n=document.getElementById("task-due-date-output"),s=document.getElementById("task-priority-output"),a=document.getElementById("task-status-output"),i=document.getElementById("task-details-output");d.textContent=o.getTitle(),n.textContent=o.getDate(),s.textContent=o.getPriority(),a.textContent=o.getStatus(),i.textContent=o.getDescription(),c(document.getElementById("task-details")),document.querySelectorAll("[data-close-button]").forEach((t=>{t.addEventListener("click",(()=>{l(t.closest("#task-details"))}))}))}}));const g=document.querySelector(".add-task"),p=document.querySelector(".edit-task");g.addEventListener("click",(t=>{t.preventDefault();const e=function(){const t=document.getElementById("title").value,e=document.getElementById("description").value,o=document.getElementById("due-date").value,n=document.getElementById("priority").value;let s;s=document.getElementById("status").checked?"Complete":"Incomplete";const a=self.crypto.randomUUID();return(0,d.iQ)(t,e,o,n,s,a)}();!function(t){const e=document.querySelector(".tasks"),o=document.createElement("div");o.classList.add("task"),o.id=t.getId();const d=document.createElement("div");d.classList.add("first-task-elements"),"Low"==t.getPriority()?o.style.borderLeft="5px solid green":"Medium"==t.getPriority()?o.style.borderLeft="5px solid orange":o.style.borderLeft="5px solid red","Complete"==t.getStatus()?o.style.opacity="0.5":"Incomplete"==t.getStatus()&&(o.style.opactiy="1");const n=document.createElement("div");n.classList.add("title"),n.textContent=t.getTitle();const s=document.createElement("div");s.classList.add("last-task-elements");const a=document.createElement("button");a.textContent="Details",a.classList.add("details");const c=document.createElement("div");c.classList.add("due-date"),c.textContent=t.getDate();const l=document.createElement("span");l.classList.add("edit","material-icons-outlined"),l.textContent="edit";const r=document.createElement("span");r.classList.add("delete","material-icons-outlined"),r.textContent="delete",d.append(n),s.append(a,c,l,r),o.append(d,s),e.append(o)}(e),r.addTask(e),document.querySelector(".form-card").reset();const o=document.getElementById("due-date"),n=(new Date).toISOString().slice(0,10);o.value=n})),p.addEventListener("click",(t=>{t.preventDefault(),function(){const t=r.getTask(m),e=document.getElementById("edit-title").value,o=document.getElementById("edit-description").value,d=document.getElementById("edit-due-date").value,n=document.getElementById("edit-priority").value,s=document.getElementById("edit-status").checked;t.setTitle(e),t.setDescription(o),t.setDate(d),t.setPriority(n),s?t.setStatus("Complete"):t.setStatus("Incomplete")}(),function(t){const e=document.getElementById(t),o=r.getTask(t);e.childNodes[0].textContent=o.getTitle(),"Low"==o.getPriority()?e.style.borderLeft="5px solid green":"Medium"==o.getPriority()?e.style.borderLeft="5px solid orange":e.style.borderLeft="5px solid red","Complete"==o.getStatus()?e.style.opacity="0.5":"Incomplete"==o.getStatus()&&(e.style.opacity="1"),e.childNodes[1].childNodes[1].textContent=o.getDate()}(m)}))}},e={};function o(d){var n=e[d];if(void 0!==n)return n.exports;var s=e[d]={exports:{}};return t[d](s,s.exports,o),s.exports}o.d=(t,e)=>{for(var d in e)o.o(e,d)&&!o.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:e[d]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o(138),o(23)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VzZXItaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgaWQpID0+IHtcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gICAgY29uc3Qgc2V0VGl0bGUgPSBuZXdUaXRsZSA9PiB0aXRsZSA9IG5ld1RpdGxlO1xuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb249IG5ld0Rlc2NyaXB0aW9uID0+IGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gICAgY29uc3Qgc2V0RGF0ZSA9IG5ld0RhdGUgPT4gZHVlRGF0ZSA9IG5ld0RhdGU7XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IG5ld1ByaW9yaXR5ID0+IHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4gc3RhdHVzO1xuICAgIGNvbnN0IHNldFN0YXR1cyA9IG5ld1N0YXR1cyA9PiBzdGF0dXMgPSBuZXdTdGF0dXM7XG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiBpZDtcbiAgICBjb25zdCBzZXRJZCA9IG5ld0lkID0+IGlkID0gbmV3SWQ7XG5cbiAgICByZXR1cm4ge2dldFRpdGxlLCBzZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uLCBnZXREYXRlLCBzZXREYXRlLCBnZXRQcmlvcml0eSwgc2V0UHJpb3JpdHksIGdldFN0YXR1cywgc2V0U3RhdHVzLCBnZXRJZCwgc2V0SWR9XG59O1xuXG5cbmNvbnN0IFByb2plY3QgPSAocHJvamVjdFRpdGxlLCBwcm9qZWN0SWQpID0+IHtcblxuICAgIGxldCBwcm9qZWN0ID0gW107XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0VGl0bGUgPSAoKSA9PiBwcm9qZWN0VGl0bGU7XG4gICAgY29uc3Qgc2V0UHJvamVjdFRpdGxlID0gbmV3VGl0bGUgPT4gcHJvamVjdFRpdGxlID0gbmV3VGl0bGU7XG4gICAgY29uc3QgZ2V0UHJvamVjdElkID0gKCkgPT4gcHJvamVjdElkO1xuICAgIGNvbnN0IHNldFByb2plY3RJZCA9IG5ld0lkID0+IHByb2plY3RJZCA9IG5ld0lkO1xuXG4gICAgY29uc3QgZ2V0VGFzayA9IChpZCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdC5maW5kKCh0YXNrKSA9PiB0YXNrLmdldElkKCkgPT09IGlkKVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHByb2plY3Q7XG5cbiAgICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgcHJvamVjdC5wdXNoKHRhc2spXG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAoaWQpID0+IHtcbiAgICAgICAgcHJvamVjdCA9IHByb2plY3QuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldElkKCkgIT09IGlkKVxuICAgIH07XG5cbiAgICByZXR1cm4ge2dldFRhc2tzLCBnZXRQcm9qZWN0VGl0bGUsIGdldFByb2plY3RJZCwgc2V0UHJvamVjdFRpdGxlLCBzZXRQcm9qZWN0SWQsIGdldFRhc2ssIGFkZFRhc2ssIHJlbW92ZVRhc2t9XG59O1xuXG5cbmNvbnN0IFRvRG8gPSAoKSA9PiB7XG4gICAgXG4gICAgbGV0IHRvRG8gPSBbXTtcbiAgICBcbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3RJZCkgPT4ge1xuICAgICAgICByZXR1cm4gdG9Eby5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFByb2plY3RJZCgpID09PSBwcm9qZWN0SWQpXG4gICAgfTtcblxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gdG9EbztcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICB0b0RvLnB1c2gocHJvamVjdClcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0SWQpID0+IHtcbiAgICAgICAgdG9EbyA9IHRvRG8uZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFByb2plY3RJZCgpICE9PSBwcm9qZWN0SWQpXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4ge2dldFByb2plY3QsIGdldFByb2plY3RzLCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0fVxufTtcblxuZXhwb3J0IHtUYXNrLCBQcm9qZWN0LCBUb0RvfSIsImNvbnN0IG9wZW5Nb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbW9kYWwtdGFyZ2V0XVwiKTtcbmNvbnN0IGNsb3NlTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWNsb3NlLWJ1dHRvbl1cIik7XG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpO1xuXG5vcGVuTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uLmRhdGFzZXQubW9kYWxUYXJnZXQpO1xuICAgICAgICBvcGVuRm9ybShmb3JtKTtcbiAgICB9KVxufSkgXG5cbmNsb3NlTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGJ1dHRvbi5jbG9zZXN0KFwiLmZvcm1cIilcbiAgICAgICAgY2xvc2VGb3JtKGZvcm0pO1xuICAgIH0pXG59KVxuXG5mdW5jdGlvbiBvcGVuRm9ybShmb3JtKSB7XG4gICAgaWYgKGZvcm0gPT0gbnVsbCkgcmV0dXJuXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VGb3JtKGZvcm0pIHtcbiAgICBpZiAoZm9ybSA9PSBudWxsKSByZXR1cm5cbiAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xufVxuXG5leHBvcnQge29wZW5Gb3JtLCBjbG9zZUZvcm19IiwiaW1wb3J0IHtUYXNrLCBQcm9qZWN0LCBUb0RvfSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IHtvcGVuRm9ybSwgY2xvc2VGb3JtfSBmcm9tICcuL21vZGFsJ1xuXG5cbi8vIEluaXRpYWxpemUgVG8tRG8gTGlzdFxuXG5jb25zdCB0b0RvTGlzdCA9IFRvRG8oKVxuXG5cbi8vIEluaXRpYWxpemUgRGVmYXVsdCBQcm9qZWN0XG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IFByb2plY3QoJ0RlZmF1bHQgUHJvamVjdCcpXG5cblxuLy8gSW5pdGlhbGl6ZSBGb3JtIERlZmF1bHRzXG5jb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpXG5jb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xudGFza0RhdGUudmFsdWUgPSB0b2RheURhdGU7XG5cblxuLy8gVGFzayBVSVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWVcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpLnZhbHVlXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWVcbiAgICBjb25zdCB0YXNrQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzJykuY2hlY2tlZFxuICAgIGxldCB0YXNrU3RhdHVzXG4gICAgaWYgKHRhc2tDaGVja2JveCkge1xuICAgICAgICB0YXNrU3RhdHVzID0gJ0NvbXBsZXRlJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tTdGF0dXMgPSAnSW5jb21wbGV0ZSdcbiAgICB9XG4gICAgY29uc3QgdGFza0lkID0gc2VsZi5jcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRGF0ZSwgdGFza1ByaW9yaXR5LCB0YXNrU3RhdHVzLCB0YXNrSWQpXG4gICAgcmV0dXJuIG5ld1Rhc2tcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFzaygpIHtcbiAgICBjb25zdCB0YXNrVG9FZGl0ID0gZGVmYXVsdFByb2plY3QuZ2V0VGFzayh0YXNrSWQpXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGl0bGUnKS52YWx1ZVxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRlc2NyaXB0aW9uJykudmFsdWVcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWR1ZS1kYXRlJykudmFsdWVcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1wcmlvcml0eScpLnZhbHVlXG4gICAgY29uc3QgdGFza0NoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtc3RhdHVzJykuY2hlY2tlZFxuXG4gICAgdGFza1RvRWRpdC5zZXRUaXRsZSh0YXNrVGl0bGUpXG4gICAgdGFza1RvRWRpdC5zZXREZXNjcmlwdGlvbih0YXNrRGVzY3JpcHRpb24pXG4gICAgdGFza1RvRWRpdC5zZXREYXRlKHRhc2tEYXRlKVxuICAgIHRhc2tUb0VkaXQuc2V0UHJpb3JpdHkodGFza1ByaW9yaXR5KVxuICAgIGlmICh0YXNrQ2hlY2tib3gpIHtcbiAgICAgICAgdGFza1RvRWRpdC5zZXRTdGF0dXMoJ0NvbXBsZXRlJylcbiAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrVG9FZGl0LnNldFN0YXR1cygnSW5jb21wbGV0ZScpXG4gICAgfSBcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza1VJKHRhc2spIHtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIilcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKVxuICAgIHRhc2tEaXYuaWQgPSB0YXNrLmdldElkKClcblxuICAgIGNvbnN0IGZpcnN0VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZpcnN0VGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwiZmlyc3QtdGFzay1lbGVtZW50c1wiKVxuXG4gICAgaWYgKHRhc2suZ2V0UHJpb3JpdHkoKSA9PSAnTG93Jykge1xuICAgICAgICB0YXNrRGl2LnN0eWxlLmJvcmRlckxlZnQgPSAnNXB4IHNvbGlkIGdyZWVuJztcbiAgICB9IGVsc2UgaWYgKHRhc2suZ2V0UHJpb3JpdHkoKSA9PSAnTWVkaXVtJykge1xuICAgICAgICB0YXNrRGl2LnN0eWxlLmJvcmRlckxlZnQgPSAnNXB4IHNvbGlkIG9yYW5nZSdcbiAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrRGl2LnN0eWxlLmJvcmRlckxlZnQgPSAnNXB4IHNvbGlkIHJlZCdcbiAgICB9XG5cbiAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PSAnQ29tcGxldGUnKSB7XG4gICAgICAgIHRhc2tEaXYuc3R5bGUub3BhY2l0eSA9ICcwLjUnXG4gICAgfSBlbHNlIGlmICh0YXNrLmdldFN0YXR1cygpID09ICdJbmNvbXBsZXRlJykge1xuICAgICAgICB0YXNrRGl2LnN0eWxlLm9wYWN0aXkgPSAnMSdcbiAgICB9XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay5nZXRUaXRsZSgpXG5cbiAgICBjb25zdCBsYXN0VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxhc3RUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJsYXN0LXRhc2stZWxlbWVudHNcIik7XG5cbiAgICBjb25zdCBkZXRhaWxzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBkZXRhaWxzQnRuLnRleHRDb250ZW50ID0gJ0RldGFpbHMnXG4gICAgZGV0YWlsc0J0bi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJylcblxuICAgIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XG4gICAgZGF0ZURpdi50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGF0ZSgpXG5cbiAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGVkaXQuY2xhc3NMaXN0LmFkZChcImVkaXRcIiwgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICBlZGl0LnRleHRDb250ZW50ID0gJ2VkaXQnO1xuXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIsIFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG5cbiAgICBmaXJzdFRhc2tEaXYuYXBwZW5kKHRpdGxlKVxuICAgIGxhc3RUYXNrRGl2LmFwcGVuZChkZXRhaWxzQnRuLCBkYXRlRGl2LCBlZGl0LCBkZWxldGVCdG4pXG4gICAgdGFza0Rpdi5hcHBlbmQoZmlyc3RUYXNrRGl2LCBsYXN0VGFza0RpdilcbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmQodGFza0Rpdilcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tVSShpZCkge1xuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgICBjb25zdCB0YXNrID0gZGVmYXVsdFByb2plY3QuZ2V0VGFzayhpZClcblxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tEaXYuY2hpbGROb2Rlc1swXVxuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0VGl0bGUoKVxuXG4gICAgaWYgKHRhc2suZ2V0UHJpb3JpdHkoKSA9PSAnTG93Jykge1xuICAgICAgICB0YXNrRGl2LnN0eWxlLmJvcmRlckxlZnQgPSAnNXB4IHNvbGlkIGdyZWVuJztcbiAgICB9IGVsc2UgaWYgKHRhc2suZ2V0UHJpb3JpdHkoKSA9PSAnTWVkaXVtJykge1xuICAgICAgICB0YXNrRGl2LnN0eWxlLmJvcmRlckxlZnQgPSAnNXB4IHNvbGlkIG9yYW5nZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza0Rpdi5zdHlsZS5ib3JkZXJMZWZ0ID0gJzVweCBzb2xpZCByZWQnO1xuICAgIH1cblxuICAgIGlmICh0YXNrLmdldFN0YXR1cygpID09ICdDb21wbGV0ZScpIHtcbiAgICAgICAgdGFza0Rpdi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gICAgfSBlbHNlIGlmICh0YXNrLmdldFN0YXR1cygpID09ICdJbmNvbXBsZXRlJykge1xuICAgICAgICB0YXNrRGl2LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdGFza0Rpdi5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMV1cbiAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGF0ZSgpXG59XG5cblxuLy8gVGFzayBFdmVudCBMaXN0ZW5lcnNcblxubGV0IHRhc2tJZCAvLyB0aGUgdmFyaWFibGUgdG8gYWNjZXNzIGEgc3BlY2lmaWMgdGFzayBpZCBmb3IgZWRpdGluZ1xuXG5jb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIilcbnRhc2tzRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgICBcblxuICAgIC8vIEVkaXRcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcInNwYW5cIikgJiYgZS50YXJnZXQudGV4dENvbnRlbnQgPT0gXCJlZGl0XCIpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1mb3JtXCIpO1xuICAgICAgICBvcGVuRm9ybShmb3JtKVxuXG4gICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxuICAgICAgICBjb25zdCB0YXNrVG9FZGl0ID0gZGVmYXVsdFByb2plY3QuZ2V0VGFzayhpZClcblxuICAgICAgICB0YXNrSWQgPSBpZFxuICAgICAgICBcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGl0bGUnKVxuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kZXNjcmlwdGlvbicpXG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZHVlLWRhdGUnKVxuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1wcmlvcml0eScpXG4gICAgICAgIGNvbnN0IHRhc2tDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXN0YXR1cycpXG5cbiAgICAgICAgdGFza1RpdGxlLnZhbHVlID0gdGFza1RvRWRpdC5nZXRUaXRsZSgpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSB0YXNrVG9FZGl0LmdldERlc2NyaXB0aW9uKCk7XG4gICAgICAgIHRhc2tEYXRlLnZhbHVlID0gdGFza1RvRWRpdC5nZXREYXRlKCk7XG4gICAgICAgIHRhc2tQcmlvcml0eS52YWx1ZSA9IHRhc2tUb0VkaXQuZ2V0UHJpb3JpdHkoKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0YXNrVG9FZGl0LmdldFN0YXR1cygpID09ICdDb21wbGV0ZScpIHtcbiAgICAgICAgICAgIHRhc2tDaGVja2JveC5jaGVja2VkID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFza0NoZWNrYm94LmNoZWNrZWQgPSBmYWxzZVxuICAgICAgICB9ICAgICAgICBcblxuICAgIC8vIERlbGV0ZSAgXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwic3BhblwiKSAmJiBlLnRhcmdldC50ZXh0Q29udGVudCA9PSBcImRlbGV0ZVwiKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGVcbiAgICAgICAgZGVmYXVsdFByb2plY3QucmVtb3ZlVGFzayh0YXNrLmlkKVxuICAgICAgICB0YXNrLnJlbW92ZSgpXG4gICAgXG5cbiAgICAvLyBEZXRhaWxzIEJ1dHRvblxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcImJ1dHRvblwiKSAmJiBlLnRhcmdldC50ZXh0Q29udGVudCA9PSAnRGV0YWlscycpIHtcbiAgICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWRcbiAgICAgICAgY29uc3QgdGFzayA9IGRlZmF1bHRQcm9qZWN0LmdldFRhc2soaWQpXG5cbiAgICAgICAgdGFza0lkID0gaWRcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXRpdGxlLW91dHB1dFwiKVxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWR1ZS1kYXRlLW91dHB1dFwiKVxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eS1vdXRwdXRcIilcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXN0YXR1cy1vdXRwdXRcIilcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXRhaWxzLW91dHB1dFwiKVxuXG5cbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLmdldFRpdGxlKClcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGF0ZSgpXG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5nZXRQcmlvcml0eSgpXG4gICAgICAgIHN0YXR1cy50ZXh0Q29udGVudCA9IHRhc2suZ2V0U3RhdHVzKClcbiAgICAgICAgZGV0YWlscy50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKVxuXG4gICAgICAgIGNvbnN0IGRldGFpbHNNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXRhaWxzXCIpO1xuICAgICAgICBvcGVuRm9ybShkZXRhaWxzTW9kYWwpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1jbG9zZS1idXR0b25dXCIpXG4gICAgICAgIGNsb3NlTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBidXR0b24uY2xvc2VzdChcIiN0YXNrLWRldGFpbHNcIilcbiAgICAgICAgICAgICAgICBjbG9zZUZvcm0oZm9ybSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxufSk7XG5cbi8vIFRhc2sgQnV0dG9uIEZ1bmN0aW9uYWxpdHlcblxuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xuY29uc3QgZWRpdFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrJyk7XG5cbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKClcbiAgICBjcmVhdGVUYXNrVUkobmV3VGFzaylcbiAgICBkZWZhdWx0UHJvamVjdC5hZGRUYXNrKG5ld1Rhc2spXG4gICAgY29uc3QgZm9ybUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY2FyZFwiKTtcbiAgICBmb3JtQ2FyZC5yZXNldCgpO1xuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZS1kYXRlJylcbiAgICBjb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIHRhc2tEYXRlLnZhbHVlID0gdG9kYXlEYXRlO1xufSlcblxuZWRpdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHVwZGF0ZVRhc2soKVxuICAgIHVwZGF0ZVRhc2tVSSh0YXNrSWQpXG59KSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXygxMzgpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKTtcbiJdLCJuYW1lcyI6WyJUYXNrIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsInN0YXR1cyIsImlkIiwiZ2V0VGl0bGUiLCJzZXRUaXRsZSIsIm5ld1RpdGxlIiwiZ2V0RGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsIm5ld0Rlc2NyaXB0aW9uIiwiZ2V0RGF0ZSIsInNldERhdGUiLCJuZXdEYXRlIiwiZ2V0UHJpb3JpdHkiLCJzZXRQcmlvcml0eSIsIm5ld1ByaW9yaXR5IiwiZ2V0U3RhdHVzIiwic2V0U3RhdHVzIiwibmV3U3RhdHVzIiwiZ2V0SWQiLCJzZXRJZCIsIm5ld0lkIiwiUHJvamVjdCIsInByb2plY3RUaXRsZSIsInByb2plY3RJZCIsInByb2plY3QiLCJnZXRUYXNrcyIsImdldFByb2plY3RUaXRsZSIsImdldFByb2plY3RJZCIsInNldFByb2plY3RUaXRsZSIsInNldFByb2plY3RJZCIsImdldFRhc2siLCJmaW5kIiwidGFzayIsImFkZFRhc2siLCJwdXNoIiwicmVtb3ZlVGFzayIsImZpbHRlciIsIlRvRG8iLCJ0b0RvIiwiZ2V0UHJvamVjdCIsImdldFByb2plY3RzIiwiYWRkUHJvamVjdCIsInJlbW92ZVByb2plY3QiLCJvcGVuTW9kYWxCdXR0b25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VNb2RhbEJ1dHRvbnMiLCJvdmVybGF5IiwiZ2V0RWxlbWVudEJ5SWQiLCJvcGVuRm9ybSIsImZvcm0iLCJjbGFzc0xpc3QiLCJhZGQiLCJjbG9zZUZvcm0iLCJyZW1vdmUiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJkYXRhc2V0IiwibW9kYWxUYXJnZXQiLCJjbG9zZXN0IiwiZGVmYXVsdFByb2plY3QiLCJ0YXNrRGF0ZSIsInRvZGF5RGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwidGFza0lkIiwidmFsdWUiLCJlIiwidGFyZ2V0IiwibWF0Y2hlcyIsInRleHRDb250ZW50IiwicGFyZW50Tm9kZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXNrVG9FZGl0IiwidGFza1RpdGxlIiwidGFza0Rlc2NyaXB0aW9uIiwidGFza1ByaW9yaXR5IiwidGFza0NoZWNrYm94IiwiY2hlY2tlZCIsImRhdGUiLCJkZXRhaWxzIiwiYWRkVGFza0J1dHRvbiIsImVkaXRUYXNrQnV0dG9uIiwicHJldmVudERlZmF1bHQiLCJuZXdUYXNrIiwidGFza1N0YXR1cyIsInNlbGYiLCJjcnlwdG8iLCJyYW5kb21VVUlEIiwiY3JlYXRlVGFzayIsInRhc2tzQ29udGFpbmVyIiwidGFza0RpdiIsImNyZWF0ZUVsZW1lbnQiLCJmaXJzdFRhc2tEaXYiLCJzdHlsZSIsImJvcmRlckxlZnQiLCJvcGFjaXR5Iiwib3BhY3RpeSIsImxhc3RUYXNrRGl2IiwiZGV0YWlsc0J0biIsImRhdGVEaXYiLCJlZGl0IiwiZGVsZXRlQnRuIiwiYXBwZW5kIiwiY3JlYXRlVGFza1VJIiwicmVzZXQiLCJ1cGRhdGVUYXNrIiwiY2hpbGROb2RlcyIsInVwZGF0ZVRhc2tVSSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZCIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=