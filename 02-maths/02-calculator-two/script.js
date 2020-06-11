function test(button) {
    let first = parseFloat(document.getElementById("op-one").value)
    let second = parseFloat(document.getElementById("op-two").value)
   
    switch(button){
        
        case 0:
            window.alert(first+second);
            break;
            
        case 1:
            window.alert(first-second);
            break;
            
        case 2:
            window.alert(first*second);
            break;
            
        case 3:
            window.alert(first/second);
            break;
            
} }

(function() {
    const buttons = document.getElementsByClassName('operator');
   
    for(let i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click" , function() {
           test(i)});
           
})();
