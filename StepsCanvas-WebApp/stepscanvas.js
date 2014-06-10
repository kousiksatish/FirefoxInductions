function draw(o) 
    {
		  
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		
		var y=200; 
		var x=50;     
		var timeout=40;
		var step=1;
		if(o==0)
		{
			ctx.beginPath();
			ctx.arc(x,y,15,0,Math.PI*2,true); // Outer circle
			ctx.fillStyle = "rgb(200,0,0)";
			ctx.fill();
			ctx.stroke();
		}
		if(o==1)
			up();
		if(o==2)
			stop();
		if(o==3)
			speedup();
		if(o==4)
			speeddown();
		
		
		
		function up()
		{
			status=1;
			if(step>3)//&&step<5)
			{
				step++;
				setTimeout(down,timeout);
				
			}
			else
			{
				ctx.clearRect(0,0,500,500);
				ctx.beginPath();
				ctx.arc(x,y,15,0,Math.PI*2,true); // Outer circle
				ctx.fillStyle = "rgb(200,0,0)";
				ctx.fill();
				ctx.stroke();
				y-=10;
				if(y>200-step*50)//(step-1)*50)
					m=setTimeout(up,timeout);
				else
				{
					step++;
					setTimeout(right,timeout);
				}
			}	
		}
		
		function right()
		{
			
			status=2;
			
			ctx.clearRect(0,0,500,500);
			ctx.beginPath();
			ctx.arc(x,y,15,0,Math.PI*2,true); // Outer circle
			ctx.fillStyle = "rgb(200,0,0)";
			ctx.fill();
			ctx.stroke();
			x+=10;			
			if(x<50+(step-1)*50)
				n=setTimeout(right,timeout);
			else
				setTimeout(up,timeout);
		}
		function down()
		{
			status=3;
			
			ctx.clearRect(0,0,500,500);
			ctx.beginPath();
			ctx.arc(x,y,15,0,Math.PI*2,true); // Outer circle
			ctx.fillStyle = "rgb(200,0,0)";
			ctx.fill();
			ctx.stroke();
			y+=10;
			if(y<50+(step-4)*50)
				o=setTimeout(down,timeout);
			else
			{	
				if(step<7)
					setTimeout(right,timeout);
				else
				{
					left();
				}
			}
		}
		function left()
		{
			status=4;
			ctx.clearRect(0,0,500,500);
			ctx.beginPath();
			ctx.arc(x,y,15,0,Math.PI*2,true); // Outer circle
			ctx.fillStyle = "rgb(200,0,0)";
			ctx.fill();
			ctx.stroke();
			x-=10;
			if(x>50)
				p=setTimeout(left,timeout);
			else
			{
				step=1;
				up();
			}
		}
		function stop()
		{
			clearTimeout(m);clearTimeout(n);clearTimeout(o);clearTimeout(p);
		}

	}
	
