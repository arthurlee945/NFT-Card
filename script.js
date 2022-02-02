let flipE = document.getElementById("imgEth")

flipE.onclick = () =>{
    if(flipE.className =="flipEthBack"||flipE.className ==""){
      flipE.className = "flipEth"
    }
    else if (flipE.className =="flipEth"){
      flipE.className = "flipEthBack"
    }
}
