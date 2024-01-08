const div = document.getElementById('apidiv')
const btn = document.getElementById('btn')
let page=1
let limit=3

async function getproducts() {
   
    try{
   const response = await axios.get(`https://655c30a1ab37729791aa03c7.mockapi.io/fi/products?page=${page}&limit=${limit}`)
   const data = response.data;
   db=response.data
   data.forEach(item=>{
const box = document.createElement('div')
box.className = 'boxDiv'
box.innerHTML = `
<img style="width:190px" src='${item.image}' alt="">
<p class='title' style="width:200px">${item.name}</p>
<p class='title' style="width:200px">${item.price}</p>
<button class="addtobasketbtn" onclick="addToBasket(${item.id})">Add to basket</button>

`
div.appendChild(box)
})
page++;
}
    catch(error){
        console.error('Error fetching products:',error)
    }
}
   





const butn = document.getElementById('butn')
const inpp = document.getElementById('inpp')
const list = document.querySelector('.list')
const trip = document.getElementById('trip')





function findByName() {
  div.innerHTML=``
    axios
      .get(`https://655c30a1ab37729791aa03c7.mockapi.io/fi/products`)
      .then((res) => {
        db = res.data;
        console.log(db);
        let filteredData = db.filter(item => item.name.toLowerCase().startsWith(inpp.value))
        console.log(filteredData);

        filteredData.map((item) => {
          let myDiv = document.createElement("div");
          myDiv.className = "myDiv col-xl-12 col-lg-12 col-md-12 col-sm-12";
          myDiv.innerHTML = `
          <img style="width:190px" src='${item.image}' alt="">
          <p class='title' style="width:200px">${item.name}</p>
          <p class='title' style="width:200px">${item.price}</p>
         
          `;
          div.appendChild(myDiv);
        });
      });
  }

butn.addEventListener('click', findByName)






    btn.addEventListener('click',getproducts) 
function addToBasket(id) {
    let cart = JSON.parse(localStorage.getItem('cart'))||[]
    cart.push(db.find(item=>item.id==id))
    localStorage.setItem('cart',JSON.stringify(cart))
}
window.onload = ()=>{
    getproducts()
}






const submit=document.getElementById('myFORM')







const nameinput = document.getElementById('nameinput');
const lastnameinput = document.getElementById('lastnameinput');
const emailinput = document.getElementById('emailinput');
const subjectinput = document.getElementById('subjectinput');
const messageinput = document.getElementById('messageinput');


function axiosPost(event) {
    event.preventDefault()
    axios.post("https://655c30a1ab37729791aa03c7.mockapi.io/fi/sdu", {
        name: nameinput.value,
        lastname: lastnameinput.value,
        email: emailinput.value,
        subject: subjectinput.value,
    }).then(res => {
        console.log(res);
    })
}
myFORM.addEventListener('submit', axiosPost)