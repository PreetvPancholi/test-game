//function enemy() {
// 
//  var rand1 = Math.round(random(50,200));
//
//  if(frameCount % rand1 === 0 ){
//    zombie = createSprite(1050,30)
//    zombie.velocityX = -6;
//    zombie.scale = 0.3;
//
//    
//      
//    zombie.y = Math.round(random(50,400));
//      
//    var rand = Math.round(random(1,3));
//    switch(rand) {
//      case 1: zombie.addImage(zomImg1);
//        break;
//      case 2: zombie.addImage(zomImg2);
//        break;
//      case 3: zombie.addImage(virusImg);
//        break;
//      default: 
//        break;
//    }
//    enemyGroup.add(zombie);
//  }    
//
//  if(enemyGroup.isTouching(bullet)){
//    score = score+1;
//    //enemyGroup.changeImage(deadZomImg);
//  }
//}


  function zom(){
    var rand1 = Math.round(random(50,200));
  
    if(frameCount % rand1 === 0 ){
      var zombie = createSprite(1050,30)
      zombie.addImage(zomImg1);
      zombie.velocityX = -6;
      zombie.scale = 0.3;
  
      enemyGroup.add(zombie)
    }
  
  
  }