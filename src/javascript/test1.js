module.exports = {
    
    createCircle : function (canvas) {
        
        
        let MARGIN = 16 ;
        let RADIUS = canvas.width/2 - MARGIN;
        let FON_HEIGHT = 15;
        var context = canvas.getContext('2d');
        context.arc(
            canvas.width/2,
            canvas.height/2,
            RADIUS - MARGIN,
            0,
            Math.PI*2,
            true);
        
        context.stroke();
        drawCenter(context);
        drawNumerals(context, canvas);
        drawHand(context, canvas);

        function drawHand(context, canvas){
            var angle = Math.PI/6 ;
            context.moveTo(canvas.width/2, canvas.height/2);
            context.lineTo(
                canvas.width/2 + Math.cos(angle)*RADIUS,
                canvas.height/2 + Math.sin(angle)*RADIUS
            );

            context.stroke();

            
        }

        function drawNumerals(context,canvas) {
            var numerals = [1,2,3,4,5,6,7,8,9,10,11,12],
                angle = 0 ;

            numerals.forEach(function (numeral) {
                angle = Math.PI/6 * (numeral - 3);
                var numericalWidth = context.measureText(numeral).width;
                
                context.fillText(
                    numeral,
                    canvas.width/2 + Math.cos(angle)*(RADIUS) - numericalWidth/2,
                    canvas.height/2 + Math.sin(angle)*(RADIUS) + FON_HEIGHT/3
                );

            });
        }

        function drawCenter(context) {
            context.beginPath();
            context.arc(
                canvas.width/2,
                canvas.height/2,
                5,
                0,
                Math.PI*2,
                true);
            context.fill();
            
        }

    }

};
