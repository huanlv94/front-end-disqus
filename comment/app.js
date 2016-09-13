$(document).ready(function(){
  $('.dropdown-toggle-users').click(function(){
    // console.log('Hi');
    if ($('.dropdown-menu-users').css('display') == 'none'){
      $('.dropdown-menu-users').show();
    }
    else{
    $ ('.dropdown-menu-users').hide();
    }
  });

  var content = new Vue({
    el: '#post-list',
    data: {
      posts: [
        {
          id: '123',
          text: 'Comment 1',
          post_in: '8 phút trước',
          author: 'Le Van A',
          upvote: '696',
          downvote: '0',
          children: true,
          children_comment: [
            {
              id: '5678',
              parend_id: '1',
              text: 'Comment 5',
              post_in: '12 phút trước',
              author: 'Le Van Array',
              upvote: '696',
              downvote: '0',
            },
            {
              id: '568',
              parend_id: '1',
              text: 'Comment 5',
              post_in: '12 phút trước',
              author: 'Le Van Array',
              upvote: '696',
              downvote: '0',
            }
          ]
        },
        {
          id: '245',
          text: 'Comment 2',
          post_in: '8 phút trước',
          author: 'Le Van Huan',
          upvote: '696',
          downvote: '0',
          children: true,
          children_comment: [
            {
              id: '56228',
              parend_id: '2',
              text: 'Comment 5',
              post_in: '12 phút trước',
              author: 'Le Van Array',
              upvote: '696',
              downvote: '0',
            }
          ]
        },
        {
          id: '5323',
          text: 'Comment 3',
          post_in: '8 phút trước',
          author: 'Le Van boolean',
          upvote: '696',
          downvote: '0'
        }
      ] 
    },
    ready: function() {
      console.log($('#example'));
    },
  });
})