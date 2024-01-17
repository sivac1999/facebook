var inp=document.getElementById("inp");
console.log(inp);
var but=document.getElementById("add");
console.log(but);
var create=document.getElementById("create");
console.log(create);

but.addEventListener("click",function(){
    addpost();
})

var store={};
function addpost(){
    store['text']=inp.value
    console.log(store);
    createpost();
}


function createpost(){

    // var image=document.getElementById("image");
    // console.log(image);
    var picture=["images/burj.jpg","images/corin.jpg","images/delhi.jfif","images/kerala.jpg","images/ooty.jpg","images/taj.jpg","images/tamilnadu.jpg","images/korea.jfif","images/dubai.webp"];
    	picture.forEach(function(){
    		b=Math.floor(Math.random()*(picture.length));
           
    	})
        // console.log(b);
        // console.log(ran);


    

    create.innerHTML+=`
    <div class="container">
    <div class="row">
    <div class="col">
        <div class="logo">
            <div class="logo-image">
                <img src="images/img-1.jpeg">
            </div>
            <div class="logo-para">
                <p class="logo-para1">Hashini1429</p>
                <p class="logo-para2 para" >Just Now</p>
            </div>
        </div>
        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
    </div>
    <div class="col2">
        <div class="main-image">
            <img src="${picture[b]}" alt="" id="image">
        </div>
        <div class="icons">
            <div class="main-icon">
                <i class="hearts fa fa-heart" aria-hidden="true"></i>
                <i class="fa fa-pencil" aria-hidden="true" onclick="editpost(this)"></i>
                <i class="fa fa-trash" aria-hidden="true" onclick="deletepost(this)"></i>
                <p class="liked likepara" style="padding: 1%;">
                    207 likes
                </p>
                <p class="name">${store.text}</p>
                <p class="comment">
                    view all 32 comments
                </p>
                <p class="comment">2 HOURS AGO</p>
            </div>
            <div class="main-icon2">
                <i class="fa fa-bookmark-o" aria-hidden="true"></i>
            </div>
        </div>
    </div>
    <div class="col3">
        <div>
            <p>&#9786 Add a comment...</p>
        </div>
        <p>post</p>
    </div>
</div>
</div>`
    inp.value='';
    


    // like
    var hearts=document.getElementsByClassName("hearts");
    var likepara=document.getElementsByClassName("likepara");
    for(let i=0;i<hearts.length;i++){
        value=true;
        count=207;
    hearts[i].addEventListener("click",function(){
        console.log(hearts[i])
        if(value==true){
        hearts[i].style.color="red";
        count=count+1;
        likepara[i].innerHTML=count+" likes";
        value=false;
        }
        else{
            hearts[i].style.color="black";
            count=count-1
            likepara[i].innerHTML=count+" likes";
            console.log(count)
            value=true;
        }
        // console.log(1);
})
}
}

function editpost(e){
    console.log(e.parentElement.children[4].innerHTML);
    inp.value=e.parentElement.children[4].innerHTML;
    e.parentElement.parentElement.parentElement.previousElementSibling.parentElement.remove();
}

function deletepost(e){
    e.parentElement.parentElement.parentElement.previousElementSibling.parentElement.remove();
}


var pictures=["images/burj.jpg","images/corin.jpg","images/delhi.jfif","images/kerala.jpg","images/ooty.jpg","images/taj.jpg","images/tamilnadu.jpg","images/korea.jfif","images/dubai.webp"];
var pic=document.getElementById("pic");

setInterval(change,3000);
function change(){
pictures.forEach(function(){
    b=Math.floor(Math.random()*pictures.length)
 })

 pic.src=pictures[b];
}


// var para=document.getElementsByClassName("para");
// counts=0;
//         setInterval(function(){
//             for(let i=0;i<para.length;i++){
                
//                 para[i].innerHTML=counts+++" min";

//             } 
//         },60000)