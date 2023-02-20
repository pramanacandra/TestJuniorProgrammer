  $(document).ready(function(){
    $("#hide").click(function(){
      $("table").hide();
    });
    $("#show").click(function(){
      $("table").show();
    });
  });

  $(document).ready(function(){
            $("th").hover(function(){
                $(this).addClass("hover")
            }, function(){
                $(this).removeClass("hover")
            })
            $("th").click(function(){
                alert("Anda Mengklik Judul " + $(this).html());
            })
            $("td").hover(function(){
                $(this).addClass("hoverTd")
            }, function(){
                $(this).removeClass("hoverTd")
            })
            $("td").click(function(){
                alert("Anda Mengklik " + $(this).html());
            })
        })

function change()
{
    var elem = document.getElementById("myButton1");
    if (elem.value=="Hide") $("table").hide(elem.value = "Show");
    else if (elem.value = "Show") $("table").show(elem.value = "Hide");
}