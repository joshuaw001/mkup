function radio(e) {
	if(e.attributes.btn2Color && e.attributes.size && e.attributes.btn1Color && e.attributes.nameid) {
		nameid      = e.attributes.nameid.value
        size        = e.attributes.size.value
        btn1        = e.attributes.btn1color.value
        btn2        = e.attributes.btn2color.value
        e.innerHTML = `
<style>
.circle {
  position: absolute;
  height: `+size+`px;//50px
  width: `+size+`px;//50px
  border-radius: 50%;"
}
.circle1 {
  background-color: `+btn2+`;
}
.circle2 {
  left: 20%;
  top:20%;
  background-color: `+btn1+`;
  height: `+(0.6*size)+`px;//30px
  width: `+(0.6*size)+`px;//30px
}
.circle3 {
  left: 10%;
  top:10%;
  background-color: white;
  height: `+(0.8*size)+`px;//40px
  width: `+(0.8*size)+`px;//40px
}
</style>
<h2>Circle CSS</h2>
<div class="circle1 circle">
<div class="circle3 circle"></div>
<div class="circle2 circle"></div>
</div>`
