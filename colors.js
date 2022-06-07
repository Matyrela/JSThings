function color() { return Math.floor(Math.random() * 255); }
function exec(){ this.style.color = ['rgb(',[color(),color(),color()].join(','),')'].join(''),this.style.backgroundColor = ['rgb(',[color(),color(),color()].join(','),')'].join(''); }
[].forEach.call(document.all, function(item) {setTimeout(function() {exec.call(item)}, (Math.random()*500)+100)});
