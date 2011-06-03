(function() {

	var plaid_count = 0;

	function add_plaid() {
		plaid_count += 1;
		var plaid_url = 'http://www.plaidirish.com/';
		var div = document.createElement('div');
		var img = document.createElement('img');
		var css = document.createElement('link');
		var head = document.head;
		var body = document.body;
		var height = window.height;
		var width = window.width;
		var type = 'px';
		var now = new Date();
		var time = now.getTime();
		var random = Math.random();
		var ease = 'all .1s linear';

		div.style.position = 'fixed';
		
		div.onclick = add_plaid;
		div.style.zIndex = 10;
		div.style.outline = 0;
		
		if( plaid_count == 15 ) {
			div.style.top = Math.max( 0, Math.round( (height - 530)/2 ) )  + 'px';
			div.style.left = Math.round( (width - 530)/2 ) + 'px';
			div.style.zIndex = 1000;
		} else {
			if( type == 'px' ) {
				div.style.top = Math.round( height * (random * 0.75)) + type;
			} else {
				div.style.top = 0;
			}
			div.style.left = Math.round( random * 90 ) + '%';
		}
		
		if( plaid_count == 15 ) { time = 0; }

		img.setAttribute('src', plaid_url + 'plaid.php?r=' + time + '&url=' + document.location.href);

		div.style.transition = ease;
		div.style.WebkitTransition = ease;
		div.style.WebkitTransform = 'rotate(1deg) scale(1.01,1.01)';

		div.onmouseover = function() {
			var size = 1 + Math.round(random * 10)/100;
			var angle = Math.round(random * 20-10);
			var result = 'rotate('+angle+'deg) scale('+size+', '+size+')';
			
			this.style.transform = result;
			this.style.WebkitTransform = result;
		};

		div.onmouseout = function() {
			var size = 0.9 + Math.round(random * 10)/100;
			var angle = Math.round(random * 6 - 3);
			var result = 'rotate('+angle+'deg) scale('+size+', '+size+')';
		
			this.style.transform = result;	
			this.style.WebkitTransform = result;
		};

		body.appendChild(div);
		div.appendChild(img);	
		
		// Add stylesheet.
		if (plaid_count == 5) {
			var plaidCss = document.querySelector('#_plaid_css');
			
			if( !plaidCss ) {
				css.id = '_plaid_css';
				css.type = 'text/css';
				css.rel = 'stylesheet';
				css.href = 'http://plaidirish.com/plaid.css';
				css.media = 'screen';
				head.appendChild(css);
			}
			plaid_replace();
		}	
	}

	function plaid_replace() {
		var hx = document.querySelector('h1,h2,h3,h4,h5,h6'), 
			words = ['Happy','Sparkly','Glittery','Fun','Magical','Lovely','Cute','Charming','Amazing','Wonderful'],
			hx_len = hx.length, h, i;
			
		for (i = 0; i < hx_len; i++) {
			h = hx[i];
			h.innerHTML = words[Math.floor(random * words.length)] + ' ' + h.innerHTML;
		}
		hx -= 1;
	}
})();


/**
 * Now you can plaidirish the web!!
 *
 * Ironically the following was written by the man himself.
 * http://paulirish.com/2009/cornify-easter-egg-with-jquery/
 */
var aIrish = [],
    konami = '38,38,40,40,37,39,37,39,66,65';

document.onkeydown = function(e) {
	aIrish.push( e.keyCode );

	if (aIrish.toString().indexOf(konami) >= 0) {
		document.removeEventListener('onkeydown', arguments.callee);
		//$.getScript('https://github.com/rtgibbons/Paulify/raw/master/js/plaid.js', function(){
		//});          
		add_plaid();
		document.onkeydown = add_plaid();
	}
};