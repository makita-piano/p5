y=0
setup=_=>{
  createCanvas(w=320,w)
  h=w/2
  q=w/4
}
draw=_=>{
   if(y<w){
     for(x=w;x--;){
       stroke(l=f((x-h)/q,(y-h)/q))
       line(x,y,x,y+l+50)
       if(check(x,y)){
         if(l>0){
           stroke(255-l)
         }else{
           stroke(0)
         }
       }else{
         stroke(255)
       }
       line(x,y,x,y+1)
     }
   }
   y++
   
 }
f=(x,y,n=4)=>
  n?
    f(cos(3*x)-sin(4*y),x*x-y*y-2*x*y,n-1)
    :(x-y)**2*24

/*
y=0
setup=_=>
  createCanvas(w=320,h=180)
draw=_=>{
  if(y<h){
    for(x=w;x--;point(x,y)){
      stroke(l=f(x/h-.9,y/h-.5))
      if(check(x,y)){
        if(l>0){
          stroke(l)
        }else{
          stroke(0)
        }
      }else{
        stroke(255-l)
      }
    }
    y++
  }
}
f=(x,y,c=0)=>x*x+y*y>4?c:f(x*y*2-2/3,sin(y*y-x*x),c+2)

*/


check=(x,y)=>{
  judge = false;
  dot = 20;
  y-=100
  xx=int(x/dot)
  if(x%dot==0 || x%dot==19 || y%dot==0 || y%dot==19){
    judge = false;
  }
  else if(y > 0 && int(y/dot)==0){
    if(xx==0 || xx==1 || xx==2 || xx==5){
      judge = true;
    }
  }
  else if(int(y/dot)==1){
    if(xx==0 || xx==3 || xx==4 || xx==5 || xx==6 || xx==8 || xx==9 || xx==10 || xx==13 || xx==14){
      judge = true;
    }
  }
  else if(int(y/dot)==2){
    if(xx==0 || xx==3 || xx==5 || xx==8 || xx==11 || xx==15){
      judge = true;
    }
  }
  else if(int(y/dot)==3){
    if(xx==0 || xx==1 || xx==2 || xx==5 || xx==8 || xx==11 || xx==13 || xx==14 || xx==15){
      judge = true;
    }
  }
  else if(int(y/dot)==4){
    if(xx==0 || xx==5 || xx==8 || xx==11 || xx==12 || xx==15){
      judge = true;
    }
  }
  else if(int(y/dot)==5){
    if(xx==0 || xx==5 || xx==6 || xx==8 || xx==11 || xx==13 || xx==14 || xx==15){
      judge = true;
    }
  }
  return judge;
}

