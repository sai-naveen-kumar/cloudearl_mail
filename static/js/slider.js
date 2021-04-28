function myFunction() {
  var text = "";
  var i;
  for (i = 0; i <= 24; i=i+0.25) {
  if (Number.isInteger(i)){
    text += "<div class='marker' style='left:"+i*4.16+"%'><sup></sup>"+i+"</div>";
    }
   else{
    text += "<div class='marker1' style='left:"+i*4.16+"%'><sup></sup>"+"</div>";
      //text=text;
   }
  }
document.getElementById("demo").innerHTML = text;
}
myFunction()

$(function() {
    var day=0;
    var val=[2,9];
    var inst='';
  //sreach bar 
  $("#pageSelectBtn").on('click', function () {
    var editing_page = $("#editing_page").val();
    if($('#editing_page_list option').filter(function(){
        return this.value === editing_page;
    }).length) {
        inst= editing_page;
        $.ajax({
          type: "GET",
          url: '/my_def_in_view',
          data: {
              "result": inst,
          },
          dataType: "json",
          success: function (data) {
              // any process in data
              document.getElementById("instance").innerHTML = "Scheduling time for "+data.program+" Instance";
              inst=data.program;
              jQuery('#div2').show();
          },
          failure: function () {
              alert("failure");
          }
      });





      
    }
    else{
      document.getElementById("instance").innerHTML = "Please select a valid Instance";
      jQuery('#div2').hide();
      inst="";
    }
  });
  jQuery('#div2').hide();
  jQuery('.targetDiv').hide();
  jQuery('.showSingle').click(function(){
               jQuery('.targetDiv').hide();
                day = jQuery(this).attr('target');
                var bor='#s'+jQuery(this).attr('target'); 
                $('.showSingle').css("border", "1px solid white");
                $(bor).css("border", "1px solid blue");
                jQuery('#div1').show();
          });
    $('#slider-range').slider({
      range: true,
      min: 0,
      max: 24,
      step: 0.25,
      values: val
    });
    $('.ui-slider-range').append($('.range-wrapper'));
    $('.range').html('<span class="range-value"><sup></sup>' + $('#slider-range').slider("values", 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</span><span class="range-divider"></span><span class="range-value"><sup></sup>' + $("#slider-range").slider("values", 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</span>');
    $('#slider-range').slider({
      slide: function(event, ui) {
    var n = ui.values[0].toString();
        var res = n.substr(-2);
        if(res==".5"){
          var r = n.replace(".5", ":30");
        }
         else if (res=="25") {
          var r = n.replace(".25", ":15");
       } else if (res=="75"){
         var r = n.replace(".75", ":45");
       }
       else{
        var r=ui.values[0];
       }
       var y = ui.values[1].toString();
        var res = y.substr(-2);
        if(res==".5"){
          var  s= y.replace(".5", ":30");
        }
         else if (res=="25") {
          var s = y.replace(".25", ":15");
       } else if (res=="75"){
         var s = y.replace(".75", ":45");
       }
       else{
        var s=ui.values[1];
       }
       console.log("instance",inst,"day",day,"time",r,s);
        $('.range').html('<span class="range-value"><sup></sup>' + r.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</span><span class="range-divider"></span><span class="range-value"><sup></sup>' + s.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</span>');
        var previousVal = parseInt($(this).data('value'));
  
        $(this).data({
          'value': parseInt(r)
        });
        }
    });
    $('.range, .range-alert').on('mousedown', function(event) {
      event.stopPropagation();
    });
  });