
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hero;
var textState = 0;
var wall1,wall105,wall2,wall205,wall3,wall305,wall4,wall405;
var corridor1,corridor105,corridor2,corridor205,corridor3,corridor305;
var RoomsVisited = [[1,false],[2,false],[3,false],[4,false],[5,false],[6,false],[7,false],[8,false]];
var gameState =0;
var PressedOne = false;
var enemy1;
var xD, yD;
function preload(){
	heroIMG = loadImage("FINALhero.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight-5);

	backgroundImg = loadImage("caveFloor.jpg");

	engine = Engine.create();
	world = engine.world;

	backgroundimg = createSprite(width/2,height/2,500,500);
	backgroundimg.addImage(backgroundImg);
	backgroundimg.scale = 2.7;

	hero = createSprite(width/2,height/2,20,20);
	hero.addImage(heroIMG);
	hero.scale = 0.175;
	hero.rotation = 130;
	//hero.visible = false;

	camera.x = hero.x;
	camera.y = hero.y;
	camera.zoom = 1.45;// change to 3.14  later

	wall1 = createSprite(width/2-400, height/2-140,5,220);
	wall105= createSprite(width/2-400, height/2+140,5,220);
	wall2 = createSprite(width/2+400, height/2-140,5,220);
	wall205 = createSprite(width/2+400, height/2+140,5,220);
	wall3 = createSprite(width/2-220, height/2+250,360,5);
	wall305 = createSprite(width/2+220, height/2+250,360,5);
	wall4 = createSprite(width/2-220, height/2-250,360,5);
	wall405 = createSprite(width/2+220, height/2-250,360,5);

	corridor1 = createSprite(width/2-40,height/2-477,5,450);
	corridor105 = createSprite(width/2+40,height/2-477,5,450);

	wall5 = createSprite(width/2-400, height/2-1090,5,220);
	wall505= createSprite(width/2-400, height/2-810,5,220);
	wall6 = createSprite(width/2+400, height/2-1090,5,220);
	wall605 = createSprite(width/2+400, height/2-810,5,220);
	wall7 = createSprite(width/2-220, height/2-700,360,5);
	wall705 = createSprite(width/2+220, height/2-700,360,5);
	wall805 = createSprite(width/2, height/2-1200,800,5);

	corridor2 = createSprite(width/2-40,height/2+477,5,450);
	corridor205 = createSprite(width/2+40,height/2+477,5,450);

	wall9 = createSprite(width/2-400, height/2+810,5,220);
	wall905= createSprite(width/2-400, height/2+1090,5,220);
	wall10 = createSprite(width/2+400, height/2+810,5,220);
	wall1005 = createSprite(width/2+400, height/2+1090,5,220);
	wall1105 = createSprite(width/2, height/2+1200,800,5);
	wall12 = createSprite(width/2-220, height/2+700,360,5);
	wall1205 = createSprite(width/2+220, height/2+700,360,5);

	corridor3 = createSprite(width/2-827,height/2+30,850,5);
	corridor305 = createSprite(width/2-827,height/2-30,850,5);

	wall1305= createSprite(width/2-2050, height/2,5,500);
	wall14 = createSprite(width/2-1250, height/2-140,5,220);
	wall1405 = createSprite(width/2-1250, height/2+140,5,220);
	wall15 = createSprite(width/2-1870, height/2+250,360,5);
	wall1505 = createSprite(width/2-1430, height/2+250,360,5);
	wall16 = createSprite(width/2-1870, height/2-250,360,5);
	wall1605 = createSprite(width/2-1430, height/2-250,360,5);

	corridor4 = createSprite(width/2+827,height/2+30,850,5);
	corridor405 = createSprite(width/2+827,height/2-30,850,5);

	wall17 = createSprite(width/2+1250, height/2-140,5,220);
	wall1705= createSprite(width/2+1250, height/2+140,5,220);
	wall1805 = createSprite(width/2+2050, height/2,5,500);
	wall19 = createSprite(width/2+1430, height/2+250,360,5);
	wall1905 = createSprite(width/2+1870, height/2+250,360,5);
	wall20 = createSprite(width/2+1430, height/2-250,360,5);
	wall2005 = createSprite(width/2+1870, height/2-250,360,5);
	
	wall21 = createSprite(width/2+1250, height/2-140,5,220);
	wall2105= createSprite(width/2+1250, height/2+140,5,220);
	wall22 = createSprite(width/2+2050, height/2-140,5,220);
	wall2205 = createSprite(width/2+2050, height/2,5,500);
	wall23 = createSprite(width/2+1430, height/2+250,360,5);
	wall2305 = createSprite(width/2+1870, height/2+250,360,5);
	wall24 = createSprite(width/2+1430, height/2-250,360,5);
	wall2405 = createSprite(width/2+1870, height/2-250,360,5);

	corridor5 = createSprite(width/2-1610,height/2-477,5,450);
	corridor505 = createSprite(width/2-1690,height/2-477,5,450);

	wall25 = createSprite(width/2-2050, height/2-1090,5,220);
	wall2505= createSprite(width/2-1250, height/2-810,5,220);
	wall26 = createSprite(width/2-1250, height/2-1090,5,220);
	wall2605 = createSprite(width/2-2050, height/2-950,5,515);
	wall27 = createSprite(width/2-1430, height/2-700,360,5);
	wall2705 = createSprite(width/2-1870, height/2-700,360,5);
	wall2805 = createSprite(width/2-1650, height/2-1200,800,5);

	corridor6 = createSprite(width/2-827,height/2-920,850,5);
	corridor605 = createSprite(width/2-827,height/2-980,850,5);

	wall29 = createSprite(width/2+2050, height/2-1090,5,220);
	wall2905= createSprite(width/2+1250, height/2-810,5,220);
	wall30 = createSprite(width/2+1250, height/2-1090,5,220);
	wall3005 = createSprite(width/2+2050, height/2-950,5,515);
	wall31 = createSprite(width/2+1430, height/2-700,360,5);
	wall3105 = createSprite(width/2+1870, height/2-700,360,5);
	wall32 = createSprite(width/2+1870, height/2-1200,360,5);
	wall3205 = createSprite(width/2+1650, height/2-1200,800,5);

	corridor7 = createSprite(width/2+827,height/2-920,850,5);
	corridor705 = createSprite(width/2+827,height/2-980,850,5);

	corridor8 = createSprite(width/2+1610,height/2-477,5,450);
	corridor805 = createSprite(width/2+1690,height/2-477,5,450);

	wall33 = createSprite(width/2+2050, height/2+1090,5,220);
	wall3305= createSprite(width/2+1250, height/2+810,5,220);
	wall34 = createSprite(width/2+1250, height/2+1090,5,220);
	wall3405 = createSprite(width/2+2050, height/2+950,5,515);
	wall35 = createSprite(width/2+1430, height/2+700,360,5);
	wall3505 = createSprite(width/2+1870, height/2+700,360,5);
	wall36 = createSprite(width/2+1870, height/2+1200,360,5);
	wall3605 = createSprite(width/2+1650, height/2+1200,800,5);

	corridor9 = createSprite(width/2+1610,height/2+477,5,450);
	corridor905 = createSprite(width/2+1690,height/2+477,5,450);

	wall37 = createSprite(width/2-2050, height/2+1090,5,220);
	wall3705= createSprite(width/2-1250, height/2+810,5,220);
	wall38 = createSprite(width/2-1250, height/2+1090,5,220);
	wall3805 = createSprite(width/2-2050, height/2+950,5,515);
	wall39 = createSprite(width/2-1430, height/2+700,360,5);
	wall3905 = createSprite(width/2-1870, height/2+700,360,5);
	wall40 = createSprite(width/2-1870, height/2+1200,360,5);
	wall4005 = createSprite(width/2-1650, height/2+1200,800,5);

	corridor10 = createSprite(width/2-827,height/2+920,850,5);
	corridor1005 = createSprite(width/2-827,height/2+980,850,5);

	corridor11 = createSprite(width/2+827,height/2+920,850,5);
	corridor1105 = createSprite(width/2+827,height/2+980,850,5);

	corridor12 = createSprite(width/2-1610,height/2+477,5,450);
	corridor1205 = createSprite(width/2-1690,height/2+477,5,450);
	
	

	enemy1 = new Enemy(width/2-1650,height/2-200,0,40,5);
	enemy2 = new Enemy(width/2-1400,height/2,0,40,5);
	enemy3 = new Enemy(width/2-2000,height/2+100,1,40,5);
	
	enemy4 = new Enemy(width/2-1650,height/2-1150,0,40,5);
	enemy5 = new Enemy(width/2-1400,height/2-950,0,40,5);
	enemy6 = new Enemy(width/2-2000,height/2-850,1,40,5);

	enemy7 = new Enemy(width/2-1650,height/2+750,0,40,5);
	enemy8 = new Enemy(width/2-1400,height/2+950,0,40,5);
	enemy9 = new Enemy(width/2-2000,height/2+1050,1,40,5);

	enemy10 = new Spider(width/2,height/2-1050,0,40,5);
	enemy11 = new Spider(width/2+150,height/2-1100,1,40,5);
	enemy12 = new Spider(width/2-150,height/2-800,1,40,5);

	enemy13 = new Spider(width/2,height/2+900,0,40,5);
	enemy14 = new Spider(width/2+150,height/2+850,1,40,5);
	enemy15 = new Spider(width/2-150,height/2+1150,1,40,5);

	enemy16= new Centipede(width/2+2000,height/2-200,0,40,5);
	enemy17= new Centipede(width/2+1750,height/2-50,0,40,5);
	enemy18 = new Centipede(width/2+1350,height/2+100,1,40,5);

	enemy19= new Centipede(width/2+2000,height/2-1150,0,40,5);
	enemy20= new Centipede(width/2+1750,height/2-1000,0,40,5);
	enemy21 = new Centipede(width/2+1350,height/2-850,1,40,5);

	enemy22= new Centipede(width/2+2000,height/2+750,0,40,5);
	enemy23= new Centipede(width/2+1750,height/2+900,0,40,5);
	enemy24 = new Centipede(width/2+1350,height/2+1050,1,40,5);

	// enemy25 = new Enemy(width/2-1650,height/2-200,0,40,10);
	// enemy26 = new Enemy(width/2-1650,height/2-200,0,40,10);
	// enemy27 = new Enemy(width/2-1650,height/2-200,1,40,10);



	// enemy28 = new Enemy(width/2-1650,height/2-200,1,40,10);
	// enemy29 = new Enemy(width/2-1650,height/2-200,0,40,10);
	// enemy30 = new Enemy(width/2-1650,height/2-200,0,40,10);
	// enemy31 = new Enemy(width/2-1650,height/2-200,1,40,10);
	// enemy32 = new Enemy(width/2-1650,height/2-200,1,40,10);
	// enemy33 = new Enemy(width/2-1650,height/2-200,0,40,10);
	// enemy34 = new Enemy(width/2-1650,height/2-200,0,40,10);
	// enemy35 = new Enemy(width/2-1650,height/2-200,1,40,10);
	// enemy36 = new Enemy(width/2-1650,height/2-200,1,40,10);
	

	Engine.run(engine);	
  
}


function draw() {
  rectMode(CENTER);
  background("black");//"#1a0d00" 
 
  if(RoomsVisited[0][1]=== false && hero.x <= width/2-1250 && hero.y > height/2-200 && hero.y<height/2+200){
	  console.log("inside room 1");
  }

  if(gameState === 1){
	if(keyDown(LEFT_ARROW)){
		hero.x = hero.x-9;//9 later
		hero.rotation = 40;
	}

	if(keyDown(65)){
		hero.x = hero.x-9;//9 later
		hero.rotation = 40;
	}

	if(keyDown(RIGHT_ARROW)){
	  hero.x = hero.x+9;//slow later
	  hero.rotation = 220;
  }

  if(keyDown(68)){
	hero.x = hero.x+9;//slow later
	hero.rotation = 220;
}

  if(keyDown(UP_ARROW)){
	  hero.y = hero.y-9;//slow later
	  hero.rotation = 130;
  }

  if(keyDown(87)){
	hero.y = hero.y-9;//slow later
	hero.rotation = 130;
}
  
  if(keyDown(DOWN_ARROW)){
	  hero.y = hero.y+9;//slow later
	  hero.rotation = 310;

  }

  if(keyDown(83)){
	hero.y = hero.y+9;//slow later
	hero.rotation = 130;
}
}



camera.x = hero.x;
camera.y = hero.y;

hero.collide(wall1);
hero.collide(wall105);
hero.collide(wall2);
hero.collide(wall205);
hero.collide(wall3);
hero.collide(wall305);
hero.collide(wall4);
hero.collide(wall405);
hero.collide(corridor1);
hero.collide(corridor105);
hero.collide(corridor2);
hero.collide(corridor205);
hero.collide(corridor3);
hero.collide(corridor305);
hero.collide(corridor4);
hero.collide(corridor405);
hero.collide(corridor5);
hero.collide(corridor505);
hero.collide(corridor6);
hero.collide(corridor605);
hero.collide(corridor7);
hero.collide(corridor705);
hero.collide(corridor8);
hero.collide(corridor805);
hero.collide(corridor9);
hero.collide(corridor905);
hero.collide(corridor10);
hero.collide(corridor1005);
hero.collide(corridor11);
hero.collide(corridor1105);
hero.collide(corridor12);
hero.collide(corridor1205);
hero.collide(wall5);
hero.collide(wall505);
hero.collide(wall6);
hero.collide(wall605);
hero.collide(wall7);
hero.collide(wall705);
hero.collide(wall805);
hero.collide(wall9);
hero.collide(wall905);
hero.collide(wall10);
hero.collide(wall1005);
hero.collide(wall1105);
hero.collide(wall12);
hero.collide(wall1205);
hero.collide(wall1305);
hero.collide(wall14);
hero.collide(wall1405);
hero.collide(wall15);
hero.collide(wall1505);
hero.collide(wall16);
hero.collide(wall1605);
hero.collide(wall17);
hero.collide(wall1705);
hero.collide(wall1805);
hero.collide(wall19);
hero.collide(wall1905);
hero.collide(wall20);
hero.collide(wall2005);
hero.collide(wall21);
hero.collide(wall2105);
hero.collide(wall22);
hero.collide(wall2205);
hero.collide(wall23);
hero.collide(wall2305);
hero.collide(wall24);
hero.collide(wall2405);
hero.collide(wall25);
hero.collide(wall2505);
hero.collide(wall26);
hero.collide(wall2605);
hero.collide(wall27);
hero.collide(wall2705);
hero.collide(wall2805);
hero.collide(wall29);
hero.collide(wall2905);
hero.collide(wall30);
hero.collide(wall3005);
hero.collide(wall31);
hero.collide(wall3105);
hero.collide(wall32);
hero.collide(wall3205);
hero.collide(wall33);
hero.collide(wall3305);
hero.collide(wall34);
hero.collide(wall3405);
hero.collide(wall35);
hero.collide(wall3505);
hero.collide(wall36);
hero.collide(wall3605);
hero.collide(wall37);
hero.collide(wall3705);
hero.collide(wall38);
hero.collide(wall3805);
hero.collide(wall39);
hero.collide(wall3905);
hero.collide(wall40);
hero.collide(wall4005);

  drawSprites();
push();
	fill("white")
  if(textState === 0){
	textSize(20)
	text("Hello and welcome to the mythical labrynith!",hero.x-100,hero.y-200);
	textSize(10)
	text("press space to continue!",hero.x+10,hero.y-170);
		if(keyWentDown("space")){
			textState = 1;
		}

	}

  if(textState === 1){
	textSize(20);
	text("You are just like a newborn child exploring the world for the first time!",hero.x-100,hero.y-200);
	textSize(10);
	text("press space to continue!",hero.x+10,hero.y-170);
	if(keyWentDown("space")){
		textState = 2;
	}
  }

  if(textState === 2){
	textSize(20);
	text("You know what, I am feeling quite nice, for today all you need to do is exterminate some bugs!",hero.x-100,hero.y-200);
	textSize(10);
	text("press space to continue!",hero.x+10,hero.y-170);
	if(keyWentDown("space")){
		textState = 3;
	}
  }

  if(textState === 3){
	textSize(20);
	text("You can use the arrow keys or your w,a,s,d keys to move.",hero.x-100,hero.y-200);
	textSize(10);
	text("press space to continue!",hero.x+10,hero.y-170);
	if(keyWentDown("space")){
		textState = 4;
		hero.visible = true;
	}
  }

  if(textState === 4){
	gameState = 1;
  }

  pop();

  enemy1.display();
  enemy2.display();
  enemy3.display();
  enemy4.display();
  enemy5.display();
  enemy6.display();
  enemy7.display();
  enemy8.display();
  enemy9.display();
  enemy10.display();
  enemy11.display();
  enemy12.display();
  enemy13.display();
  enemy14.display();
  enemy15.display();
  enemy16.display();
  enemy17.display();
  enemy18.display();
  enemy19.display();
  enemy20.display();
  enemy21.display();
  enemy22.display();
  enemy23.display();
  enemy24.display();

}