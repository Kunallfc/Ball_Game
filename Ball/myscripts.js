
var a = 100 //x coordinate of ball
var b = 210 //y coordinate of ball
var ix = 1 //increament ball x
var iy = 1 //increament ball y
var bx = 200 // board x coordinate

var bbx = 0
t=0;
var a1;
var mark=0;


var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var s=0;
var d=[0,0,0,0,0,0,0,0,0,0];

function ballmove()
  {
  	checkwall();
  	
    context.clearRect(0,0,500,480);
    bricks();
    context.beginPath();
    context.fillStyle="#0000ff";
    context.arc(a,b,10,0,Math.PI*2); 
    context.closePath();
    context.fill();
    a += ix;
    b += iy;
    
  }


window.setInterval(ballmove, 10);
     
window.onload = board;

//////////////////////////////

function bricks()
{
  
 for(i=0;i<10;i++)
  {
  	 if(d[i]==0)
     {
     context.rect(50*i,0,50,20);  
     context.fillStyle='#FF00aa';
     context.fillRect(50*i,0,50,20);
     context.lineWidth = 2;
     context.strokeStyle = 'black';
     context.stroke();
     }
  }

}





//////////////////////
function checkwall()
{
   if (b>469 || b<31)
   {  
   	  if(b>469 )
   	  {
   	  	
   	  	
            if (a-bx >=0 && a-bx<=50 && t==0)
            {
            	
            	iy = -iy;
                t=1;
            }

                        
   	  }
   	  
      else        
      {

        if(b<31)		
      	{
      		
      		a1=a/50;
      		a1=Math.ceil(a1)-1;
      		console.log(a1);
      		if(d[a1]==0)
            {
             d[a1]=1;
             t=0;
      	     iy = -iy;
      	     mark+=1;
             document.getElementById('marks').innerHTML='SCORE=' + mark;
            }
           
             else
             {
               if(b<11)
               {
                  t=0;
      	          iy = -iy;


               }

             }      	

      	}
      	
      


      }	

   }


   if(b>485)
   {
   	  if(s==0)
      {
      alert('well played your score is'+mark);
      document.write("gameover");
      s=1;
      } 

   }



   if ( a<11 || a>489)
   {
       
       ix = -ix;

   }

}

//////////////////////

function board()
{
  
  if (bx<0)
  {
     bx=480;

  }

  if (bx>480)

  {
     bx=0; 
    
  }	

  context.rect(bx,480,50,20);
  context.stroke();
  context.fillStyle='#FF0033';
  context.fillRect(bx,480,50,20)
  bx += bbx ; 
  


}

/////////////////////
document.onkeydown = checkKey;

function checkKey(e)
{
    e = e || window.event;
  
    if (e.keyCode == '37') 
    {
       bbx = -4 ;
       context.clearRect(0,480,500,20);
       board();    

    }


    if (e.keyCode == '39') {
       bbx = 4 ;
       context.clearRect(0,480,500,20);
       board();
    }

}