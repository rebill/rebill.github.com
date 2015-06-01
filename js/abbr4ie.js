function styleAbbr() {
	var oldBodyText, newBodyText, reg
	oldBodyText = document.body.innerHTML;
	reg = /<ABBR([^>]*)>([^<]*)<\/ABBR>/g;
	newBodyText = oldBodyText.replace(reg, '<ABBR $1><SPAN class=\"abbr\" $1>$2</SPAN></ABBR>');
	document.body.innerHTML = newBodyText;
}

isIE = (document.all && !window.opera) ? true:false;

if (isIE) {
	window.onload = styleAbbr;
}
