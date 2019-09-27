$(function(){ EGbe9bcb73.Init(); });



var EGbe9bcb73 = {

	Init: function() {
		if (OEConfEGbe9bcb73 === undefined) return;
		var allElements = OEConfEGbe9bcb73;

		for(var ID in allElements) {
			var $el = $('#'+ID); // le tag <div> principale de l'élément
			var properties = allElements[ID]; // les propriétés de l'élément disponibles pour JS
			this.InitElement(ID, $el, properties);
		}
	},

	InitElement: function(ID, $el, properties) {
		
	 if (WEInfoPage.RenderMode != 'Editor') {
    

        var horizontalPosition= properties.Horizontalposition;
        var verticalPosition= properties.Verticalposition;
        var stickToBottom = false;
         
         
        $el.data('scrollTop',properties.Offsety);
        $el.data('startTop',properties.Startoffset);
        $el.data('verticalPosition',verticalPosition);
        $el.data('horizontalPosition',horizontalPosition);
       
        EGbe9bcb73.DetachElementToBody(ID, $el, properties);
        
        
          switch (horizontalPosition) {
            case 0:
                  var wWidth  = window.innerWidth || document.documentElement.offsetWidth;
                  var left =((wWidth- $('#XBody').outerWidth())/2)+$el.position().left;
              	  $el.data('orgLeft',$el.position().left);
                  $el.css('left',left); 
                  break;
            case 1:
                  $el.css('left','0'); 
                  break;
            case 2:
                  var wWidth  = window.innerWidth || document.documentElement.offsetWidth;
                  var left=(wWidth-$el.outerWidth(true))/2;
                  $el.css('left',left); 
                  break;
            case 3:
                  $el.css('left','auto'); 
                  $el.css('right','0'); 
                  break;
          }
          
          switch (verticalPosition) {
            case 0:
                  stickToBottom=false;
                  $el.css('top',properties.Startoffset); 
                  break;
            case 1:
                  stickToBottom=true;
                  $el.css('top','auto'); 
                  $el.css('bottom',properties.Startoffset); 
                  break;
           
          }
                    
          $(window).scroll(function(){ EGbe9bcb73.rePositionVertical(ID, $el, properties);});
       
       	  $(window).on('resize.stickyFloatPanel orientationchange.stickyFloatPanel', function(){
            	EGbe9bcb73.rePositionHorizontal(ID, $el, properties);
          });

   		}
  
 	
	},
  	
  	//positionnement par rapport au scroll
  	rePositionVertical: function(ID, $el, properties) {
      wScroll =  $(document).scrollTop(); //document.pageYOffset  || document.documentElement.scrollTop;
      
       if ($el.data('verticalPosition')=='0') {
        if (wScroll<=$el.data('startTop')) {
          $el.css('top', $el.data('startTop'));
        } else {
          $el.css('top', $el.data('scrollTop'));
        }
      } 
         
        
     
      
    },
      
      	//positionnement par rapport au scroll
  	rePositionHorizontal: function(ID, $el, properties) {
      
      switch ($el.data('horizontalPosition')) {
            case 0:
                  var wWidth  = window.innerWidth || document.documentElement.offsetWidth;
                  var left =((wWidth- $('#XBody').outerWidth())/2)+$el.data('orgLeft');
                  $el.css('left',left); 
                  break;
            case 1:
                  $el.css('left','0'); 
                  break;
            case 2:
                  var wWidth  = window.innerWidth || document.documentElement.offsetWidth;
                  var left=(wWidth-$el.outerWidth(true))/2;
                  $el.css('left',left); 
                  break;
            case 3:
                  $el.css('left','auto'); 
                  $el.css('right','0'); 
                  break;
          }
     
        
     
      
    },
      
  	//deplacement de l'élément dans le body
	DetachElementToBody: function(ID, $el, properties) {
      
      	$el.insertBefore($('#XBody'));
		$el.css('position','fixed');
      	$el.children().attr('style','width:100%; height:100%');
    }
};
