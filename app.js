//calculator


console.log('All TD', $('td'));

$('td').each((ind, el) => {
  $(el).text($(el).attr('id'));
});

$('td').on('click', (e) => {
  let op = $(e.target).text();
  console.log('Clicked:', op);
});

