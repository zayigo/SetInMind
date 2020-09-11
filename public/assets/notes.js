$(document).ready(function () {
  $('form').on('submit', function () {
    let item = $('form input'); // user input
    let note = { item: item.val() };

    $.ajax({
      // make ajax request
      type: 'POST',
      url: '/',
      data: note,
      success: function (data) {
        // on add success
        //do something with the data via front-end framework
        location.reload();
      },
    });

    return false;
  });

  $('.postit').on('click', function () {
    var item = $(this).text().replace(/ /g, '-'); // TODO: encode url?
    $.ajax({
      type: 'DELETE',
      url: '/' + item,
      success: function (data) {
        //do something with the data via front-end framework
        location.reload();
      },
    });
  });
});
