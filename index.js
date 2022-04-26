let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li><a target="_blank" href="${leads[i]}"> ${leads[i]} </a></li>`;
  }
  ulEl.innerHTML = listItems;
}

function pushToMyLeads() {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
}

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function tabToMyLeads() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
}

function deleteLeads() {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
}

inputBtn.addEventListener("click", pushToMyLeads);
deleteBtn.addEventListener("dblclick", deleteLeads);
tabBtn.addEventListener("click", tabToMyLeads);
