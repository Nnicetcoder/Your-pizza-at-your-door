$(document).ready(function(){
   $(".option5").on('change',function(event){
      var value=$(this).text();
  if ($(this).find('option:selected').val() === 'YES') {
      alert('HOLA');
 else}{alert("Your pizza will not be delivered.")}
   }
       	    
         
   
  

   
$(".option").select(function(){

var small ; medium; large;
 small =parsInt($("selected#small").val());
 medium =parsInt($("selected#medium").val());
 large =parsInt($("selected#large").val());

})

$(".option").select(function(){

var small; medium; large;
 small= parsInt($("selected#small").val());
 medium= parsInt($("selected#medium").val());
 large=parsInt($("selected#large").val());

})


$(".option2").select(function(){

var crispy; stuffed;glutenfree;
 crispy= parsInt($("selected#crispy").val());
 stuffed= parsInt($("selected#stuffed").val());
 glutenfree=parsInt($("selected#gluten free").val());

})


$(".option3").select(function(){

var beef;chicken;pork;vegy;
 beef = parsInt($("selected#small").val());
 chicken = parsInt($("selected#medium").val());
 pork = parsInt($("selected#large").val());
 vegy = parsInt($("selected#vegy").val());
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