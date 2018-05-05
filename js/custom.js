/*
Project Name : Scott Website;
Author: Paresh Kamble;
Developed By: Paresh Kamble;
Rights: Reserved;
Date: 03-03-2018

*/
$(document).ready(function() {
	var tl = new TimelineMax({
		repeat: -1,

	});

	tl.fromTo('.color-overlay', 5, {
		backgroundColor: "rgba(149, 201, 225, 0)",
		scale: 0
	}, {
		backgroundColor: "rgba(246, 169, 189, 0.7)",
		scale: 1,
		ease: Power3.easeNone,
		yoyo: true,
		onComplete: call1

	}).fromTo('.color-overlay', 5, {
		backgroundColor: "rgba(246, 169, 189, 0)",
		scale: 0
	}, {
		backgroundColor: "rgba(183, 185, 234, 0.7)",
		scale: 1,
		ease: Power3.easeNone,
		yoyo: true,
		onComplete: call2

	}).fromTo('.color-overlay', 5, {
		backgroundColor: "rgba(183, 185, 234, 0)",
		scale: 0
	}, {
		backgroundColor: "rgba(134, 219, 212, 0.7)",
		scale: 1,
		ease: Power3.easeNone,
		yoyo: true,
		onComplete: call3

	}).fromTo('.color-overlay', 5, {
		backgroundColor: "rgba(134, 219, 212, 0)",
		scale: 0
	}, {
		backgroundColor: "rgba(149, 201, 225, 0.7)",
		scale: 1,
		ease: Power3.easeNone,
		yoyo: true,
		onComplete: call4

	})

	function call1() {
		$('.patch-overlay').css('backgroundColor', 'rgba(246, 169, 189, 0.7)');
	}

	function call2() {
		$('.patch-overlay').css('backgroundColor', 'rgba(183, 185, 234, 0.7)');
	}

	function call3() {
		$('.patch-overlay').css('backgroundColor', 'rgba(134, 219, 212, 0.7)');
	}

	function call4() {
		$('.patch-overlay').css('backgroundColor', 'rgba(149, 201, 225, 0.7)');
	}
	if ($(window).width() < 767) {
		$('.wrapper').height($(window).height());

	}
});