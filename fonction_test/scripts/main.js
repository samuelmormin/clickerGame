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
clicker.ressources.detritus_auto = document.querySelector(".ditritus-auto");
clicker.ressources.detritus_auto_value = document.querySelector(".click-detritus-auto-value");
clicker.ressources.clicker_level = document.querySelector(".cliker-level");

//Global variables
clicker.global_var.current_level = 1; // start level
clicker.global_var.detritus = 0; //number of detritus collected
clicker.global_var.detritus_click_result = 100; //number of detritus collected per click
clicker.global_var.money_convert_detritus = 10; //detritus convertor rate
clicker.global_var.money = 0; //Indicator of your money
clicker.global_var.purification = 500; // purification level 1 
clicker.global_var.purification_current = 0; //our purification currently
//clicker.global_var.energie = clicker.ressources.energie_click.value; 
clicker.global_var.energie_total = 0; //number of energie total
clicker.global_var.energie_per_sec = 0; //energie per second
clicker.global_var.purify_per_sec = 0; //purification per second
clicker.global_var.detritus_per_sec = 0; //detritus per second
clicker.global_var.click_aids = //list of items to have more detritus per click
	[{
		name: "gants",
		value: 2,
		price: 5,
		level: 0},
	 {
		 name: "pelle",
		 value: 10,
		 price: 50,

		 level: 0},
	 {
		 name: "brouette",
		 value: 30,
		 price: 200,

		 level: 0},
	 {
		 name: "pelleteuse",
		 value: 100,
		 price: 1000,

		 level: 0}];

clicker.global_var.energie_tool = //list of items to get energie auto
	[{
		name: "arbre",
		value_purification: 100,
		value_energie: 10,
		price: 50,
		available: 0},
	 {
		 name: "eolienne",
		 value_purification: 10,
		 value_energie: 50,
		 price: 100,
		 available: 0},
	 {
		 name: "barrage",
		 value_purification: 20,
		 value_energie: 90,
		 price: 250,
		 available: 0},
	 {
		 name: "central",
		 value_purification: 30,
		 value_energie: 200,
		 price: 1300,
		 available: 0}];
clicker.global_var.detritus_auto = //list of items to get detritus auto
	[{
		name: "ovrier",
		value: 5,
		price: 100,
		available: 0},
	 {
		 name: "ouvrier spécilasé",
		 value: 20,
		 price: 250,
		 available: 0},
	 {
		 name: "robot",
		 value: 100,
		 price: 700,
		 available: 0},
	 {
		 name: "super robot",
		 value: 250,
		 price: 1200,
		 available: 0}];

console.log(clicker);

clicker.ressources.planet_current.addEventListener("click", function(){
	clicker.global_var.detritus += clicker.global_var.detritus_click_result;
	clicker.global_var.money = clicker.global_var.money + parseFloat(clicker.global_var.detritus_click_result/10);
	clicker.global_var.purification_current = clicker.global_var.purification_current + parseFloat(clicker.global_var.detritus_click_result/2);//10 detritus for 1 purification
	clicker.ressources.detritus_result.innerHTML = clicker.global_var.detritus;
	clicker.ressources.money.innerHTML = parseInt(clicker.global_var.money);
	purificationChecker();
});

//buy tool to get more detritus per click
clicker.ressources.detritus_button.addEventListener("click", function(){
	clicker.ressources.detritus_click = document.querySelector(".click-detritus-value");
	if(clicker.ressources.detritus_click.value != "null"){
		var select_value = parseInt(clicker.ressources.detritus_click.value);
		if(clicker.global_var.click_aids[select_value].price <= clicker.global_var.money){
			clicker.global_var.money -= clicker.global_var.click_aids[select_value].price;
			clicker.global_var.click_aids[select_value].level++;
			clicker.ressources.money.innerHTML = parseInt(clicker.global_var.money);
			clicker.global_var.click_aids[select_value].price = parseFloat(clicker.global_var.click_aids[select_value].price * 1.2);
			clicker.global_var.detritus_click_result += clicker.global_var.click_aids[select_value].value; 
			console.log(clicker.global_var.click_aids[select_value].name + " : " + clicker.global_var.click_aids[select_value].level + " : " + clicker.global_var.click_aids[select_value].price + " pièce");
		}
	}
});

//item to have more detritus per sec
clicker.ressources.detritus_auto.addEventListener("click", function(){
	clicker.ressources.detritus_auto_value = document.querySelector(".click-detritus-auto-value");
	console.log(clicker.ressources.detritus_auto_value);
	if(clicker.ressources.detritus_auto_value.value != "null"){
		var select_value = parseInt(clicker.ressources.detritus_auto_value.value);
		if(clicker.global_var.detritus_auto[select_value].price <= clicker.global_var.money){
			clicker.global_var.money -= clicker.global_var.detritus_auto[select_value].price;
			clicker.global_var.detritus_per_sec += clicker.global_var.detritus_auto[select_value].value;
			clicker.global_var.detritus_auto[select_value].available++;
			clicker.global_var.detritus_auto[select_value].price = parseFloat(clicker.global_var.detritus_auto[select_value].price * 1.2);
			clicker.ressources.money.innerHTML = parseInt(clicker.global_var.money);
			console.log(clicker.global_var.detritus_per_sec);
		}
	}
});
/*
	Add energie
*/
//if energie tool's price is less than the amount of money we possess we can buy this tool
clicker.ressources.energie_button.addEventListener("click", function(){
	clicker.ressources.energie_click = document.querySelector(".click-energie-value");
	if(clicker.ressources.energie_click.value != "null"){
		var select_value = parseInt(clicker.ressources.energie_click.value);
		if(clicker.global_var.energie_tool[select_value].price <= clicker.global_var.money){ 
			clicker.global_var.money -= clicker.global_var.energie_tool[select_value].price;
			clicker.ressources.money.innerHTML = parseInt(clicker.global_var.money);
			clicker.global_var.energie_per_sec = parseFloat(clicker.global_var.energie_per_sec + clicker.global_var.energie_tool[select_value].value_energie/40);
			clicker.global_var.purify_per_sec = parseFloat(clicker.global_var.purify_per_sec + clicker.global_var.energie_tool[select_value].value_purification/20);
			clicker.global_var.energie_tool[select_value].available++;
			clicker.global_var.energie_tool[select_value].price = parseFloat(clicker.global_var.energie_tool[select_value].price * 1.2);
			console.log(clicker.global_var.energie_tool[select_value].name + " : " + clicker.global_var.energie_tool[select_value].available + " : " + clicker.global_var.energie_tool[select_value].price + " pièce");
		}
	}
});

/*
generate ressources per seconds
*/
function get_ressources(){
	clicker.global_var.energie_total += clicker.global_var.energie_per_sec;
	clicker.ressources.energie_total.innerHTML = clicker.global_var.energie_total;

	clicker.global_var.money = clicker.global_var.money + parseFloat(clicker.global_var.energie_per_sec/5);
	clicker.ressources.money.innerHTML = parseInt(clicker.global_var.money);
	
	clicker.global_var.detritus = parseFloat(clicker.global_var.detritus + clicker.global_var.detritus_per_sec);
	clicker.global_var.money = clicker.global_var.money + parseFloat(clicker.global_var.detritus_per_sec/10);
	clicker.ressources.detritus_result.innerHTML = clicker.global_var.detritus;

	clicker.global_var.purification_current += parseFloat(clicker.global_var.purify_per_sec/4);
	purificationChecker();
}

var sec_generator = setInterval(get_ressources, 1000);

/*
Gauge of purification checker
*/
function purificationChecker(){
	clicker.ressources.gauge_pourcent.innerHTML = parseInt(parseFloat(clicker.global_var.purification_current/clicker.global_var.purification*100)) + " %";
	if(clicker.global_var.purification_current >= clicker.global_var.purification){
		clicker.global_var.current_level++;
		alert("vous avez réussit le " + (clicker.global_var.current_level - 1) + " !!!! Aller au niveau " + clicker.global_var.current_level);
		clicker.ressources.clicker_level.innerHTML = clicker.global_var.current_level;
		clicker.global_var.purification *= 1.5;
		clicker.global_var.purification_current = 0;
		clicker.ressources.gauge_pourcent.innerHTML = 0 + " %";
	}
}