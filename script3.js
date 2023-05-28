const product=[
    {
        id:0,
        image:"WatchC1.jpeg",
        title:"Watch",
        price:1200,
    },
    {
        id:1,
        image:"WatchC2.jpeg",
        title:"Watch",
        price:600,
    },
    {
        id:2,
        image:"WatchC7.jpeg",
        title:"Watch",
        price:780,
    },
    {
        id:3,
        image:"WAtchC4.jpeg",
        title:"Watch",
        price:708,
    },
    {
        id:4,
        image:"WatchC5.jpeg",
        title:"Watch",
        price:457,
    },
    {
        id:5,
        image:"WatchC6.jpeg",
        title:"Watch",
        price:987,
    }
];
const categories=[...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById("root").innerHTML=categories.map((item)=>
    {
        var{image, title, price}=item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>`+
                "<button onclick='addtocart("+(i++)+")'>Add to Cart</button>"+
                `</div>
            </div>`
        )
    }).join('')
    var cart=[];
    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }
    function delElement(a){
        cart.splice(a,1);
        displaycart();
    }
    function displaycart(){
        let j=0,total=0;
        document.getElementById("count").innerHTML=cart.length;
        if(cart.length==0){
            document.getElementById('cartitem').innerHTML="Your cart is empty";
            document.getElementById("total").innerHTML="$ "+0+".00";
        }
        else{
            document.getElementById("cartitem").innerHTML=cart.map((items)=>
            {
                var{image,title,price}=items;
                total=total+price;
                document.getElementById("total").innerHTML="$ "+total+".00";
                return(
                    `<div class='cart-item'>
                    <div class='row-img'>
                    <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
                );
            }).join('');
            
        }
    }


    document.getElementById("buyBtn").addEventListener("click", function() {
        document.getElementById("modal").style.display = "block";
      });
      
      document.getElementsByClassName("close")[0].addEventListener("click", function() {
        document.getElementById("modal").style.display = "none";
      });