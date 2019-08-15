widgets = ["accordion","auto","btn","ctrl","radio","date","modal","menu","mega","bar","select","slider","spinner","number","text","tab","tooltip","window","color","anim","diagram"]

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
	if(e.attributes.picture && e.attributes.nameid) {
		picture     = e.attributes.picture.value
		nameid_d    = e.attributes.nameid.value
		e.innerHTML = "<img src='"+picture+"' usemap='#"+name+"'>" + \n + "<map name="+name+">" + \n
		
	}
}
// <text> tag

function text(e) {
	if(e.attributes.nameid && e.attributes.size && e.attributes.valueText) {
		nameid      = e.attributes.nameid
                size        = e.attributes.size
                value       = e.attributes.valueText
                e.innerHTML = "<p style='font-size: " + size + ";'>" + value + "</p>" + \n

		
	}
}
for(tag in widgets){
        customTag("mkup-" + tag, tag)
}
