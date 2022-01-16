<script id="worker2" type="javascript/worker">
self.onmessage = function(e) {
  var data = e.data;

  if (data.url) {
    var url = data.url.href;
    var index = url.indexOf('index.html');
    if (index != -1) {
      url = url.substring(0, index);
    }
    importScripts(url + 'engine.js');
  }
  ...
};
</script>
<script>
  var worker = new Worker(window.URL.createObjectURL(bb.getBlob()));
  worker.postMessage({url: document.location});
</script>



self.addEventListener('message', function(e) {
  var data = e.data;
onclick="{
  clearInterval(myClock)
  let myTemp = '100px 0px'
  myClock = setInterval(function(){
      myGlobalX -= 5
      myTemp =  myGlobalX + 'px 0px'
      document.getElementById('myBody').style.backgroundPosition = myTemp
  }, 100)
    
}"
<body id="myBody" style="background-repeat:repeat; background-size: 80%" background="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f6f528b-9c63-4fe8-9626-aafa748edaf5/db35qhj-ea72c51d-b0b7-4555-ac33-3592a554fb77.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8zZjZmNTI4Yi05YzYzLTRmZTgtOTYyNi1hYWZhNzQ4ZWRhZjUvZGIzNXFoai1lYTcyYzUxZC1iMGI3LTQ1NTUtYWMzMy0zNTkyYTU1NGZiNzcucG5nIn1dXX0.2dJmAxPS7_MKCUL2IQ0bPNQc-oNz-hhrOO-6gL-aWV0">
