function Helper(){

}

Helper.prototype.dateAndLang = function (fullDate, lang){
	var today = this.getValue();
	var date = this.getValue(fullDate.split(" ")[0]);

	if(today == date){
		var result = fullDate.split(" ")[1].slice(0, -3);
		return result;
	}
	else{
		var userDate = new Date(fullDate);
		var month = this.month(userDate.getMonth()+1, lang);
		var result = userDate.getDate() +" " + month + " " + userDate.getFullYear();

		return result;
	}
}

Helper.prototype.getValue = function (date) {
	var d = date ? new Date(date) : new Date();
	var value = (new Date(d.getFullYear(), d.getMonth(), d.getDate()).valueOf());

	return value;
}

Helper.prototype.month = function(month, lang) {
	var mounthObject = {
		ru: {
			1: 'Января',
			2: 'Февраля',
			3: 'Марта',
			4: 'Апреля',
			5: 'Мая',
			6: 'Июня',
			7: 'Июля',
			8: 'Августа',
			9: 'Сентября',
			10: 'Октября',
			11: 'Ноября',
			12: 'Декабря'
		},
		uk: {
			1: "Січня",
			2: "Лютого",
			3: "Березня",
			4: "Квітня",
			5: "Травня",
			6: "Червня",
			7: "Липня",
			8: "Серпня",
			9: "Вересня",
			10: "Жовтня",
			11: "Листопада",
			12: "Грудня"
		}
		};

		return mounthObject[lang][month];
}