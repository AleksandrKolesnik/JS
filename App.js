function App() {
	this.init();
}

App.prototype = Object.create(Helper.prototype);

App.prototype.init = function(){
	//new Slider();
	//new Iframe();
	console.log(this);
}
window.addEventListener('DOMContentLoaded', function(){new App()});

