(function(){
    var $D = YAHOO.util.Dom,
        $E = YAHOO.util.Event;
    
    var domready = function(){
        var h1 = $D.get('j'),
            pos = $D.getXY(h1),
            span = $D.getElementsBy(function(el){return (el.className == 'given-name' || el.className == 'family-name')}, 'span', h1);
        $D.addClass(h1, 'drag');
        h1.style.width = span[0].offsetWidth + span[1].offsetWidth + 32 + 'px';
        var dd = new YAHOO.util.DD('j');
        dd.on('endDragEvent', function(){
            var anim = new YAHOO.util.Motion(this.getEl(), {points:{to:pos}}, 1, YAHOO.util.Easing.elasticOut);
            window.scrollTo(0,0);
            anim.animate();
        }, dd, true);
    }
    
    $E.onDOMReady(domready);
})();
