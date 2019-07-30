// parent function for mkup

function customTag(tag,action){
    document.createElement(tag)
    Inst = getElementsByTagName(tag)
	
    for(i=0; i<Inst.length;i++){
        action(Inst[i])
    }
}

// <diagram> tag

function slider(e){
    e.innerHTML = "<map>"
}
