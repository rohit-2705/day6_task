class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
        
    }
    circle(){
        console.log("this is circle")
    }
    circle(radius){
        console.log("method overriding")
    }
    circle(radius,color){
        console.log(this.radius,this.color+'final method overriding which accepts by javascripot')
    }
    getradius(){
        console.log(" radius of the circle is "+this.radius)
    }
    setradius(newradius){
       this.radius=newradius;

    }
    getcolor(){
        console.log("color of the circle is " +this.color)
    }

    setcolor(newcolor){
        this.color=newcolor;
    }
      tostring(){
        console.log("[radius = "+ this.radius + ",color = " + this.color + "]")
    }

    getarea(){
        console.log("area of circle is "+(Math.PI*Math.pow(this.radius,2)))
    }
    getcircumference(){
        console.log(" circumference of a circle is "+(2*Math.PI*this.radius))
    }
   
} 
let circle1=new circle(1,"green");

circle1.getradius();
circle1.setradius(4)
circle1.getradius();
circle1.getcolor();
circle1.setcolor("orange");
circle1.getcolor();
circle1.getarea();
circle1.getcircumference();
circle1.tostring();