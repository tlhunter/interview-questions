var $c = $('#collection');
// var $c = document.getElementById('collection');

$c.css('color', 'red');
// $c.style.color = 'red';

for (var i = 0; i < 1000; i++) {
  // Can you make this query more efficient?
  $('#collection .item-' + i).text("This is Item #" + i);
  // document.querySelector('#collection .item-' + i).innerHTML = i;
}

// <div id="collection">
//   <div class="item-1"></div>
//   <div class="item-2"></div>
//   ...
//   <div class="item-1000"></div>
// </div>
