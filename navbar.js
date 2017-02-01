$(() => {
  $(".Title").click( (event) => {
    $(".Current").removeClass('Current');
    $(event.target).parent().addClass('Current');
  });
  $(".2DRotation").click(open2DRotation);
  $(".3DRotation").click(open3DRotation);
  $(".CarouselBlock").click(openCarouselBlock);
  $(".ModalBlock").click(openModalBlock);
  $(".CardsBlock").click(openCardsBlock);
  $(".BookBlock").click(openBookBlock);
});

function open2DRotation() {
  $(".Content").css("display", "none");
  $(".Rotation2D").css("display", "flex");
}

function open3DRotation() {
  $(".Content").css("display", "none");
  $(".Pseudo3DRotation").css("display", "flex");
}

function openCarouselBlock() {
  $(".Content").css("display", "none");
  $(".Gallery").css("display", "flex");
}

function openModalBlock() {
  $(".Content").css("display", "none");
  $(".Modal").css("display", "flex");
}

function openCardsBlock() {
  $(".Content").css("display", "none");
  $(".Heroes").css("display", "flex");
}

function openBookBlock() {
  $(".Content").css("display", "none");
  $("#canvas").css("display", "block");
}

// .Pseudo3DRotation {
//   /*display: flex;*/

// .Rotation2D {
//   display: flex;

// .Heroes {
//   display: flex;


// .Modal {
//   display: flex;

// .Gallery {
//   display: flex;

// #canvas{
// 	display: block;
