	step=1;
	status=1;
	change=2;
	timeout=10;
	function start()
	{
	
		if(status==1)	
			up();
		else if(status==2)
			right();
		else if(status==3)
			down();
		else
			left();
	
	}
	
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
			x=document.getElementById("circle");
			x.style.top = parseInt(x.style.top)-change+'px';
			if(parseInt(x.style.top)>100-(step-1)*50)
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
		
		x=document.getElementById("circle");
		x.style.left = parseInt(x.style.left)+change+'px';
					
		if(parseInt(x.style.left)<(step-1)*50)
			n=setTimeout(right,timeout);
		else
			setTimeout(up,timeout);
	}
	
	function down()
	{
		status=3;
			x=document.getElementById("circle");
		x.style.top = parseInt(x.style.top)+change+'px';
		if(parseInt(x.style.top)<0+(step-4)*50)//500-(step-3)*100)
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
		x=document.getElementById("circle");
		x.style.left = parseInt(x.style.left)-change+'px';
		if(parseInt(x.style.left)>0)
			p=setTimeout(left,timeout);
		else
		{
			step=1;
			up();
		}
	}
	function speedup()
	{
		timeout-=2;
	}
	function speeddown()
	{
		timeout+=2;
	}
	function stop()
	{
		clearTimeout(m);clearTimeout(n);clearTimeout(o);clearTimeout(p);clearTimeout(q);
	}
	function reset()
	{
		x=document.getElementById("circle");
		x.style.left='0px';
		x.style.top='150px';
		status=1;
		step=1;
		clearTimeout(m);clearTimeout(n);clearTimeout(o);clearTimeout(p);	
	}
	
	function colourchange(col)
	{
		
		x=document.getElementById("circle");
		if(col==1)
			x.style.background="#FF2A02";
		if(col==2)
			x.style.background="#a9db7a";
		if(col==3)
			x.style.background="#D4DD00";
		if(col==4)
			x.style.background="#13A4C9";
		
	}
	
