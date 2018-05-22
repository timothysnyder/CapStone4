

var names = [];
var prices = [];

function addItem(name, price)
{
	names.push(name);
	prices.push(price);

	document.getElementById('cart').innerHTML += `<tr><td>${name}</td><td>${price}</td></tr>`;
	getTotal();
}

function getTotal() {
	var subTotal = 0;
	for (var i = 0; i < prices.length; i++) {
		subTotal += prices[i];

	}

	var total = subTotal * 1.06;
	document.getElementById('total').innerHTML = `subtotal = ${subTotal.toFixed(2)}<br />total = ${total.toFixed(2)}`;



}
