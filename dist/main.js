(()=>{"use strict";var e={138:(e,t,d)=>{d.d(t,{IK:()=>o,iQ:()=>n,m8:()=>c});const n=(e,t,d,n,o,c)=>({getTitle:()=>e,setTitle:t=>e=t,getDescription:()=>t,setDescription:e=>t=e,getDate:()=>d,setDate:e=>d=e,getPriority:()=>n,setPriority:e=>n=e,getStatus:()=>o,setStatus:e=>o=e,getId:()=>c,setId:e=>c=e}),o=(e,t)=>{let d=[];return{getTasks:()=>d,getProjectTitle:()=>e,getProjectId:()=>t,setProjectTitle:t=>e=t,setProjectId:e=>t=e,getTask:e=>d.find((t=>t.getId()===e)),addTask:e=>{d.push(e)},removeTask:e=>{d=d.filter((t=>t.getId()!==e))}}},c=()=>{let e=[];return{getProject:t=>e.find((e=>e.getProjectId()===t)),getProjects:()=>e,addProject:t=>{e.push(t)},removeProject:t=>{e=e.filter((e=>e.getProjectId()!==t))}}}},803:(e,t,d)=>{var n=d(138);(0,n.m8)();const o=(0,n.IK)("Default Project");let c;document.querySelector(".tasks").addEventListener("click",(e=>{if(e.target.matches("span")&&"edit"==e.target.textContent){u(document.querySelector("#edit-form"));const t=e.target.parentNode.parentNode.id,d=o.getTask(t);c=t;const n=document.getElementById("edit-title"),s=document.getElementById("edit-description"),a=document.getElementById("edit-due-date"),r=document.getElementById("edit-priority"),l=document.getElementById("edit-status");n.value=d.getTitle(),s.value=d.getDescription(),a.value=d.getDate(),r.value=d.getPriority(),"Complete"==d.getStatus()?l.checked=!0:l.checked=!1}else if(e.target.matches("span")&&"delete"==e.target.textContent){const t=e.target.parentNode.parentNode;o.removeTask(t.id),t.remove()}}));const s=document.querySelectorAll("[data-modal-target]"),a=document.querySelectorAll("[data-close-button]"),r=document.getElementById("overlay"),l=document.querySelector(".add-task"),i=document.querySelector(".edit-task");function u(e){null!=e&&(e.classList.add("active"),r.classList.add("active"))}s.forEach((e=>{e.addEventListener("click",(()=>{u(document.querySelector(e.dataset.modalTarget))}))})),a.forEach((e=>{e.addEventListener("click",(()=>{var t;null!=(t=e.closest(".form"))&&(t.classList.remove("active"),r.classList.remove("active"))}))})),l.addEventListener("click",(e=>{e.preventDefault();const t=function(){const e=document.getElementById("title").value,t=document.getElementById("description").value,d=document.getElementById("due-date").value,o=document.getElementById("priority").value;let c;c=document.getElementById("status").checked?"Complete":"Incomplete";const s=self.crypto.randomUUID();return(0,n.iQ)(e,t,d,o,c,s)}();!function(e){const t=document.querySelector(".tasks"),d=document.createElement("div");d.classList.add("task"),d.id=e.getId();const n=document.createElement("div");n.classList.add("first-task-elements");const o=document.createElement("div");o.classList.add("title"),o.textContent=e.getTitle();const c=document.createElement("div");c.classList.add("last-task-elements");const s=document.createElement("div");s.classList.add("due-date"),s.textContent=e.getDate();const a=document.createElement("span");a.classList.add("edit","material-icons-outlined"),a.textContent="edit";const r=document.createElement("span");r.classList.add("delete","material-icons-outlined"),r.textContent="delete",n.append(o),c.append(s,a,r),d.append(n,c),t.append(d)}(t),o.addTask(t),document.querySelector(".form-card").reset()})),i.addEventListener("click",(e=>{e.preventDefault(),function(){const e=o.getTask(c),t=document.getElementById("edit-title").value,d=document.getElementById("edit-description").value,n=document.getElementById("edit-due-date").value,s=document.getElementById("edit-priority").value,a=document.getElementById("edit-status").checked;e.setTitle(t),e.setDescription(d),e.setDate(n),e.setPriority(s),a?e.setStatus("Complete"):e.setStatus("Incomplete")}(),function(e){const t=document.getElementById(e),d=o.getTask(e);t.childNodes[0].textContent=d.getTitle();const n=t.childNodes[1].childNodes[0];console.log(n),n.textContent=d.getDate()}(c)}))}},t={};function d(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,d),c.exports}d.d=(e,t)=>{for(var n in t)d.o(t,n)&&!d.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),d(138),d(803)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxHQUFHQSxXQUFXLEdBQ3JERSxRQUFRQyxJQUFJRixHQUNaQSxFQUFZaEQsWUFBY25CLEVBQUt2QixVQTZGL0I2RixDQUFhMUQsUUNwTGIyRCxFQUEyQixHQUcvQixTQUFTQyxFQUFvQkMsR0FFNUIsSUFBSUMsRUFBZUgsRUFBeUJFLEdBQzVDLFFBQXFCRSxJQUFqQkQsRUFDSCxPQUFPQSxFQUFhRSxRQUdyQixJQUFJQyxFQUFTTixFQUF5QkUsR0FBWSxDQUdqREcsUUFBUyxJQU9WLE9BSEFFLEVBQW9CTCxHQUFVSSxFQUFRQSxFQUFPRCxRQUFTSixHQUcvQ0ssRUFBT0QsUUNwQmZKLEVBQW9CTyxFQUFJLENBQUNILEVBQVNJLEtBQ2pDLElBQUksSUFBSUMsS0FBT0QsRUFDWFIsRUFBb0JVLEVBQUVGLEVBQVlDLEtBQVNULEVBQW9CVSxFQUFFTixFQUFTSyxJQUM1RUUsT0FBT0MsZUFBZVIsRUFBU0ssRUFBSyxDQUFFSSxZQUFZLEVBQU1DLElBQUtOLEVBQVdDLE1DSjNFVCxFQUFvQlUsRUFBSSxDQUFDSyxFQUFLQyxJQUFVTCxPQUFPTSxVQUFVQyxlQUFlQyxLQUFLSixFQUFLQyxHQ0dsRmhCLEVBQW9CLEtBQ01BLEVBQW9CLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91c2VyLWludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIGlkKSA9PiB7XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICAgIGNvbnN0IHNldFRpdGxlID0gbmV3VGl0bGUgPT4gdGl0bGUgPSBuZXdUaXRsZTtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uPSBuZXdEZXNjcmlwdGlvbiA9PiBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGdldERhdGUgPSAoKSA9PiBkdWVEYXRlO1xuICAgIGNvbnN0IHNldERhdGUgPSBuZXdEYXRlID0+IGR1ZURhdGUgPSBuZXdEYXRlO1xuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSBuZXdQcmlvcml0eSA9PiBwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHN0YXR1cztcbiAgICBjb25zdCBzZXRTdGF0dXMgPSBuZXdTdGF0dXMgPT4gc3RhdHVzID0gbmV3U3RhdHVzO1xuICAgIGNvbnN0IGdldElkID0gKCkgPT4gaWQ7XG4gICAgY29uc3Qgc2V0SWQgPSBuZXdJZCA9PiBpZCA9IG5ld0lkO1xuXG4gICAgcmV0dXJuIHtnZXRUaXRsZSwgc2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbiwgZ2V0RGF0ZSwgc2V0RGF0ZSwgZ2V0UHJpb3JpdHksIHNldFByaW9yaXR5LCBnZXRTdGF0dXMsIHNldFN0YXR1cywgZ2V0SWQsIHNldElkfVxufTtcblxuXG5jb25zdCBQcm9qZWN0ID0gKHByb2plY3RUaXRsZSwgcHJvamVjdElkKSA9PiB7XG5cbiAgICBsZXQgcHJvamVjdCA9IFtdO1xuXG4gICAgY29uc3QgZ2V0UHJvamVjdFRpdGxlID0gKCkgPT4gcHJvamVjdFRpdGxlO1xuICAgIGNvbnN0IHNldFByb2plY3RUaXRsZSA9IG5ld1RpdGxlID0+IHByb2plY3RUaXRsZSA9IG5ld1RpdGxlO1xuICAgIGNvbnN0IGdldFByb2plY3RJZCA9ICgpID0+IHByb2plY3RJZDtcbiAgICBjb25zdCBzZXRQcm9qZWN0SWQgPSBuZXdJZCA9PiBwcm9qZWN0SWQgPSBuZXdJZDtcblxuICAgIGNvbnN0IGdldFRhc2sgPSAoaWQpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2plY3QuZmluZCgodGFzaykgPT4gdGFzay5nZXRJZCgpID09PSBpZClcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiBwcm9qZWN0O1xuXG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIHByb2plY3QucHVzaCh0YXNrKVxuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVUYXNrID0gKGlkKSA9PiB7XG4gICAgICAgIHByb2plY3QgPSBwcm9qZWN0LmZpbHRlcigodGFzaykgPT4gdGFzay5nZXRJZCgpICE9PSBpZClcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtnZXRUYXNrcywgZ2V0UHJvamVjdFRpdGxlLCBnZXRQcm9qZWN0SWQsIHNldFByb2plY3RUaXRsZSwgc2V0UHJvamVjdElkLCBnZXRUYXNrLCBhZGRUYXNrLCByZW1vdmVUYXNrfVxufTtcblxuXG5jb25zdCBUb0RvID0gKCkgPT4ge1xuICAgIFxuICAgIGxldCB0b0RvID0gW107XG4gICAgXG4gICAgY29uc3QgZ2V0UHJvamVjdCA9IChwcm9qZWN0SWQpID0+IHtcbiAgICAgICAgcmV0dXJuIHRvRG8uZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRQcm9qZWN0SWQoKSA9PT0gcHJvamVjdElkKVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHRvRG87XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgdG9Eby5wdXNoKHByb2plY3QpXG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdElkKSA9PiB7XG4gICAgICAgIHRvRG8gPSB0b0RvLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5nZXRQcm9qZWN0SWQoKSAhPT0gcHJvamVjdElkKVxuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIHtnZXRQcm9qZWN0LCBnZXRQcm9qZWN0cywgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdH1cbn07XG5cbmV4cG9ydCB7VGFzaywgUHJvamVjdCwgVG9Eb30iLCJpbXBvcnQge1Rhc2ssIFByb2plY3QsIFRvRG99IGZyb20gJy4vaW5kZXgnXG4vLyBJbml0aWFsaXphdGlvbjpcblxuY29uc3QgdG9Eb0xpc3QgPSBUb0RvKClcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBQcm9qZWN0KCdEZWZhdWx0IFByb2plY3QnKVxuXG4vLyBUYXNrIFVJXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soKSB7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWVcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZVxuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZS1kYXRlJykudmFsdWVcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZVxuICAgIGNvbnN0IHRhc2tDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKS5jaGVja2VkXG4gICAgbGV0IHRhc2tTdGF0dXNcbiAgICBpZiAodGFza0NoZWNrYm94KSB7XG4gICAgICAgIHRhc2tTdGF0dXMgPSAnQ29tcGxldGUnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza1N0YXR1cyA9ICdJbmNvbXBsZXRlJ1xuICAgIH1cbiAgICBjb25zdCB0YXNrSWQgPSBzZWxmLmNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgY29uc3QgbmV3VGFzayA9IFRhc2sodGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHksIHRhc2tTdGF0dXMsIHRhc2tJZClcbiAgICByZXR1cm4gbmV3VGFza1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrKCkge1xuICAgIGNvbnN0IHRhc2tUb0VkaXQgPSBkZWZhdWx0UHJvamVjdC5nZXRUYXNrKHRhc2tJZClcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZScpLnZhbHVlXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZGVzY3JpcHRpb24nKS52YWx1ZVxuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZHVlLWRhdGUnKS52YWx1ZVxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByaW9yaXR5JykudmFsdWVcbiAgICBjb25zdCB0YXNrQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1zdGF0dXMnKS5jaGVja2VkXG5cbiAgICB0YXNrVG9FZGl0LnNldFRpdGxlKHRhc2tUaXRsZSlcbiAgICB0YXNrVG9FZGl0LnNldERlc2NyaXB0aW9uKHRhc2tEZXNjcmlwdGlvbilcbiAgICB0YXNrVG9FZGl0LnNldERhdGUodGFza0RhdGUpXG4gICAgdGFza1RvRWRpdC5zZXRQcmlvcml0eSh0YXNrUHJpb3JpdHkpXG4gICAgaWYgKHRhc2tDaGVja2JveCkge1xuICAgICAgICB0YXNrVG9FZGl0LnNldFN0YXR1cygnQ29tcGxldGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tUb0VkaXQuc2V0U3RhdHVzKCdJbmNvbXBsZXRlJylcbiAgICB9ICAgICBcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza1VJKHRhc2spIHtcbiAgICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIilcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIilcbiAgICBkaXYuaWQgPSB0YXNrLmdldElkKClcblxuICAgIGNvbnN0IGZpcnN0VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZpcnN0VGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwiZmlyc3QtdGFzay1lbGVtZW50c1wiKVxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIilcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0VGl0bGUoKVxuXG4gICAgY29uc3QgbGFzdFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsYXN0VGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwibGFzdC10YXNrLWVsZW1lbnRzXCIpO1xuXG4gICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUnKTtcbiAgICBkYXRlRGl2LnRleHRDb250ZW50ID0gdGFzay5nZXREYXRlKClcblxuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZWRpdC5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiLCBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICAgIGVkaXQudGV4dENvbnRlbnQgPSAnZWRpdCc7XG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIiwgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnZGVsZXRlJztcblxuICAgIGZpcnN0VGFza0Rpdi5hcHBlbmQodGl0bGUpXG4gICAgbGFzdFRhc2tEaXYuYXBwZW5kKGRhdGVEaXYsIGVkaXQsIGRlbGV0ZUJ0bilcbiAgICBkaXYuYXBwZW5kKGZpcnN0VGFza0RpdiwgbGFzdFRhc2tEaXYpXG4gICAgdGFza3NEaXYuYXBwZW5kKGRpdilcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tVSShpZCkge1xuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgICBjb25zdCB0YXNrID0gZGVmYXVsdFByb2plY3QuZ2V0VGFzayhpZClcblxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tEaXYuY2hpbGROb2Rlc1swXVxuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0VGl0bGUoKVxuICAgIFxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdGFza0Rpdi5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF1cbiAgICBjb25zb2xlLmxvZyh0YXNrRHVlRGF0ZSlcbiAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGF0ZSgpXG59XG5cblxuLy8gVGFzayBFdmVudCBMaXN0ZW5lcnNcblxuLy8gdGhlIHZhcmlhYmxlIHRvIGFjY2VzcyBhIHNwZWNpZmljIHRhc2sgaWQgZm9yIGVkaXRpbmdcbmxldCB0YXNrSWRcblxuY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpXG50YXNrc0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7ICAgXG5cbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcInNwYW5cIikgJiYgZS50YXJnZXQudGV4dENvbnRlbnQgPT0gXCJlZGl0XCIpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1mb3JtXCIpO1xuICAgICAgICBvcGVuRm9ybShmb3JtKVxuXG4gICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkXG4gICAgICAgIGNvbnN0IHRhc2tUb0VkaXQgPSBkZWZhdWx0UHJvamVjdC5nZXRUYXNrKGlkKVxuXG4gICAgICAgIHRhc2tJZCA9IGlkXG4gICAgICAgIFxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZScpXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRlc2NyaXB0aW9uJylcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kdWUtZGF0ZScpXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByaW9yaXR5JylcbiAgICAgICAgY29uc3QgdGFza0NoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtc3RhdHVzJylcblxuICAgICAgICB0YXNrVGl0bGUudmFsdWUgPSB0YXNrVG9FZGl0LmdldFRpdGxlKCk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2tUb0VkaXQuZ2V0RGVzY3JpcHRpb24oKTtcbiAgICAgICAgdGFza0RhdGUudmFsdWUgPSB0YXNrVG9FZGl0LmdldERhdGUoKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LnZhbHVlID0gdGFza1RvRWRpdC5nZXRQcmlvcml0eSgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRhc2tUb0VkaXQuZ2V0U3RhdHVzKCkgPT0gJ0NvbXBsZXRlJykge1xuICAgICAgICAgICAgdGFza0NoZWNrYm94LmNoZWNrZWQgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgIH0gICAgICAgIFxuXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwic3BhblwiKSAmJiBlLnRhcmdldC50ZXh0Q29udGVudCA9PSBcImRlbGV0ZVwiKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGVcbiAgICAgICAgZGVmYXVsdFByb2plY3QucmVtb3ZlVGFzayh0YXNrLmlkKVxuICAgICAgICB0YXNrLnJlbW92ZSgpXG4gICAgfVxufSk7XG5cblxuLy8gTW9kYWwgQWN0aW9uc1xuXG5jb25zdCBvcGVuTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1vZGFsLXRhcmdldF1cIik7XG5jb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1jbG9zZS1idXR0b25dXCIpO1xuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKTtcbmNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKTtcbmNvbnN0IGVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzaycpO1xuXG5cbm9wZW5Nb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5tb2RhbFRhcmdldCk7XG4gICAgICAgIG9wZW5Gb3JtKGZvcm0pO1xuICAgIH0pXG59KSBcblxuY2xvc2VNb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtID0gYnV0dG9uLmNsb3Nlc3QoXCIuZm9ybVwiKVxuICAgICAgICBjbG9zZUZvcm0oZm9ybSk7XG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uIG9wZW5Gb3JtKGZvcm0pIHtcbiAgICBpZiAoZm9ybSA9PSBudWxsKSByZXR1cm5cbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oZm9ybSkge1xuICAgIGlmIChmb3JtID09IG51bGwpIHJldHVyblxuICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG59XG5cbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKClcbiAgICBjcmVhdGVUYXNrVUkobmV3VGFzaylcbiAgICBkZWZhdWx0UHJvamVjdC5hZGRUYXNrKG5ld1Rhc2spXG4gICAgY29uc3QgZm9ybUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY2FyZFwiKTtcbiAgICBmb3JtQ2FyZC5yZXNldCgpO1xufSlcblxuZWRpdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHVwZGF0ZVRhc2soKVxuICAgIHVwZGF0ZVRhc2tVSSh0YXNrSWQpXG59KSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXygxMzgpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgwMyk7XG4iXSwibmFtZXMiOlsiVGFzayIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJzdGF0dXMiLCJpZCIsImdldFRpdGxlIiwic2V0VGl0bGUiLCJuZXdUaXRsZSIsImdldERlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJuZXdEZXNjcmlwdGlvbiIsImdldERhdGUiLCJzZXREYXRlIiwibmV3RGF0ZSIsImdldFByaW9yaXR5Iiwic2V0UHJpb3JpdHkiLCJuZXdQcmlvcml0eSIsImdldFN0YXR1cyIsInNldFN0YXR1cyIsIm5ld1N0YXR1cyIsImdldElkIiwic2V0SWQiLCJuZXdJZCIsIlByb2plY3QiLCJwcm9qZWN0VGl0bGUiLCJwcm9qZWN0SWQiLCJwcm9qZWN0IiwiZ2V0VGFza3MiLCJnZXRQcm9qZWN0VGl0bGUiLCJnZXRQcm9qZWN0SWQiLCJzZXRQcm9qZWN0VGl0bGUiLCJzZXRQcm9qZWN0SWQiLCJnZXRUYXNrIiwiZmluZCIsInRhc2siLCJhZGRUYXNrIiwicHVzaCIsInJlbW92ZVRhc2siLCJmaWx0ZXIiLCJUb0RvIiwidG9EbyIsImdldFByb2plY3QiLCJnZXRQcm9qZWN0cyIsImFkZFByb2plY3QiLCJyZW1vdmVQcm9qZWN0IiwiZGVmYXVsdFByb2plY3QiLCJ0YXNrSWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsIm1hdGNoZXMiLCJ0ZXh0Q29udGVudCIsIm9wZW5Gb3JtIiwicGFyZW50Tm9kZSIsInRhc2tUb0VkaXQiLCJ0YXNrVGl0bGUiLCJnZXRFbGVtZW50QnlJZCIsInRhc2tEZXNjcmlwdGlvbiIsInRhc2tEYXRlIiwidGFza1ByaW9yaXR5IiwidGFza0NoZWNrYm94IiwidmFsdWUiLCJjaGVja2VkIiwicmVtb3ZlIiwib3Blbk1vZGFsQnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZU1vZGFsQnV0dG9ucyIsIm92ZXJsYXkiLCJhZGRUYXNrQnV0dG9uIiwiZWRpdFRhc2tCdXR0b24iLCJmb3JtIiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9yRWFjaCIsImJ1dHRvbiIsImRhdGFzZXQiLCJtb2RhbFRhcmdldCIsImNsb3Nlc3QiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1Rhc2siLCJ0YXNrU3RhdHVzIiwic2VsZiIsImNyeXB0byIsInJhbmRvbVVVSUQiLCJjcmVhdGVUYXNrIiwidGFza3NEaXYiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiZmlyc3RUYXNrRGl2IiwibGFzdFRhc2tEaXYiLCJkYXRlRGl2IiwiZWRpdCIsImRlbGV0ZUJ0biIsImFwcGVuZCIsImNyZWF0ZVRhc2tVSSIsInJlc2V0IiwidXBkYXRlVGFzayIsInRhc2tEaXYiLCJjaGlsZE5vZGVzIiwidGFza0R1ZURhdGUiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlVGFza1VJIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJkIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==