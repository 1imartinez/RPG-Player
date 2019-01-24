//generic stats object

let p1Name = "Peace Keeper";

let p1Stats = {
  hp: 80,
  mp: 120,
  atk: 50,
  def: 20,
  sp: 50
}

let p1Moves = {
  roundhouseKick: function(){
    let baseDamage = this.stats.atk*0.5;
    let triangle = Math.random()
    
    if(triangle < 0.33){return baseDamage}
    else if(triangle < 0.66){return 2*baseDamge}
    else{return 3*baseDamage}
  },
  furyStrike:function(){

    let basedamage = this.stats.atk;
    let bonus = this.stats.atk*Math.random(); 
    let pain = Math.random();   

    if(pain < 0.50){
      this.stats.hp = this.stats.hp - (basedamage + bonus)/2;
      return basedamage+bonus;
    }
    else{
      //no self damage
      return basedamage+bonus;
    }
  },
  hyperBeam:function(){
    if(this.stats.mp >= 20){
      this.stats.mp - this.stats.mp - 20;
      let baseDamge = this.stats.sp
      let bonus = 1.5*this.stats.atk*Math.random();
      return baseDamge + bonus;
    }
  },
  shadowClaw:function(){
    let baseDamage = this.stats.atk
    let bonus = 0.5*this.stats.atk*Math.random();
    if(pain < 0.25){
      this.stats.hp = this.stats.hp - bonus/2;
      return baseDamage+bonus;
    }
    else{
      //no self damage
      return this.stats.atk+bonus;
    }
  },
}

let p1Battle = {

  attack: function(mv){
    if(mv == 1){
      return this.moves.punch();
    }
    else if(mv == 2){
      return this.moves.other();
    }
  },
  defend: function(atkmv){
    let rawDamage = atkmv - this.stats.def;
    this.stats.hp = this.stats.hp - rawDamage;
    if(this.stats.hp < 0){
      this.stats.hp = 0;
    }
  }

}


let player1 = {
  name: p1Name,
  stats: p1Stats,
  moves: p1Moves,
  battle: p1Battle
}



//Player two
let p2Name = "Law Breaker";

let p2Stats = {
  hp: 100,
  mp: 100,
  atk: 70,
  def: 10,
  sp: 40
}

let p2Moves = {
  razorPunch: function(){
    let baseDamage = this.stats.atk*0.75
    let bonus = 0.5*this.stats.atk*Math.random();
    return baseDamage+bonus;
  },
  charge:function(){
    let pain = Math.random();
    let bonus = 0.5*this.stats.atk*Math.random();
    if(pain < 0.50){
      this.stats.hp = this.stats.hp - bonus/2;
      return this.stats.atk+bonus;
    }
    else{
      //no self damage
      return this.stats.atk+bonus;
    }
  },
  ligthingSlap:function(){
    let baseDamge = this.stats.sp;
    let bonus = 0.5*this.stats.sp*Math.random();
    return baseDamge+ bonus;
  },
  hydroPump: function(){
    if(this.stats.mp >= 8){
      this.stats.mp = this.stats.mp -8;
      let tetradice = Math.random();
      let pump = Math.ceil(this.stats.sp/3);

      if(tetradice < 0.10){
        return pump;
      }
      else if(tetradice < 0.30){
        return 2*pump;
      }
      else if(tetradice < 0.60){
        return 3*pump;
      }
     else{
        return 4*pump;
      }
    }
  }
}

let p2Battle = {

  attack: function(mv){
    if(mv == 1){
      return this.moves.punch();
    }
    else if(mv == 2){
      return this.moves.other();
    }
  },
  defend: function(atkmv){
    let rawDamage = atkmv - this.stats.def;
    this.stats.hp = this.stats.hp - rawDamage;
    if(this.stats.hp < 0){
      this.stats.hp = 0;
    }
  }

}
let player2 = {
  name: p2Name,
  stats: p2Stats,
  moves: p2Moves,
  battle: p2Battle
}

//attacks
//PHYSICAL
let physical = {
  razorPunch: function(){
    let baseDamage = this.stats.atk*0.75
    let bonus = 0.5*this.stats.atk*Math.random();
    return baseDamage+bonus;
  },
  charge:function(){
    let pain = Math.random();
    let bonus = 0.5*this.stats.atk*Math.random();
    if(pain < 0.50){
      this.stats.hp = this.stats.hp - bonus/2;
      return this.stats.atk+bonus;
    }
    else{
      //no self damage
      return this.stats.atk+bonus;
    }
  },
  furyStrike:function(){

    let basedamage = this.stats.atk;
    let bonus = this.stats.atk*Math.random(); 
    let pain = Math.random();   

    if(pain < 0.50){
      this.stats.hp = this.stats.hp - (basedamage + bonus)/2;
      return basedamage+bonus;
    }
    else{
      //no self damage
      return basedamage+bonus;
    }
  },
  roundhouseKick: function(){
    let baseDamage = this.stats.atk*0.5;
    let triangle = Math.random()
    
    if(triangle < 0.33){return baseDamage}
    else if(triangle < 0.66){return 2*baseDamge}
    else{return 3*baseDamage}
  }
}
//MAGIC
let magic = {
  hydroPump: function(){
    if(this.stats.mp >= 8){
      this.stats.mp = this.stats.mp -8;
      let tetradice = Math.random();
      let pump = Math.ceil(this.stats.sp/3);

      if(tetradice < 0.10){
        return pump;
      }
      else if(tetradice < 0.30){
        return 2*pump;
      }
      else if(tetradice < 0.60){
        return 3*pump;
      }
     else{
        return 4*pump;
      }
    }
  },
  hyperBeam:function(){
    if(this.stats.mp >= 20){
      this.stats.mp - this.stats.mp -20;
      let baseDamge = this.stats.sp
      let bonus = 1.5*this.stats.atk*Math.random();
      return baseDamge + bonus;
    }
  },
  shadowClaw:function(){
    let baseDamage = this.stats.atk
    let bonus = 0.5*this.stats.atk*Math.random();
    if(pain < 0.25){
      this.stats.hp = this.stats.hp - bonus/2;
      return baseDamage+bonus;
    }
    else{
      //no self damage
      return this.stats.atk+bonus;
    }
  },
  ligthingSlap:function(){
    let baseDamge = this.stats.sp;
    let bonus = 0.5*this.stats.sp*Math.random();
    return baseDamge+ bonus;
  }

}









let p1Pack = [2,2,1,0,1,1,0,0];


//Assembling your player.
