const select=document.getElementById("choose");
const form=document.getElementById("form1");
select.addEventListener("click",(e)=>
{
    e.preventDefault();
    const description=document.getElementById("txtdesc");
    const Price=document.getElementById("numprice");
    const Quantity=document.getElementById("numq");
    const fetchvalue=select.value;
    const button1=document.getElementById("one");
    const button2=document.getElementById("two");
    const button3=document.getElementById("three");
    //Cold-Drink
    if(fetchvalue==="Pepsi")
    {
        description.value="Cold-Drink";
        Price.value="20";
        Quantity.value=50;
        postdata(fetchvalue,description.value,Price.value,Quantity.value);

    }
     else if(fetchvalue==="Cococola")
     {
        description.value="Cold-Drink";
        Price.value=25;
        Quantity.value=40;
        postdata(fetchvalue,description.value,Price.value,Quantity.value);

     }
     else if(fetchvalue==="Mounatin Dew")
     {
        description.value="Cold-Drink";
        Price.value=25;
        Quantity.value=40;
        postdata(fetchvalue,description.value,Price.value,Quantity.value);
     }
     else if(fetchvalue==="Sprite")
    {
        description.value="Cold-Drink";
        Price.value=30;
           Quantity.value=50;
           postdata(fetchvalue,description.value,Price.value,Quantity.value);
    }
    
    //Chocolate
    else if(fetchvalue==="5star")
    {
        description.value="Chocolate";
        Price.value=5;
        Quantity.value=100;
        postdata(fetchvalue,description.value,Price.value,Quantity.value);

    }
    else if(fetchvalue==="Dairy Milk")
    {
        description.value="Chocolate";
        Price.value=10;
       Quantity.value=40;
       postdata(fetchvalue,description.value,Price.value,Quantity.value);
    }
    else if(fetchvalue==="Perk")
    {
        description.value="Chocolate";
        Price.value=15;
           Quantity.value=50;
           postdata(fetchvalue,description.value,Price.value,Quantity.value);
    }
     else if(fetchvalue==="Kisses")
    {
        description.value="Chocolate";
           Price.value=30;
           Quantity.value=20;
           postdata(fetchvalue,description.value,Price.value,Quantity.value);
        
    }
    //Children Snacks
    if(fetchvalue==="kurkure")
{
    description.value="Children Snacks";
    Price.value=5;
           Quantity.value=40;
           postdata(fetchvalue,description.value,Price.value,Quantity.value);

}
else if(fetchvalue==="Crex")
{
    description.value="Children Snacks";
    Price.value=10;
    Quantity.value=20;
    postdata(fetchvalue,description.value,Price.value,Quantity.value);
}
else if(fetchvalue==="lays")
    {
        description.value="Children Snacks";
           Price.value=15;
           Quantity.value=60;
           postdata(fetchvalue,description.value,Price.value,Quantity.value);
        }
    

    //soap
    if(fetchvalue==="Pears")
    {
        description.value="Soap";
           Price.value=40;
           Quantity.value=25;
           postdata(fetchvalue,description.value,Price.value,Quantity.value);
    }
    else if(fetchvalue==="Dettole")
    {
        description.value="Soap";
        Price.value=20;
           Quantity.value=100;
           postdata(fetchvalue,description.value,Price.value,Quantity.value);
    }
  else if(fetchvalue==="Dove")
        {
            description.value="Soap";
           Price.value=40;
           Quantity.value=20;
           postdata(fetchvalue,description.value,Price.value,Quantity.value);
        }
    
    //Namkeen
    if(fetchvalue==="Alu Bhujia")
    {
        description.value="Namkeen";
        Price.value=150;
        Quantity.value=20;
        postdata(fetchvalue,description.value,Price.value,Quantity.value);
    }
     else if(fetchvalue==="Navratan")
    {
        description.value="Namkeen";
           Price.value=100;
           Quantity.value=10;
           postdata(fetchvalue,description.value,Price.value,Quantity.value);
     }

})

form.addEventListener("submit",(e)=>
{
    e.preventDefault();
    const item=document.getElementById("choose").value;
    const description=document.getElementById("txtdesc").value;
    const price=document.getElementById("numprice").value;
    const Quantity=document.getElementById("numq").value;
    const txtval=e.submitter.textContent;
    const sp=txtval.split(" ");
    if(sp[1]==="1")
    {
        document.getElementById("numq").value=Quantity-1;
        const newq=document.getElementById("numq").value;
        postdata(item,description,price,newq);
    }
    else if(sp[1]==="2")
    {
        document.getElementById("numq").value=Quantity-2;
        const newq=document.getElementById("numq").value;
        postdata(item,description,price,newq);
    }
    else if(sp[1]==="3")
    {
        document.getElementById("numq").value=Quantity-3;
        const newq=document.getElementById("numq").value;
        postdata(item,description,price,newq);
    }

})

function postdata(item,desc,Price,Quantity)
{
    const obj={
        "item":item,
        "Desciption":desc,
        "Price":Price,
        "Quantity":Quantity
    }
    axios.get("https://crudcrud.com/api/f679ca555fa14ca18bb6ac14be0dab13/inventory").then((res)=>{
        for(var i=0;i<res.data.length;i++)
        {
            if(res.data[i].item===item){
                if(res.data[i].Quantity!==Quantity)
                {
                    axios.delete(`https://crudcrud.com/api/f679ca555fa14ca18bb6ac14be0dab13/inventory/${res.data[i]._id}`)
                    axios.post("https://crudcrud.com/api/f679ca555fa14ca18bb6ac14be0dab13/inventory",obj);
                }
                continue;
            }
            else{
                axios.post("https://crudcrud.com/api/f679ca555fa14ca18bb6ac14be0dab13/inventory",obj);
                break;
            }
        }
    })
}
