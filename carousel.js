var Carousel = $(".Carousel"),
    deg  = 0;

$(() => {
  $(".Next").on("click", { direction: "right" }, rotate);
  $(".Previous").on("click", { direction: "left" }, rotate);
});

function rotate(e){
  if(e.data.direction=="right"){
    deg = deg - 40;
  }
  if(e.data.direction=="left"){
    deg = deg + 40;
  }
  Carousel.css({
    "-webkit-transform": "rotateY("+deg+"deg)",
    "-moz-transform": "rotateY("+deg+"deg)",
    "-o-transform": "rotateY("+deg+"deg)",
    "transform": "rotateY("+deg+"deg)"
  });
}
