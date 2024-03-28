function adv() {
    let a="Crazy"
    let b="Amazing"
    let c="Fire"
    let r=Math.random()
    if(r<0.3){
        return a;
        
    }
    else if(r>0.3&&r<0.7){
        return b;
    }
    else{
        return c;
    }
}
function name1() {
    let a="Engine"
    let b="Foods"
    let c="Garments"
    let r=Math.random()
    if(r<0.3){
        return a;
        
    }
    else if(r>0.3&&r<0.7){
        return b;
    }
    else{
        return c;
    }
}
function word() {
    let a="Bros"
    let b="Limited"
    let c="Hub"
    let r=Math.random()
    if(r<0.3){
        return a;
        
    }
    else if(r>0.3&&r<0.7){
        return b;
    }
    else{
        return c;
    }
}
console.log("Randomly generated name:",adv(),name1(),word())