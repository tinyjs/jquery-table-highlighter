(function($){
	$.fn.tablehighlight = function(options){
		var defaults ={
			simple_table: {tableclass: "simple_table", row1class: "row1", row1classactive: "row1-hover", row2class: "row2", row2classactive: "row2-hover"},
			complex_table: {tableclass: "complex_table", headerrowclass:"heading",highlightclass:"highlight", row1class: "row1", row1classactive: "row1-hover", row2class: "row2", row2classactive: "row2-hover"}
		}
		var options = $.extend(defaults, options);

		return this.each(function(){
			obj = $(this);
			//simple table
			obj.find("."+options['simple_table']['tableclass'] +" ."+options['simple_table']['row1class']+
							", ."+options['simple_table']['tableclass'] +" ."+options['simple_table']['row2class']).hover(
				function(){
					if($(this).is("."+options['simple_table']['row1class'])){
						$(this).addClass(options['simple_table']['row1classactive']);
					}else{
						$(this).addClass(options['simple_table']['row2classactive']);
					}
				},
				function(){
					if($(this).is("."+options['simple_table']['row1classactive'])){
						$(this).removeClass(options['simple_table']['row1classactive']);					
					}else{
						$(this).removeClass(options['simple_table']['row2classactive']);					
					}
				}
			);
			//complex table
				//row highlight for row1
			obj.find("."+options['complex_table']['tableclass'] +" ."+options['complex_table']['row1class']+" th, "+
							"."+options['complex_table']['tableclass'] +" ."+options['complex_table']['row2class']+" th").hover(
				function(){
					if($(this).parent().is("."+options['complex_table']['row1class'])){
						$(this).parent().addClass(options['complex_table']['row1classactive']);
					}else{
						$(this).parent().addClass(options['complex_table']['row2classactive']);
					}
				},
				function(){
					if($(this).parent().is("."+options['complex_table']['row1classactive'])){
						$(this).parent().removeClass(options['complex_table']['row1classactive']);
					}else{
						$(this).parent().removeClass(options['complex_table']['row2classactive']);
					}
				}
			);
				//heading highlight column
			obj.find("."+options['complex_table']['tableclass'] +" ."+options['complex_table']['headerrowclass']+" th").hover(
				function(){
					classname = $(this).attr('class');
					if(classname){
						$(this).parent().parent().find("."+classname).addClass(options['complex_table']['highlightclass']);
					}
				},
				function(){
					classname = $(this).attr('class');
					if(classname){
						classname = classname.substring(0, classname.indexOf(' '));
						$(this).parent().parent().find("."+classname).removeClass(options['complex_table']['highlightclass']);
					}
				}
			);
				//clever one, hightlight column heading, row title and current column
			obj.find("."+options['complex_table']['tableclass'] +" ."+options['complex_table']['row1class']+" td, "+
								"."+options['complex_table']['tableclass'] +" ."+options['complex_table']['row2class']+" td").hover(
				function(){
					classname = $(this).attr('class');
					if(classname){
						$(this).parent().parent().find("."+options['complex_table']['headerrowclass']+" ."+classname).addClass(options['complex_table']['highlightclass']);				
					}
					$(this).addClass(options['complex_table']['highlightclass']);
					$(this).parent().find("th").addClass(options['complex_table']['highlightclass']);					
					
				},
				function(){
					$("."+options['complex_table']['tableclass']).find("."+options['complex_table']['highlightclass']).removeClass(options['complex_table']['highlightclass']);
				}
			);
			
		});
	}
	
})(jQuery);