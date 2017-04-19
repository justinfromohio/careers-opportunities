$('#resumator-job-frame').load(function () {
    $(this).height($(this).contents().height());
    $(this).width($(this).contents().width());
	console.log("resized");
});
$(window).resize(function() {
    $(this).height($(this).contents().height());
    $(this).width($(this).contents().width());
})
