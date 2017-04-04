// Make this code more efficient and function 100% the same

var $c = $('#collection');
// var $c = document.getElementById('collection');

$c.css('color', 'red');
// $c.style.color = 'red';

for (var i = 0; i < 1000; i++) {
  $('#collection .item-' + i).text("This is Item #" + i);
  // document.querySelector('#collection .item-' + i).innerHTML = i;
}

// <div id="collection">
//   <div class="item-1"></div>
//   <div class="item-2"></div>
//   <div class="item-0"></div>
//   ...
//   <div class="item-999"></div>
//   <div class="item-998"></div>
//   <div class="item-1000"></div>
// </div>
