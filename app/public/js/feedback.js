$(function(){
  $.getJSON('api/feedback',updateFeedback);


  $(".feedback-form").submit(function(e){
    console.log("test for rest");
    e.preventDefault();

    $.post('api/feedback',{
      name:$("#feedback-form-name").val(),
      title:$("#feedback-form-title").val(),
      message:$("#feedback-form-message").val()
    },updateFeedback);
  })

  $('.feedback-messages').on('click',function(e){
    if (e.target.className == 'glyphicon glyphicon-remove') {
      $.ajax({
        url:'api/feedback/'+e.target.id,
        type:'DELETE',
        success:updateFeedback
      });
    }
  })


  function updateFeedback(data){
    var output = '';
    $.each(data,function(k,v){
     output += '     <div class="feedback-item item-list media-list">';
     output += '       <div class="feedback-item media">';
     output += '       <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="' + k + '" class="glyphicon glyphicon-remove"></span></button></div>';
     output += '         <div class="feedback-info media-body">';
     output += '           <div class="feedback-head">';
     output += '             <div class="feedback-title">' + v.title + ' <small class="feedback-name label label-info">' + v.name + '</small></div>';
     output += '           </div>';
     output += '           <div class="feedback-message">' + v.message + '</div>';
     output += '         </div>';
     output += '       </div>';
     output += '     </div>';
    });
    $('.feedback-messages').html(output);
  }

})