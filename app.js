// calculator display string
let display = '0';
let displayStore = '';
let cmdStore = '';

// Calculator logic
const updateDisplay = disp => {
  $('#display').text(disp);
};

const calculate = (num1, num2, op) => {
  let a = +num1;
  let b = +num2;

  console.log(`A: ${a} | B: ${b}`);

  if (op === '*') return (a * b).toString();
  if (op === '/') return (a / b).toString();
  if (op === '+') return (a + b).toString();
  if (op === '-') return (a - b).toString();
};

const calculatorHandler = op => {
  if (+op === +op) {
    if (display === '0') {
      display = op;
    } else {
      display += op;
    }
  } else if (op === 'c') {
    display = '0';
  } else if (op === '=') {
    display = calculate(displayStore, display, cmdStore);
    displayStore = '0';
    cmdStore = '';
  } else {
    if (display !== '0') {
      cmdStore = op;
      displayStore = display;
      display = '0';
    }
  }
  console.log('displayStore:', displayStore);
  updateDisplay(display);
};

// Add text to buttons based on id
$('td').each((ind, el) => {
  let $el = $('<div><div/>');
  $el.addClass('calcButton');
  $el.text($(el).attr('id'));
  $(el).append($el);
  $(el).addClass('buttonContainer');
});

// Add onClick listener for calculator buttons
$('td').on('click', (e) => {
  let op = $(e.target).text();
  console.log('Clicked:', op);
  calculatorHandler(op);
});

// Add highlighting event handlers
$('.buttonContainer').on('mouseenter', (e) => {
  let $el = $(e.target);

  $('.highlighted').removeClass('highlighted');

  $el.addClass('highlighted');

  $('.highlighted').on('mouseleave', (e) => {
    let $el = $(e.target);
    $el.removeClass('highlighted');
  });
});



