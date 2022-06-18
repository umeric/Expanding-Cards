const panels = document.querySelectorAll('.panel') //when using queryselectorall to get all the panels, this will create a array of all the panels//

panels.forEach((panel) => {
    panel.addEventListener('click', ()=> {
        removeActiveClasses() //When you click on any of the panel, it will remove the active from the other panels not click and the second action panel add will take place on the panel you click//
        panel.classList.add('active') //add the panel you click on to active, which will cause the transition//
    })
})
function removeActiveClasses() {
    panels.forEach((panel)=>{
      panel.classList.remove('active')  
    } 
    )
}