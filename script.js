$(document).ready(function(){
   $(".option5").on('change',function(event){
      var value=$(this).text();
  if ($(this).find('option:selected').val() === 'YES') {
      alert('HOLA');
 else}{alert("Your pizza will not be delivered.")}
   }
       	    
         
   
  }

   }
$(".option").click(function(){


var small=$("selected#small").val();
var medium=$("selected#medium").val();
var large=$("selected#large").val();

})

$(".option").click(function(){


var small=$("selected#small").val();
var medium=$("selected#medium").val();
var large=$("selected#large").val();

})


$(".option2").click(function(){


var crispy=$("selected#crispy").val();
var stuffed=$("selected#stuffed").val();
var glutenfree=$("selected#gluten free").val();

})


$(".option3").click(function(){

var beef;chicken;pork;vegy;
 beef =$("selected#small").val();
 chicken =$("selected#medium").val();
 pork =$("selected#large").val();
 vegy =$("selected#vegy").val();
})


$(".option").click(function(){

var small;medium;large;
 small = parsInt( $("selected#small").val());
 medium = parsInt($("selected#medium").val());
 large =  parsInt( $("selected#large").val());

})


$(".submit").submit(function(){

var totalPrice=(('select[name=option]')+('select[name=option2]')+('select[name=option3]'))*('select[name=Quantity]');
function myfunction(){alert('the total price for your pizza is'+' '+ totalPrice)}


");});













































	
};)