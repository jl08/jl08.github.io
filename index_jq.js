<script type='text/javascript'>
// $(document).ready(function() {
//   $('img').mouseover(function() {
//     $('img').fadeTo('fast',0.25);
//   });
//   $('img').mouseleave(function() {
//     $(this).fadeTo('fast',1);
//   });
// });
$(document).ready(function(){
$("img").hover(
function() {
$(this).stop().animate({"opacity": "0"}, "slow");
},
function() {
$(this).stop().animate({"opacity": "1"}, "slow");
});

});
</script>