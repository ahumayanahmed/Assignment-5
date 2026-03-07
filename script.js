const API = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

async function loadIssues(){

document.getElementById("loader").classList.remove("hidden");

const res = await fetch(API);
const data = await res.json();

displayIssues(data.data);

document.getElementById("loader").classList.add("hidden");

setActive("btnAll");

}

loadIssues();



function displayIssues(issues){

const container = document.getElementById("issuesContainer");

container.innerHTML = "";

document.getElementById("issueCount").innerText = issues.length;

issues.forEach(issue => {

let borderColor =
issue.status === "open"
? "border-t-4 border-green-500"
: "border-t-4 border-purple-500";


// Status Icon
let iconStyle =
issue.status === "open"
? '<img src="assets/Open-Status.png" class="w-6 h-6">'
: '<img src="assets/Closed- Status .png" class="w-6 h-6">';


// Priority Badge
let priorityStyle = "";

if(issue.priority === "high"){
priorityStyle = "bg-red-100 text-red-500";
iconStyle = '<img src="assets/Open-Status.png" class="w-6 h-6">';
}

else if(issue.priority === "medium"){
priorityStyle = "bg-yellow-100 text-yellow-600";
iconStyle = '<img src="assets/Open-Status.png" class="w-6 h-6">';
}

else{
priorityStyle = "bg-purple-100 text-purple-600";
iconStyle = '<img src="assets/Closed- Status .png" class="w-6 h-6">';
}


const card = document.createElement("div");

card.className = `bg-white rounded-xl shadow ${borderColor} overflow-hidden`;

card.innerHTML = `

<div class="p-5">

<div class="flex justify-between items-center mb-3">

<div class="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full">
${iconStyle}
</div>

<span class="px-3 py-1 ${priorityStyle} text-xs rounded-full font-semibold">
${issue.priority.toUpperCase()}
</span>

</div>

<h3 class="text-lg font-semibold text-gray-800 mb-2 cursor-pointer"
onclick="showDetails(${issue.id})">

${issue.title}

</h3>

<p class="text-gray-500 text-sm mb-4">

${issue.description}

</p>

<div class="flex gap-2 mb-4">

<span class="border border-red-300 text-red-500 px-2 py-1 rounded-full text-xs">
${issue.category || "bug"}
</span>

<span class="border border-yellow-400 text-yellow-600 px-2 py-1 rounded-full text-xs">
${issue.label || "help wanted"}
</span>

</div>

</div>

<div class="border-t px-5 py-3 text-sm text-gray-500">

<p>#${issue.id} by ${issue.author}</p>

<p>${new Date(issue.createdAt).toLocaleDateString()}</p>

</div>

`;

container.appendChild(card);

});

}



async function filterIssues(status){

const res = await fetch(API);
const data = await res.json();

const filtered = data.data.filter(
issue => issue.status === status
);

displayIssues(filtered);

if(status === "open"){
setActive("btnOpen");
}
else{
setActive("btnClosed");
}

}



async function searchIssue(){

let text = document.getElementById("searchInput").value;

const res = await fetch(
`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`
);

const data = await res.json();

displayIssues(data.data);

}



async function showDetails(id){

const res = await fetch(
`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
);

const data = await res.json();

const issue = data.data;

document.getElementById("modalTitle").innerText = issue.title;
document.getElementById("modalDesc").innerText = issue.description;
document.getElementById("modalStatus").innerText = "Status: " + issue.status;
document.getElementById("modalAuthor").innerText = "Author: " + issue.author;
document.getElementById("modalPriority").innerText = "Priority: " + issue.priority;

document.getElementById("issueModal").showModal();

}



function setActive(id){

document.getElementById("btnAll").classList.remove("btn-primary");
document.getElementById("btnOpen").classList.remove("btn-primary");
document.getElementById("btnClosed").classList.remove("btn-primary");

document.getElementById(id).classList.add("btn-primary");

}