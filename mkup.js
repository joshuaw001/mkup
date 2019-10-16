widgets = 
[
	"accordion",
    "auto",
    "btn",
    "ctrl",
    "radio",
    "date",
    "modal",
    "menu",
	"multiselect",
	"mega",
	"bar",
	"select",
	"slider",
	"spinner",
	"number",
	"text",
	"tab",
	"tooltip",
	"window",
	"color",
	"anim",
	"code",
	"diagram"
]

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
		nameid      = e.attributes.nameid.value
                size        = e.attributes.size.value
                value       = e.attributes.valueText.value
                e.innerHTML = "<p style='font-size: " + size + ";'>" + value + "</p>" + \n

		
	}
}

// <date> tag

function date(e) {
        if(e.attributes.day && e.attributes.color) {
                day         = e.attributes.day.value
                color       = e.attributes.color.value
                e.innerHTML = "<div style='color:" + color +";'>" + day + "</div>"
        }
}

customTag("gui-text",text)
customTag("gui-diagram",diagram)
customT
