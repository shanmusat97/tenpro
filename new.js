function volume() 
{
    let r=prompt("enter the radius:");
    const p=3.14;
    let v=((4/3)*p*(r**3));
    alert("the volume of sphere is:" +v);
}
function sq()
{
let a=prompt("enter side value:");
let s=a*a;
alert("the area of square is "+s);
}
function rect()
{
    let l=prompt("enter the length:");
    let b=prompt("enter the breadth:");
    let a;
    a=(l)*(b);
    alert("the area of rectangle is " +a);
}
function si()
{
    let p=prompt("enter the principal value:");
    let r=prompt("enter the rate of interest:");
    let n=prompt("enter the no.of years:");
    let si=(p*n*r)/100;
    alert("the simple interest is "+si);
}
function ci()
{
    let p=prompt("enter the principal value:");
    let r=prompt("enter the rate of interest:");
    let n=prompt("enter the no.of years:");
    let comp ; let amount;
    amount=p*((1+r/100)**t);
    comp=amount-p;
    alert("the compound interest is "+comp);
}
function leap()
{
    let y=prompt("enter the year:");
    if ((y%4==0)&&(y%100!=0)||(y%400==0))
    {
        alert(y+" is a leap year");
    }
    else
    {
        alert(y+" is not a leap year");   
    }
}
function prime()
{
    let num=prompt("enter the number:");
    let c=1;
    let i;
    num=parseInt(num)
    for(i=2;i<num-1;i++)
    {
        if (num%i==0)
        {
            c=0;
            break;
        }
    }if(c==1)
    {

        alert(num+"is a prime number");
    }
    else{
        alert(num+"is not a prime number");
    }
}
function eb()
{

    let x = prompt("enter the units:")
             let a = parseInt(x);
             let b;

             if (a>=0 && a<=100){
                b = "Free";
			 } 
             else if (a>100 && a<=200){
                b = (a - 100) * 1.5 + 20;
			 } 
             else if (a>200 && a<=500){
                b = (a - 200) * 3 + 200 + 30;
			 } 
             else{
                b = (a - 500) * 6.6 + (100 * 3.5) + 50;
             }

        alert("electricity bill :"+b);
         }
function ticket()
{
    let name=prompt("enter the name:");
    let age=prompt("enter the age:");
    let city=prompt("enter the city:");
    let dcity=prompt("enter the destination city:");
    let tf;
    let bfare=50;
    let dis=50;
    if(age<=5){alert("free for children under age 5")}
    else if((age<=12)&&(age>5))
    {
        tf=bfare*2;
        alert("the person is child,\n the ticket fare is rs:"+tf);
    }
    else if((age>12)&&(age<=59))
    {
        tf=bfare*4;
        alert("the person is Adult,\n the ticket fare is rs:"+tf);
    }
    else if(age>=60)
    {
        tf=(bfare*4)-discount;
        alert("the person is Senior citizen,\n the ticket fare is rs:"+tf);
    }

}
function circle()
{
    let r=prompt("enter the radius:");
    const p=3.14;
    let c=(2*p*r);
    let a=p*(r**2);
    alert("the circumference of circle is "+c );
    alert("the area of circle is"+a);
}
