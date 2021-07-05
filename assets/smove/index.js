(function(){
	var GameState = 0;
	window.jzk = {};
	var c_b,ctx_b,ctx_b2;
	var c_u,ctx_u;
	var myBallOb;
	var goalBallOb;
	var monsterOb;
	var haloOb;
	var MonsterR = 20;
	var MyBallR = 20;
	var lastframetime,  diffframetime=0;
	var keysDown = {};
	var mykeyCode;
	var myx = 140;
	var myy = 240;
	var halfw = 37;
	var w = 74;
	var ww = 222;
	var r = 50;
	var H=0;
	var H2=0;
	var H3=0;
	var H4=0;
	var H5=0;
	var H6=0;
	var WinW = 1500;
	var WinH = 670;
	var GameW = 500;
	var GameH = 670;
	var GameSx = 0;
	var GameSy = 0;
	var score = 0;
	var level = 1;
	var alpha = 0;
	//var star = 0;
	var oneTotwo = 10;
	var TwoToThree  = 20;
	var ThreeToFour = 30;
	var FourToFive = 40;
	var FiveToSix = 50;
	var SixToSeven = 60;
	var speedOne = 3;
	var numOne=1;
	var speedTwo = 3.2;
	var numTwo = 2;
	var speedThree = 3.5;
	var numThree = 3;
	var speedFour = 4;
	var numFour = 3;
	var speedFive = 4.2;
	var numFive = 4;
	var speedSix = 4.7;
	var numSix = 4;
	var speedSeven = 5;
	var numSeven = 4;
	//var readyTime = 0;
	var waitTime = 500;
	//var driections = new Array();
	jzk.Readygame = function(){
		if(GameState==0)
		{
		   c_b=document.getElementById("myCanvas_bottom");
           ctx_b=c_b.getContext("2d");
           ctx_b2=c_b.getContext("2d");
           c_u=document.getElementById("myCanvas_up");
           ctx_u=c_u.getContext("2d");
           c_u.addEventListener("click", jzk.onClick, false);
           addEventListener("keydown", function(e){
	       mykeyCode=e.keyCode;
	       jzk.update();
           }, false);
           addEventListener("keyup", function(e){
	       mykeyCode=10000;
	       jzk.update();
           }, false);
           var my_gradient=ctx_b.createLinearGradient(GameSx,GameSy,GameSx,GameH);
           my_gradient.addColorStop(0,"SandyBrown");
           my_gradient.addColorStop(1,"HotPink");
           ctx_b.fillStyle=my_gradient;
           ctx_b.fillRect(GameSx,GameSy,GameW,GameH);

           ctx_b.font="40px Verdana";
           ctx_b.fillStyle="white";
           ctx_b.textAlign="center";
           ctx_b.shadowBlur = 10;
		   ctx_b.shadowColor = "white";
           ctx_b.fillText("开始游戏",GameW*0.5,GameH*0.5);
           ctx_b.font="80px Verdana";
           ctx_b.fillText("SMOVE",GameW*0.5,GameH*0.5-100);
           ctx_b.strokeStyle="white";
           
           
		       for (var i = 0; i < 5; i++) {
               ctx_b.lineTo(Math.cos((18+i*72)/180*Math.PI)*20+258,
                            -Math.sin((18+i*72)/180*Math.PI)*20+203);
               ctx_b.lineTo(Math.cos((54+i*72)/180*Math.PI)*8+258,
                            -Math.sin((54+i*72)/180*Math.PI)*8+203);
               }
               ctx_b.closePath();
           //设置边框样式以及填充颜色
               ctx_b.lineWidth="1";
               ctx_b.fillStyle = "white";
               ctx_b.strokeStyle = "white";
               ctx_b.fill();
               ctx_b.stroke();
           
           ctx_b.shadowBlur=0;
		   ctx_b.shadowColor="#000000";
           }
	}

	jzk.onClick = function(){
		if(GameState==0)
		{
			jzk.initDraw();
			GameState=1;			
			jzk.initObject();
			jzk.gameloop();
			
		}
		else if(GameState==2)
		{
			waitTime =500;
			score=0;
			level=1;
			H=0;
			H2=0;
			H3=0;
			H4=0;
			H5=0;
			H6=0;
			jzk.initObject();
			GameState=1;
			alpha=0;			
			ctx_b.shadowBlur=0;
			ctx_b.shadowColor="#000000";
		}
	}

	jzk.initDraw = function(){
		if(GameState==1){
        var my_gradient=ctx_b.createLinearGradient(GameSx,GameSy,GameSx,GameH);
        if(level == 2) {
        	if(H<GameH) {
        		H+=5;
        		my_gradient=ctx_b.createLinearGradient(GameSx,GameSy,GameSx,H);
        	}      	
        	else {
        		my_gradient=ctx_b.createLinearGradient(GameSx,GameSy,GameSx,GameH);
        	}
        }
        else if(level == 2) {
        	if(H2<GameH) {
        		H2+=5;
        		my_gradient=ctx_b.createLinearGradient(GameSx,GameSy,GameSx,H2);
        	}      	
        	else {
        		my_gradient=ctx_b.createLinearGradient(GameSx,GameSy,GameSx,GameH);
        	}
        }
        else if(level == 3) {
        	if(H3<GameH) {
        		H3+=5;
        		my_gradient=ctx_b.createLinearGradient(GameSx,GameSy,GameSx,H3);
        	}      	
        	else {
        		my_gradient=ctx_b.createLinearGradient(GameSx,GameSy,GameSx,GameH);
        	}
        }
        else if(level == 4) {
        	if(H4<GameH) {
        		H4+=5;
        		my_gradient=ctx_b.createLinearGradient(GameSx,GameSy,GameSx,H4);
        	}      	
        	else {
        		my_gradient=ctx_b.createLinearGradient(GameSx,GameSy,GameSx,GameH);
        	}
        }
        else if(level == 5) {
        	if(H5<GameH) {
        		H5+=5;
        		my_gradient=ctx_b.createLinearGradient(GameSx,GameSy,GameSx,H5);
        	}      	
        	else {
        		my_gradient=ctx_b.createLinearGradient(GameSx,GameSy,GameSx,GameH);
        	}
        }
        else if(level == 6) {
        	if(H6<GameH) {
        		H6+=5;
        		my_gradient=ctx_b.createLinearGradient(GameSx,GameSy,GameSx,H6);
        	}      	
        	else {
        		my_gradient=ctx_b.createLinearGradient(GameSx,GameSy,GameSx,GameH);
        	}
        }
 
        if(level == 1) {
            my_gradient.addColorStop(0,"SandyBrown");
        }
        else if(level == 2) {
        	my_gradient.addColorStop(0,"DodgerBlue");
        }
        else if(level == 3) {
        	my_gradient.addColorStop(0,"Yellow");
        }
        else if(level == 4) {
        	my_gradient.addColorStop(0,"Aqua");
        }
        else if(level == 5) {
        	my_gradient.addColorStop(0,"MediumSpringGreen");
        }
        else if(level == 6) {
        	my_gradient.addColorStop(0,"LightSlateGray");
        }
        my_gradient.addColorStop(1,"HotPink");
        ctx_b.fillStyle=my_gradient;       
        ctx_b.fillRect(GameSx,GameSy,GameW,GameH);
        
        ctx_b.beginPath();
        ctx_b.moveTo(myx+r,myy);
        ctx_b.arcTo(myx+ww,myy,myx+ww,myy+ww,r);
        ctx_b.arcTo(myx+ww,myy+ww,myx,myy+ww,r);
        ctx_b.arcTo(myx,myy+ww,myx,myy,r);
        ctx_b.arcTo(myx,myy,myx+ww,myy,r);
        ctx_b.closePath();
        ctx_b.stroke();

        ctx_b.beginPath();
        ctx_b.lineCap="square";
        ctx_b.moveTo(myx,myy+w);
        ctx_b.lineTo(myx+ww,myy+w);
        ctx_b.stroke();

        ctx_b.beginPath();
        ctx_b.lineCap="square";
        ctx_b.moveTo(myx,myy+w*2);
        ctx_b.lineTo(myx+ww,myy+w*2);
        ctx_b.stroke();

        ctx_b.beginPath();
        ctx_b.lineCap="square";
        ctx_b.moveTo(myx+w,myy);
        ctx_b.lineTo(myx+w,myy+ww);
        ctx_b.stroke();

        ctx_b.beginPath();
        ctx_b.lineCap="square";
        ctx_b.moveTo(myx+w*2,myy);
        ctx_b.lineTo(myx+w*2,myy+ww);
        ctx_b.stroke();

        ctx_b.font="20px Verdana";
        ctx_b.strokeStyle="white";
        ctx_b.strokeText("Score:"+score,GameW*0.5,GameH*0.5+250);
        //ctx_b.strokeText("Score:6",GameW*0.5,GameH*0.5+250);

        ctx_b.font="20px Verdana";
        ctx_b.strokeStyle="white";
        ctx_b.strokeText("Level:"+level,GameW*0.5,GameH*0.5+300);
        //ctx_b.strokeText("Level:6"+level,GameW*0.5,GameH*0.5+300);
        }
	}

	jzk.EndDraw = function(){
		
		var my_gradient=ctx_b.createLinearGradient(GameSx,GameSy,GameSx,GameH);
        my_gradient.addColorStop(0,"SandyBrown");
        my_gradient.addColorStop(1,"HotPink");
        ctx_b.fillStyle=my_gradient;
        ctx_b.fillRect(GameSx,GameSy,GameW,GameH);
        
        alpha += diffframetime * 0.0005;
			if(alpha > 1){
				alpha = 1;
			}

        ctx_b.font = '80px verdana';
		ctx_b.shadowBlur = 10;
		ctx_b.shadowColor = "white";
		ctx_b.fillStyle = "rgba(255, 255, 255, "+ alpha +")";
		ctx_b.fillText("GAME OVER", GameW*0.5, GameH*0.5);
		ctx_b.save();
		ctx_b.font = '25px verdana';
		ctx_b.fillText("Score:"+score, GameW*0.5, GameH*0.5+100);
		//ctx_b.fillText("Score:6", GameW*0.5, GameH*0.5+100);
		ctx_b.fillText("CLICK TO RESTART", GameW*0.5, GameH*0.5+150);
		ctx_b.restore();
		
	}

	jzk.initObject = function(){
		myBallOb = new myBallObject();
		myBallOb.init();
		//BallOb.drawMyBall();
		goalBallOb = new goalBallObject();
		goalBallOb.init();

		monsterOb = new monsterObject();
		monsterOb.init();

		haloOb = new haloObject();
		haloOb.init();
	}

	jzk.gameloop = function(){
		requestAnimFrame(jzk.gameloop);
		var now = Date.now();
		diffframetime = now - lastframetime;
		lastframetime = now;
		//jzk.update();
		//waitTime -= 5;
		if(GameState==1){
		ctx_b.clearRect(0,0,WinW,WinH);
        jzk.initDraw(); 
        if(waitTime >= 5) {
        	waitTime -= 5;
        }
        if(waitTime <=0) {
            monsterOb.checkMonster();
            monsterOb.drawMonster();
        }
        

		ctx_u.clearRect(0,0,WinW,WinH);
		myBallOb.drawMyBall();
		goalBallOb.drawGoalBall();
		haloOb.drawWave();
		jzk.monsEatBall();
	    }
	    else if(GameState==2){
	    	ctx_b.clearRect(0,0,WinW,WinH);
	    	ctx_u.clearRect(0,0,WinW,WinH);
	    	jzk.EndDraw();
	    }
	}

	jzk.monsEatBall = function(){
		for(var i=0;i<monsterOb.num;i++){
			if (myBallOb.x <= (monsterOb.x[i] + MonsterR)&& monsterOb.x[i] <= (myBallOb.x + MonsterR)&& myBallOb.y <= (monsterOb.y[i] + MonsterR)&& monsterOb.y[i] <= (myBallOb.y + MonsterR)) {
		        GameState=2;
	        }
		}
	}

	jzk.update = function(){
	if (mykeyCode==38 && myBallOb.y>myy+halfw) { // Player holding up
		myBallOb.y = myBallOb.y-w;
	}
	if (mykeyCode==40 && myBallOb.y<myy+halfw*5) { // Player holding down
		myBallOb.y = myBallOb.y+w;
	}
	if (mykeyCode==37 && myBallOb.x>myx+halfw) { // Player holding left
		myBallOb.x = myBallOb.x-w;
	}
	if (mykeyCode==39 && myBallOb.x<myx+halfw*5) { // Player holding right
		myBallOb.x = myBallOb.x+w;
	}

	if (myBallOb.x == goalBallOb.x && myBallOb.y == goalBallOb.y) {		
	    haloOb.born();
		jzk.creatGoalBall();
	    score++;
	    if(score == oneTotwo + 1) {
	    	level = 2;
	    	//monsterOb.init();
	    }
	    if(score == TwoToThree + 1) {
	    	level = 3;
	    }

	    if(score == ThreeToFour + 1) {
	    	level = 4;
	    }

	    if(score == FourToFive + 1) {
	    	level = 5;
	    }

	    if(score == FiveToSix + 1) {
	    	level = 6;
	    }

	    if(score == SixToSeven + 1) {
	    	level = 7;
	    }

	  }

    }

    jzk.creatGoalBall = function(){
    	do{
        	number1 = Math.random()*10;
    	    number2 = Math.round(number1);
    	    number3 = number2%9;
    	    if(number3==0)
    	    {
    	    	goalBallOb.x=myx+halfw;
    	    	goalBallOb.y=myy+halfw;
    	    }
    	    else if(number3==1)
    	    {
    	    	goalBallOb.x=myx+halfw*3;
    	    	goalBallOb.y=myy+halfw;
    	    }
    	    else if(number3==2)
    	    {
    		    goalBallOb.x=myx+halfw*5;
    		    goalBallOb.y=myy+halfw;
    	    }
    	    else if(number3==3)
    	    {
    		    goalBallOb.x=myx+halfw;
    		    goalBallOb.y=myy+halfw*3;
    	    }
    	    else if(number3==4)
    	    {
    		    goalBallOb.x=myx+halfw*3;
    		    goalBallOb.y=myy+halfw*3;
    	    }
    	    else if(number3==5)
    	    {
    		    goalBallOb.x=myx+halfw*5;
    		    goalBallOb.y=myy+halfw*3;
    	    }
    	    else if(number3==6)
    	    {
    		    goalBallOb.x=myx+halfw;
    		    goalBallOb.y=myy+halfw*5;
    	    }
    	    else if(number3==7)
    	    {
    		    goalBallOb.x=myx+halfw*3;
    		    goalBallOb.y=myy+halfw*5;
    	    }
    	    else if(number3==8)
    	    {
    		    goalBallOb.x=myx+halfw*5;
    		    goalBallOb.y=myy+halfw*5;
    	    }
        }while(goalBallOb.x==myBallOb.x&&goalBallOb.y==myBallOb.y);
    }


	var myBallObject = function(){
        this.x = 0;
        this.y = 0;
	}

	myBallObject.prototype.init = function(){
        this.x = myx+halfw*3;
        this.y = myy+halfw*3;
	}

	myBallObject.prototype.drawMyBall = function(){
        ctx_u.beginPath();
        ctx_u.arc(this.x, this.y,MyBallR,0,360,false);
        ctx_u.fillStyle = "white";
        ctx_u.fill();
        ctx_u.closePath();

	}

	var goalBallObject = function(){
		this.star = 0;
		this.x = 0;
		this.y = 0;
	}

	goalBallObject.prototype.init = function(){
        this.x = myx+halfw;
        this.y = myy+halfw;
	}

	goalBallObject.prototype.drawGoalBall = function(){
        ctx_u.beginPath();
    //设置是个顶点的坐标，根据顶点制定路径
    this.star = this.star + 5;
    for (var i = 0; i < 5; i++) {
        ctx_u.lineTo(Math.cos((18+i*72+this.star)/180*Math.PI)*20+this.x,
                        -Math.sin((18+i*72+this.star)/180*Math.PI)*20+this.y);
        ctx_u.lineTo(Math.cos((54+i*72+this.star)/180*Math.PI)*8+this.x,
                        -Math.sin((54+i*72+this.star)/180*Math.PI)*8+this.y);
        }
        ctx_u.closePath();
        //设置边框样式以及填充颜色
        ctx_u.lineWidth="1";
        ctx_u.fillStyle = "#F6F152";
        ctx_u.strokeStyle = "#F5270B";
        ctx_u.fill();
        ctx_u.stroke();

	}

	var monsterObject = function(){
		this.num = numOne;	  
		this.x = [];
		this.y = [];
		this.speed = [];
		this.direction = [];
		this.alive = [];
	}

	monsterObject.prototype.init = function(){
		var directions = new Array();
		for(var i=0;i<13;i++) {
			directions[i] = 0;
		}
        for(var i=0;i<this.num;i++){
            var Rand = Math.random();
            var num = 1 + Math.round(Rand * 11);
            this.direction[i] = num;
            if(level == 1) {
                this.speed[i] = speedOne;
            }
            else if(level == 2) {
            	this.speed[i] = speedTwo;
            	this.num = numTwo;
            }
            else if(level == 3) {
            	this.speed[i] = speedThree;
            	this.num = numThree;
            }
            else if(level == 4) {
            	this.speed[i] = speedFour;
            	this.num = numFour;
            }
            else if(level == 5) {
            	this.speed[i] = speedFive;
            	this.num = numFive;
            }
            else if(level == 6) {
            	this.speed[i] = speedSix;
            	this.num = numSix;
            }
            else if(level == 7) {
            	this.speed[i] = speedSeven;
            	this.num = numSeven;
            }
            this.alive[i] = true;
        }

        for(var i=0;i<this.num;i++) {
        	directions[this.direction[i]] = 1;
        }
        if(directions[1]==1&&directions[2]==1&&directions[3]==1) {
            for(var i=0;i<this.num;i++) {
            	if(this.direction[i] == 1) {
            		this.direction[i] == 4;
            	}
            }
        }

        else if(directions[4]==1&&directions[5]==1&&directions[6]==1) {
            for(var i=0;i<this.num;i++) {
            	if(this.direction[i] == 4) {
            		this.direction[i] == 7;
            	}
            }
        }

        else if(directions[7]==1&&directions[8]==1&&directions[9]==1) {
            for(var i=0;i<this.num;i++) {
            	if(this.direction[i] == 7) {
            		this.direction[i] == 10;
            	}
            }
        }

        else if(directions[10]==1&&directions[11]==1&&directions[12]==1) {
            for(var i=0;i<this.num;i++) {
            	if(this.direction[i] == 10) {
            		this.direction[i] == 1;
            	}
            }
        }
       
        for(var i=0;i<this.num;i++){
        	if(this.direction[i]==1){
        		this.x[i]=myx+halfw;
        		this.y[i]=0;
        	}
        	else if(this.direction[i]==2){
        		this.x[i]=myx+halfw*3;
        		this.y[i]=0;
        	}
        	else if(this.direction[i]==3){
        		this.x[i]=myx+halfw*5;
        		this.y[i]=0;
        	}
        	else if(this.direction[i]==4){
        		this.x[i]=GameSx+GameH;
        		this.y[i]=myy+halfw;
        	}
        	else if(this.direction[i]==5){
        		this.x[i]=GameSx+GameH;
        		this.y[i]=myy+halfw*3;
        	}
        	else if(this.direction[i]==6){
        		this.x[i]=GameSx+GameH;
        		this.y[i]=myy+halfw*5;
        	}
        	else if(this.direction[i]==7){
        		this.x[i]=myx+halfw*5;
        		this.y[i]=GameH;
        	}
        	else if(this.direction[i]==8){
        		this.x[i]=myx+halfw*3;
        		this.y[i]=GameH;
        	}
        	else if(this.direction[i]==9){
        		this.x[i]=myx+halfw;
        		this.y[i]=GameH;
        	}
        	else if(this.direction[i]==10){
        		this.x[i]=GameSx+GameW-GameH;
        		this.y[i]=myy+halfw*5;
        	}
        	else if(this.direction[i]==11){
        		this.x[i]=GameSx+GameW-GameH;
        		this.y[i]=myy+halfw*3;
        	}
        	else if(this.direction[i]==12){
        		this.x[i]=GameSx+GameW-GameH;
        		this.y[i]=myy+halfw;
        	}
        }
	}

	monsterObject.prototype.drawMonster = function(){
		
		for(var i=0;i<this.num;i++){
			if(this.direction[i]==1||this.direction[i]==2||this.direction[i]==3){
				this.y[i] += this.speed[i];
			}
			else if(this.direction[i]==4||this.direction[i]==5||this.direction[i]==6){
				this.x[i] -= this.speed[i];
			}
			else if(this.direction[i]==7||this.direction[i]==8||this.direction[i]==9){
				this.y[i] -= this.speed[i];
			}
			else if(this.direction[i]==10||this.direction[i]==11||this.direction[i]==12){
				this.x[i] += this.speed[i];
			}
           
			ctx_b.beginPath();
			ctx_b.fillStyle = "black";
            ctx_b.arc(this.x[i],this.y[i],MonsterR,0,360,false);            
            ctx_b.fill();
            ctx_b.closePath();

		}
	}

	monsterObject.prototype.checkMonster = function(){
		for(var i=0;i<this.num;i++){
			if(this.direction[i]==1||this.direction[i]==2||this.direction[i]==3){
				if(this.y[i]>GameH+MonsterR){
					this.alive[i] = false;
				}
			}
			else if(this.direction[i]==4||this.direction[i]==5||this.direction[i]==6){
				if(this.x[i]<GameSx-MonsterR){
					this.alive[i] = false;
				}
			}
			else if(this.direction[i]==7||this.direction[i]==8||this.direction[i]==9){
				if(this.y[i]<0-MonsterR){
					this.alive[i] = false;
				}
			}
			else if(this.direction[i]==10||this.direction[i]==11||this.direction[i]==12){
				if(this.x[i]>GameSx+GameW+MonsterR){
					this.alive[i] = false;
				}
			}
		}

		var flag=true;
		for(var i=0;i<this.num;i++) {
			if(this.alive[i] == true) {
				flag = false;
				break;
			}
		}

		if((flag == true && score >oneTotwo && this.num == numOne)||(flag == true && score >TwoToThree && this.num == numTwo)
			||(flag == true && score >ThreeToFour && this.num == numThree)||(flag == true && score >FourToFive && this.num == numFour)
			||(flag == true && score >FiveToSix && this.num == numFive)||(flag == true && score >SixToSeven && this.num == numSix)) {
			this.init();
		}

		for(var i=0;i<this.num;i++){
			if(this.alive[i]==false){
				var Rand = Math.random();
                var num = 1 + Math.round(Rand * 11);
                this.direction[i] = num;
                this.alive[i] = true;
                if(this.direction[i]==1){
        		this.x[i]=myx+halfw;
        		this.y[i]=0;
        	    }
        	    else if(this.direction[i]==2){
        		this.x[i]=myx+halfw*3;
        		this.y[i]=0;
        	    }
        	    else if(this.direction[i]==3){
        		this.x[i]=myx+halfw*5;
        		this.y[i]=0;
        	    }
        	    else if(this.direction[i]==4){
        		this.x[i]=GameSx+GameH;
        		this.y[i]=myy+halfw;
        	    }
        	    else if(this.direction[i]==5){
        		this.x[i]=GameSx+GameH;
        		this.y[i]=myy+halfw*3;
        	    }
        	    else if(this.direction[i]==6){
        		this.x[i]=GameSx+GameH;
        		this.y[i]=myy+halfw*5;
        	    }
        	    else if(this.direction[i]==7){
        		this.x[i]=myx+halfw*5;
        		this.y[i]=GameH;
        	    }
        	    else if(this.direction[i]==8){
        		this.x[i]=myx+halfw*3;
        		this.y[i]=GameH;
        	    }
        	    else if(this.direction[i]==9){
        		this.x[i]=myx+halfw;
        		this.y[i]=GameH;
        	    }
        	    else if(this.direction[i]==10){
        		this.x[i]=GameSx+GameW-GameH;
        		this.y[i]=myy+halfw*5;
        	    }
        	    else if(this.direction[i]==11){
        		this.x[i]=GameSx+GameW-GameH;
        		this.y[i]=myy+halfw*3;
        	    }
        	    else if(this.direction[i]==12){
        		this.x[i]=GameSx+GameW-GameH;
        		this.y[i]=myy+halfw;
        	    }  
			}
		}
	}

	var haloObject = function() {
		this.num = 9;
		this.x = [];
		this.y = [];
		this.r = [];
		this.status = [];
	}

	haloObject.prototype.init = function() {
		for(var i = 0;i<this.num;i++) {
			this.x[i] = GameW*0.5;
			this.y[i] = GameH*0.5;
			this.status[i] = false;
			this.r[i] = 0;
		}
	}

	haloObject.prototype.drawWave = function() {
		ctx_u.save();
		ctx_u.lineWidth = 3;
		for(var i=0;i<this.num;i++) {
			if(this.status[i]==true) {
				this.r[i] += diffframetime * 0.04;
				if(this.r[i] > 60) {
					this.status[i] = false;
					return false;
			    }
			    if(this.r[i]<30) {
			    	ctx_u.font = '25px verdana';
			    	ctx_u.fillStyle = "red";
		            ctx_u.fillText("+1", myBallOb.x, myBallOb.y);
			    }

			var alpha = 1 - this.r[i] / 60;

				ctx_u.strokeStyle = "rgba(255, 255, 255, "+ alpha +")";
				ctx_u.beginPath();
				ctx_u.arc(this.x[i], this.y[i], this.r[i], 0, 2 * Math.PI);   //画圆，
				ctx_u.stroke();
		    }    
	    }
	    ctx_u.restore();
	}

	haloObject.prototype.born = function() {
		for(var i = 0; i< this.num; i++){
			if(!this.status[i]){
				this.status[i] = true;   //把圆圈状态设为使用状态
				this.x[i] = goalBallOb.x;
				this.y[i] = goalBallOb.y;
				this.r[i] = 10;
				return false;   //找到一个未使用的圆圈，就结束。
			}
		}
	}


})();