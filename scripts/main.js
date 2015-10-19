'use strict';

var preTotal = document.getElementById('preTotal');
var state = document.getElementById('state');
var submit = document.getElementById('submit');


submit.addEventListener('click', function(e){
	e.preventDefault();
	var tax=0;
	var total=0;
	if(state.value==='Minisota'){
		tax = parseInt(preTotal.value)*0.055
		total = parseInt(preTotal.value)+(parseInt(preTotal.value)*0.055);
		var split2 = tax.toString().split('.');
		var dollars2 = split2[0];
		var round2 = parseInt(split2[1].charAt(1));
		if (split2[1].charAt(2)){
			if (parseInt(split2[1].charAt(2))>4){
			round2 = parseInt(split2[1].charAt(1))+1;
			}
			if (parseInt(split2[1].charAt(2))<5){
			round2 = parseInt(split2[1].charAt(1));
			}
		}
		var split = total.toString().split('.');
		var dollars = split[0];
		var round = parseInt(split[1].charAt(1));
		console.log(round);
		if (split[1].charAt(2)){
			if (parseInt(split[1].charAt(2))>4){
			round = parseInt(split[1].charAt(1))+1;
			}
			if (parseInt(split[1].charAt(2))<5){
			round = parseInt(split[1].charAt(1));
			}
		}
		var cents2 = split2[1].charAt(0)+round2;
		var cents = split[1].charAt(0)+round;
		document.getElementById('tax').innerHTML=' $'+dollars2+'.'+cents2;
		document.getElementById('totalAmt').innerHTML=' $'+dollars+'.'+cents;
		}
	if (state.value==='Other'){
		tax = '$0.00';
		total = preTotal.value;
		document.getElementById('tax').innerHTML=' '+tax;
		document.getElementById('totalAmt').innerHTML=' $'+preTotal.value;
	}
	
})