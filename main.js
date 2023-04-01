document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    stampaImmagini(document.getElementById("input").value,document.getElementById("input2").value);
  });
  function stampaImmagini(numero,numero2){
    immagini=document.getElementById("immagini");
    
    for(let i=0; i<numero; i++){
        if(i%numero2==0){
            immagini.innerHTML+="<br>";
        }
        let immagine=document.createElement('img');
        immagine.src="moneta_01.jpg";
        immagine.width="100";
        immagine.height="100";
        immagini.appendChild(immagine);
        console.log("ciao");
    }
  }