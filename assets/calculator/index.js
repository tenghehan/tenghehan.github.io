(function(){
	window.cal = {};
	window.canBApp = {};
	window.canUApp ={};
	window.operations={};
  var SOUND_ROOT = '/assets/calculator/sound/';
	var c_u,ctx_u,c_b,ctx_b;
	//var imgUrl="./image/";
	var GameState = 0;
	var GameSx = 0;
	var GameSy = 50;
	var GameW = 400;
	var GameH =500;
	var ScreenSx = 25;
	var ScreenSy = 75;
	var ScreenW = 350;
	var ScreenH = 200;
	var shadowScreenSx = 50;
	var shadowScreenSy = 125;
	var shadowScreenW = 300;
	var shadowScreenH = 120;
	var innerScreenSx = 50;
	var innerScreenSy = 130;
	var innerScreenW = 300;
	var innerScreenH = 115;
	var logoX=60;
	var logoY=160;
	var movesSx = 160;
	var movesSy = 135;
	var movesW = 80;
	var movesH = 35;
	var goalSx = 255;
	var goalSy = 135;
	var goalW = 80;
	var goalH = 35;
	var batterySx = 230;
	var batterySy = 85;
	var batteryW = 100;
	var batteryH = 30;
	var shadowbatterySx = 231;
	var shadowbatterySy = 86;
	var shadowbatteryW = 98;
	var shadowbatteryH = 28;
	var innerbatterySx = 231;
	var innerbatterySy = 90;
	var innerbatteryW = 98;
	var innerbatteryH = 24;
	var levelSx = 60;
	var levelSy = 105;
	var ButtonSx = 25;
	var ButtonSy = 300;
	var level = 1;
	var result = 0;
	var begin = [0,0,3,0,4321,50,171,0,0,0,15,0,0,0,0,0,0,11,2,0,0,0,0,14,111,34,15,0,8,7,0,0];
	var moves = [0,3,3,4,3,4,4,5,3,3,4,5,4,4,4,6,5,5,4,4,3,3,4,5,6,5,3,4,5,5,7,0];
	var constmoves = [0,3,3,4,3,4,4,5,3,3,4,5,4,4,4,6,5,5,4,4,3,3,4,5,6,5,3,4,5,5,7,0];
	var goal = [0,8,4,64,4,9,23,2,101,56,10,210,11,222,93,2321,24,29,15,-85,9,144,-13,12,126,3,21,102,9,81,28,0];
	var ButtonX33 = [];
	var ButtonY33 = [];
	var ButtonX44 = [];
	var ButtonY44 = [];
	var ButtonY54 = [];
	var StartButton11,StartButton12,StartButton13,StartButton21,StartButton22,StartButton23,StartButton31,StartButton32,StartButton33;
	var GameButton11,GameButton12,GameButton13,GameButton21,GameButton22,GameButton23,GameButton31,GameButton32,GameButton33;
	var MusicButton11,MusicButton12,MusicButton13,MusicButton21,MusicButton22,MusicButton23,MusicButton31,MusicButton32,MusicButton33,MusicButton41,MusicButton42,MusicButton43,MusicButton51,MusicButton53;
	var calButton11Ob,calButton12Ob,calButton13Ob,calButton14Ob,calButton21Ob,
		calButton22Ob,calButton23Ob,calButton24Ob,calButton31Ob,calButton32Ob,
		calButton33Ob,calButton34Ob,calButton41Ob,calButton42Ob,calButton43Ob,
		calButton44Ob,calButton51Ob,calButton52Ob,calButton53Ob,calButton54Ob;
	var StartButton = [];
	var GameButton = [];
	var Game24Button=[];
	var MusicButton = [];
	var calButton=[];
	var maxlevel = 30;
	var nowaction=4;
	var num;
	var time=0;
	var loopID;
	var musicID;
	var ifpause=0;
	var nowKey=0;
	var upkey=1;
	var musicState=0;
	var resultMusic =[];
	var resource=[];
	var song=0;
	var helping=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	var HELP=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	var next=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

	var numshow = "0", prenum = 0;    //计算器
	var operate = 0;   //判断输入状态的标志
	var calcul = 0;    //判断计算状态的标志
	var quit = 0;      //防止重复按键的标志
	var mode = 1;
	//var StartButton = [StartButton11,StartButton12,StartButton13,StartButton21,StartButton22,StartButton23,StartButton31,StartButton32,StartButton33];
	cal.StartDraw = function() {
           c_b=document.getElementById("canvas_bottom");
           ctx_b=c_b.getContext("2d");

           c_u=document.getElementById("canvas_up");
           ctx_u=c_u.getContext("2d");
           c_u.addEventListener("mousedown",cal.DoMouseDown,false);
           c_u.addEventListener("mouseup",cal.DoMouseUp,false);

           canBApp.backgroundDraw();
           if(GameState==0) {
               cal.initStartObject();
               canUApp.StartButtonDraw();

           }
            bgMusic = new Audio();
            bgMusic.src = SOUND_ROOT + 'bg.m4a';
            bgMusic.load();
            bgMusic1 = new Audio();
            bgMusic1.src = SOUND_ROOT + 'd1.wav';
            bgMusic1.load();
            bgMusic2 = new Audio();
            bgMusic2.src = SOUND_ROOT + 'd2.wav';
            bgMusic2.load();
            bgMusic3 = new Audio();
            bgMusic3.src = SOUND_ROOT + 'd3.wav';
            bgMusic3.load();
            bgMusic4 = new Audio();
            bgMusic4.src = SOUND_ROOT + 'd4.wav';
            bgMusic4.load();
            bgMusic5 = new Audio();
            bgMusic5.src = SOUND_ROOT + 'd5.wav';
            bgMusic5.load();
            bgMusic6 = new Audio();
            bgMusic6.src = SOUND_ROOT + 'd6.wav';
            bgMusic6.load();
            bgMusic7 = new Audio();
            bgMusic7.src = SOUND_ROOT + 'd7.wav';
            bgMusic7.load();
            bgMusic8 = new Audio();
            bgMusic8.src = SOUND_ROOT + '1.wav';
            bgMusic8.load();
            bgMusic9 = new Audio();
            bgMusic9.src = SOUND_ROOT + '2.wav';
            bgMusic9.load();
            bgMusic10 = new Audio();
            bgMusic10.src = SOUND_ROOT + '3.wav';
            bgMusic10.load();
            bgMusic11 = new Audio();
            bgMusic11.src = SOUND_ROOT + '4.wav';
            bgMusic11.load();
            bgMusic12 = new Audio();
            bgMusic12.src = SOUND_ROOT + '5.wav';
            bgMusic12.load();
            bgMusic13 = new Audio();
            bgMusic13.src = SOUND_ROOT + '6.wav';
            bgMusic13.load();
            bgMusic14 = new Audio();
            bgMusic14.src = SOUND_ROOT + '7.wav';
            bgMusic14.load();
            bgMusic15 = new Audio();
            bgMusic15.src = SOUND_ROOT + 'g1.wav';
            bgMusic15.load();
            bgMusic16 = new Audio();
            bgMusic16.src = SOUND_ROOT + 'g2.wav';
            bgMusic16.load();
            bgMusic17 = new Audio();
            bgMusic17.src = SOUND_ROOT + 'g3.wav';
            bgMusic17.load();
            bgMusic18 = new Audio();
            bgMusic18.src = SOUND_ROOT + 'g4.wav';
            bgMusic18.load();
            bgMusic19 = new Audio();
            bgMusic19.src = SOUND_ROOT + 'g5.wav';
            bgMusic19.load();
            bgMusic20 = new Audio();
            bgMusic20.src = SOUND_ROOT + 'g6.wav';
            bgMusic20.load();
            bgMusic21 = new Audio();
            bgMusic21.src = SOUND_ROOT + 'g7.wav';
            bgMusic21.load();


           resource=[bgMusic,bgMusic1,bgMusic2,bgMusic3,bgMusic4,bgMusic5,bgMusic6,
                    bgMusic7,bgMusic8,bgMusic9,bgMusic10,bgMusic11,bgMusic12,bgMusic13,
                    bgMusic14,bgMusic15,bgMusic16,bgMusic17,bgMusic18,bgMusic19,bgMusic20,bgMusic21];
/*
           var img = new Image();
           img.src = imgUrl +"0.jpg";
           ctx_b.drawImage(img,0,0,500,500);
*/

	}

	cal.roundedRec = function(myx,myy,w,h,R,ctx,r,g,b) {

	    ctx.beginPath();
        ctx.moveTo(myx+R,myy);
        ctx.arcTo(myx+w,myy,myx+w,myy+h,R);
        ctx.arcTo(myx+w,myy+h,myx,myy+h,R);
        ctx.arcTo(myx,myy+h,myx,myy,R);
        ctx.arcTo(myx,myy,myx+w,myy,R);
        ctx.closePath();

        ctx.fillStyle = "rgba("+r+","+g+","+b+",1)";
        ctx.fill();
    }

    cal.DoMouseDown = function(e) {
		if(GameState==0) {
			var nowbutton = cal.getNowButton(e);
			if(StartButton[nowbutton].text[0]!="$") {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
			    ButtonY33[nowbutton+1] += 10;
			    ctx_u.clearRect(0,0,GameW+GameSx,GameH+GameSy);
                canUApp.StartButtonDraw();

            }
        //}
		}
		else if(GameState == 1) {
			var nowbutton = cal.getNowButton(e);
			if((GameButton[nowbutton].text[level]!="$"&&helping==0)||(nowbutton==8&&helping==1)) {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
			    ButtonY33[nowbutton+1] +=10;

			    ctx_u.clearRect(0,0,GameW+GameSx,GameH+GameSy);
			    canUApp.GameButtonDraw();
			}
		}
		else if(GameState==2) {
			var nowbutton = cal.getNowButton(e);//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			if(GameButton[nowbutton].y==ButtonY33[nowbutton+1]&&GameButton[nowbutton].text[level]!="$"&&(result!="24Points In 60s"||(result=="24Points In 60s"&&nowbutton==4))) {
			    ButtonY33[nowbutton+1] +=10;
			    ctx_u.clearRect(0,0,GameW+GameSx,GameH+GameSy);
			    canUApp.Game24ButtonDraw();
		    }
		}
		else if(GameState==3) {
			var nowbutton=cal.getNowButton(e);
			if(MusicButton[nowbutton].y==ButtonY44[nowbutton+1]) {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			    ButtonY44[nowbutton+1] +=10;
			    ctx_u.clearRect(0,0,GameW+GameSx,GameH+GameSy);
			    canUApp.MusicButtonDraw();
		    }
		}

		else if(GameState == 4){
			var nowbutton=cal.getNowButton(e);
			ButtonY54[nowbutton+1] += 10;
		    ctx_u.clearRect(0, 0, GameW+GameSx,GameH+GameSy);
		 	canUApp.CalButtonDraw();
		 	//canUApp.StartButtonDraw();
		 }


	}

	cal.DoMouseUp = function(e) {
		if(GameState==0) {
			var nowbutton = cal.getNowButton(e);
			if(StartButton[nowbutton].text[0]!="$") {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			    ctx_u.clearRect(0,0,GameW+GameSx,GameH+GameSy);
			    ButtonY33[nowbutton+1] -= 10;
                if(nowbutton==0) {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                	HELP=1;
                	canUApp.StartButtonDraw();
                	HELP=0;
                	next=0;
                }
                else if(nowbutton == 1){
                    GameState = 4;
				    result = 0;
				    numshow = "0";
				    prenum = 0;
				    quit = 1;
				    mode = 1;
				    calcul = 0;
				    operate = 0;
				    next=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				    HELP=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				    cal.initCalButton();
				    canUApp.CalButtonDraw();
				    //canUApp.StartButtonDraw();
			    }
			    else if(nowbutton==4) {
				    //level=1;
				    GameState=1;
				    result=begin[level];
            	    cal.initGameButton();
            	    moves[level]=constmoves[level];//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            	    //cal.initMusicButton();
            	    next=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            	    HELP=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            	    helping=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            	    canUApp.GameButtonDraw();

                }
                else if(nowbutton==3) {
                	time=60;
                	//loopID=window.setInterval(tip,1000);
                	level=1;
                	GameState=2;
                	result=0;
                	cal.init24Button();
                	//var Rand = Math.random();
                    //num = 1 + Math.round(Rand * 29);
                    num = 0;
                    result="24Points In 60s";
                    next=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    HELP=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                	canUApp.Game24ButtonDraw();
                }
                else if(nowbutton==5) {
                	GameState=3;
                	next=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                	HELP=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                	cal.initMusicButton();
                	canUApp.MusicButtonDraw();
                }
                else if(nowbutton==8) {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
                	next++;
                	HELP=0;
                	if(next>4) {
                		next=0;
                	}
                	canUApp.StartButtonDraw();
                }

            }

		}
		else if(GameState==1) {
			var nowbutton = cal.getNowButton(e);
			if((GameButton[nowbutton].text[level]!="$"&&helping==0)||(helping==1&&nowbutton==8)) {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			    ctx_u.clearRect(0,0,GameW+GameSx,GameH+GameSy);
			    ButtonY33[nowbutton+1] -= 10;
			    if(nowbutton==0) {//上一关
                    if(level>1) {
                	    level--;
                	}
                	result=begin[level];//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                	moves[level]=constmoves[level];//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                	canUApp.GameButtonDraw();
			    }
			    else if(nowbutton==1) {
                    //operations.calculate12();
                    operations.Fakecalculate(nowbutton);
                    canUApp.GameButtonDraw();
			    }
			    else if(nowbutton==2) {//清除
			    	if(GameButton[nowbutton].text[level]=="CLR") {
                        moves[level]=constmoves[level];//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                        result=begin[level]; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    }
                    else if(GameButton[nowbutton].text[level]=="OK") {
                    	GameButton[nowbutton].text[level]="CLR";
                    	if(level<maxlevel) {
                    	    level++;
                    	    if(level==4||level==8||level==13||level==22||level==26) {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                                helping=1;
                    	    }

                    	    result=begin[level];//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    	    moves[level]=constmoves[level];//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

                    	}
                    	else {
                    		level++;
                    		result="CLEAR!";
                    	}
                    }
                    canUApp.GameButtonDraw();
			    }
			    else if(nowbutton==3) {//下一关
			    	if(level<maxlevel) {
                        level++;
                        if(level==2||level==3||level==4||level==6||level==7) {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                        	helping=1;
                        }
                        result=begin[level];//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                        moves[level]=constmoves[level];//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    }
                    else {
                    	level++;
                    	result="CLEAR!";
                    }
                    canUApp.GameButtonDraw();

			    }
			    else if(nowbutton==4) {
                    //operations.calculate22();
                    operations.Fakecalculate(nowbutton);
                    canUApp.GameButtonDraw();
			    }
                else if(nowbutton==5) {
                    //operations.calculate23();
                    operations.Fakecalculate(nowbutton);
                    canUApp.GameButtonDraw();
                }
			    else if(nowbutton==6) {//返回主页
                    //level =1;
                    GameState=0;
                    result=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    helping=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    // next=0;
                    // HELP=0;
                    if(level>maxlevel) {
                    	level=1;
                    }
                    canUApp.StartButtonDraw();
			    }
			    else if(nowbutton==7) {
                    //operations.calculate32();
                    operations.Fakecalculate(nowbutton);
                    canUApp.GameButtonDraw();
			    }
			    else if(nowbutton==8) {
                    //operations.calculate33();
                    if(helping==1) {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    	helping=0;
                    }
                    else {
                    	//operations.calculate33();
                    	operations.Fakecalculate(nowbutton);
                    }
                    canUApp.GameButtonDraw();
			    }


		    }
		}
		else if(GameState==2) {
			var nowbutton = cal.getNowButton(e);
			if(GameButton[nowbutton].text[num] != "$") {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

			ctx_u.clearRect(0,0,GameW+GameSx,GameH+GameSy);
			//ButtonY33[nowbutton+1] -= 10;
			//canUApp.Game24ButtonDraw();

			if(nowbutton==0) {
				if(GameButton11.used==false) {
					GameButton11.used=true;
                    operations.Game24calculate(GameButton11);

                }
                canUApp.Game24ButtonDraw();

			}
			else if(nowbutton==1) {
                if(GameButton12.used==false) {
                	GameButton12.used=true;
                    operations.Game24calculate(GameButton12);

                }
                canUApp.Game24ButtonDraw();

			}
			else if(nowbutton==2) {
				ButtonY33[nowbutton+1] -= 10;
                nowaction=0;
                canUApp.Game24ButtonDraw();
			}
			else if(nowbutton==3) {
                if(GameButton21.used==false) {
                	GameButton21.used=true;
                    operations.Game24calculate(GameButton21);

                }
                canUApp.Game24ButtonDraw();

			}
			else if(nowbutton==4) {
				if(GameButton22.text[num]=="START") {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
					ButtonY33[5] -=10;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
					result=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    num=operations.getRan();
                    loopID=window.setInterval(tip,1000);
                    time=60;
				}
				else {
				    if(GameButton22.used==false) {
				    	GameButton22.used=true;
                        operations.Game24calculate(GameButton22);

                    }
            }
                canUApp.Game24ButtonDraw();

			}
			else if(nowbutton==5) {
				ButtonY33[nowbutton+1] -= 10;
                nowaction=1;
                canUApp.Game24ButtonDraw();

			}
			else if(nowbutton==6) {
				window.clearInterval(loopID);
				//ButtonY33[nowbutton+1] -= 10;
				for(var i=0;i<9;i++) {
					if(GameButton[i].y!=ButtonY33[i+1]) {
						ButtonY33[i+1] -=10;
					}
				}
				nowaction=4;
                GameState=0;
                result=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                level=1;
                // next=0;
                // HELP=0;
                helping=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                GameButton11.used=GameButton12.used=GameButton21.used=GameButton22.used=false;
                canUApp.StartButtonDraw();
			}
			else if(nowbutton==7) {
				ButtonY33[nowbutton+1] -= 10;
                nowaction=3;
                canUApp.Game24ButtonDraw();

			}
			else if(nowbutton==8) {
				ButtonY33[nowbutton+1] -= 10;
                nowaction=2;
                canUApp.Game24ButtonDraw();

			}
		}

		}
		else if(GameState==3) {
		    var nowbutton = cal.getNowButton(e);
		    if(MusicButton[nowbutton].text[1]!="$") {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			ctx_u.clearRect(0,0,GameW+GameSx,GameH+GameSy);
			ButtonY44[nowbutton+1]-=10;
			if(nowbutton==0) {
				if(musicState==0) {
                    nowKey=5+upkey*7;
                    cal.playKey();
				}
				else {
                    resultMusic[resultMusic.length]=5+upkey*7;
				}
                canUApp.MusicButtonDraw();
			}
			else if(nowbutton==1) {
				if(musicState==0) {
                    nowKey=6+upkey*7;
                    cal.playKey();
				}
				else {
                    resultMusic[resultMusic.length]=6+upkey*7;
				}
                canUApp.MusicButtonDraw();
			}
			else if(nowbutton==2) {
				if(musicState==0) {
                    nowKey=7+upkey*7;
                    cal.playKey();
				}
				else {
                    resultMusic[resultMusic.length]=7+upkey*7;
				}
				canUApp.MusicButtonDraw();
			}
			else if(nowbutton==3) {
				if(musicState==0) {
                    nowKey=2+upkey*7;
                    cal.playKey();
				}
				else {
                    resultMusic[resultMusic.length]=2+upkey*7;
				}
				canUApp.MusicButtonDraw();
			}
			else if(nowbutton==4) {
				if(musicState==0) {
                    nowKey=3+upkey*7;
                    cal.playKey();
				}
				else {
                    resultMusic[resultMusic.length]=3+upkey*7;
				}
				canUApp.MusicButtonDraw();
			}
			else if(nowbutton==5) {
				if(musicState==0) {
                    nowKey=4+upkey*7;
                    cal.playKey();
				}
				else {
                    resultMusic[resultMusic.length]=4+upkey*7;
				}
				canUApp.MusicButtonDraw();
			}
			else if(nowbutton==6) {
				if(upkey>0&&upkey<=2) {
					upkey--;
				}
				canUApp.MusicButtonDraw();
			}
			else if(nowbutton==7) {
				if(musicState==0) {
                    nowKey=1+upkey*7;
                    cal.playKey();
				}
				else {
                    resultMusic[resultMusic.length]=1+upkey*7;
				}
				canUApp.MusicButtonDraw();
			}
			else if(nowbutton==8) {
				if(upkey>=0&&upkey<2) {
					upkey++;
				}
				canUApp.MusicButtonDraw();
			}
			else if(nowbutton==9) {
				if(musicState==1&&resultMusic.length>=1) {
				    resultMusic.pop();
				}
				canUApp.MusicButtonDraw();
			}
			else if(nowbutton==10) {
				if(musicState==0) {
					nowKey=0;
					cal.playKey();
				}
				else {
					resultMusic[resultMusic.length]=0;
				}
				canUApp.MusicButtonDraw();
			}
			else if(nowbutton==11) {
				if(musicState==1) {
				    if(ifpause==0) {
				    	ifpause=1;
                        musicID=window.setInterval(playSong,1000);
				    }
				    else {
				    	window.clearInterval(musicID);
					    ifpause=0;
				    }
				}
				canUApp.MusicButtonDraw();
			}
			else if(nowbutton==12) {
				nowaction=4;
                GameState=0;
                result=0;
                level=1;
                musicState=0;
                ifpause=0;
                resultMusic = [];
                nowKey=0;
                song=0;
                next=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                HELP=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                window.clearInterval(musicID);

                canUApp.StartButtonDraw();

			}
			else if(nowbutton==13) {
				if(musicState==0) {
					musicState=1;
					resultMusic=[];
				}
				else {
					musicState=0;
					nowKey=0;
				}
				window.clearInterval(musicID);
				upkey=1;
				song=0;
				ifpause=0;
				canUApp.MusicButtonDraw();
			}


		}
	    }
	    else if(GameState == 4){
			var nowbutton = cal.getNowButton(e);
			if(calButton[nowbutton].text[0]!="$"){
			ctx_u.clearRect(0, 0,GameW+GameSx,GameH+GameSy);
			 switch(nowbutton){
			 	case 3:    //+
			 		operations.CALcalculate();
			 		operate = 1;
			 		calcul = 1;
			 		break;
			 	case 7:    //-
			 		operations.CALcalculate();
			 		operate = 1;
			 		calcul = 2;
			 		break;
			 	case 11:    //*
			 		operations.CALcalculate();
			 		operate = 1;
			 		calcul = 3;
			 		break;
			 	case 12:    // .
			 		if(numshow == "0" || operate == 1){
			 			numshow = "0";
			 		}
			 		var flag = false;
			 		for(var i = 0; i <= numshow.length; i++){
			 			if(numshow[i] == '.'){
			 				flag = true;
			 				break;
			 			}
			 		}
			 		if(flag == false){
			 			numshow += ".";
			 		}
			 		operate = 0;
			 		break;
			 	case 14:    // ALT
			 		break;
			 	case 15:    // /
			 		operations.CALcalculate();
			 		operate = 1;
			 		calcul = 4;
			 		break;
			 	case 16:   //back
			 		result = 0;
			 		GameState = 0;
			 		next=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			 		HELP=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			 		break;
			 	case 17:    //paint
			 		break
			 	case 18:    // ac
			 		result = 0;
			 		prenum = 0;
			 		numshow = "0";
			 		break;
			 	case 19:    // =
			 		operations.CALcalculate();
			 		operate = 1;
			 		result = 0;
			 		prenum = 0;
			 		break;
			 	default:   //number
			 		if(numshow == "0" || operate == 1){
			 			numshow = [];
			 		}
			 		numshow += calButton[nowbutton].text[0];
			 		operate = 0; //重置输入状态
     				quit = 0;    //重置防止重复按键的标志
			 		break;
			 }
			ButtonY54[nowbutton+1] -= 10;
			if(nowbutton == 16){
				GameState=0;
				canUApp.StartButtonDraw();
			}
			else{
				canUApp.CalButtonDraw();
			}
		}
	}
	}
	function playSong(){
		if(song<resultMusic.length) {
			if(resultMusic[song]!=0) {
                resource[resultMusic[song]].play();
            }
            song++;
        }
        else {
        	song=0;
        	ifpause=0;
        	ctx_u.clearRect(0,0,GameW+GameSx,GameH+GameSy);
            canUApp.MusicButtonDraw();
            window.clearInterval(musicID);
        }

	}
	function tip(){
		ctx_u.clearRect(0,0,GameW+GameSx,GameH+GameSy);
		time--;
		if(time==0) {
			num=0;
			window.clearInterval(loopID);
			result="TOTAL:"+(level-1);
			ButtonY33[1]=GameButton11.y;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			ButtonY33[2]=GameButton12.y;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			ButtonY33[4]=GameButton21.y;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			ButtonY33[5]=GameButton22.y;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			GameButton11.used=false;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			GameButton12.used=false;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			GameButton21.used=false;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			GameButton22.used=false;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

		}
		canUApp.Game24ButtonDraw();
	}
	cal.playKey = function() {
		resource[nowKey].play();
	}

	cal.initStartObject = function() {
		ButtonX33[0] = 0;
		ButtonY33[0] = 0;
        StartButton11 = new ButtonObject(1,1,1,236, 119, 166);
		StartButton11.init(3,3);
		StartButton11.text[0] = StartButton11.text[1] ="HELP";
		ButtonX33[1] = StartButton11.x;
		ButtonY33[1] = StartButton11.y;

		StartButton12 = new ButtonObject(2,1,2,226,188,28);
		StartButton12.init(3,3);
		StartButton12.text[0] = StartButton12.text[1] ="CAL";
		ButtonX33[2] = StartButton12.x;
		ButtonY33[2] = StartButton12.y;

		StartButton13 = new ButtonObject(3,1,3,255,255,255);
		StartButton13.init(3,3);
		StartButton13.text[0] = StartButton13.text[1] ="$";
		ButtonX33[3] = StartButton13.x;
		ButtonY33[3] = StartButton13.y;

		StartButton21 = new ButtonObject(4,2,1,36,161,156);
		StartButton21.init(3,3);
		StartButton21.text[0] = StartButton21.text[1] ="24";
		ButtonX33[4] = StartButton21.x;
		ButtonY33[4] = StartButton21.y;

		StartButton22 = new ButtonObject(5,2,2,69,73,76);
		StartButton22.init(3,3);
		StartButton22.text[0] = StartButton22.text[1] ="FAKE";
		ButtonX33[5] = StartButton22.x;
		ButtonY33[5] = StartButton22.y;

		StartButton23 = new ButtonObject(6,2,3,198,46,46);
		StartButton23.init(3,3);
		StartButton23.text[0] = StartButton23.text[1] ="MUSIC";
		ButtonX33[6] = StartButton23.x;
		ButtonY33[6] = StartButton23.y;

        StartButton31 = new ButtonObject(7,3,1,255,255,255);
		StartButton31.init(3,3);
		StartButton31.text[0] = StartButton31.text[1] ="$";
		ButtonX33[7] = StartButton31.x;
		ButtonY33[7] = StartButton31.y;

		StartButton32 = new ButtonObject(8,3,2,255,255,255);
		StartButton32.init(3,3);
		StartButton32.text[0] = StartButton32.text[1] ="$";
		ButtonX33[8] = StartButton32.x;
		ButtonY33[8] = StartButton32.y;

		StartButton33 = new ButtonObject(9,3,3,236,108,22);
		StartButton33.init(3,3);
		StartButton33.text[0] = StartButton33.text[1] ="NEXT";
		ButtonX33[9] = StartButton33.x;
		ButtonY33[9] = StartButton33.y;

		StartButton = [StartButton11,StartButton12,StartButton13,StartButton21,StartButton22,StartButton23,StartButton31,StartButton32,StartButton33];
	}

	cal.initMusicButton=function() {

        ButtonX44[0] = 0;
		ButtonY44[0] = 0;
        MusicButton11 = new ButtonObject(1,1,1,0,117,63);
		MusicButton11.init(5,3);
		MusicButton11.text[0] = MusicButton11.text[1] ="5";
		ButtonX44[1] = MusicButton11.x;
		ButtonY44[1] = MusicButton11.y;


        MusicButton12 = new ButtonObject(2,1,2,0,99,145);
		MusicButton12.init(5,3);
		MusicButton12.text[0] = MusicButton12.text[1] ="6";
		ButtonX44[2] = MusicButton12.x;
		ButtonY44[2] = MusicButton12.y;


        MusicButton13 = new ButtonObject(3,1,3,176,123,179);
		MusicButton13.init(5,3);
		MusicButton13.text[0] = MusicButton13.text[1] ="7";
		ButtonX44[3] = MusicButton13.x;
		ButtonY44[3] = MusicButton13.y;


        MusicButton21 = new ButtonObject(4,2,1,144,203,149);
		MusicButton21.init(5,3);
		MusicButton21.text[0] = MusicButton21.text[1] ="2";
		ButtonX44[4] = MusicButton21.x;
		ButtonY44[4] = MusicButton21.y;


        MusicButton22 = new ButtonObject(5,2,2,69,116,186);
		MusicButton22.init(5,3);
		MusicButton22.text[0] = MusicButton22.text[1] ="3";
		ButtonX44[5] = MusicButton22.x;
		ButtonY44[5] = MusicButton22.y;


        MusicButton23 = new ButtonObject(6,2,3,236,119,166);
		MusicButton23.init(5,3);
		MusicButton23.text[0] = MusicButton23.text[1] ="4";
		ButtonX44[6] = MusicButton23.x;
		ButtonY44[6] = MusicButton23.y;


        MusicButton31 = new ButtonObject(7,3,1,226,188,28);
		MusicButton31.init(5,3);
		MusicButton31.text[0] = MusicButton31.text[1] ="-";
		ButtonX44[7] = MusicButton31.x;
		ButtonY44[7] = MusicButton31.y;


        MusicButton32 = new ButtonObject(8,3,2,0,171,231);
		MusicButton32.init(5,3);
		MusicButton32.text[0] = MusicButton32.text[1] ="1";
		ButtonX44[8] = MusicButton32.x;
		ButtonY44[8] = MusicButton32.y;


        MusicButton33 = new ButtonObject(9,3,3,36,161,156);
		MusicButton33.init(5,3);
		MusicButton33.text[0] = MusicButton33.text[1] ="+";
		ButtonX44[9] = MusicButton33.x;
		ButtonY44[9] = MusicButton33.y;


        MusicButton41 = new ButtonObject(10,4,1,69,73,76);
		MusicButton41.init(5,3);
		MusicButton41.text[0] = MusicButton41.text[1] ="DELETE";
		ButtonX44[10] = MusicButton41.x;
		ButtonY44[10] = MusicButton41.y;


        MusicButton42 = new ButtonObject(11,4,2,198,46,46);
		MusicButton42.init(5,3);
		MusicButton42.text[0] = MusicButton42.text[1] ="0";
		ButtonX44[11] = MusicButton42.x;
		ButtonY44[11] = MusicButton42.y;


        MusicButton43 = new ButtonObject(12,4,3,0,99,145);
		MusicButton43.init(5,3);
		MusicButton43.text[0] = "PLAY";
		MusicButton43.text[1] ="PAUSE";
		ButtonX44[12] = MusicButton43.x;
		ButtonY44[12] = MusicButton43.y;


        MusicButton51 = new ButtonObject(13,5,1,82,181,91);
		MusicButton51.init(5,3);
		MusicButton51.text[0] = MusicButton51.text[1] ="RETURN";
		ButtonX44[13] = MusicButton51.x;
		ButtonY44[13] = MusicButton51.y;


        MusicButton53 = new ButtonObject(14,5,3,236,108,22);
		MusicButton53.init(5,3);
		MusicButton53.text[0] = MusicButton53.text[1] ="ALT";
		ButtonX44[14] = MusicButton53.x;
		ButtonY44[14] = MusicButton53.y;

		MusicButton = [MusicButton11,MusicButton12,MusicButton13,MusicButton21,MusicButton22,MusicButton23,MusicButton31,MusicButton32,MusicButton33,MusicButton41,MusicButton42,MusicButton43,MusicButton51,MusicButton53];

	}
    cal.init24Button = function() {

		GameButton11 = new ButtonObject(1,1, 1, 236, 119, 166);
		GameButton11.init(3, 3);
		GameButton11.text = ["$", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
									"1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "4", "5", "5", "7", "5","$"];
		GameButton12 = new ButtonObject(2,1, 2, 226, 188, 28);
		GameButton12.init(3, 3);
		GameButton12.text = ["$", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2",
									"2", "2", "2", "2", "3", "3", "3", "4", "4", "5", "7", "5", "5", "8", "8","$"];
		GameButton13 = new ButtonObject(3,1, 3, 0, 171, 231);
		GameButton13.init(3, 3);
		GameButton21 = new ButtonObject(4,2, 1, 36, 161, 156);
		GameButton21.init(3, 3);
		GameButton21.text = ["$", "3", "3", "4", "4", "4", "5", "6", "7", "8", "2", "2", "3", "3", "3", "4",
									"4", "4", "5", "6", "5", "7", "8", "4", "8", "9", "8", "6", "8", "10", "8","$"];
		GameButton22 = new ButtonObject(5,2, 2, 69, 73, 76);
		GameButton22.init(3, 3);
		GameButton22.text = ["START", "6", "7", "4", "5", "10", "5", "9", "10", "8", "8", "9", "7", "8", "9", "5",
									"7", "10", "7", "10", "9", "9", "10", "7", "8", "9", "8", "8", "10", "10", "10","$"];
		GameButton23 = new ButtonObject(6,2, 3, 198, 46, 46);
		GameButton23.init(3, 3);

		GameButton31 = new ButtonObject(7,3, 1, 0, 99, 145);
		GameButton31.init(3, 3);

		GameButton32 = new ButtonObject(8,3, 2, 82, 181, 91);
		GameButton32.init(3, 3);

		GameButton33 = new ButtonObject(9,3, 3, 236, 108, 22);
		GameButton33.init(3, 3);

		for(var i = 1; i <= 30; i++){
			GameButton31.text[i] = "RETURN";
			GameButton13.text[i] = "+";
			GameButton23.text[i] = "-";
			GameButton33.text[i] = "x";
			GameButton32.text[i] = "/";
		}
		GameButton31.text[0] ="$";
		GameButton13.text[0] ="$";
		GameButton23.text[0] ="$";
		GameButton33.text[0] ="$";
		GameButton32.text[0] ="$";


		GameButton = [GameButton11,GameButton12,GameButton13,GameButton21,GameButton22,
					GameButton23,GameButton31,GameButton32,GameButton33];

    }

    cal.initGameButton = function() {
        GameButton11 = new ButtonObject(1,1, 1, 236, 119, 166);
		GameButton11.init(3, 3);
		//GameButton11.text = ["$", "<-", "<-", "<-", "<-", "<-", "<-", "<-","<-"];
		GameButton11.text[0]="$";
		GameButton11.text[31]="<-"
		GameButton12 = new ButtonObject(2,1, 2, 226, 188, 28);
		GameButton12.init(3, 3);
		GameButton12.text = ["$","+2","+4","+2","$","/5","x2","+4","1","1","0",
		"+5","12","1","+6","1","+9","/2","/3","+6","-1","-1","+3","6","x3","-5","+9","10","x3","-9","+6","$"];
		GameButton13 = new ButtonObject(3,1, 3, 0, 171, 231);
		GameButton13.init(3, 3);
		//GameButton13.text = ["$", "CLR","CLR","CLR","CLR","CLR","CLR","CLR","$"];
		GameButton13.text[0]="$";
		GameButton13.text[31]="$";
		GameButton21 = new ButtonObject(4,2, 1, 36, 161, 156);
		GameButton21.init(3, 3);
		//GameButton21.text = ["$", "->","->","->","->","->","->","->","$"];
		GameButton21.text[0]="$";
		GameButton21.text[31]="$";
		GameButton22 = new ButtonObject(5,2, 2, 69, 73, 76);
		GameButton22.init(3, 3);
		GameButton22.text = ["$","+3","x4","x4","$","x3","-9","x9","0","+5","+2",
		"+5","$","$","x7","2","x2","+3","1","5","-2","2","-7","+5","-9","+8","x5","x4","1","x3","-3","$"];
		GameButton23 = new ButtonObject(6,2, 3, 198, 46, 46);
		GameButton23.init(3, 3);
		GameButton23.text = ["$","$","$","$",">>",">>",">>",">>","$","$","$",
		"2",">>","1->2","6->9","1->2","8->4","1->2","4->5","$","^2","^2","+/-","+/-","+/-","+/-","REVERSE","REVERSE","REVERSE","+/-","REVERSE","$"];
		GameButton31 = new ButtonObject(7,3, 1, 0, 99, 145);
		GameButton31.init(3, 3);
		//GameButton31.text = ["$", "RETURN","RETURN","RETURN","RETURN","RETURN","RETURN","RETURN","RETURN"];
		GameButton31.text[0]="$";
		GameButton31.text[31]="RETURN";
		GameButton32 = new ButtonObject(8,3, 2, 82, 181, 91);
		GameButton32.init(3, 3);
		GameButton32.text = ["$","$","/4","$","$","$","$","$","$","$","/5",
		"5","$","$","$","$","$","$","x2","-7","$","$","$","/8","$","/7","$","+5","/5","+4","$","$"];
		GameButton33 = new ButtonObject(9,3, 3, 236, 108, 22);
		GameButton33.init(3, 3);
		GameButton33.text = ["OK","$","$","$","$","$","$","$","$","$","$",
		"$","$","$","$","2->3","$","2->9","$","$","$","$","$","$",">>","$","$","$","$","REVERSE",">>","$"];//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        for(var i=1;i<=30;i++) {

        	GameButton11.text[i]="<-";
        	GameButton13.text[i]="CLR";
        	GameButton21.text[i]="->";
        	GameButton31.text[i]="RETURN";
        }
		GameButton = [GameButton11,GameButton12,GameButton13,GameButton21,GameButton22,
					GameButton23,GameButton31,GameButton32,GameButton33];
    }

    cal.initCalButton = function(e) {
    	calButton11Ob = new ButtonObject(1,1, 1, 160, 128, 36);
		calButton11Ob.init(5, 4);
		calButton11Ob.text[0] = "7";
		calButton12Ob = new ButtonObject(2,1, 2, 0, 117, 63);
		calButton12Ob.init(5, 4);
		calButton12Ob.text[0] = "8";
		calButton13Ob = new ButtonObject(3,1, 3, 0, 99, 145);
		calButton13Ob.init(5, 4);
		calButton13Ob.text[0] = "9";
		calButton14Ob = new ButtonObject(4,1, 4, 236, 108, 22);
		calButton14Ob.init(5, 4);
		calButton14Ob.text = ["+","tan","(","pi"];
		calButton21Ob = new ButtonObject(5,2, 1, 200, 191, 0);
		calButton21Ob.init(5, 4);
		calButton21Ob.text[0] = "4";
		calButton22Ob = new ButtonObject(6,2, 2, 82, 181, 91);
		calButton22Ob.init(5, 4);
		calButton22Ob.text[0] = "5";
		calButton23Ob = new ButtonObject(7,2, 3, 69, 116, 186);
		calButton23Ob.init(5, 4);
		calButton23Ob.text[0] = "6";
		calButton24Ob = new ButtonObject(8,2, 4, 236, 108, 22);
		calButton24Ob.init(5, 4);
		calButton24Ob.text = ["-","cos",")","e"];
		calButton31Ob = new ButtonObject(9,3, 1, 254, 214, 0);
		calButton31Ob.init(5, 4);
		calButton31Ob.text[0] = "1";
		calButton32Ob = new ButtonObject(10,3, 2, 36, 161, 156);
		calButton32Ob.init(5, 4);
		calButton32Ob.text[0] = "2";
		calButton33Ob = new ButtonObject(11,3, 3, 0, 171, 231);
		calButton33Ob.init(5, 4);
		calButton33Ob.text[0] = "3";
		calButton34Ob = new ButtonObject(12,3, 4, 236, 108, 22);
		calButton34Ob.init(5, 4);
		calButton34Ob.text = ["x","sin","x","x!"];
		calButton41Ob = new ButtonObject(13,4, 1, 234, 161, 0);
		calButton41Ob.init(5, 4);
		calButton41Ob.text[0] = ".";
		calButton42Ob = new ButtonObject(14,4, 2, 98, 193, 189);
		calButton42Ob.init(5, 4);
		calButton42Ob.text[0] = "0";
		calButton43Ob = new ButtonObject(15,4, 3, 176, 123, 179);
		calButton43Ob.init(5, 4);
		calButton43Ob.text[0] = "ALT";
		calButton44Ob = new ButtonObject(16,4, 4, 236, 108, 22);
		calButton44Ob.init(5, 4);
		calButton44Ob.text = ["/","^2","sqrt","sqrt"];
		calButton51Ob = new ButtonObject(17,5, 1, 69, 73, 76);
		calButton51Ob.init(5, 4);
		calButton51Ob.text[0] = "BACK";
		calButton52Ob = new ButtonObject(18,5, 2, 144, 203, 149);
		calButton52Ob.init(5, 4);
		calButton52Ob.text = ["PAINT","CAL"];
		calButton53Ob = new ButtonObject(19,5, 3, 236, 119, 166);
		calButton53Ob.init(5, 4);
		calButton53Ob.text[0] = "AC";
		calButton54Ob = new ButtonObject(20,5, 4, 198, 46, 46);
		calButton54Ob.init(5, 4);
		calButton54Ob.text = ["=","GO"];

		calButton = [calButton11Ob,calButton12Ob,calButton13Ob,calButton14Ob,calButton21Ob,
					calButton22Ob,calButton23Ob,calButton24Ob,calButton31Ob,calButton32Ob,
					calButton33Ob,calButton34Ob,calButton41Ob,calButton42Ob,calButton43Ob,
					calButton44Ob,calButton51Ob,calButton52Ob,calButton53Ob,calButton54Ob];

		ButtonY54[0] = 0;
		for(var i=1;i<21;i++) {
			ButtonY54[i]=calButton[i-1].y;
		}
    }
	cal.getNowButton = function(e) {

        var point=c_u.getBoundingClientRect();
        var x=e.clientX-point.left*(c_u.width/point.width);
        var y=e.clientY-point.top*(c_u.height/point.height);
        if(GameState==0||GameState==1||GameState==2) {
            for(var i=0;i<9;i++) {
        	    if(StartButton[i].x<=x&&StartButton[i].x+StartButton[i].w>=x&&StartButton[i].y-10<=y&&StartButton[i].y+StartButton[i].h>=y) {
        		    return i;
        	    }
            }
        }
        else if(GameState==3) {
        	for(var i=0;i<14;i++) {
        	if(MusicButton[i].x<=x&&MusicButton[i].x+MusicButton[i].w>=x&&MusicButton[i].y-10<=y&&MusicButton[i].y+MusicButton[i].h>=y) {
        		return i;
        	}
        }
        }
        else if(GameState==4) {
        	for(var i=0;i<20;i++) {
        	if(calButton[i].x<=x&&calButton[i].x+calButton[i].w>=x&&calButton[i].y-10<=y&&calButton[i].y+calButton[i].h>=y) {
        		return i;
        	}
        }
        }


	}

	canUApp.StartButtonDraw = function() {
    	StartButton11.ButtonDraw();
        StartButton12.ButtonDraw();
        StartButton13.ButtonDraw();
        StartButton21.ButtonDraw();
        StartButton22.ButtonDraw();
        StartButton23.ButtonDraw();
        StartButton31.ButtonDraw();
        StartButton32.ButtonDraw();
        StartButton33.ButtonDraw();
        //canUApp.LevelDraw();
        if(HELP==1) {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            canUApp.startHelpDraw();
        }
        else if(HELP==0) {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        	if(next>0) {
                canUApp.InstructionsDraw();
        	}
        	else {
                canUApp.ResultDraw();
            }
        }
        canUApp.MovesDraw();
        canUApp.GoalDraw();
    }

    canUApp.GameButtonDraw = function() {

    	GameButton11.ButtonDraw();
    	GameButton12.ButtonDraw();
    	GameButton13.ButtonDraw();
    	GameButton21.ButtonDraw();
    	GameButton22.ButtonDraw();
    	GameButton23.ButtonDraw();
    	GameButton31.ButtonDraw();
    	GameButton32.ButtonDraw();
    	GameButton33.ButtonDraw();
    	canUApp.LevelDraw();
	    canUApp.GoalDraw();
		canUApp.MovesDraw();
		if(helping==0) {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		    canUApp.ResultDraw();
		}
		else {
			canUApp.HelpDraw();
		}

    }
    canUApp.Game24ButtonDraw = function() {
    	GameButton11.ButtonDraw();
    	GameButton12.ButtonDraw();
    	GameButton13.ButtonDraw();
    	GameButton21.ButtonDraw();
    	GameButton22.ButtonDraw();
    	GameButton23.ButtonDraw();
    	GameButton31.ButtonDraw();
    	GameButton32.ButtonDraw();
    	GameButton33.ButtonDraw();
    	canUApp.LevelDraw();
    	canUApp.GoalDraw();
    	canUApp.TimeDraw();
    	canUApp.ResultDraw();
    }

    canUApp.MusicButtonDraw = function() {
    	 MusicButton11.ButtonDraw();
    	 MusicButton12.ButtonDraw();
    	 MusicButton13.ButtonDraw();
    	 MusicButton21.ButtonDraw();
    	 MusicButton22.ButtonDraw();
    	 MusicButton23.ButtonDraw();
    	 MusicButton31.ButtonDraw();
    	 MusicButton32.ButtonDraw();
    	 MusicButton33.ButtonDraw();
    	 MusicButton41.ButtonDraw();
    	 MusicButton42.ButtonDraw();
    	 MusicButton43.ButtonDraw();
    	 MusicButton51.ButtonDraw();
    	 MusicButton53.ButtonDraw();
    	 canUApp.ResultMusicDraw();
    	 canUApp.GoalDraw();
		 canUApp.MovesDraw();


    }

    canUApp.CalButtonDraw= function() {
    	calButton11Ob.ButtonDraw();
		calButton12Ob.ButtonDraw();
		calButton13Ob.ButtonDraw();
		calButton14Ob.ButtonDraw();
		calButton21Ob.ButtonDraw();
		calButton22Ob.ButtonDraw();
		calButton23Ob.ButtonDraw();
		calButton24Ob.ButtonDraw();
		calButton31Ob.ButtonDraw();
		calButton32Ob.ButtonDraw();
		calButton33Ob.ButtonDraw();
		calButton34Ob.ButtonDraw();
		calButton41Ob.ButtonDraw();
		calButton42Ob.ButtonDraw();
		calButton43Ob.ButtonDraw();
		calButton44Ob.ButtonDraw();
		calButton51Ob.ButtonDraw();
		calButton52Ob.ButtonDraw();
		calButton53Ob.ButtonDraw();
		calButton54Ob.ButtonDraw();

		canUApp.LevelDraw();
	    canUApp.ModeDraw();
		canUApp.NumDraw();
    }
    canUApp.TimeDraw =function() {
           ctx_u.textAlign = "center";
		   ctx_u.font = "15px verdana";
           ctx_u.fillStyle = "rgba(165,183,162,1)";
           ctx_u.fillText("TIME:"+time,movesSx+movesW/2,movesSy+(movesH+15)/2);
           ctx_u.textAlign="left";
    }

	canUApp.LevelDraw = function() {
           ctx_u.font = "italic 20px verdana";
           ctx_u.fillStyle = "white";
           if(GameState==4) {
			ctx_u.fillText("CALCULATE", levelSx,levelSy);
           }
           else {
               if(level<=maxlevel) {
                   ctx_u.fillText("LEVEL:" +level,levelSx,levelSy);
               }
               else {
                   ctx_u.fillText("CHEERS!",levelSx,levelSy);
               }
           }
	}

	canUApp.NumDraw = function() {
		ctx_u.font = "70px verdana";
     	ctx_u.textAlign = "right";
        ctx_u.fillStyle = "rgba(121, 132, 119, 1)";
        ctx_u.fillText(numshow, innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-5);
        ctx_u.textAlign ="left";
 	}

 	canUApp.ModeDraw = function() {
		ctx_u.textAlign = "center";
		ctx_u.font = "15px verdana";
		ctx_u.fillStyle = "rgba(165,183,162,1)";
		ctx_u.fillText("MODE: 1", movesSx+movesW/2,movesSy+(movesH+15)/2);
		if(GameState == 4){
			ctx_u.fillText("CAL", goalSx+goalW/2,goalSy+(goalH+15)/2);
		}
		ctx_u.textAlign="left";
	}

    canUApp.ResultMusicDraw = function() {
    	ctx_u.font = "70px verdana";
    	ctx_u.textAlign = "right";
        ctx_u.fillStyle = "rgba(121,132,119,1)";
    	if(musicState==0) {
    		if(nowKey==0) {
    			ctx_u.font = "70px verdana";
    			ctx_u.fillText(nowKey,innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-5);
    		}
    		else if((nowKey>7&&nowKey<15)) {
    			ctx_u.font = "70px verdana";
    			ctx_u.fillText((nowKey-7),innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-5);
    		}
    		else if(nowKey>14&&nowKey<22) {
    			ctx_u.font = "80px verdana";
    			ctx_u.fillText((nowKey-14),innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-5);
    		}
    		else {
    			ctx_u.font = "60px verdana";
                ctx_u.fillText(nowKey,innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-5);
            }
    	}
    	else {
    		for(var i=0;i<=6&&i<=resultMusic.length-1;i++) {
    			if(resultMusic[resultMusic.length-i-1]==0) {
    				ctx_u.font = "70px verdana";
                    ctx_u.fillText(resultMusic[resultMusic.length-i-1],innerScreenSx+innerScreenW-i*40,innerScreenSy+innerScreenH-5);
    			}
    			else if((resultMusic[resultMusic.length-i-1]>7&&resultMusic[resultMusic.length-i-1]<15)||resultMusic[resultMusic.length-i-1]==0) {
    				 ctx_u.font = "70px verdana";
                     ctx_u.fillText(resultMusic[resultMusic.length-i-1]-7,innerScreenSx+innerScreenW-i*40,innerScreenSy+innerScreenH-5);
    			}
    			else if(resultMusic[resultMusic.length-i-1]>14&&resultMusic[resultMusic.length-i-1]<22) {
    				ctx_u.font = "80px verdana";
    				ctx_u.fillText(resultMusic[resultMusic.length-i-1]-14,innerScreenSx+innerScreenW-i*40,innerScreenSy+innerScreenH-5);
    			}
    			else {
    				ctx_u.font = "60px verdana";
    			    ctx_u.fillText(resultMusic[resultMusic.length-i-1],innerScreenSx+innerScreenW-i*40,innerScreenSy+innerScreenH-5);
    		    }
    		}
    	}
    	ctx_u.textAlign ="left";
    }
	canUApp.ResultDraw = function() {
		   if(result=="24Points In 60s") {
		       ctx_u.font = "38px verdana";
		   }
		   else if(result=="TOTAL:"+(level-1)) {
		   	   ctx_u.font = "70px verdana";
		   	   level=1;
		   }
		   else {
		   	   ctx_u.font = "75px verdana";
		   }

		   ctx_u.textAlign = "right";
           ctx_u.fillStyle = "rgba(121,132,119,1)";

           ctx_u.fillText(result,innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-5);

           ctx_u.textAlign ="left";
	}

	canUApp.InstructionsDraw = function() {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		ctx_u.font="20px verdana";
		ctx_u.textAlign = "right";
        ctx_u.fillStyle = "rgba(121,132,119,1)";
		if(next==1) {
            ctx_u.fillText("FAKE:use limited moves ",innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-30);
            ctx_u.fillText("to reach goal ",innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-5);
		}
		else if(next==2) {

            ctx_u.fillText("24:24 Points in 60s ",innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-25);
		}
        else if(next==3) {
            ctx_u.fillText("MUSIC:use a calculator  ",innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-30);
            ctx_u.fillText("like a piano ",innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-5);
        }
        else if(next==4) {
            ctx_u.fillText("CAL:I am a real calculator ",innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-25);
            //ctx_u.fillText("to reach goal ",innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-5);
        }
	}
	canUApp.startHelpDraw = function() {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		ctx_u.font="25px verdana";
		ctx_u.textAlign = "right";
        ctx_u.fillStyle = "rgba(121,132,119,1)";
        ctx_u.fillText("Click NEXT to see ",innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-30);
        ctx_u.fillText("the instructions ",innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-5);
        ctx_u.textAlign ="left";
	}
	canUApp.HelpDraw = function() {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		ctx_u.font="20px verdana";
		ctx_u.textAlign = "right";
        ctx_u.fillStyle = "rgba(121,132,119,1)";
        if(level==4) {
            ctx_u.fillText(">>:It deletes a number ",innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-25);
            ctx_u.fillText("from the result ",innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-5);
        }
        else if(level==8) {
            ctx_u.fillText("1,0:It inserts a number ",innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-25);
            ctx_u.fillText("into the result ",innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-5);
        }
        else if(level==13) {
            ctx_u.fillText("2->1:Numbers in the result ",innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-25);
            ctx_u.fillText("convert to new numbers ",innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-5);
        }
        else if(level==22) {
            ctx_u.fillText("+/-:Change the sign of ",innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-25);
            ctx_u.fillText("a number",innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-5);
        }
        else if(level==26) {
            ctx_u.fillText("Reverse:Now you can ",innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-25);
            ctx_u.fillText("reverse the result ",innerScreenSx+innerScreenW,innerScreenSy+innerScreenH-5);
        }
        ctx_u.textAlign ="left";
	}

	canUApp.MovesDraw = function() {
		   ctx_u.textAlign = "center";
		   ctx_u.font = "15px verdana";
           ctx_u.fillStyle = "rgba(165,183,162,1)";
           if(GameState==0) {
               ctx_u.fillText("MOVES:"+moves[0],movesSx+movesW/2,movesSy+(movesH+15)/2);
           }
           else if(GameState==1) {
           	   ctx_u.fillText("MOVES:"+moves[level],movesSx+movesW/2,movesSy+(movesH+15)/2);
           }
           else if(GameState==3) {
           	   ctx_u.fillText("MODE:"+(musicState+1),movesSx+movesW/2,movesSy+(movesH+15)/2);
           }
           ctx_u.textAlign="left";
	}

	canUApp.GoalDraw = function() {
		   ctx_u.textAlign = "center";
		   ctx_u.font = "15px verdana";
           ctx_u.fillStyle = "rgba(165,183,162,1)";
           if(GameState==0) {
               ctx_u.fillText("GOAL:"+goal[0],goalSx+goalW/2,goalSy+(goalH+15)/2);
           }
           else if(GameState==1) {
           	   ctx_u.fillText("GOAL:"+goal[level],goalSx+goalW/2,goalSy+(goalH+15)/2);
           }
           else if(GameState==2) {
           	   ctx_u.fillText("GOAL:"+"24",goalSx+goalW/2,goalSy+(goalH+15)/2);
           }
           else if(GameState==3) {
           	   if(musicState==0) {
                   ctx_u.fillText("KEYS:1",goalSx+goalW/2,goalSy+(goalH+15)/2);
           	   }
           	   else {
                   ctx_u.fillText("KEYS:"+resultMusic.length,goalSx+goalW/2,goalSy+(goalH+15)/2);
           	   }
           }
           ctx_u.textAlign="left";
	}

    var ButtonObject = function(position,prow, pcolumn,br,bg,bb) {
        this.x=0;
        this.y=0;
        this.state=[];
        this.row=prow;
        this.column=pcolumn;
        this.w=0;
        this.h=0;
        this.text=[];
        this.pos=position;
        this.r = br;
        this.g = bg;
        this.b = bb;
        this.used=false;
    }

    ButtonObject.prototype.init = function(rows,columns) {
    	var columnArea = (GameW + GameSx - ButtonSx) / columns;
		var rowArea = (GameH + GameSy - ButtonSy) / rows;
		this.x = ButtonSx + (this.column - 1) * columnArea;
		this.y = ButtonSy + (this.row - 1) * rowArea;
		this.w = columnArea * 0.8;
		this.h = rowArea * 0.7;

    }

    ButtonObject.prototype.ButtonDraw = function() {
    	if(GameState==0) {
    		var Text=this.text[0];
    	}
    	else if(GameState==1) {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    		if(helping==1) {
    			var Text=this.text[0];
    		}
    		else {
    		    var Text=this.text[level];
	        }
    	}
    	else if(GameState==2) {
    		var Text=this.text[num];
    	}
    	else if(GameState==3) {
    		var Text = this.text[ifpause];
    	}
    	else if(GameState==4) {
    		var Text = this.text[0];
    	}
    	if(Text != "$") {

    	   cal.roundedRec(this.x,this.y,this.w,this.h,10,ctx_u,this.r+15,this.g-35,this.b-35);
    	   if(GameState==0||GameState==1||GameState==2) {
    	       cal.roundedRec(this.x,ButtonY33[this.pos]-10,this.w,this.h,10,ctx_u,this.r,this.g,this.b);
    	   }
    	   else if(GameState==3) {
    	   	   cal.roundedRec(this.x,ButtonY44[this.pos]-10,this.w,this.h,10,ctx_u,this.r,this.g,this.b);
    	   }
    	   else if(GameState==4) {
    	   	   cal.roundedRec(this.x,ButtonY54[this.pos]-10,this.w,this.h,10,ctx_u,this.r,this.g,this.b);
    	   }
    	   ctx_u.font='20px verdana';
    	   ctx_u.fillStyle="rgba(255,235,205,1)";
    	   ctx_u.textAlign = "center";

    	   if(GameState==0||GameState==1||GameState==2) {
    	   	   ctx_u.fillText(Text,this.x+this.w/2,ButtonY33[this.pos]+(this.h+20)/2-10);

    	   }
    	   else if(GameState==3) {
    	   	   ctx_u.fillText(Text,this.x+this.w/2,ButtonY44[this.pos]+(this.h+20)/2-10);

    	   }
    	   else if(GameState==4) {
    	   	   ctx_u.fillText(Text,this.x+this.w/2,ButtonY54[this.pos]+(this.h+20)/2-10);
    	   }
    	   ctx_u.textAlign = "left";
    	}
    	else {
    	   cal.roundedRec(this.x,this.y,this.w,this.h,10,ctx_u,203,196,185);
    	   cal.roundedRec(this.x,this.y+3,this.w,this.h-6,10,ctx_u,180,174,164);
    	}
    }
    operations.CALcalculate = function() {
    	numshow = Number(numshow);
    	if(quit != 1 && prenum != 0){
			switch(calcul){ //判断要输入状态
				case 1:
					result = prenum + numshow;
					break;
				case 2:
					result = prenum - numshow;
					break;
				case 3:
					result = prenum * numshow;
					break;
				case 4:
					if(numshow != 0){
						result = prenum / numshow;
					}
					else{
						numshow = prenum;
					}
					break;
			}
		}
		else{
			result = numshow;
		}
		quit = 1;   //避免重复按键
		numshow = String(result);
		prenum = result;    //存储当前值
    }
    operations.Fakecalculate = function(nowbutton) {
    	//var buttonText = GameButton[nowbutton].text[level];
    	var buttonText=GameButton[nowbutton].text[level];
		var len = buttonText.length;
		if(len == 1){
			result = 10 * result + parseInt(buttonText[0]);
		}
		else if(len == 2){
			if(buttonText[0] == ">"){
				result = parseInt(result / 10);
			}
			else if(buttonText[0] == "^"){
				result = result * result;
			}
			else{
				var temp = parseInt(buttonText[1]);
				switch(buttonText[0]){
					case "+":
						result += temp;
						break;
					case "-":
						result -= temp;
						break;
					case "x":
						result *= temp;
						break;
					case "/":
						result /= temp;
						break;
				}
			}
		}
		else if(len == 3){
			result *= -1;
		}
		else if(len == 4){
			var a = parseInt(buttonText[0]);
			var b = parseInt(buttonText[3]);
			result = operations.Replace(result, a, b);
		}
		else{
			result = operations.Reverse(result);
		}
		moves[level]--;
		if(moves[level] == 0) {
			if(result == goal[level]){
				result = "WIN";
				GameButton13.text[level] = "OK";
			}
			else{
				result = "WRONG";
			}
		}
    }

    operations.calculate12 = function() {
    	if(result!="WIN"&&result !="WRONG"&&result!="CLEAR!") {
        if(level==1) {
            result += 4;
        }
        else if(level==3) {
            result = result*10+1;
        }
        else if(level==4) {
            result = result*10+1;
        }
        else if(level==5) {
            result -= 1;
        }
        else if(level==6) {
            result += 3;
        }
        else if(level==7) {
            result+=9;
        }

        if(result==goal[level]) {
        	moves[level]--;
        	if(moves[level]==0) {
        		result = "WIN";
        		GameButton13.text[level]="OK";
        	}

        }
        else {
        	moves[level]--;
        	if(moves[level]==0) {
        		result = "WRONG";
        	}
        }
    }
    }

    operations.calculate22 = function() {
        if(result!="WIN"&&result !="WRONG"&&result!="CLEAR!") {
        if(level==1) {
            result =result * 4;
        }
        else if(level==3) {
            result = result*10;
        }
        else if(level==5) {
            result -= 2;
        }
        else if(level==6) {
            result -= 7;
        }
        else if(level==7) {
            result=result*5;
        }

        if(result==goal[level]) {
        	moves[level]--;
        	if(moves[level]==0) {
        		result = "WIN";
        		GameButton13.text[level]="OK";
        	}

        }
        else {
        	moves[level]--;
        	if(moves[level]==0) {
        		result = "WRONG";
        	}
        }
    }
    }

    operations.calculate23 = function() {
    	if(result!="WIN"&&result !="WRONG"&&result!="CLEAR!") {

        if(level==2) {
            result = parseInt(result/10);
        }
        else if(level==4) {
            result = operations.Replace(result,1,2);
        }
        else if(level==5) {
            result = result*result ;
        }
        else if(level==6) {
            result = 0-result;
        }
        else if(level==7) {
            result = operations.Reverse(result);
        }

        if(result==goal[level]) {
        	moves[level]--;
        	if(moves[level]==0) {
        		result = "WIN";
        		GameButton13.text[level]="OK";
        	}

        }
        else {
        	moves[level]--;
        	if(moves[level]==0) {
        		result = "WRONG";
        	}
        }
    }

    }

    operations.calculate32 = function() {
    	if(result!="WIN"&&result !="WRONG"&&result!="CLEAR!") {
        if(level==1) {
            result = result/4;
        }


        if(result==goal[level]) {
        	moves[level]--;
        	if(moves[level]==0) {
        		result = "WIN";
        		GameButton13.text[level]="OK";
        	}

        }
        else {
        	moves[level]--;
        	if(moves[level]==0) {
        		result = "WRONG";
        	}
        }
    }

    }

    operations.calculate33 = function() {

    }

    operations.Game24calculate=function(nowButton) {
        var nownum=parseInt(nowButton.text[num]);
        if(nowaction==0) {
        	result = result+nownum;
        }
        else if(nowaction==1) {
        	result = result-nownum;
        }
        else if(nowaction==2) {
        	result = result*nownum;
        }
        else if(nowaction==3) {
        	result = parseInt(result/nownum);
        }
        else if(nowaction==4) {
        	result = nownum;
        }
        if(result==24) {
            //if(GameButton11.y<ButtonY33[1]&&GameButton12.y<ButtonY33[2]&&GameButton21.y<ButtonY33[4]&&GameButton22.y<ButtonY33[5]) {
            	if(GameButton11.used==true&&GameButton12.used==true&&GameButton21.used==true&&GameButton22.used==true) {
            	ButtonY33[1] -= 10;
            	ButtonY33[2] -= 10;
            	ButtonY33[4] -= 10;
            	ButtonY33[5] -= 10;
            	result=0;
            	//result = "WIN";
            	/*
            	var Rand = Math.random();
                num = 1 + Math.round(Rand * 29);
                */
                num = operations.getRan();
                GameButton11.used=GameButton12.used=GameButton21.used=GameButton22.used=false;
                level++;
                nowaction=4;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            }
        }
        else {
        	//if(GameButton11.y<ButtonY33[1]&&GameButton12.y<ButtonY33[2]&&GameButton21.y<ButtonY33[4]&&GameButton22.y<ButtonY33[5]) {
        		if(GameButton11.used==true&&GameButton12.used==true&&GameButton21.used==true&&GameButton22.used==true) {
        		ButtonY33[1] -= 10;
            	ButtonY33[2] -= 10;
            	ButtonY33[4] -= 10;
            	ButtonY33[5] -= 10;
            	GameButton11.used=false;
            	GameButton12.used=false;
            	GameButton21.used=false;
            	GameButton22.used=false;
            	result=0;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            	nowaction=4;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            	//result = "WRONG";
            }

        }
    }

    operations.getRan = function() {
    	var temp=num;
    	do{
            var Rand = Math.random();
            num = 1 + Math.round(Rand * 29);
    	}while(num==temp);
    	return num;
    }
    operations.Replace = function(result,num1,num2) {
    	 var number=[];
    	 var t_result=result;
    	 var i=0;
    	 while(t_result!=0){
             number[i]=t_result%10;
             t_result=parseInt(t_result/10);
             i++;
    	 }
    	 for(var m=0;m<i;m++) {
    	 	if(number[m]==num1) {
    	 		number[m]=num2;
    	 	}
    	 }
    	 for(var m=0;m<i;m++) {
    	 	t_result=t_result*10+number[m];
    	 }
    	 return t_result;
    }
    operations.Reverse = function(result) {
    	var number=[];
    	 var t_result=result;
    	 var i=0;
    	 while(t_result!=0){
             number[i]=t_result%10;
             t_result=parseInt(t_result/10);
             i++;
    	 }
    	 for(var m=0;m<i;m++) {
    	 	t_result=t_result*10+number[m];
    	 }
    	 return t_result;
    }

	canBApp.backgroundDraw = function() {
		   cal.roundedRec(GameSx,GameSy,GameW,GameH,30,ctx_b,255,235,205);
           cal.roundedRec(ScreenSx,ScreenSy,ScreenW,ScreenH,10,ctx_b,55,60,64);
           cal.roundedRec(shadowScreenSx,shadowScreenSy,shadowScreenW,shadowScreenH,10,ctx_b,106,116,107);
           cal.roundedRec(innerScreenSx,innerScreenSy,innerScreenW,innerScreenH,10,ctx_b,165,183,162);
           cal.roundedRec(movesSx,movesSy,movesW,movesH,5,ctx_b,78,81,78);
           cal.roundedRec(goalSx,goalSy,goalW,goalH,5,ctx_b,78,81,78);
           ctx_b.font = "23px verdana";
		   ctx_b.fillStyle = "rgba(78, 81, 78)";
		   ctx_b.fillText("(●ﾟωﾟ●)",logoX, logoY);
           cal.roundedRec(batterySx,batterySy,batteryW,batteryH,5,ctx_b,0,0,0);
           cal.roundedRec(shadowbatterySx,shadowbatterySy,shadowbatteryW,shadowbatteryH,4,ctx_b,73,50,48);
           cal.roundedRec(innerbatterySx,innerbatterySy,innerbatteryW,innerbatteryH,4,ctx_b,101,57,51);



           ctx_b.beginPath();
           ctx_b.moveTo(innerbatterySx+innerbatteryW/4,shadowbatterySy);
           ctx_b.lineTo(innerbatterySx+innerbatteryW/4,shadowbatterySy+shadowbatteryH);
           //ctx_b.save();
           ctx_b.lineWidth = 2;
           ctx_b.strokeStyle = "rgba(255,255,255,0.3)";
           ctx_b.stroke();

           ctx_b.beginPath();
           ctx_b.moveTo(innerbatterySx+innerbatteryW*2/4,shadowbatterySy);
           ctx_b.lineTo(innerbatterySx+innerbatteryW*2/4,shadowbatterySy+shadowbatteryH);
           //ctx_b.save();
           ctx_b.lineWidth = 2;
           ctx_b.strokeStyle = "rgba(255,255,255,0.3)";
           ctx_b.stroke();

           ctx_b.beginPath();
           ctx_b.moveTo(innerbatterySx+innerbatteryW*3/4,shadowbatterySy);
           ctx_b.lineTo(innerbatterySx+innerbatteryW*3/4,shadowbatterySy+shadowbatteryH);
           //ctx_b.save();
           ctx_b.lineWidth = 2;
           ctx_b.strokeStyle = "rgba(255,255,255,0.3)";
           ctx_b.stroke();

	}
})();
