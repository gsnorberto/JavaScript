function menuToggle(){
    let width = document.getElementById('menu-area').style.width;
    if(width == '200px'){
        document.getElementById('menu-area').style.width='0px';
    } else {
        document.getElementById('menu-area').style.width='200px';
    }
}