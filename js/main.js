$(document).ready(function(){

$(".hoverEffect").mouseover(function(){


	$(this).fadeTo(300,0.5);

}).mouseout(function(){



	$(this).fadeTo(100,1.0);
});


$(".news-img").mouseover(function(){


	$(this).fadeTo(300,0.4);

}).mouseout(function(){



	$(this).fadeTo(100,1.0);
});





$("#fname").focusin(function(){

var text = $(this).val();

if(text != ""){

$(this).val('');

}



}).focusout(function(){

var text = $(this).val();
if(text ==""){

	$(this).val('First Name');
}  
});
$("#lname").focusin(function(){

var text = $(this).val();

if(text != ""){

$(this).val('');

}



}).focusout(function(){

var text = $(this).val();
if(text ==""){

	$(this).val('Last Name');
}  
});

$("#email").focusin(function(){

var text = $(this).val();

if(text != ""){

$(this).val('');

}



}).focusout(function(){

var text = $(this).val();
if(text ==""){

	$(this).val('Email Address');
}  
});
$("#phone").focusin(function(){

var text = $(this).val();

if(text != ""){

$(this).val('');

}



}).focusout(function(){

var text = $(this).val();
if(text ==""){

	$(this).val('Phone');
}  
});
$("#message").focusin(function(){

var text = $(this).val();

if(text != ""){

$(this).val('');

}



}).focusout(function(){

var text = $(this).val();
if(text ==""){

	$(this).val('Enter your massage for us here. We will get back to you within 2 business days.');
}  
});

$(".submit").click(function(){


alert("Thank your for your support!");


});


});