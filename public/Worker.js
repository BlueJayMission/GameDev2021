
<script>
  var worker = new Worker('Worker.js')
 
</script>


<body onkeydown="getKeyAndMove(event)">
         <img id="myImg01" style="position:absolute; width:100px; height:80px; top:0px; left:50px;"  src="https://t00.deviantart.net/iuG_PTEU8tQLXcFE4swf36WmZ0Q=/500x250/filters:fixed_height(100,100):origin()/pre00/8e2d/th/pre/f/2017/321/7/5/pixel_knight_by_piskelknight-dbu2liy.png">        
         <script type="text/javascript">
            //init object globally
            var objImage = null;
            function init() {
                objImage = document.getElementById("myImg01");
                objImage.style.position = "relative";
                objImage.style.left = "0px";
                objImage.style.top = "0px";
            }
            function getKeyAndMove(e) {
                var key_code = e.which || e.keyCode;
                switch (key_code) {
                    case 37: //left arrow key
                        moveLeft();
                        break;
                    case 38: //Up arrow key
                        moveUp();
                        break;
                    case 39: //right arrow key
                        moveRight();
                        break;
                    case 40: //down arrow key
                        moveDown();
                        break;
                }
            }
            function moveLeft() {
                objImage.style.left = parseInt(objImage.style.left) - 5 + "px";
            }
            function moveUp() {
                objImage.style.top = parseInt(objImage.style.top) - 5 + "px";
            }
            function moveRight() {
                objImage.style.left = parseInt(objImage.style.left) + 5 + "px";
            }
            function moveDown() {
                objImage.style.top = parseInt(objImage.style.top) + 5 + "px";
            }
            window.onload = init;
        </script>
