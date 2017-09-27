var maxhealth = 25
var health = 25

setInterval(function(){
	if(health > 0){
		health = health - 1;
	} else {
		health = 0
	}
	updateHealth();
}, 1000);


var updateHealth = function(){
	$('.health-display').text(health);
}