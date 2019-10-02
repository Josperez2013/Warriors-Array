var characters = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },{
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
]


for (var i = 0; i < characters.length; i++) {
  // where the conditional should go
  //document.write(characters[i].damage);
  if((characters[i].damage >=2) && (characters[i].health >=10) && (characters[i].warrior == true)){
  
     var ele = document.createElement("div");
  var nameEle = document.createElement("h2");
  var damageEle = document.createElement("h3");
  var healthEle = document.createElement("h3");
  var warriorEle = document.createElement("h3");

  nameEle.innerHTML = "Name: " + characters[i].name;
  damageEle.innerHTML = "Damage: " + characters[i].damage;
  healthEle.innerHTML = "Health: " + characters[i].health;
  warriorEle.innerHTML = "Warrior: " + characters[i].warrior;
  
  

  ele.appendChild(nameEle);
  ele.appendChild(damageEle);
  ele.appendChild(healthEle);
  ele.appendChild(warriorEle);


  document.body.appendChild(ele);
   
}

 
}