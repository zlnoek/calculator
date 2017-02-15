// calculator display string
let display = '0';

// Calculator logic
const updateDisplay = disp => {
  $('#display').text(disp);
};

const checkMD = op => {
  if (op === '*' || op === '/') {
    return true;
  } else {
    return false;
  }
};

const calculate = eq => {
  console.log('Input Eq:', eq);
  let cmd = eq.split(' ');
  cmd.reduce((acc, int, ind, col) => {
    if (checkMD(int)) {

    }
  }, []);

};

const calculatorHandler = op => {
  if (+op === +op) {
    if (display === '0') {
      display = op;
    } else {
      display += op;
    }
    updateDisplay(display);
  } else if (op === 'c') {
    display = '0';
    updateDisplay(display);
  } else if (op === '=') {
    calculate(display);
  } else {
    if (display !== '0') {
      let cmd = ` ${op} `;
      display += cmd;
      updateDisplay(display);
    }
  }
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



