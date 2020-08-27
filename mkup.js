widgets = [
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

//universal attributes
$_INFINITY  = 1e+1000

// parent function for mkup
class Tag {
	constructor(name,props={}){ // props = {"attribute name" : "type",...}
		this.name = name
		this.props = props
		// end
	}
	validate(){}
}
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
        if(e.attributes.day && e.attributes.bgColor && e.attributes.fgColor) {
                day         = e.attributes.day.value
                color       = e.attributes.fgColor.value
				color2      = e.attributes.bgColor.value
                e.innerHTML = "<div style='color:" + color +";background-color:" + color2 +"'>" + day + "</div>"
        }
}

// <auto> tag

function auto(e) {
	if(e.attributes.corrList && e.attributes.fgColor && e.attributes.bgColor)
}



//create tag definitions

customTag("gui-text",text)
customTag("gui-diagram",diagram)
customTag("gui-date",date)

