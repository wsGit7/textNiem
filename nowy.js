document.getElementById('myfile').addEventListener('change', function() {


  var GetFile = new FileReader();

   GetFile .onload=function(){
        
  var Zosia = GetFile.result.split('.');
  // alert(Zosia.length);
  var i = 0
  const timer = ms => new Promise(res => setTimeout(res, ms))

  async function load () { // We need to wrap the loop into an async function for this to work
    for (var i = 0; i < Zosia.length; i++) {
      document.getElementById('output').innerHTML= Zosia[i];
      // document.getElementById('output').value= Zosia[i];
      await timer(3000); // then the created Promise can be awaited
    }
  }
  
  load();
  
    






  

  
  
}

    
    GetFile.readAsText(this.files[0]);
})



 
