//calculator


console.log('All TD', $('td'));

$('td').each((ind, el) => {
  let $el = $('<div><div/>');
  $el.addClass('calcButton');
  $el.text($(el).attr('id'));
  $(el).append($el);
  $(el).addClass('buttonContainer');
});

$('td').on('click', (e) => {
  let op = $(e.target).text();
  console.log('Clicked:', op);
});

$('.buttonContainer').on('mouseenter', (e) => {
  let $el = $(e.target);

  $('.highlighted').removeClass('highlighted');

  $el.addClass('highlighted');

  $('.highlighted').on('mouseleave', (e) => {
    let $el = $(e.target);
    $el.removeClass('highlighted');
  });
});


