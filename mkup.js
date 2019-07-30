// parent function for mkup

function customTag(tag,action){
    document.createElement(tag)
    Inst = getElementsByTagName(tag)
    for(i=0; i<Inst.length;i++){
        action(Inst[i])
    }
}

// <diagram> tag

function diagram(e) {
	if(e.attributes.picture) {
		picture = e.attributes.picture.value
		name    = e.attributes.nameid.value
    	e.innerHTML = "<img src='"+picture+"' usemap='#"+name+"'>" + \n + "<map name="+name+">" + \n
		
}
