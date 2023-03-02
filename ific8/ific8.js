function ific8 () {
    var state = Tab[Start], out = "", i, p;
    while (typeof(state) == "object") {
	for (i = 0, p = Math.floor(Math.random() * 100); i < state.length; i += 3) {
	    if ((p -= state[i]) <= 0) {
		out  += state[++i];
		state = Tab[state[++i]];
		break;
	    } 
	}
    }
    out += "!";
    return out;
}

function gener8 (doc) {
    var st = ific8();
    var sq = st;

    if (Math.random() > .5) sq = sq.bold();
    if (Math.random() > .5) sq = sq.italics();
    if (Math.random() > .5) sq = sq.fixed();
    sq = sq.fontsize(Math.floor(Math.random() * 4) + 2);

    with (doc) {
	open();
	write(' <html><body bgcolor="#22AA33"><table width="100%" height="100%">' +
		'<tr align="center"><td>' + sq + '</td></tr></body></table></html>');
	close();
    }
}
