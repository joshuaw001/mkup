function customTag(tag,action){
    document.createElement(tag)
    Inst = getElementsByTagName(tag)
    for(i=0; i<Inst.length;i++){
        action(Inst[i])
    }
}

function Accordion(e){
    return 0
}
