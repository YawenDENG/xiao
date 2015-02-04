$(document).ready(function() {
	$('#fullpage').fullpage({
		afterLoad: function(anchorLink, index){
			var loadedSection = $(this);
			var section_name=loadedSection.attr('name');
			if (section_name==="section-6") {
			 	$(".section-6 .container .up").addClass('animation-start');
			 	console.log("hahah")
			}
        }
    });
    $('#fullpage').fullpage.setScrollingSpeed(300);
});

// $(document).ready(function(){
// 	$('.circle').each(function(index, el){
// 		var num = $(this).find('span').text()*3.6;
// 		if(num <= 180){
// 			$(this).find('.pie_left').css('transform', "rotate("+ num +"deg)");
// 		} else {
// 			$(this).find('.pie_left').css('transform', "rotate(180deg)");
// 			$(this).find('.pie_right').css('transform', "rotate("+ (num-180)+"deg)");
// 		};
// 	});
// });

$(document).ready(function () {
	function circlePercent(circle, percent) {
		var circle = circle || document.querySelector(".circle-percent");
		var percent = percent || 0;
		var all = null;
		var left = null;
		var right = null;
		if(circle !== null) {
			all = circle.querySelectorAll("div:not(.bg)");
			left =  all[0] || document.createElement("div");
			right = all[1] || document.createElement("div");
			circle.setAttribute("percent", percent);
			if(percent <= 50 && percent >= 0) {
				left.style.visibility = "hidden";
				right.style.webkitTransform = "rotate(" + percent * 3.6 + "deg)";
			} else if(percent > 50) {
				percent = percent > 100 ? 100 : percent;
				left.style.visibility = "visible";
				left.style.webkitTransform = "rotate(" + (percent - 50) * 3.6 + "deg)";
				right.style.webkitTransform = "rotate(180deg)";
			}
			!all[0] && circle.appendChild(left);
			!all[1] && circle.appendChild(right);
		}
	}

	function runCircle(runCircle) {
		var circle = runCircle;
		var t = null;
		var stop_percent=circle.getAttribute("percent");
		var percent = 0;
		if(circle !== null) {
			t = setInterval(function () {
				if(percent > stop_percent) {
					clearInterval(t);
				} else {
					percent++;
					circlePercent(circle, percent);
					circle.setAttribute("percent", percent);
				}
			}, 10);
		}
	}

	runCircle(document.querySelectorAll(".circle-percent")[0]);
	runCircle(document.querySelectorAll(".circle-percent")[1]);
	runCircle(document.querySelectorAll(".circle-percent")[2]);
});

//trigger animation 

	// $( window ).scroll(function(){
	// 	var active_section = $(".section.active").attr("name");
	// 	console.log(active_section);
	// 	console.log("hahaha");
	// });
//console.log($("body").scrollTop());

// $(window).on('scroll', function(){
// 	console.log("scrollllll");
// });


