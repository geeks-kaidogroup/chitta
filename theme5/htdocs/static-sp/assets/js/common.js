
	$(document).ready(function() {
		$("#menu").mmenu({
			offCanvas: {
				position  : "right", //left(デフォルト)・right・top・bottom
				zposition : "next", //back(デフォルト)・front・next
			}
		});
	});

	// btntelフェードイン・アウト
	$(function(){
		$(window).bind("scroll", function() {
		// トップから150px以上スクロールしたら
		if ($(this).scrollTop() > 150) {
		 // btntelをフェードインする
			$(".btntel").fadeIn();
		} else { // それ以外は
		 // btntelをフェードアウトする
			$(".btntel").fadeOut();
		}
	});
	});
