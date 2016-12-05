function App() {
	this.init();
}

App.prototype = Object.create(Helper.prototype);

App.prototype.init = function() {
	//new Slider();
	new Iframe();
	console.log(this.dateAndLang("2016-12-04 11:22:33", "uk"));
}

window.addEventListener('DOMContentLoaded', function(){
	new App();
});


