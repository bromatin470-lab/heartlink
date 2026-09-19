const people=[
{name:"Amara",age:24,city:"Douala, Cameroon",bio:"I love music, good conversations and exploring new places."},
{name:"Daniel",age:28,city:"Yaoundé, Cameroon",bio:"Easygoing, ambitious and always ready for a good laugh."},
{name:"Grace",age:26,city:"Bamenda, Cameroon",bio:"Book lover, food enthusiast and positive-minded."},
{name:"Kevin",age:30,city:"Lagos, Nigeria",bio:"Entrepreneur who enjoys travel, football and meeting people."},
{name:"Nadia",age:23,city:"Buea, Cameroon",bio:"Creative, friendly and looking for meaningful connections."},
{name:"Michael",age:27,city:"Abuja, Nigeria",bio:"Family-oriented and interested in tech and photography."}
];
const cards=document.querySelector("#cards"),count=document.querySelector("#count"),toast=document.querySelector("#toast");
function showToast(t){toast.textContent=t;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1800)}
function render(){
cards.innerHTML=people.map((p,i)=>`<article class="card"><div class="avatar">♥</div><h3>${p.name}, ${p.age}</h3><div class="muted">${p.city}</div><p>${p.bio}</p><div class="actions"><button class="like" onclick="like(${i})">♥ Like</button><button onclick="showToast('Chat will be available after a match.')">Message</button></div></article>`).join("");
count.textContent=`${people.length} profiles`;
}
function like(i){showToast(`You liked ${people[i].name}.`)}
render();
document.querySelectorAll("#joinTop,#joinHero").forEach(b=>b.onclick=()=>document.querySelector("#signup").scrollIntoView({behavior:"smooth"}));
document.querySelector("#profileForm").onsubmit=e=>{
e.preventDefault();
const name=document.querySelector("#name").value.trim(),age=Number(document.querySelector("#age").value);
if(age<18){document.querySelector("#formMsg").textContent="You must be 18 or older.";return}
people.unshift({name,age,city:document.querySelector("#city").value.trim(),bio:document.querySelector("#bio").value.trim()});
render(); e.target.reset(); document.querySelector("#formMsg").textContent="Profile created on this demo. Connect a database before launching publicly.";document.querySelector("#discover").scrollIntoView({behavior:"smooth"});
};