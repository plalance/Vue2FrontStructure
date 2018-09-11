import $ from "jquery";

function pathPrepare ($el) {
    let lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
}

let controller = new ScrollMagic.Controller();
let tween = new TimelineMax();

$('.st0').each(function (){
    let $el = $(this);
    pathPrepare($el);
    tween.add(TweenMax.to($el, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
});

let scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 250, tweenChanges: true})
    .setTween(tween)
    .addIndicators()
    .addTo(controller)
    .triggerHook(0);