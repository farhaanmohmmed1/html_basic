function create(title, cName, views, monthsOld, duration, thumbnail) {
   let container= document.createElement("div")
    lol.setAttribute("class","container")
    let image=lol.createElement("div")
    i1.setAttribute("class","image")
    i1.append(imgElement.src=`{$thumbnail}`)
    let i2=lol.createElement("div")
    i2.setAttribute("class","data")
    i2.textContent=`{$title}`
    let i3=lol.createElement("div")
    i3.setAttribute("class","lol")
    i3.textContent="&nbsp;&nbsp;&nbsp{$cName}"
    let i4=i3.createElement(ul)
i4.append(views)
i4.append(monthsOld)
}