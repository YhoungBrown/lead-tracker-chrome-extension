const saveInputBtn = document.getElementById("save-input")
const input = document.getElementById("input-el")
const saveTabBtn = document.getElementById("save-tab")
const ulEl = document.getElementById("ul-el") 
const deleteBtn  = document.getElementById("delete")

const leadsFromLocalStorage =JSON.parse( localStorage.getItem("myleads"))

console.log(leadsFromLocalStorage)
let myLeads = []

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
     pickNShow(myLeads)
}


saveInputBtn.addEventListener("click", function(){
    myLeads.push(input.value)
    localStorage.setItem("myleads", JSON.stringify(myLeads))
    console.log(myLeads)
    pickNShow(myLeads)
    input.value = ""
    
 })



deleteBtn.addEventListener("click", function(){
    myLeads=[]
    localStorage.clear()
     pickNShow(myLeads)
    
})




function pickNShow(time){
    let listOrder = ""
    for(let i = 0; i < time.length; i++){
        //rsult = time[i]
        console.log(time[i])

       
       
        listOrder += `
      <li>
          <a href="${time[i]}" target="_blank">
              ${time[i]}
          </a>
      </li>
      `
    }
    
     
  
   ulEl.innerHTML = listOrder
 
 }




saveTabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true , currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(myLeads))
        pickNShow(myLeads)
    })

    
})

