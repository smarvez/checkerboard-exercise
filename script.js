
for  (var i = 0; i < 81; i++) {
  var tile = document.createElement('div');
  var body = document.getElementsByTagName('body')[0];

  document.body.prepend(tile);

  tile.style.width = '11.1%';
  tile.style.float = 'left';
  tile.style.paddingBottom = '11.1%';

  if (i%2 === 0) {
    tile.style.backgroundColor = "red";
  } else {
    tile.style.backgroundColor = "black";
  }
}
// Your JS goes here
