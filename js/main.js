$(function() {
	$(".acc").click(function() {
		var self = this;
		$(self).toggleClass("active");
		$("." + self.id).slideToggle();
		$(".acc").not(self).removeClass("active").each(function() {
			var other = this;
			if($("." + other.id).css("display") === "block") {
				$("." + other.id).slideToggle();
			}
		});
	})
});
