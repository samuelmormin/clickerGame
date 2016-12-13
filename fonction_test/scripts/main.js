var clicker = {};
clicker.ressources = {};
clicker.global_var = {};

//Ressources
clicker.ressources.planet_current = document.querySelector(".planet");
clicker.ressources.detritus_result = document.querySelector(".panet-detritus-result");
clicker.ressources.detritus_click = document.querySelector(".click-detritus-value");
clicker.ressources.detritus_button = document.querySelector(".ditritus-value");
clicker.ressources.money = document.querySelector(".money");
clicker.ressources.gauge = document.querySelector(".gauge-level");
clicker.ressources.gauge_pourcent = document.querySelector(".gauge-pourcent");
clicker.ressources.energie_click = document.querySelector(".click-energie-value");
clicker.ressources.energie_button = document.querySelector(".energie-value");
clicker.ressources.energie_total = document.querySelector(".energie-total");

//Global variables
clicker.global_var.detritus = 0;
clicker.global_var.detritus_click_result = 100;
clicker.global_var.money_convert_detritus = 10; //detritus convertor rate
clicker.global_var.money = 0;
clicker.global_var.purification = 500;
clicker.global_var.purification_current = 0;
clicker.global_var.energie = clicker.ressources.energie_click.value;
clicker.global_var.energie_per_sec = 0;
clicker.global_var.energie_total = 0;
clicker.global_var.purify_per_sec = 0;
clicker.global_var.click_aids = 
	[{
		name: "gants",
		value: 2,
		price: 5,
		avalable: 0},
	 {
		 name: "pelle",
		 value: 10,
		 price: 100,
		 avalable: 0},
	 {
		 name: "brouette",
		 value: 30,
		 price: 300,
		 avalable: 0},
	 {
		 name: "pelleteuse",
		 value: 100,
		 price: 1000,
		 avalable: 0}];

clicker.global_var.energie_tool = 
	[{
		name: "arbre",
		value_purification: 100,
		value_energie: 10,
		price: 50,
		avalable: 0},
	 {
		 name: "eolienne",
		 value_purification: 10,
		 value_energie: 50,
		 price: 100,
		 avalable: 0},
	 {
		 name: "barrage",
		 value_purification: 20,
		 value_energie: 90,
		 price: 250,
		 avalable: 0},
	 {
		 name: "central",
		 value_purification: 30,
		 value_energie: 200,
		 price: 1300,
		 avalable: 0}];

console.log(clicker);

clicker.ressources.planet_current.addEventListener("click", function(){
	clicker.global_var.detritus += clicker.global_var.detritus_click_result;
	clicker.global_var.money = clicker.global_var.money + parseFloat(clicker.global_var.detritus_click_result/10);
	clicker.global_var.purification_current = clicker.global_var.purification_current + parseFloat(clicker.global_var.detritus_click_result/2);//10 detritus for 1 purification
	clicker.ressources.detritus_result.innerHTML = clicker.global_var.detritus;
	clicker.ressources.money.innerHTML = parseInt(clicker.global_var.money);
	purificationChecker();
});

clicker.ressources.detritus_button.addEventListener("click", function(){
	clicker.ressources.detritus_click = document.querySelector(".click-detritus-value");
	var select_value = parseInt(clicker.ressources.detritus_click.value);
	if(clicker.global_var.click_aids[select_value].price <= clicker.global_var.money){
		clicker.global_var.money -= clicker.global_var.click_aids[select_value].price;
		clicker.ressources.money.innerHTML = parseInt(clicker.global_var.money);
		clicker.global_var.detritus_click_result *= clicker.global_var.click_aids[select_value].value; 
	}
});


/*
	Add energie
*/
clicker.ressources.energie_button.addEventListener("click", function(){
	clicker.ressources.energie_click = document.querySelector(".click-energie-value");
	var select_value = parseInt(clicker.ressources.energie_click.value);
	if(clicker.global_var.energie_tool[select_value].price <= clicker.global_var.money){
		clicker.global_var.money -= clicker.global_var.energie_tool[select_value].price;
		clicker.ressources.money.innerHTML = parseInt(clicker.global_var.money);
		clicker.global_var.energie_per_sec = parseFloat(clicker.global_var.energie_per_sec + clicker.global_var.energie_tool[select_value].value_energie/40);
		clicker.global_var.purify_per_sec = parseFloat(clicker.global_var.purify_per_sec + clicker.global_var.energie_tool[select_value].value_purification/20);
		clicker.global_var.energie_tool[select_value].avalable++;
	}
});

/*
generate energie per seconds
*/
function get_ernergie(){
	clicker.global_var.energie_total += clicker.global_var.energie_per_sec;
	clicker.ressources.energie_total.innerHTML = clicker.global_var.energie_total;
	
	clicker.global_var.money = clicker.global_var.money + parseFloat(clicker.global_var.energie_per_sec/5);
	clicker.ressources.money.innerHTML = parseInt(clicker.global_var.money);
	
	clicker.global_var.purification_current += parseFloat(clicker.global_var.purify_per_sec/4);
	purificationChecker();
	
}

var sec_generator = setInterval(get_ernergie, 1000);

/*
Gauge of purification checker

*/
function purificationChecker(){
	clicker.ressources.gauge_pourcent.innerHTML = parseInt(parseFloat(clicker.global_var.purification_current/clicker.global_var.purification*100)) + " %";
	if(clicker.global_var.purification_current >= clicker.global_var.purification){
		alert("c'est gagner !!!! aller au niveau suivant");
		clicker.global_var.purification *= 1.5;
		clicker.global_var.purification_current = 0;
		clicker.ressources.gauge_pourcent.innerHTML = 0 + " %";
	}
}