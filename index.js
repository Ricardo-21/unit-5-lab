const gameBox = document.createElement('div');
gameBox.style.backgroundColor = 'blue';
gameBox.style.width = '600px';
gameBox.style.height = '600px';
gameBox.style.position = 'relative';

const topL = document.createElement('div');
gameBox.append(topL);
// topL.style.border = '10px';
// topL.style.borderColor = 'black';
// topL.style.borderStyle = 'dashed';
topL.style.backgroundColor = 'red';
topL.style.top = '0px';
topL.style.left = '0px';
topL.style.width = '200px';
topL.style.height = '200px';
topL.style.position = 'absolute';

const body = document.querySelector('body');
body.append(gameBox);