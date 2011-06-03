var plaid_count = 0;
function add_plaid() {
	plaid_count += 1;
	var plaid_url = 'http://www.plaidirish.com/';
	var div = document.createElement('div');
	var img = document.createElement('img');
	var body = document.body;
	var random = Math.random();
	var winHeight = window.height;
	var winWidth = window.width;
	var height = 0;
	var width = 0;
	var numType = 'px';
	var now = new Date();
	var time = now.getTime();
	var ease = 'all .1s linear';

	div.style.position = 'fixed';
	
	div.onclick = add_plaid;
	div.style.zIndex = 10;
	div.style.outline = 0;
	
	if( plaid_count == 15 ) {
		div.style.top = Math.max( 0, Math.round( (winHeight-530)/2 ) )  + 'px';
		div.style.left = Math.round( (windowWidth-530)/2 ) + 'px';
		div.style.zIndex = 1000;
	} else {
		if( numType == 'px' ) {
			div.style.top = Math.round( winHieght * random ) + numType;
		} else {
			div.style.top = height;
		}
		div.style.left = Math.round( random * 90 ) + '%';
	}
	
	if( plaid_count == 15 ) { time = 0; }

	img.setAttribute('src', plaid_url + 'plaid.php?r=' + time + '&url=' + document.location.href);

	div.style.WebkitTransition = ease;
	div.style.WebkitTransform = 'rotate(1deg) scale(1.01,1.01)';
	div.style.transition = 'all .1s linear';

	div.onmouseover = function() {
		var size = 1+Math.round(Math.random()*10)/100;
		var angle = Math.round(Math.random()*20-10);
		var result = 'rotate('+angle+'deg) scale('+size+','+size+')';
		this.style.transform = result;
		this.style.WebkitTransform = result;
	};

	div.onmouseout = function() {
		var size = 0.9+Math.round(Math.random()*10)/100;
		var angle = Math.round(Math.random()*6-3);
		var result = 'rotate('+angle+'deg) scale('+size+','+size+')';
		this.style.transform = result;	
		this.style.WebkitTransform = result;
	};

	body.appendChild(div);
	div.appendChild(img);	
	
	// Add stylesheet.
	if (plaid_count == 5) {
		var cssExisting = document.querySelector('#_plaid_css');
		if (!cssExisting) {
			var head = document.head;
			var css = document.createElement('link');
			css.id = '_plaid_css';
			css.type = 'text/css';
			css.rel = 'stylesheet';
			css.href = 'http://www.plaidirish.com/plaid.css';
			css.media = 'screen';
			head.appendChild(css);
		}
		plaid_replace();
	}	
};

plaid_replace = function() {
	// Replace text.
	var hc = 6, hs, h, k;
	var words = ['Happy','Sparkly','Glittery','Fun','Magical','Lovely','Cute','Charming','Amazing','Wonderful'];
	while(hc >= 1) {
		hs = document.getElementsByTagName('h' + hc);
		for (k = 0; k < hs.length; k++) {
			h = hs[k];
			h.innerHTML = words[Math.floor(Math.random()*words.length)] + ' ' + h.innerHTML;
		}
		hc-=1;
	}
};

/*
 * Adapted from http://www.snaptortoise.com/konami-js/
 */
var paulami = {
	input:'',
	pattern:'38384040373937396665',
	clear:setTimeout('paulami.clear_input()',5000),
	load: function() {
		window.document.onkeydown = function(e) {
			if (paulami.input == paulami.pattern) {
				add_plaid();
				clearTimeout(paulami.clear);
				return;
			}
			else {
				paulami.input += e ? e.keyCode : event.keyCode;
				if (paulami.input == paulami.pattern) add_plaid();
				clearTimeout(paulami.clear);
				paulami.clear = setTimeout('paulami.clear_input()', 5000);
			}
		};
	},
	clear_input: function() {
		paulami.input='';
		clearTimeout(paulami.clear);
	}
};
paulami.load();

/**
 * Now you can plaidirish the web!!
 * Ironically this script was written by the man himself
 * http://paulirish.com/2009/cornify-easter-egg-with-jquery/
 */
var isIrish = [],
    konami = '38,38,40,40,37,39,37,39,66,65';
$(document).keydown(function(e) {
	isIrish.push( e.keyCode );
	if (isIrish.toString().indexOf(konami) >= 0) {
		$(document).unbind('keydown', arguments.callee);
		$.getScript('https://github.com/rtgibbons/Paulify/raw/master/js/plaid.js', function(){
			add_plaid();
			$(document).keydown(add_plaid);
		});          
	}
});