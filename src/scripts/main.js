var clicker = {};
clicker.ressources = {};
clicker.global_var = {};

//Ressources
clicker.ressources.planet_current = document.querySelector(".planet"); // planet
clicker.ressources.detritus_result = document.querySelector(".counter"); // counter of detritus
// clicker.ressources.detritus_click = document.querySelector(".counter");
// clicker.ressources.detritus_button = document.querySelector(".ditritus-value");
clicker.ressources.money = document.querySelector(".incrementingCoin");
clicker.ressources.gauge = document.querySelector(".ratio2");
clicker.ressources.gauge_pourcent = document.querySelector(".percentage");
// clicker.ressources.energie_click = document.querySelector(".click-energie-value");
// clicker.ressources.energie_button = document.querySelector(".energie-value");
// clicker.ressources.energie_total = document.querySelector(".energie-total");
// clicker.ressources.detritus_auto = document.querySelector(".ditritus-auto");
// clicker.ressources.detritus_auto_value = document.querySelector(".click-detritus-auto-value");
// clicker.ressources.clicker_level = document.querySelector(".cliker-level");

//Global variables
clicker.global_var.current_level = 1; // start level
clicker.global_var.coeficient_price = 2; // coefficient for price
clicker.global_var.coefficient_purification = 1.2; // coefficient of purification for each level
clicker.global_var.detritus = 0; //number of detritus collected
clicker.global_var.detritus_click_result = 1; //number of detritus collected per click
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
		 name: "pince",
		 value: 5,
		 price: 60,
		 level: 0},
	 {
		 name: "sac poubelle",
		 value: 10,
		 price: 150,
		 level: 0},
	 {
		 name: "pelle",
		 value: 30,
		 price: 320,
		 level: 0},
	 {
		 name: "brouette",
		 value: 40,
		 price: 470,
		 level: 0},
	 {
		 name: "pelleteuse",
		 value: 100,
		 price: 1000,
		 level: 0},
	 {
		 name: "camion benne",
		 value: 500,
		 price: 3000,
		 level: 0},
	 {
		 name: "T 282B",
		 value: 1000,
		 price: 7600,
		 level: 0},
	];

clicker.global_var.energie_tool = //list of items to get energie auto
	[{
		name: "banzaï",
		value_purification: 30,
		value_energie: 2.5,
		price: 10,
		available: 0},
	 {
		 name: "arbus",
		 value_purification: 50,
		 value_energie: 5,
		 price: 20,
		 available: 0},
	 {
		 name: "arbre de vie",
		 value_purification: 70,
		 value_energie: 10,
		 price: 80,
		 available: 0},
	 {
		 name: "arbre fruitié",
		 value_purification: 100,
		 value_energie: 20,
		 price: 200,
		 available: 0},
	 {
		 name: "hevea",
		 value_purification: 300,
		 value_energie: 40,
		 price: 900,
		 available: 0},
	 {
		 name: "arbre alienne",
		 value_purification: 700,
		 value_energie: 60,
		 price: 2100,
		 available: 0},
	 {
		 name: "eolienne",
		 value_purification: 10,
		 value_energie: 80,
		 price: 60,
		 available: 0},
	 {
		 name: "barrage",
		 value_purification: 20,
		 value_energie: 100,
		 price: 250,
		 available: 0},
	 {
		 name: "eolienne de l'espace",
		 value_purification: 30,
		 value_energie: 160,
		 price: 780,
		 available: 0},
	 {
		 name: "centrale à fusion",
		 value_purification: 40,
		 value_energie: 320,
		 price: 1300,
		 available: 0},
	 {
		 name: "méga centrale",
		 value_purification: 50,
		 value_energie: 780,
		 price: 2500,
		 available: 0}];
clicker.global_var.detritus_auto = //list of items to get detritus auto
	[{
		name: "bénévole écolo",
		value: 5,
		price: 100,
		available: 0},
	 {
		 name: "ouvrier",
		 value: 10,
		 price: 210,
		 available: 0},
	 {
		 name: "ouvrier spécialisé",
		 value: 25,
		 price: 430,
		 available: 0},
	 {
		 name: "walee",
		 value: 60,
		 price: 700,
		 available: 0},
	 {
		 name: "super walee",
		 value: 100,
		 price: 1200,
		 available: 0},
	 {
		 name: "régiment alienne",
		 value: 200,
		 price: 2200,
		 available: 0},
	 {
		 name: "bataillon intergalactic",
		 value: 500,
		 price: 3500,
		 available: 0},
	 {
		 name: "l'armée des écolos intergalactic",
		 value: 1000,
		 price: 10000,
		 available: 0}];

console.log(clicker);

// incrementation of detritus
clicker.ressources.planet_current.addEventListener("click", function(){
	clicker.global_var.detritus += clicker.global_var.detritus_click_result;
    console.log(	clicker.global_var.detritus);
	clicker.global_var.money = clicker.global_var.money + parseFloat(clicker.global_var.detritus_click_result/10);
	clicker.global_var.purification_current = clicker.global_var.purification_current + parseFloat(clicker.global_var.detritus_click_result/2);//10 detritus for 1 purification
	clicker.ressources.detritus_result.innerHTML = clicker.global_var.detritus;
	clicker.ressources.money.innerHTML = parseInt(clicker.global_var.money);
	purificationChecker();
});

function purificationChecker(){
	clicker.ressources.gauge_pourcent.innerHTML = parseInt(parseFloat(clicker.global_var.purification_current/clicker.global_var.purification*100)) + " %";
	clicker.ressources.gauge.style = "transform: scaleX(" + (clicker.global_var.purification_current/clicker.global_var.purification*100)/100 + ")";
	if(clicker.global_var.purification_current >= clicker.global_var.purification){
		clicker.global_var.current_level++;
		alert("vous avez réussit le " + (clicker.global_var.current_level - 1) + " !!!! Aller au niveau " + clicker.global_var.current_level);
		clicker.ressources.clicker_level.innerHTML = clicker.global_var.current_level;
		clicker.global_var.purification *= clicker.global_var.coefficient_purification;
		clicker.global_var.purification_current = 0;
		clicker.ressources.gauge_pourcent.innerHTML = 0 + " %";
		clicker.ressources.gauge.style = "transform: scaleX(0)";
	}
}
