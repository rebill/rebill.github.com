var PAD = '.000000';
function format(num) {
    var str = String(num);
    var dot = str.indexOf('.');
    if (dot < 0) {
        return str + PAD;
    }
    if (PAD.length > (str.length - dot)) {
        return str + PAD.substring(str.length - dot);
    } else {
        return str.substring(0, dot + PAD.length);
    }
}
function el(id) {
    if (document.getElementById) {
        return document.getElementById(id);
    } else if (window[id]) {
        return window[id];
    }
    return null;
}
/*var CP = [
[ 1199433600000, 6283 ],
[ 1224486000000, 7254 ],
[ 2144908800000, 10996 ],
[ 2147328000000, 43008 ],
[ 46893711600000, Number.MAX_VALUE ]
];*/
var CP = [
 [ 1246377600000, 3500 ],
 [ 1309449600000, 7000 ],
 [ 1435680000000, 15000 ],
 [ 1593532800000, 30000 ],
 [ 2147328000000, 60000 ],
 [ 46893711600000, Number.MAX_VALUE ]
];
var quota_elem;

function OnLoad() {
    if (!quota_elem) {
        quota_elem = el("quota");
        updateQuota();
    }
}

function updateQuota() {
    if (!quota_elem) {
        return;
    }
    var now = (new Date()).getTime();
    var i;
    for (i = 0; i < CP.length; i++) {
        if (now < CP[i][0]) {
            break;
        }
    }

    if (i == 0) {
        setTimeout(updateQuota, 1000);
    } else if (i == CP.length) {
        quota_elem.innerHTML = CP[i - 1][1];
    } else {
        var ts = CP[i - 1][0];
        var bs = CP[i - 1][1];
        quota_elem.innerHTML = format(((now-ts) / (CP[i][0]-ts) * (CP[i][1]-bs)) + bs);
        setTimeout(updateQuota, 1000); 
    }

}
