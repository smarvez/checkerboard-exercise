var gradient = document.createElement('div');
gradient.style.backgroundColor = '#3d5e91';

document.body.appendChild(gradient);

for  (var i = 0; i < 81; i++) {
  var tile = document.createElement('div');
  var body = document.getElementsByTagName('body')[0];
  var gradient = document.getElementsByTagName('body')[0];

  document.body.prepend(tile);

  tile.style.width = '11.1%';
  tile.style.float = 'left';
  tile.style.paddingBottom = '11.1%';

  if (i % 2 === 0) {
    tile.style.backgroundColor = ('black');
  }
  var gradient = document.getElementsByTagName('body')[0];
  gradient.style.background = "linear-gradient(to bottom,green,teal,blue,indigo,violet, magenta)";
}
