var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

 

  var particles = [];
  var plinkos = [];
  var divisions =[];
  var divisionHeight=300;
  var score =0;

function setup() {
   createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var k = 20; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

}
   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,150));
   }

}

function draw() {
  background("black");
  textSize(20)

  Engine.update(engine);
  ground.display();
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();

    
  }
}
