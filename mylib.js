function collide(ob1,ob2){
    if(ob1.width/2+ob2.width/2>=ob2.x-ob1.x){
        ob1.velocityX=0
        ob2.x-ob1.x==ob1.width/2+ob2.width/2
    }
}
function isTouching(ob1,ob2){
    if(ob1.width/2+ob2.width/2>=ob2.x-ob1.x){
        return true 
    }
   return false
}
