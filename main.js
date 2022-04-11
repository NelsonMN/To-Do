(()=>{"use strict";var t={138:(t,e,o)=>{o.d(e,{IK:()=>n,iQ:()=>d,m8:()=>s});const d=(t,e,o,d,n,s)=>({getTitle:()=>t,setTitle:e=>t=e,getDescription:()=>e,setDescription:t=>e=t,getDate:()=>o,setDate:t=>o=t,getPriority:()=>d,setPriority:t=>d=t,getStatus:()=>n,setStatus:t=>n=t,getId:()=>s,setId:t=>s=t}),n=(t,e)=>{let o=[];return{getTasks:()=>o,getProjectTitle:()=>t,getProjectId:()=>e,setProjectTitle:e=>t=e,setProjectId:t=>e=t,getTask:t=>o.find((e=>e.getId()===t)),addTask:t=>{o.push(t)},removeTask:t=>{o=o.filter((e=>e.getId()!==t))}}},s=()=>{let t=[];return{getProject:e=>t.find((t=>t.getProjectId()===e)),getProjects:()=>t,addProject:e=>{t.push(e)},removeProject:e=>{t=t.filter((t=>t.getProjectId()!==e))}}}},803:(t,e,o)=>{var d=o(138);(0,d.m8)();const n=(0,d.IK)("Default Project"),s=document.getElementById("due-date"),a=(new Date).toISOString().slice(0,10);let c;s.value=a,document.querySelector(".tasks").addEventListener("click",(t=>{if(t.target.matches("span")&&"edit"==t.target.textContent){g(document.querySelector("#edit-form"));const e=t.target.parentNode.parentNode.id;console.log(e);const o=n.getTask(e);c=e;const d=document.getElementById("edit-title"),s=document.getElementById("edit-description"),a=document.getElementById("edit-due-date"),l=document.getElementById("edit-priority"),r=document.getElementById("edit-status");d.value=o.getTitle(),s.value=o.getDescription(),a.value=o.getDate(),l.value=o.getPriority(),"Complete"==o.getStatus()?r.checked=!0:r.checked=!1}else if(t.target.matches("span")&&"delete"==t.target.textContent){const e=t.target.parentNode.parentNode;n.removeTask(e.id),e.remove()}else if(t.target.matches("button")&&"Details"==t.target.textContent){const e=t.target.parentNode.parentNode.id,o=n.getTask(e);c=e;const d=document.getElementById("task-title-output"),s=document.getElementById("task-due-date-output"),a=document.getElementById("task-priority-output"),l=document.getElementById("task-status-output"),r=document.getElementById("task-details-output");d.textContent=o.getTitle(),s.textContent=o.getDate(),a.textContent=o.getPriority(),l.textContent=o.getStatus(),r.textContent=o.getDescription(),g(document.getElementById("task-details")),document.querySelectorAll("[data-close-button]").forEach((t=>{t.addEventListener("click",(()=>{p(t.closest("#task-details"))}))}))}}));const l=document.querySelector(".add-task"),r=document.querySelector(".edit-task");l.addEventListener("click",(t=>{t.preventDefault();const e=function(){const t=document.getElementById("title").value,e=document.getElementById("description").value,o=document.getElementById("due-date").value,n=document.getElementById("priority").value;let s;s=document.getElementById("status").checked?"Complete":"Incomplete";const a=self.crypto.randomUUID();return(0,d.iQ)(t,e,o,n,s,a)}();!function(t){const e=document.querySelector(".tasks"),o=document.createElement("div");o.classList.add("task"),o.id=t.getId();const d=document.createElement("div");d.classList.add("first-task-elements"),"Low"==t.getPriority()?o.style.borderLeft="5px solid green":"Medium"==t.getPriority()?o.style.borderLeft="5px solid orange":o.style.borderLeft="5px solid red","Complete"==t.getStatus()?o.style.opacity="0.5":"Incomplete"==t.getStatus()&&(o.style.opactiy="1");const n=document.createElement("div");n.classList.add("title"),n.textContent=t.getTitle();const s=document.createElement("div");s.classList.add("last-task-elements");const a=document.createElement("button");a.textContent="Details",a.classList.add("details");const c=document.createElement("div");c.classList.add("due-date"),c.textContent=t.getDate();const l=document.createElement("span");l.classList.add("edit","material-icons-outlined"),l.textContent="edit";const r=document.createElement("span");r.classList.add("delete","material-icons-outlined"),r.textContent="delete",d.append(n),s.append(a,c,l,r),o.append(d,s),e.append(o)}(e),n.addTask(e),document.querySelector(".form-card").reset();const o=document.getElementById("due-date"),s=(new Date).toISOString().slice(0,10);o.value=s})),r.addEventListener("click",(t=>{t.preventDefault(),function(){const t=n.getTask(c),e=document.getElementById("edit-title").value,o=document.getElementById("edit-description").value,d=document.getElementById("edit-due-date").value,s=document.getElementById("edit-priority").value,a=document.getElementById("edit-status").checked;t.setTitle(e),t.setDescription(o),t.setDate(d),t.setPriority(s),a?t.setStatus("Complete"):t.setStatus("Incomplete")}(),function(t){const e=document.getElementById(t),o=n.getTask(t);e.childNodes[0].textContent=o.getTitle(),"Low"==o.getPriority()?e.style.borderLeft="5px solid green":"Medium"==o.getPriority()?e.style.borderLeft="5px solid orange":e.style.borderLeft="5px solid red","Complete"==o.getStatus()?e.style.opacity="0.5":"Incomplete"==o.getStatus()&&(e.style.opacity="1"),e.childNodes[1].childNodes[1].textContent=o.getDate()}(c)}));const i=document.querySelectorAll("[data-modal-target]"),u=document.querySelectorAll("[data-close-button]"),m=document.getElementById("overlay");function g(t){null!=t&&(t.classList.add("active"),m.classList.add("active"))}function p(t){null!=t&&(t.classList.remove("active"),m.classList.remove("active"))}i.forEach((t=>{t.addEventListener("click",(()=>{g(document.querySelector(t.dataset.modalTarget))}))})),u.forEach((t=>{t.addEventListener("click",(()=>{p(t.closest(".form"))}))}))}},e={};function o(d){var n=e[d];if(void 0!==n)return n.exports;var s=e[d]={exports:{}};return t[d](s,s.exports,o),s.exports}o.d=(t,e)=>{for(var d in e)o.o(e,d)&&!o.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:e[d]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o(138),o(803)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91c2VyLWludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIGlkKSA9PiB7XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICAgIGNvbnN0IHNldFRpdGxlID0gbmV3VGl0bGUgPT4gdGl0bGUgPSBuZXdUaXRsZTtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uPSBuZXdEZXNjcmlwdGlvbiA9PiBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGdldERhdGUgPSAoKSA9PiBkdWVEYXRlO1xuICAgIGNvbnN0IHNldERhdGUgPSBuZXdEYXRlID0+IGR1ZURhdGUgPSBuZXdEYXRlO1xuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSBuZXdQcmlvcml0eSA9PiBwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHN0YXR1cztcbiAgICBjb25zdCBzZXRTdGF0dXMgPSBuZXdTdGF0dXMgPT4gc3RhdHVzID0gbmV3U3RhdHVzO1xuICAgIGNvbnN0IGdldElkID0gKCkgPT4gaWQ7XG4gICAgY29uc3Qgc2V0SWQgPSBuZXdJZCA9PiBpZCA9IG5ld0lkO1xuXG4gICAgcmV0dXJuIHtnZXRUaXRsZSwgc2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbiwgZ2V0RGF0ZSwgc2V0RGF0ZSwgZ2V0UHJpb3JpdHksIHNldFByaW9yaXR5LCBnZXRTdGF0dXMsIHNldFN0YXR1cywgZ2V0SWQsIHNldElkfVxufTtcblxuXG5jb25zdCBQcm9qZWN0ID0gKHByb2plY3RUaXRsZSwgcHJvamVjdElkKSA9PiB7XG5cbiAgICBsZXQgcHJvamVjdCA9IFtdO1xuXG4gICAgY29uc3QgZ2V0UHJvamVjdFRpdGxlID0gKCkgPT4gcHJvamVjdFRpdGxlO1xuICAgIGNvbnN0IHNldFByb2plY3RUaXRsZSA9IG5ld1RpdGxlID0+IHByb2plY3RUaXRsZSA9IG5ld1RpdGxlO1xuICAgIGNvbnN0IGdldFByb2plY3RJZCA9ICgpID0+IHByb2plY3RJZDtcbiAgICBjb25zdCBzZXRQcm9qZWN0SWQgPSBuZXdJZCA9PiBwcm9qZWN0SWQgPSBuZXdJZDtcblxuICAgIGNvbnN0IGdldFRhc2sgPSAoaWQpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2plY3QuZmluZCgodGFzaykgPT4gdGFzay5nZXRJZCgpID09PSBpZClcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiBwcm9qZWN0O1xuXG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIHByb2plY3QucHVzaCh0YXNrKVxuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVUYXNrID0gKGlkKSA9PiB7XG4gICAgICAgIHByb2plY3QgPSBwcm9qZWN0LmZpbHRlcigodGFzaykgPT4gdGFzay5nZXRJZCgpICE9PSBpZClcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtnZXRUYXNrcywgZ2V0UHJvamVjdFRpdGxlLCBnZXRQcm9qZWN0SWQsIHNldFByb2plY3RUaXRsZSwgc2V0UHJvamVjdElkLCBnZXRUYXNrLCBhZGRUYXNrLCByZW1vdmVUYXNrfVxufTtcblxuXG5jb25zdCBUb0RvID0gKCkgPT4ge1xuICAgIFxuICAgIGxldCB0b0RvID0gW107XG4gICAgXG4gICAgY29uc3QgZ2V0UHJvamVjdCA9IChwcm9qZWN0SWQpID0+IHtcbiAgICAgICAgcmV0dXJuIHRvRG8uZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRQcm9qZWN0SWQoKSA9PT0gcHJvamVjdElkKVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHRvRG87XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgdG9Eby5wdXNoKHByb2plY3QpXG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdElkKSA9PiB7XG4gICAgICAgIHRvRG8gPSB0b0RvLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5nZXRQcm9qZWN0SWQoKSAhPT0gcHJvamVjdElkKVxuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIHtnZXRQcm9qZWN0LCBnZXRQcm9qZWN0cywgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdH1cbn07XG5cbmV4cG9ydCB7VGFzaywgUHJvamVjdCwgVG9Eb30iLCJpbXBvcnQge1Rhc2ssIFByb2plY3QsIFRvRG99IGZyb20gJy4vaW5kZXgnXG4vLyBJbml0aWFsaXplIFRvLURvIExpc3RcblxuY29uc3QgdG9Eb0xpc3QgPSBUb0RvKClcblxuXG4vLyBJbml0aWFsaXplIERlZmF1bHQgUHJvamVjdFxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBQcm9qZWN0KCdEZWZhdWx0IFByb2plY3QnKVxuXG5cbi8vIEluaXRpYWxpemUgRm9ybSBEZWZhdWx0c1xuY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLWRhdGUnKVxuY29uc3QgdG9kYXlEYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbnRhc2tEYXRlLnZhbHVlID0gdG9kYXlEYXRlO1xuXG5cbi8vIFRhc2sgVUlcblxuZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZVxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLWRhdGUnKS52YWx1ZVxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlXG4gICAgY29uc3QgdGFza0NoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cycpLmNoZWNrZWRcbiAgICBsZXQgdGFza1N0YXR1c1xuICAgIGlmICh0YXNrQ2hlY2tib3gpIHtcbiAgICAgICAgdGFza1N0YXR1cyA9ICdDb21wbGV0ZSdcbiAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrU3RhdHVzID0gJ0luY29tcGxldGUnXG4gICAgfVxuICAgIGNvbnN0IHRhc2tJZCA9IHNlbGYuY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICBjb25zdCBuZXdUYXNrID0gVGFzayh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0RhdGUsIHRhc2tQcmlvcml0eSwgdGFza1N0YXR1cywgdGFza0lkKVxuICAgIHJldHVybiBuZXdUYXNrXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2soKSB7XG4gICAgY29uc3QgdGFza1RvRWRpdCA9IGRlZmF1bHRQcm9qZWN0LmdldFRhc2sodGFza0lkKVxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRpdGxlJykudmFsdWVcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kZXNjcmlwdGlvbicpLnZhbHVlXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kdWUtZGF0ZScpLnZhbHVlXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJpb3JpdHknKS52YWx1ZVxuICAgIGNvbnN0IHRhc2tDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXN0YXR1cycpLmNoZWNrZWRcblxuICAgIHRhc2tUb0VkaXQuc2V0VGl0bGUodGFza1RpdGxlKVxuICAgIHRhc2tUb0VkaXQuc2V0RGVzY3JpcHRpb24odGFza0Rlc2NyaXB0aW9uKVxuICAgIHRhc2tUb0VkaXQuc2V0RGF0ZSh0YXNrRGF0ZSlcbiAgICB0YXNrVG9FZGl0LnNldFByaW9yaXR5KHRhc2tQcmlvcml0eSlcbiAgICBpZiAodGFza0NoZWNrYm94KSB7XG4gICAgICAgIHRhc2tUb0VkaXQuc2V0U3RhdHVzKCdDb21wbGV0ZScpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza1RvRWRpdC5zZXRTdGF0dXMoJ0luY29tcGxldGUnKVxuICAgIH0gXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tVSSh0YXNrKSB7XG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpXG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIilcbiAgICB0YXNrRGl2LmlkID0gdGFzay5nZXRJZCgpXG5cbiAgICBjb25zdCBmaXJzdFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmaXJzdFRhc2tEaXYuY2xhc3NMaXN0LmFkZChcImZpcnN0LXRhc2stZWxlbWVudHNcIilcblxuICAgIGlmICh0YXNrLmdldFByaW9yaXR5KCkgPT0gJ0xvdycpIHtcbiAgICAgICAgdGFza0Rpdi5zdHlsZS5ib3JkZXJMZWZ0ID0gJzVweCBzb2xpZCBncmVlbic7XG4gICAgfSBlbHNlIGlmICh0YXNrLmdldFByaW9yaXR5KCkgPT0gJ01lZGl1bScpIHtcbiAgICAgICAgdGFza0Rpdi5zdHlsZS5ib3JkZXJMZWZ0ID0gJzVweCBzb2xpZCBvcmFuZ2UnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza0Rpdi5zdHlsZS5ib3JkZXJMZWZ0ID0gJzVweCBzb2xpZCByZWQnXG4gICAgfVxuXG4gICAgaWYgKHRhc2suZ2V0U3RhdHVzKCkgPT0gJ0NvbXBsZXRlJykge1xuICAgICAgICB0YXNrRGl2LnN0eWxlLm9wYWNpdHkgPSAnMC41J1xuICAgIH0gZWxzZSBpZiAodGFzay5nZXRTdGF0dXMoKSA9PSAnSW5jb21wbGV0ZScpIHtcbiAgICAgICAgdGFza0Rpdi5zdHlsZS5vcGFjdGl5ID0gJzEnXG4gICAgfVxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIilcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0VGl0bGUoKVxuXG4gICAgY29uc3QgbGFzdFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsYXN0VGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwibGFzdC10YXNrLWVsZW1lbnRzXCIpO1xuXG4gICAgY29uc3QgZGV0YWlsc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZGV0YWlsc0J0bi50ZXh0Q29udGVudCA9ICdEZXRhaWxzJ1xuICAgIGRldGFpbHNCdG4uY2xhc3NMaXN0LmFkZCgnZGV0YWlscycpXG5cbiAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZScpO1xuICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSB0YXNrLmdldERhdGUoKVxuXG4gICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBlZGl0LmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIsIFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gICAgZWRpdC50ZXh0Q29udGVudCA9ICdlZGl0JztcblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVwiLCBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuXG4gICAgZmlyc3RUYXNrRGl2LmFwcGVuZCh0aXRsZSlcbiAgICBsYXN0VGFza0Rpdi5hcHBlbmQoZGV0YWlsc0J0biwgZGF0ZURpdiwgZWRpdCwgZGVsZXRlQnRuKVxuICAgIHRhc2tEaXYuYXBwZW5kKGZpcnN0VGFza0RpdiwgbGFzdFRhc2tEaXYpXG4gICAgdGFza3NDb250YWluZXIuYXBwZW5kKHRhc2tEaXYpXG59O1xuXG5mdW5jdGlvbiB1cGRhdGVUYXNrVUkoaWQpIHtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gICAgY29uc3QgdGFzayA9IGRlZmF1bHRQcm9qZWN0LmdldFRhc2soaWQpXG5cbiAgICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrRGl2LmNoaWxkTm9kZXNbMF1cbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLmdldFRpdGxlKClcblxuICAgIGlmICh0YXNrLmdldFByaW9yaXR5KCkgPT0gJ0xvdycpIHtcbiAgICAgICAgdGFza0Rpdi5zdHlsZS5ib3JkZXJMZWZ0ID0gJzVweCBzb2xpZCBncmVlbic7XG4gICAgfSBlbHNlIGlmICh0YXNrLmdldFByaW9yaXR5KCkgPT0gJ01lZGl1bScpIHtcbiAgICAgICAgdGFza0Rpdi5zdHlsZS5ib3JkZXJMZWZ0ID0gJzVweCBzb2xpZCBvcmFuZ2UnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tEaXYuc3R5bGUuYm9yZGVyTGVmdCA9ICc1cHggc29saWQgcmVkJztcbiAgICB9XG5cbiAgICBpZiAodGFzay5nZXRTdGF0dXMoKSA9PSAnQ29tcGxldGUnKSB7XG4gICAgICAgIHRhc2tEaXYuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xuICAgIH0gZWxzZSBpZiAodGFzay5nZXRTdGF0dXMoKSA9PSAnSW5jb21wbGV0ZScpIHtcbiAgICAgICAgdGFza0Rpdi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHRhc2tEaXYuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdXG4gICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmdldERhdGUoKVxufVxuXG5cbi8vIFRhc2sgRXZlbnQgTGlzdGVuZXJzXG5cbmxldCB0YXNrSWQgLy8gdGhlIHZhcmlhYmxlIHRvIGFjY2VzcyBhIHNwZWNpZmljIHRhc2sgaWQgZm9yIGVkaXRpbmdcblxuY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpXG50YXNrc0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7ICAgXG5cbiAgICAvLyBFZGl0XG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCJzcGFuXCIpICYmIGUudGFyZ2V0LnRleHRDb250ZW50ID09IFwiZWRpdFwiKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtZm9ybVwiKTtcbiAgICAgICAgb3BlbkZvcm0oZm9ybSlcblxuICAgICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZFxuICAgICAgICBjb25zb2xlLmxvZyhpZClcbiAgICAgICAgY29uc3QgdGFza1RvRWRpdCA9IGRlZmF1bHRQcm9qZWN0LmdldFRhc2soaWQpXG5cbiAgICAgICAgdGFza0lkID0gaWRcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRpdGxlJylcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZGVzY3JpcHRpb24nKVxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWR1ZS1kYXRlJylcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJpb3JpdHknKVxuICAgICAgICBjb25zdCB0YXNrQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1zdGF0dXMnKVxuXG4gICAgICAgIHRhc2tUaXRsZS52YWx1ZSA9IHRhc2tUb0VkaXQuZ2V0VGl0bGUoKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gdGFza1RvRWRpdC5nZXREZXNjcmlwdGlvbigpO1xuICAgICAgICB0YXNrRGF0ZS52YWx1ZSA9IHRhc2tUb0VkaXQuZ2V0RGF0ZSgpO1xuICAgICAgICB0YXNrUHJpb3JpdHkudmFsdWUgPSB0YXNrVG9FZGl0LmdldFByaW9yaXR5KCk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGFza1RvRWRpdC5nZXRTdGF0dXMoKSA9PSAnQ29tcGxldGUnKSB7XG4gICAgICAgICAgICB0YXNrQ2hlY2tib3guY2hlY2tlZCA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tDaGVja2JveC5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgfSAgICAgICAgXG5cbiAgICAvLyBEZWxldGUgIFxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcInNwYW5cIikgJiYgZS50YXJnZXQudGV4dENvbnRlbnQgPT0gXCJkZWxldGVcIikge1xuICAgICAgICBjb25zdCB0YXNrID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlXG4gICAgICAgIGRlZmF1bHRQcm9qZWN0LnJlbW92ZVRhc2sodGFzay5pZClcbiAgICAgICAgdGFzay5yZW1vdmUoKVxuICAgIFxuXG4gICAgLy8gRGV0YWlscyBCdXR0b25cbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCJidXR0b25cIikgJiYgZS50YXJnZXQudGV4dENvbnRlbnQgPT0gJ0RldGFpbHMnKSB7XG4gICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkXG4gICAgICAgIGNvbnN0IHRhc2sgPSBkZWZhdWx0UHJvamVjdC5nZXRUYXNrKGlkKVxuXG4gICAgICAgIHRhc2tJZCA9IGlkXG4gICAgICAgIFxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZS1vdXRwdXRcIilcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kdWUtZGF0ZS1vdXRwdXRcIilcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHktb3V0cHV0XCIpXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1zdGF0dXMtb3V0cHV0XCIpXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGV0YWlscy1vdXRwdXRcIilcblxuXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay5nZXRUaXRsZSgpXG4gICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSB0YXNrLmdldERhdGUoKVxuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2suZ2V0UHJpb3JpdHkoKVxuICAgICAgICBzdGF0dXMudGV4dENvbnRlbnQgPSB0YXNrLmdldFN0YXR1cygpXG4gICAgICAgIGRldGFpbHMudGV4dENvbnRlbnQgPSB0YXNrLmdldERlc2NyaXB0aW9uKClcblxuICAgICAgICBjb25zdCBkZXRhaWxzTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGV0YWlsc1wiKTtcbiAgICAgICAgb3BlbkZvcm0oZGV0YWlsc01vZGFsKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgY2xvc2VNb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtY2xvc2UtYnV0dG9uXVwiKVxuICAgICAgICBjbG9zZU1vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtID0gYnV0dG9uLmNsb3Nlc3QoXCIjdGFzay1kZXRhaWxzXCIpXG4gICAgICAgICAgICAgICAgY2xvc2VGb3JtKGZvcm0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbn0pO1xuXG4vLyBUYXNrIEJ1dHRvbiBGdW5jdGlvbmFsaXR5XG5cbmNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKTtcbmNvbnN0IGVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzaycpO1xuXG5hZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzaygpXG4gICAgY3JlYXRlVGFza1VJKG5ld1Rhc2spXG4gICAgZGVmYXVsdFByb2plY3QuYWRkVGFzayhuZXdUYXNrKVxuICAgIGNvbnN0IGZvcm1DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNhcmRcIik7XG4gICAgZm9ybUNhcmQucmVzZXQoKTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpXG4gICAgY29uc3QgdG9kYXlEYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICB0YXNrRGF0ZS52YWx1ZSA9IHRvZGF5RGF0ZTtcbn0pXG5cbmVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB1cGRhdGVUYXNrKClcbiAgICB1cGRhdGVUYXNrVUkodGFza0lkKVxufSlcblxuXG4vLyBNb2RhbCBBY3Rpb25zOlxuXG5jb25zdCBvcGVuTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1vZGFsLXRhcmdldF1cIik7XG5jb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1jbG9zZS1idXR0b25dXCIpO1xuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKTtcblxub3Blbk1vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0Lm1vZGFsVGFyZ2V0KTtcbiAgICAgICAgb3BlbkZvcm0oZm9ybSk7XG4gICAgfSlcbn0pIFxuXG5jbG9zZU1vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBidXR0b24uY2xvc2VzdChcIi5mb3JtXCIpXG4gICAgICAgIGNsb3NlRm9ybShmb3JtKTtcbiAgICB9KVxufSlcblxuZnVuY3Rpb24gb3BlbkZvcm0oZm9ybSkge1xuICAgIGlmIChmb3JtID09IG51bGwpIHJldHVyblxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRm9ybShmb3JtKSB7XG4gICAgaWYgKGZvcm0gPT0gbnVsbCkgcmV0dXJuXG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oMTM4KTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4MDMpO1xuIl0sIm5hbWVzIjpbIlRhc2siLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5Iiwic3RhdHVzIiwiaWQiLCJnZXRUaXRsZSIsInNldFRpdGxlIiwibmV3VGl0bGUiLCJnZXREZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwibmV3RGVzY3JpcHRpb24iLCJnZXREYXRlIiwic2V0RGF0ZSIsIm5ld0RhdGUiLCJnZXRQcmlvcml0eSIsInNldFByaW9yaXR5IiwibmV3UHJpb3JpdHkiLCJnZXRTdGF0dXMiLCJzZXRTdGF0dXMiLCJuZXdTdGF0dXMiLCJnZXRJZCIsInNldElkIiwibmV3SWQiLCJQcm9qZWN0IiwicHJvamVjdFRpdGxlIiwicHJvamVjdElkIiwicHJvamVjdCIsImdldFRhc2tzIiwiZ2V0UHJvamVjdFRpdGxlIiwiZ2V0UHJvamVjdElkIiwic2V0UHJvamVjdFRpdGxlIiwic2V0UHJvamVjdElkIiwiZ2V0VGFzayIsImZpbmQiLCJ0YXNrIiwiYWRkVGFzayIsInB1c2giLCJyZW1vdmVUYXNrIiwiZmlsdGVyIiwiVG9EbyIsInRvRG8iLCJnZXRQcm9qZWN0IiwiZ2V0UHJvamVjdHMiLCJhZGRQcm9qZWN0IiwicmVtb3ZlUHJvamVjdCIsImRlZmF1bHRQcm9qZWN0IiwidGFza0RhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidG9kYXlEYXRlIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJ0YXNrSWQiLCJ2YWx1ZSIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsIm1hdGNoZXMiLCJ0ZXh0Q29udGVudCIsIm9wZW5Gb3JtIiwicGFyZW50Tm9kZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXNrVG9FZGl0IiwidGFza1RpdGxlIiwidGFza0Rlc2NyaXB0aW9uIiwidGFza1ByaW9yaXR5IiwidGFza0NoZWNrYm94IiwiY2hlY2tlZCIsInJlbW92ZSIsImRhdGUiLCJkZXRhaWxzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidXR0b24iLCJjbG9zZUZvcm0iLCJjbG9zZXN0IiwiYWRkVGFza0J1dHRvbiIsImVkaXRUYXNrQnV0dG9uIiwicHJldmVudERlZmF1bHQiLCJuZXdUYXNrIiwidGFza1N0YXR1cyIsInNlbGYiLCJjcnlwdG8iLCJyYW5kb21VVUlEIiwiY3JlYXRlVGFzayIsInRhc2tzQ29udGFpbmVyIiwidGFza0RpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJmaXJzdFRhc2tEaXYiLCJzdHlsZSIsImJvcmRlckxlZnQiLCJvcGFjaXR5Iiwib3BhY3RpeSIsImxhc3RUYXNrRGl2IiwiZGV0YWlsc0J0biIsImRhdGVEaXYiLCJlZGl0IiwiZGVsZXRlQnRuIiwiYXBwZW5kIiwiY3JlYXRlVGFza1VJIiwicmVzZXQiLCJ1cGRhdGVUYXNrIiwiY2hpbGROb2RlcyIsInVwZGF0ZVRhc2tVSSIsIm9wZW5Nb2RhbEJ1dHRvbnMiLCJjbG9zZU1vZGFsQnV0dG9ucyIsIm92ZXJsYXkiLCJmb3JtIiwiZGF0YXNldCIsIm1vZGFsVGFyZ2V0IiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJkIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==