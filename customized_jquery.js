var img = $(".blog-image");


for(i=0;i<2;i++)
{
  img[i].addEventListener("mouseover", function() {
    $(this).fadeTo("slow", 0.3);
});

  img[i].addEventListener("mouseout", function(){
    $(this).fadeTo("slow", 1);
  });
}
