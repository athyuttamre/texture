$(document).ready(function() {
	$("#button").mousedown(function() {
		$(this).fadeTo('fast', 0.5);
	});
	$("#button").mouseup(function() {
		$(this).fadeTo('fast', 1);
	});
});