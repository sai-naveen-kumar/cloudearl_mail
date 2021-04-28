$("#sendbtn").on('click', function () {
    var recep = $("#recep").val();
    var htmlmess=$("#htmlmessage").val();
    console.log($("#recep").val());
    if ($("#recep").val() == '') {
        document.getElementById("div2").innerHTML = "enter valid reciptents";
        document.getElementById("div2").style.color = "red";
    }
    else if($("#htmlmessage").val()  == '') {
        document.getElementById("div2").innerHTML = "enter valid html format message";
        document.getElementById("div2").style.color = "red";
    }
    else{
    $.ajax({
          type: "GET",
          url: '/my_def_in_view',
          data: {
              "recep": recep,
              "message":htmlmess,
          },
          dataType: "json",
          success: function (data) {
              // any process in data
              document.getElementById("div2").innerHTML = "messaged sended succesfully -->"+data.program;
              document.getElementById("div2").style.color = "blue";
              $("#recep").val('');
              $("#htmlmessage").val('');
              jQuery('#div2').show();
          },
          failure: function () {
              alert("failure");
          }
        });
    }

  });