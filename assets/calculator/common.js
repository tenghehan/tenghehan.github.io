window.requestAnimFrame = (function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
			return window.setTimeout(callback, 1000/60);
		};
})();

function roundedRec(myx,myy,w,h,r,ctx) {
	    ctx.beginPath();
        ctx.moveTo(myx+r,myy);
        ctx.arcTo(myx+w,myy,myx+w,myy+h,r);
        ctx.arcTo(myx+w,myy+h,myx,myy+h,r);
        ctx.arcTo(myx,myy+h,myx,myy,r);
        ctx.arcTo(myx,myy,myx+w,myy,r);
        ctx.closePath();

        ctx.lineWidth="1";
        ctx.fillStyle = "#F6F152";
        ctx.strokeStyle = "#F5270B";
        ctx.fill();
        ctx.stroke();
}