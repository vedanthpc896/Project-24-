class Paper {

   constructor(x,y,radius) {

   var options={

   isStatic:false,
   restitution:0.3,
   friction:0.5,
   density:1.4,    
   }
this.body = Bodies.circle(x,y,20,options)
this.x=x;
this.y=y;
this.radius=radius;
World.add(world,this.body);
}

display() {
var pos= this.body.position;
translate(pos.x,pos.y)
ellipseMode(RADIUS);
strokeWeight(4);
fill('yellow')
ellipse(0,0,this.radius,this.radius);
pop();

}

}