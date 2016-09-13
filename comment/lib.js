$(document).ready(function(){
  $('[data-role="reply-link"]').click(function(){
    var id = $(this).data('id');
    var form = $('#reply-form-'+id);
      if (form.css('display') == 'none'){
        form.show();
        form.html('');
        var text_aria = $('#form').html();
        form.append(text_aria);
      }
      else{
        form.hide();
      }
  });
});