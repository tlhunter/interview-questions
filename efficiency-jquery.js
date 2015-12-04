var $c = $('#collection');

$c.css('color', 'red');

for (var i = 0; i < 10; i++) {
  $('#collection .item-' + i).text("This is Item #" + i);
}

// Can you make this more efficient?
