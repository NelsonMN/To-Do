(()=>{"use strict";var t={138:(t,e,o)=>{o.d(e,{IK:()=>d,iQ:()=>n,m8:()=>s});const n=(t,e,o,n,d,s)=>({getTitle:()=>t,setTitle:e=>t=e,getDescription:()=>e,setDescription:t=>e=t,getDate:()=>o,setDate:t=>o=t,getPriority:()=>n,setPriority:t=>n=t,getStatus:()=>d,setStatus:t=>d=t,getId:()=>s,setId:t=>s=t}),d=(t,e)=>{let o=[];return{getTasks:()=>o,getProjectTitle:()=>t,getProjectId:()=>e,setProjectTitle:e=>t=e,setProjectId:t=>e=t,getTask:t=>o.find((e=>e.getId()===t)),addTask:t=>{o.push(t)},removeTask:t=>{o=o.filter((e=>e.getId()!==t))}}},s=()=>{let t=[];return{getProject:e=>t.find((t=>t.getProjectId()===e)),getProjects:()=>t,addProject:e=>{t.push(e)},removeProject:e=>{t=t.filter((t=>t.getProjectId()!==e))}}}},982:(t,e,o)=>{o.d(e,{B:()=>a,z:()=>c});const n=document.querySelectorAll("[data-modal-target]"),d=document.querySelectorAll("[data-close-button]"),s=document.getElementById("overlay");function a(t){null!=t&&(t.classList.add("active"),s.classList.add("active"))}function c(t){null!=t&&(t.classList.remove("active"),s.classList.remove("active"))}n.forEach((t=>{t.addEventListener("click",(()=>{a(document.querySelector(t.dataset.modalTarget))}))})),d.forEach((t=>{t.addEventListener("click",(()=>{c(t.closest(".form"))}))}))},803:(t,e,o)=>{var n=o(138),d=o(982);(0,n.m8)();const s=(0,n.IK)("Default Project"),a=document.getElementById("due-date"),c=(new Date).toISOString().slice(0,10);let l;a.value=c,document.querySelector(".tasks").addEventListener("click",(t=>{if(t.target.matches("span")&&"edit"==t.target.textContent){const e=document.querySelector("#edit-form");(0,d.B)(e);const o=t.target.parentNode.parentNode.id;console.log(o);const n=s.getTask(o);l=o;const a=document.getElementById("edit-title"),c=document.getElementById("edit-description"),r=document.getElementById("edit-due-date"),i=document.getElementById("edit-priority"),u=document.getElementById("edit-status");a.value=n.getTitle(),c.value=n.getDescription(),r.value=n.getDate(),i.value=n.getPriority(),"Complete"==n.getStatus()?u.checked=!0:u.checked=!1}else if(t.target.matches("span")&&"delete"==t.target.textContent){const e=t.target.parentNode.parentNode;s.removeTask(e.id),e.remove()}else if(t.target.matches("button")&&"Details"==t.target.textContent){const e=t.target.parentNode.parentNode.id,o=s.getTask(e);l=e;const n=document.getElementById("task-title-output"),a=document.getElementById("task-due-date-output"),c=document.getElementById("task-priority-output"),r=document.getElementById("task-status-output"),i=document.getElementById("task-details-output");n.textContent=o.getTitle(),a.textContent=o.getDate(),c.textContent=o.getPriority(),r.textContent=o.getStatus(),i.textContent=o.getDescription();const u=document.getElementById("task-details");(0,d.B)(u),document.querySelectorAll("[data-close-button]").forEach((t=>{t.addEventListener("click",(()=>{const e=t.closest("#task-details");(0,d.z)(e)}))}))}}));const r=document.querySelector(".add-task"),i=document.querySelector(".edit-task");r.addEventListener("click",(t=>{t.preventDefault();const e=function(){const t=document.getElementById("title").value,e=document.getElementById("description").value,o=document.getElementById("due-date").value,d=document.getElementById("priority").value;let s;s=document.getElementById("status").checked?"Complete":"Incomplete";const a=self.crypto.randomUUID();return(0,n.iQ)(t,e,o,d,s,a)}();!function(t){const e=document.querySelector(".tasks"),o=document.createElement("div");o.classList.add("task"),o.id=t.getId();const n=document.createElement("div");n.classList.add("first-task-elements"),"Low"==t.getPriority()?o.style.borderLeft="5px solid green":"Medium"==t.getPriority()?o.style.borderLeft="5px solid orange":o.style.borderLeft="5px solid red","Complete"==t.getStatus()?o.style.opacity="0.5":"Incomplete"==t.getStatus()&&(o.style.opactiy="1");const d=document.createElement("div");d.classList.add("title"),d.textContent=t.getTitle();const s=document.createElement("div");s.classList.add("last-task-elements");const a=document.createElement("button");a.textContent="Details",a.classList.add("details");const c=document.createElement("div");c.classList.add("due-date"),c.textContent=t.getDate();const l=document.createElement("span");l.classList.add("edit","material-icons-outlined"),l.textContent="edit";const r=document.createElement("span");r.classList.add("delete","material-icons-outlined"),r.textContent="delete",n.append(d),s.append(a,c,l,r),o.append(n,s),e.append(o)}(e),s.addTask(e),document.querySelector(".form-card").reset();const o=document.getElementById("due-date"),d=(new Date).toISOString().slice(0,10);o.value=d})),i.addEventListener("click",(t=>{t.preventDefault(),function(){const t=s.getTask(l),e=document.getElementById("edit-title").value,o=document.getElementById("edit-description").value,n=document.getElementById("edit-due-date").value,d=document.getElementById("edit-priority").value,a=document.getElementById("edit-status").checked;t.setTitle(e),t.setDescription(o),t.setDate(n),t.setPriority(d),a?t.setStatus("Complete"):t.setStatus("Incomplete")}(),function(t){const e=document.getElementById(t),o=s.getTask(t);e.childNodes[0].textContent=o.getTitle(),"Low"==o.getPriority()?e.style.borderLeft="5px solid green":"Medium"==o.getPriority()?e.style.borderLeft="5px solid orange":e.style.borderLeft="5px solid red","Complete"==o.getStatus()?e.style.opacity="0.5":"Incomplete"==o.getStatus()&&(e.style.opacity="1"),e.childNodes[1].childNodes[1].textContent=o.getDate()}(l)}))}},e={};function o(n){var d=e[n];if(void 0!==d)return d.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,o),s.exports}o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o(138),o(803),o(982)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiNEVBQUEsTUFBTUEsRUFBTyxDQUFDQyxFQUFPQyxFQUFhQyxFQUFTQyxFQUFVQyxFQUFRQyxLQWVsRCxDQUFDQyxTQWJTLElBQU1OLEVBYUxPLFNBWkRDLEdBQVlSLEVBQVFRLEVBWVRDLGVBWEwsSUFBTVIsRUFXZVMsZUFWdEJDLEdBQWtCVixFQUFjVSxFQVVNQyxRQVQ1QyxJQUFNVixFQVMrQ1csUUFSckRDLEdBQVdaLEVBQVVZLEVBUXlDQyxZQVAxRCxJQUFNWixFQU9pRWEsWUFOdkVDLEdBQWVkLEVBQVdjLEVBTTBEQyxVQUx0RixJQUFNZCxFQUsyRmUsVUFKakdDLEdBQWFoQixFQUFTZ0IsRUFJc0ZDLE1BSGhILElBQU1oQixFQUdpSGlCLE1BRnZIQyxHQUFTbEIsRUFBS2tCLElBTTFCQyxFQUFVLENBQUNDLEVBQWNDLEtBRTNCLElBQUlDLEVBQVUsR0FxQmQsTUFBTyxDQUFDQyxTQVZTLElBQU1ELEVBVUxFLGdCQW5CTSxJQUFNSixFQW1CS0ssYUFqQmQsSUFBTUosRUFpQnNCSyxnQkFsQnpCdkIsR0FBWWlCLEVBQWVqQixFQWtCZXdCLGFBaEI3Q1QsR0FBU0csRUFBWUgsRUFnQnNDVSxRQWQvRDVCLEdBQ05zQixFQUFRTyxNQUFNQyxHQUFTQSxFQUFLZCxVQUFZaEIsSUFhc0MrQixRQVJ4RUQsSUFDYlIsRUFBUVUsS0FBS0YsSUFPaUZHLFdBSjlFakMsSUFDaEJzQixFQUFVQSxFQUFRWSxRQUFRSixHQUFTQSxFQUFLZCxVQUFZaEIsT0FPdERtQyxFQUFPLEtBRVQsSUFBSUMsRUFBTyxHQWdCWCxNQUFPLENBQUNDLFdBZFloQixHQUNUZSxFQUFLUCxNQUFNUCxHQUFZQSxFQUFRRyxpQkFBbUJKLElBYXpDaUIsWUFWQSxJQUFNRixFQVVPRyxXQVJiakIsSUFDaEJjLEVBQUtKLEtBQUtWLElBTytCa0IsY0FKdEJuQixJQUNuQmUsRUFBT0EsRUFBS0YsUUFBUVosR0FBWUEsRUFBUUcsaUJBQW1CSixRLHVDQzdEbkUsTUFBTW9CLEVBQW1CQyxTQUFTQyxpQkFBaUIsdUJBQzdDQyxFQUFvQkYsU0FBU0MsaUJBQWlCLHVCQUM5Q0UsRUFBVUgsU0FBU0ksZUFBZSxXQWdCeEMsU0FBU0MsRUFBU0MsR0FDRixNQUFSQSxJQUNKQSxFQUFLQyxVQUFVQyxJQUFJLFVBQ25CTCxFQUFRSSxVQUFVQyxJQUFJLFdBRzFCLFNBQVNDLEVBQVVILEdBQ0gsTUFBUkEsSUFDSkEsRUFBS0MsVUFBVUcsT0FBTyxVQUN0QlAsRUFBUUksVUFBVUcsT0FBTyxXQXZCN0JYLEVBQWlCWSxTQUFRQyxJQUNyQkEsRUFBT0MsaUJBQWlCLFNBQVMsS0FFN0JSLEVBRGFMLFNBQVNjLGNBQWNGLEVBQU9HLFFBQVFDLG9CQUszRGQsRUFBa0JTLFNBQVFDLElBQ3RCQSxFQUFPQyxpQkFBaUIsU0FBUyxLQUU3QkosRUFEYUcsRUFBT0ssUUFBUSxpQixxQ0NQbkIsVUFBakIsTUFJTUMsR0FBaUIsUUFBUSxtQkFJekJDLEVBQVduQixTQUFTSSxlQUFlLFlBQ25DZ0IsR0FBWSxJQUFJQyxNQUFPQyxjQUFjQyxNQUFNLEVBQUcsSUEwSHBELElBQUlDLEVBekhKTCxFQUFTTSxNQUFRTCxFQTJIQXBCLFNBQVNjLGNBQWMsVUFDL0JELGlCQUFpQixTQUFVYSxJQUdoQyxHQUFJQSxFQUFFQyxPQUFPQyxRQUFRLFNBQW1DLFFBQXhCRixFQUFFQyxPQUFPRSxZQUF1QixDQUM1RCxNQUFNdkIsRUFBT04sU0FBU2MsY0FBYyxlQUNwQyxPQUFTUixHQUVULE1BQU1oRCxFQUFLb0UsRUFBRUMsT0FBT0csV0FBV0EsV0FBV3hFLEdBQzFDeUUsUUFBUUMsSUFBSTFFLEdBQ1osTUFBTTJFLEVBQWFmLEVBQWVoQyxRQUFRNUIsR0FFMUNrRSxFQUFTbEUsRUFFVCxNQUFNNEUsRUFBWWxDLFNBQVNJLGVBQWUsY0FDcEMrQixFQUFrQm5DLFNBQVNJLGVBQWUsb0JBQzFDZSxFQUFXbkIsU0FBU0ksZUFBZSxpQkFDbkNnQyxFQUFlcEMsU0FBU0ksZUFBZSxpQkFDdkNpQyxFQUFlckMsU0FBU0ksZUFBZSxlQUU3QzhCLEVBQVVULE1BQVFRLEVBQVcxRSxXQUM3QjRFLEVBQWdCVixNQUFRUSxFQUFXdkUsaUJBQ25DeUQsRUFBU00sTUFBUVEsRUFBV3BFLFVBQzVCdUUsRUFBYVgsTUFBUVEsRUFBV2pFLGNBRUYsWUFBMUJpRSxFQUFXOUQsWUFDWGtFLEVBQWFDLFNBQVUsRUFFdkJELEVBQWFDLFNBQVUsT0FJeEIsR0FBSVosRUFBRUMsT0FBT0MsUUFBUSxTQUFtQyxVQUF4QkYsRUFBRUMsT0FBT0UsWUFBeUIsQ0FDckUsTUFBTXpDLEVBQU9zQyxFQUFFQyxPQUFPRyxXQUFXQSxXQUNqQ1osRUFBZTNCLFdBQVdILEVBQUs5QixJQUMvQjhCLEVBQUtzQixjQUlGLEdBQUlnQixFQUFFQyxPQUFPQyxRQUFRLFdBQXFDLFdBQXhCRixFQUFFQyxPQUFPRSxZQUEwQixDQUN4RSxNQUFNdkUsRUFBS29FLEVBQUVDLE9BQU9HLFdBQVdBLFdBQVd4RSxHQUNwQzhCLEVBQU84QixFQUFlaEMsUUFBUTVCLEdBRXBDa0UsRUFBU2xFLEVBRVQsTUFBTUwsRUFBUStDLFNBQVNJLGVBQWUscUJBQ2hDbUMsRUFBT3ZDLFNBQVNJLGVBQWUsd0JBQy9CaEQsRUFBVzRDLFNBQVNJLGVBQWUsd0JBQ25DL0MsRUFBUzJDLFNBQVNJLGVBQWUsc0JBQ2pDb0MsRUFBVXhDLFNBQVNJLGVBQWUsdUJBR3hDbkQsRUFBTTRFLFlBQWN6QyxFQUFLN0IsV0FDekJnRixFQUFLVixZQUFjekMsRUFBS3ZCLFVBQ3hCVCxFQUFTeUUsWUFBY3pDLEVBQUtwQixjQUM1QlgsRUFBT3dFLFlBQWN6QyxFQUFLakIsWUFDMUJxRSxFQUFRWCxZQUFjekMsRUFBSzFCLGlCQUUzQixNQUFNK0UsRUFBZXpDLFNBQVNJLGVBQWUsaUJBQzdDLE9BQVNxQyxHQUVpQnpDLFNBQVNDLGlCQUFpQix1QkFDbENVLFNBQVFDLElBQ3RCQSxFQUFPQyxpQkFBaUIsU0FBUyxLQUM3QixNQUFNUCxFQUFPTSxFQUFPSyxRQUFRLGtCQUM1QixPQUFVWCxhQVMxQixNQUFNb0MsRUFBZ0IxQyxTQUFTYyxjQUFjLGFBQ3ZDNkIsRUFBaUIzQyxTQUFTYyxjQUFjLGNBRTlDNEIsRUFBYzdCLGlCQUFpQixTQUFVYSxJQUNyQ0EsRUFBRWtCLGlCQUNGLE1BQU1DLEVBck1WLFdBQ0ksTUFBTVgsRUFBWWxDLFNBQVNJLGVBQWUsU0FBU3FCLE1BQzdDVSxFQUFrQm5DLFNBQVNJLGVBQWUsZUFBZXFCLE1BQ3pETixFQUFXbkIsU0FBU0ksZUFBZSxZQUFZcUIsTUFDL0NXLEVBQWVwQyxTQUFTSSxlQUFlLFlBQVlxQixNQUV6RCxJQUFJcUIsRUFFQUEsRUFIaUI5QyxTQUFTSSxlQUFlLFVBQVVrQyxRQUd0QyxXQUVBLGFBRWpCLE1BQU1kLEVBQVN1QixLQUFLQyxPQUFPQyxhQUUzQixPQURnQixRQUFLZixFQUFXQyxFQUFpQmhCLEVBQVVpQixFQUFjVSxFQUFZdEIsR0F3THJFMEIsSUFqS3BCLFNBQXNCOUQsR0FDbEIsTUFBTStELEVBQWlCbkQsU0FBU2MsY0FBYyxVQUN4Q3NDLEVBQVVwRCxTQUFTcUQsY0FBYyxPQUN2Q0QsRUFBUTdDLFVBQVVDLElBQUksUUFDdEI0QyxFQUFROUYsR0FBSzhCLEVBQUtkLFFBRWxCLE1BQU1nRixFQUFldEQsU0FBU3FELGNBQWMsT0FDNUNDLEVBQWEvQyxVQUFVQyxJQUFJLHVCQUVELE9BQXRCcEIsRUFBS3BCLGNBQ0xvRixFQUFRRyxNQUFNQyxXQUFhLGtCQUNFLFVBQXRCcEUsRUFBS3BCLGNBQ1pvRixFQUFRRyxNQUFNQyxXQUFhLG1CQUUzQkosRUFBUUcsTUFBTUMsV0FBYSxnQkFHUCxZQUFwQnBFLEVBQUtqQixZQUNMaUYsRUFBUUcsTUFBTUUsUUFBVSxNQUNHLGNBQXBCckUsRUFBS2pCLGNBQ1ppRixFQUFRRyxNQUFNRyxRQUFVLEtBRzVCLE1BQU16RyxFQUFRK0MsU0FBU3FELGNBQWMsT0FDckNwRyxFQUFNc0QsVUFBVUMsSUFBSSxTQUNwQnZELEVBQU00RSxZQUFjekMsRUFBSzdCLFdBRXpCLE1BQU1vRyxFQUFjM0QsU0FBU3FELGNBQWMsT0FDM0NNLEVBQVlwRCxVQUFVQyxJQUFJLHNCQUUxQixNQUFNb0QsRUFBYTVELFNBQVNxRCxjQUFjLFVBQzFDTyxFQUFXL0IsWUFBYyxVQUN6QitCLEVBQVdyRCxVQUFVQyxJQUFJLFdBRXpCLE1BQU1xRCxFQUFVN0QsU0FBU3FELGNBQWMsT0FDdkNRLEVBQVF0RCxVQUFVQyxJQUFJLFlBQ3RCcUQsRUFBUWhDLFlBQWN6QyxFQUFLdkIsVUFFM0IsTUFBTWlHLEVBQU85RCxTQUFTcUQsY0FBYyxRQUNwQ1MsRUFBS3ZELFVBQVVDLElBQUksT0FBUSwyQkFDM0JzRCxFQUFLakMsWUFBYyxPQUVuQixNQUFNa0MsRUFBWS9ELFNBQVNxRCxjQUFjLFFBQ3pDVSxFQUFVeEQsVUFBVUMsSUFBSSxTQUFVLDJCQUNsQ3VELEVBQVVsQyxZQUFjLFNBRXhCeUIsRUFBYVUsT0FBTy9HLEdBQ3BCMEcsRUFBWUssT0FBT0osRUFBWUMsRUFBU0MsRUFBTUMsR0FDOUNYLEVBQVFZLE9BQU9WLEVBQWNLLEdBQzdCUixFQUFlYSxPQUFPWixHQWlIdEJhLENBQWFwQixHQUNiM0IsRUFBZTdCLFFBQVF3RCxHQUNON0MsU0FBU2MsY0FBYyxjQUMvQm9ELFFBQ1QsTUFBTS9DLEVBQVduQixTQUFTSSxlQUFlLFlBQ25DZ0IsR0FBWSxJQUFJQyxNQUFPQyxjQUFjQyxNQUFNLEVBQUcsSUFDcERKLEVBQVNNLE1BQVFMLEtBR3JCdUIsRUFBZTlCLGlCQUFpQixTQUFVYSxJQUN0Q0EsRUFBRWtCLGlCQS9MTixXQUNJLE1BQU1YLEVBQWFmLEVBQWVoQyxRQUFRc0MsR0FDcENVLEVBQVlsQyxTQUFTSSxlQUFlLGNBQWNxQixNQUNsRFUsRUFBa0JuQyxTQUFTSSxlQUFlLG9CQUFvQnFCLE1BQzlETixFQUFXbkIsU0FBU0ksZUFBZSxpQkFBaUJxQixNQUNwRFcsRUFBZXBDLFNBQVNJLGVBQWUsaUJBQWlCcUIsTUFDeERZLEVBQWVyQyxTQUFTSSxlQUFlLGVBQWVrQyxRQUU1REwsRUFBV3pFLFNBQVMwRSxHQUNwQkQsRUFBV3RFLGVBQWV3RSxHQUMxQkYsRUFBV25FLFFBQVFxRCxHQUNuQmMsRUFBV2hFLFlBQVltRSxHQUNuQkMsRUFDQUosRUFBVzdELFVBQVUsWUFFckI2RCxFQUFXN0QsVUFBVSxjQWlMekIrRixHQXpISixTQUFzQjdHLEdBQ2xCLE1BQU04RixFQUFVcEQsU0FBU0ksZUFBZTlDLEdBQ2xDOEIsRUFBTzhCLEVBQWVoQyxRQUFRNUIsR0FFbEI4RixFQUFRZ0IsV0FBVyxHQUMzQnZDLFlBQWN6QyxFQUFLN0IsV0FFSCxPQUF0QjZCLEVBQUtwQixjQUNMb0YsRUFBUUcsTUFBTUMsV0FBYSxrQkFDRSxVQUF0QnBFLEVBQUtwQixjQUNab0YsRUFBUUcsTUFBTUMsV0FBYSxtQkFFM0JKLEVBQVFHLE1BQU1DLFdBQWEsZ0JBR1AsWUFBcEJwRSxFQUFLakIsWUFDTGlGLEVBQVFHLE1BQU1FLFFBQVUsTUFDRyxjQUFwQnJFLEVBQUtqQixjQUNaaUYsRUFBUUcsTUFBTUUsUUFBVSxLQUdSTCxFQUFRZ0IsV0FBVyxHQUFHQSxXQUFXLEdBQ3pDdkMsWUFBY3pDLEVBQUt2QixVQW9HL0J3RyxDQUFhN0MsUUN0T2I4QyxFQUEyQixHQUcvQixTQUFTQyxFQUFvQkMsR0FFNUIsSUFBSUMsRUFBZUgsRUFBeUJFLEdBQzVDLFFBQXFCRSxJQUFqQkQsRUFDSCxPQUFPQSxFQUFhRSxRQUdyQixJQUFJQyxFQUFTTixFQUF5QkUsR0FBWSxDQUdqREcsUUFBUyxJQU9WLE9BSEFFLEVBQW9CTCxHQUFVSSxFQUFRQSxFQUFPRCxRQUFTSixHQUcvQ0ssRUFBT0QsUUNwQmZKLEVBQW9CTyxFQUFJLENBQUNILEVBQVNJLEtBQ2pDLElBQUksSUFBSUMsS0FBT0QsRUFDWFIsRUFBb0JVLEVBQUVGLEVBQVlDLEtBQVNULEVBQW9CVSxFQUFFTixFQUFTSyxJQUM1RUUsT0FBT0MsZUFBZVIsRUFBU0ssRUFBSyxDQUFFSSxZQUFZLEVBQU1DLElBQUtOLEVBQVdDLE1DSjNFVCxFQUFvQlUsRUFBSSxDQUFDSyxFQUFLQyxJQUFVTCxPQUFPTSxVQUFVQyxlQUFlQyxLQUFLSixFQUFLQyxHQ0dsRmhCLEVBQW9CLEtBQ3BCQSxFQUFvQixLQUNNQSxFQUFvQixNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdXNlci1pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBpZCkgPT4ge1xuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgICBjb25zdCBzZXRUaXRsZSA9IG5ld1RpdGxlID0+IHRpdGxlID0gbmV3VGl0bGU7XG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbj0gbmV3RGVzY3JpcHRpb24gPT4gZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICBjb25zdCBnZXREYXRlID0gKCkgPT4gZHVlRGF0ZTtcbiAgICBjb25zdCBzZXREYXRlID0gbmV3RGF0ZSA9PiBkdWVEYXRlID0gbmV3RGF0ZTtcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gbmV3UHJpb3JpdHkgPT4gcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiBzdGF0dXM7XG4gICAgY29uc3Qgc2V0U3RhdHVzID0gbmV3U3RhdHVzID0+IHN0YXR1cyA9IG5ld1N0YXR1cztcbiAgICBjb25zdCBnZXRJZCA9ICgpID0+IGlkO1xuICAgIGNvbnN0IHNldElkID0gbmV3SWQgPT4gaWQgPSBuZXdJZDtcblxuICAgIHJldHVybiB7Z2V0VGl0bGUsIHNldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb24sIGdldERhdGUsIHNldERhdGUsIGdldFByaW9yaXR5LCBzZXRQcmlvcml0eSwgZ2V0U3RhdHVzLCBzZXRTdGF0dXMsIGdldElkLCBzZXRJZH1cbn07XG5cblxuY29uc3QgUHJvamVjdCA9IChwcm9qZWN0VGl0bGUsIHByb2plY3RJZCkgPT4ge1xuXG4gICAgbGV0IHByb2plY3QgPSBbXTtcblxuICAgIGNvbnN0IGdldFByb2plY3RUaXRsZSA9ICgpID0+IHByb2plY3RUaXRsZTtcbiAgICBjb25zdCBzZXRQcm9qZWN0VGl0bGUgPSBuZXdUaXRsZSA9PiBwcm9qZWN0VGl0bGUgPSBuZXdUaXRsZTtcbiAgICBjb25zdCBnZXRQcm9qZWN0SWQgPSAoKSA9PiBwcm9qZWN0SWQ7XG4gICAgY29uc3Qgc2V0UHJvamVjdElkID0gbmV3SWQgPT4gcHJvamVjdElkID0gbmV3SWQ7XG5cbiAgICBjb25zdCBnZXRUYXNrID0gKGlkKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0LmZpbmQoKHRhc2spID0+IHRhc2suZ2V0SWQoKSA9PT0gaWQpXG4gICAgfTtcblxuICAgIGNvbnN0IGdldFRhc2tzID0gKCkgPT4gcHJvamVjdDtcblxuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICBwcm9qZWN0LnB1c2godGFzaylcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IChpZCkgPT4ge1xuICAgICAgICBwcm9qZWN0ID0gcHJvamVjdC5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0SWQoKSAhPT0gaWQpXG4gICAgfTtcblxuICAgIHJldHVybiB7Z2V0VGFza3MsIGdldFByb2plY3RUaXRsZSwgZ2V0UHJvamVjdElkLCBzZXRQcm9qZWN0VGl0bGUsIHNldFByb2plY3RJZCwgZ2V0VGFzaywgYWRkVGFzaywgcmVtb3ZlVGFza31cbn07XG5cblxuY29uc3QgVG9EbyA9ICgpID0+IHtcbiAgICBcbiAgICBsZXQgdG9EbyA9IFtdO1xuICAgIFxuICAgIGNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdElkKSA9PiB7XG4gICAgICAgIHJldHVybiB0b0RvLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0UHJvamVjdElkKCkgPT09IHByb2plY3RJZClcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB0b0RvO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHRvRG8ucHVzaChwcm9qZWN0KVxuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3RJZCkgPT4ge1xuICAgICAgICB0b0RvID0gdG9Eby5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuZ2V0UHJvamVjdElkKCkgIT09IHByb2plY3RJZClcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiB7Z2V0UHJvamVjdCwgZ2V0UHJvamVjdHMsIGFkZFByb2plY3QsIHJlbW92ZVByb2plY3R9XG59O1xuXG5leHBvcnQge1Rhc2ssIFByb2plY3QsIFRvRG99IiwiY29uc3Qgb3Blbk1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tb2RhbC10YXJnZXRdXCIpO1xuY29uc3QgY2xvc2VNb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtY2xvc2UtYnV0dG9uXVwiKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7XG5cbm9wZW5Nb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5tb2RhbFRhcmdldCk7XG4gICAgICAgIG9wZW5Gb3JtKGZvcm0pO1xuICAgIH0pXG59KSBcblxuY2xvc2VNb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtID0gYnV0dG9uLmNsb3Nlc3QoXCIuZm9ybVwiKVxuICAgICAgICBjbG9zZUZvcm0oZm9ybSk7XG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uIG9wZW5Gb3JtKGZvcm0pIHtcbiAgICBpZiAoZm9ybSA9PSBudWxsKSByZXR1cm5cbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oZm9ybSkge1xuICAgIGlmIChmb3JtID09IG51bGwpIHJldHVyblxuICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG59XG5cbmV4cG9ydCB7b3BlbkZvcm0sIGNsb3NlRm9ybX0iLCJpbXBvcnQge1Rhc2ssIFByb2plY3QsIFRvRG99IGZyb20gJy4vaW5kZXgnXG5pbXBvcnQge29wZW5Gb3JtLCBjbG9zZUZvcm19IGZyb20gJy4vbW9kYWwnXG5cblxuLy8gSW5pdGlhbGl6ZSBUby1EbyBMaXN0XG5cbmNvbnN0IHRvRG9MaXN0ID0gVG9EbygpXG5cblxuLy8gSW5pdGlhbGl6ZSBEZWZhdWx0IFByb2plY3RcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gUHJvamVjdCgnRGVmYXVsdCBQcm9qZWN0JylcblxuXG4vLyBJbml0aWFsaXplIEZvcm0gRGVmYXVsdHNcbmNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZS1kYXRlJylcbmNvbnN0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG50YXNrRGF0ZS52YWx1ZSA9IHRvZGF5RGF0ZTtcblxuXG4vLyBUYXNrIFVJXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soKSB7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWVcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZVxuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZS1kYXRlJykudmFsdWVcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZVxuICAgIGNvbnN0IHRhc2tDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKS5jaGVja2VkXG4gICAgbGV0IHRhc2tTdGF0dXNcbiAgICBpZiAodGFza0NoZWNrYm94KSB7XG4gICAgICAgIHRhc2tTdGF0dXMgPSAnQ29tcGxldGUnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza1N0YXR1cyA9ICdJbmNvbXBsZXRlJ1xuICAgIH1cbiAgICBjb25zdCB0YXNrSWQgPSBzZWxmLmNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgY29uc3QgbmV3VGFzayA9IFRhc2sodGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHksIHRhc2tTdGF0dXMsIHRhc2tJZClcbiAgICByZXR1cm4gbmV3VGFza1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrKCkge1xuICAgIGNvbnN0IHRhc2tUb0VkaXQgPSBkZWZhdWx0UHJvamVjdC5nZXRUYXNrKHRhc2tJZClcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZScpLnZhbHVlXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZGVzY3JpcHRpb24nKS52YWx1ZVxuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZHVlLWRhdGUnKS52YWx1ZVxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByaW9yaXR5JykudmFsdWVcbiAgICBjb25zdCB0YXNrQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1zdGF0dXMnKS5jaGVja2VkXG5cbiAgICB0YXNrVG9FZGl0LnNldFRpdGxlKHRhc2tUaXRsZSlcbiAgICB0YXNrVG9FZGl0LnNldERlc2NyaXB0aW9uKHRhc2tEZXNjcmlwdGlvbilcbiAgICB0YXNrVG9FZGl0LnNldERhdGUodGFza0RhdGUpXG4gICAgdGFza1RvRWRpdC5zZXRQcmlvcml0eSh0YXNrUHJpb3JpdHkpXG4gICAgaWYgKHRhc2tDaGVja2JveCkge1xuICAgICAgICB0YXNrVG9FZGl0LnNldFN0YXR1cygnQ29tcGxldGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tUb0VkaXQuc2V0U3RhdHVzKCdJbmNvbXBsZXRlJylcbiAgICB9IFxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrVUkodGFzaykge1xuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKVxuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpXG4gICAgdGFza0Rpdi5pZCA9IHRhc2suZ2V0SWQoKVxuXG4gICAgY29uc3QgZmlyc3RUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmlyc3RUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJmaXJzdC10YXNrLWVsZW1lbnRzXCIpXG5cbiAgICBpZiAodGFzay5nZXRQcmlvcml0eSgpID09ICdMb3cnKSB7XG4gICAgICAgIHRhc2tEaXYuc3R5bGUuYm9yZGVyTGVmdCA9ICc1cHggc29saWQgZ3JlZW4nO1xuICAgIH0gZWxzZSBpZiAodGFzay5nZXRQcmlvcml0eSgpID09ICdNZWRpdW0nKSB7XG4gICAgICAgIHRhc2tEaXYuc3R5bGUuYm9yZGVyTGVmdCA9ICc1cHggc29saWQgb3JhbmdlJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tEaXYuc3R5bGUuYm9yZGVyTGVmdCA9ICc1cHggc29saWQgcmVkJ1xuICAgIH1cblxuICAgIGlmICh0YXNrLmdldFN0YXR1cygpID09ICdDb21wbGV0ZScpIHtcbiAgICAgICAgdGFza0Rpdi5zdHlsZS5vcGFjaXR5ID0gJzAuNSdcbiAgICB9IGVsc2UgaWYgKHRhc2suZ2V0U3RhdHVzKCkgPT0gJ0luY29tcGxldGUnKSB7XG4gICAgICAgIHRhc2tEaXYuc3R5bGUub3BhY3RpeSA9ICcxJ1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLmdldFRpdGxlKClcblxuICAgIGNvbnN0IGxhc3RUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGFzdFRhc2tEaXYuY2xhc3NMaXN0LmFkZChcImxhc3QtdGFzay1lbGVtZW50c1wiKTtcblxuICAgIGNvbnN0IGRldGFpbHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGRldGFpbHNCdG4udGV4dENvbnRlbnQgPSAnRGV0YWlscydcbiAgICBkZXRhaWxzQnRuLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKVxuXG4gICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUnKTtcbiAgICBkYXRlRGl2LnRleHRDb250ZW50ID0gdGFzay5nZXREYXRlKClcblxuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZWRpdC5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiLCBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICAgIGVkaXQudGV4dENvbnRlbnQgPSAnZWRpdCc7XG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIiwgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnZGVsZXRlJztcblxuICAgIGZpcnN0VGFza0Rpdi5hcHBlbmQodGl0bGUpXG4gICAgbGFzdFRhc2tEaXYuYXBwZW5kKGRldGFpbHNCdG4sIGRhdGVEaXYsIGVkaXQsIGRlbGV0ZUJ0bilcbiAgICB0YXNrRGl2LmFwcGVuZChmaXJzdFRhc2tEaXYsIGxhc3RUYXNrRGl2KVxuICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZCh0YXNrRGl2KVxufTtcblxuZnVuY3Rpb24gdXBkYXRlVGFza1VJKGlkKSB7XG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuICAgIGNvbnN0IHRhc2sgPSBkZWZhdWx0UHJvamVjdC5nZXRUYXNrKGlkKVxuXG4gICAgY29uc3QgdGFza1RpdGxlID0gdGFza0Rpdi5jaGlsZE5vZGVzWzBdXG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay5nZXRUaXRsZSgpXG5cbiAgICBpZiAodGFzay5nZXRQcmlvcml0eSgpID09ICdMb3cnKSB7XG4gICAgICAgIHRhc2tEaXYuc3R5bGUuYm9yZGVyTGVmdCA9ICc1cHggc29saWQgZ3JlZW4nO1xuICAgIH0gZWxzZSBpZiAodGFzay5nZXRQcmlvcml0eSgpID09ICdNZWRpdW0nKSB7XG4gICAgICAgIHRhc2tEaXYuc3R5bGUuYm9yZGVyTGVmdCA9ICc1cHggc29saWQgb3JhbmdlJztcbiAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrRGl2LnN0eWxlLmJvcmRlckxlZnQgPSAnNXB4IHNvbGlkIHJlZCc7XG4gICAgfVxuXG4gICAgaWYgKHRhc2suZ2V0U3RhdHVzKCkgPT0gJ0NvbXBsZXRlJykge1xuICAgICAgICB0YXNrRGl2LnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICB9IGVsc2UgaWYgKHRhc2suZ2V0U3RhdHVzKCkgPT0gJ0luY29tcGxldGUnKSB7XG4gICAgICAgIHRhc2tEaXYuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSB0YXNrRGl2LmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1sxXVxuICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5nZXREYXRlKClcbn1cblxuXG4vLyBUYXNrIEV2ZW50IExpc3RlbmVyc1xuXG5sZXQgdGFza0lkIC8vIHRoZSB2YXJpYWJsZSB0byBhY2Nlc3MgYSBzcGVjaWZpYyB0YXNrIGlkIGZvciBlZGl0aW5nXG5cbmNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKVxudGFza3NEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyAgIFxuXG4gICAgLy8gRWRpdFxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwic3BhblwiKSAmJiBlLnRhcmdldC50ZXh0Q29udGVudCA9PSBcImVkaXRcIikge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LWZvcm1cIik7XG4gICAgICAgIG9wZW5Gb3JtKGZvcm0pXG5cbiAgICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWRcbiAgICAgICAgY29uc29sZS5sb2coaWQpXG4gICAgICAgIGNvbnN0IHRhc2tUb0VkaXQgPSBkZWZhdWx0UHJvamVjdC5nZXRUYXNrKGlkKVxuXG4gICAgICAgIHRhc2tJZCA9IGlkXG4gICAgICAgIFxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZScpXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRlc2NyaXB0aW9uJylcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kdWUtZGF0ZScpXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByaW9yaXR5JylcbiAgICAgICAgY29uc3QgdGFza0NoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtc3RhdHVzJylcblxuICAgICAgICB0YXNrVGl0bGUudmFsdWUgPSB0YXNrVG9FZGl0LmdldFRpdGxlKCk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2tUb0VkaXQuZ2V0RGVzY3JpcHRpb24oKTtcbiAgICAgICAgdGFza0RhdGUudmFsdWUgPSB0YXNrVG9FZGl0LmdldERhdGUoKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LnZhbHVlID0gdGFza1RvRWRpdC5nZXRQcmlvcml0eSgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRhc2tUb0VkaXQuZ2V0U3RhdHVzKCkgPT0gJ0NvbXBsZXRlJykge1xuICAgICAgICAgICAgdGFza0NoZWNrYm94LmNoZWNrZWQgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgIH0gICAgICAgIFxuXG4gICAgLy8gRGVsZXRlICBcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCJzcGFuXCIpICYmIGUudGFyZ2V0LnRleHRDb250ZW50ID09IFwiZGVsZXRlXCIpIHtcbiAgICAgICAgY29uc3QgdGFzayA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZVxuICAgICAgICBkZWZhdWx0UHJvamVjdC5yZW1vdmVUYXNrKHRhc2suaWQpXG4gICAgICAgIHRhc2sucmVtb3ZlKClcbiAgICBcblxuICAgIC8vIERldGFpbHMgQnV0dG9uXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiYnV0dG9uXCIpICYmIGUudGFyZ2V0LnRleHRDb250ZW50ID09ICdEZXRhaWxzJykge1xuICAgICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZFxuICAgICAgICBjb25zdCB0YXNrID0gZGVmYXVsdFByb2plY3QuZ2V0VGFzayhpZClcblxuICAgICAgICB0YXNrSWQgPSBpZFxuICAgICAgICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGl0bGUtb3V0cHV0XCIpXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZHVlLWRhdGUtb3V0cHV0XCIpXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5LW91dHB1dFwiKVxuICAgICAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stc3RhdHVzLW91dHB1dFwiKVxuICAgICAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRldGFpbHMtb3V0cHV0XCIpXG5cblxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0VGl0bGUoKVxuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gdGFzay5nZXREYXRlKClcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLmdldFByaW9yaXR5KClcbiAgICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gdGFzay5nZXRTdGF0dXMoKVxuICAgICAgICBkZXRhaWxzLnRleHRDb250ZW50ID0gdGFzay5nZXREZXNjcmlwdGlvbigpXG5cbiAgICAgICAgY29uc3QgZGV0YWlsc01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRldGFpbHNcIik7XG4gICAgICAgIG9wZW5Gb3JtKGRldGFpbHNNb2RhbClcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNsb3NlTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWNsb3NlLWJ1dHRvbl1cIilcbiAgICAgICAgY2xvc2VNb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IGJ1dHRvbi5jbG9zZXN0KFwiI3Rhc2stZGV0YWlsc1wiKVxuICAgICAgICAgICAgICAgIGNsb3NlRm9ybShmb3JtKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG59KTtcblxuLy8gVGFzayBCdXR0b24gRnVuY3Rpb25hbGl0eVxuXG5jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJyk7XG5jb25zdCBlZGl0VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2snKTtcblxuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2soKVxuICAgIGNyZWF0ZVRhc2tVSShuZXdUYXNrKVxuICAgIGRlZmF1bHRQcm9qZWN0LmFkZFRhc2sobmV3VGFzaylcbiAgICBjb25zdCBmb3JtQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jYXJkXCIpO1xuICAgIGZvcm1DYXJkLnJlc2V0KCk7XG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLWRhdGUnKVxuICAgIGNvbnN0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgdGFza0RhdGUudmFsdWUgPSB0b2RheURhdGU7XG59KVxuXG5lZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlVGFzaygpXG4gICAgdXBkYXRlVGFza1VJKHRhc2tJZClcbn0pIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKDEzOCk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKDgwMyk7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oOTgyKTtcbiJdLCJuYW1lcyI6WyJUYXNrIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsInN0YXR1cyIsImlkIiwiZ2V0VGl0bGUiLCJzZXRUaXRsZSIsIm5ld1RpdGxlIiwiZ2V0RGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsIm5ld0Rlc2NyaXB0aW9uIiwiZ2V0RGF0ZSIsInNldERhdGUiLCJuZXdEYXRlIiwiZ2V0UHJpb3JpdHkiLCJzZXRQcmlvcml0eSIsIm5ld1ByaW9yaXR5IiwiZ2V0U3RhdHVzIiwic2V0U3RhdHVzIiwibmV3U3RhdHVzIiwiZ2V0SWQiLCJzZXRJZCIsIm5ld0lkIiwiUHJvamVjdCIsInByb2plY3RUaXRsZSIsInByb2plY3RJZCIsInByb2plY3QiLCJnZXRUYXNrcyIsImdldFByb2plY3RUaXRsZSIsImdldFByb2plY3RJZCIsInNldFByb2plY3RUaXRsZSIsInNldFByb2plY3RJZCIsImdldFRhc2siLCJmaW5kIiwidGFzayIsImFkZFRhc2siLCJwdXNoIiwicmVtb3ZlVGFzayIsImZpbHRlciIsIlRvRG8iLCJ0b0RvIiwiZ2V0UHJvamVjdCIsImdldFByb2plY3RzIiwiYWRkUHJvamVjdCIsInJlbW92ZVByb2plY3QiLCJvcGVuTW9kYWxCdXR0b25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VNb2RhbEJ1dHRvbnMiLCJvdmVybGF5IiwiZ2V0RWxlbWVudEJ5SWQiLCJvcGVuRm9ybSIsImZvcm0iLCJjbGFzc0xpc3QiLCJhZGQiLCJjbG9zZUZvcm0iLCJyZW1vdmUiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJkYXRhc2V0IiwibW9kYWxUYXJnZXQiLCJjbG9zZXN0IiwiZGVmYXVsdFByb2plY3QiLCJ0YXNrRGF0ZSIsInRvZGF5RGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwidGFza0lkIiwidmFsdWUiLCJlIiwidGFyZ2V0IiwibWF0Y2hlcyIsInRleHRDb250ZW50IiwicGFyZW50Tm9kZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXNrVG9FZGl0IiwidGFza1RpdGxlIiwidGFza0Rlc2NyaXB0aW9uIiwidGFza1ByaW9yaXR5IiwidGFza0NoZWNrYm94IiwiY2hlY2tlZCIsImRhdGUiLCJkZXRhaWxzIiwiZGV0YWlsc01vZGFsIiwiYWRkVGFza0J1dHRvbiIsImVkaXRUYXNrQnV0dG9uIiwicHJldmVudERlZmF1bHQiLCJuZXdUYXNrIiwidGFza1N0YXR1cyIsInNlbGYiLCJjcnlwdG8iLCJyYW5kb21VVUlEIiwiY3JlYXRlVGFzayIsInRhc2tzQ29udGFpbmVyIiwidGFza0RpdiIsImNyZWF0ZUVsZW1lbnQiLCJmaXJzdFRhc2tEaXYiLCJzdHlsZSIsImJvcmRlckxlZnQiLCJvcGFjaXR5Iiwib3BhY3RpeSIsImxhc3RUYXNrRGl2IiwiZGV0YWlsc0J0biIsImRhdGVEaXYiLCJlZGl0IiwiZGVsZXRlQnRuIiwiYXBwZW5kIiwiY3JlYXRlVGFza1VJIiwicmVzZXQiLCJ1cGRhdGVUYXNrIiwiY2hpbGROb2RlcyIsInVwZGF0ZVRhc2tVSSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZCIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=