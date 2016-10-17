var creatureConfigs = {
  creatureDefaults: {
    active: true,
    gravity: 500,
    bounce: 0.2,
    mass: 1,
    jumping: 300,
    maxSpeed: 100,
    acceleration: 10,
    collide: true,
    lives: 1, 
    lifespan: Infinity,
    sense: 150,
    animations: [], 
    timeOf: {
      'move': 200,
      'hit': 100,
      'hurt': 500
    },
    boundTo : {
      x1: 1000,
      x2: 1200
    },
    correctedAnchor: {
      x: 0.5,
      y: 0.5
    }
  },
  man: {
    maxSpeed: 200,
    lives: 8, 
    lifespan: Infinity,
    animations: [
      { name: 'move', frames: [11,'03','05',14,20], fps: 10, loop: false }, 
      { name: 'hit', frames: [22,24,28,31,34,22,24,28,31,34], fps: 10, loop: true }, 
      { name: 'stop', frames: [42,45,49,52], fps: 10, loop: false }, 
      { name: 'jump', frames: [16,41,47,50,50,50,50,50,50,50,50,13,50,13,50,13], fps: 10, loop: false }, 
      { name: 'idle', frames: [25,25,25,25,25,25,25,25,27,27,27,27,25,25,25,25,25,25,25,25,30,25,25,25,25,25,25,25,25,27,30,27,30,35,36,25,25,25,25,25,25,25,25,'07','07','07','07','02','02'], fps: 5, loop: true }, 
      { name: 'hurt', frames: [19], fps: 10, loop: true },
      { name: 'stun', frames: [19], fps: 10, loop: true },
      { name: 'die', frames: [19], fps: 10, loop: false },
      { name: 'spawn', frames: [11,'03','05',14,20], fps: 10, loop: false }
    ],
    correctedAnchor: {
      x: 0.5,
      y: 0.8
    }
  },
  dino: {
    mass: 1.5,
    jumping: 300,
    maxSpeed: 50,
    acceleration: 5, 
    animations: [
      { name: 'idle', frames: [360,360,360,360,360,360,360,367], fps: 5, loop: true },
      { name: 'move', frames: [360,361,364,367,369], fps: 10, loop: true },
      { name: 'jump', frames: [360,361,364,367,369], fps: 10, loop: true },
      { name: 'fall', frames: [369], fps: 10, loop: true },
      { name: 'die', frames: [371], fps: 10, loop: true },
      { name: 'spawn', frames: [360,361,364,367], fps: 10, loop: true }
    ]
  },
  bear: {
    mass: 1.2,
    maxSpeed: 75,
    jumping: 0,
    acceleration: 15, 
    animations: [
      { name: 'idle', frames: [321], fps: 10, loop: false },
      { name: 'move', frames: [320,321,324], fps: 10, loop: true },
      { name: 'spawn', frames: [366,363,358,317], fps: 10, loop: false },
      { name: 'die', frames: [328], fps: 10, loop: true }
    ] 
  },
  'super-bear': {
    acceleration: 30,
    maxSpeed: 200,
    image: 'super-bear-sprite-ref', // override sprite (creature name by default)
    animations: []
  },
  tiger: {
    mass: 1.5,
    jumping: 300,
    maxSpeed: 50,
    acceleration: 20, 
    animations: [
      { name: 'idle', frames: [393,395], fps: 10, loop: true },
      { name: 'move', frames: [393,395], fps: 10, loop: true },
      { name: 'jump', frames: [399,401], fps: 10, loop: false },
      { name: 'fall', frames: [399], fps: 10, loop: false },
      { name: 'die', frames: [402], fps: 10, loop: true },
      { name: 'spawn', frames: [393,395], fps: 10, loop: true }
    ]
  },
  ptero: {
    mass: 0.5,
    gravity: 0,
    bounce: 0.1,
    jumping: 0,
    collide: false,
    maxSpeed: 10,
    acceleration: 10, 
    animations: [
      { name: 'idle', frames: [478,478,478,478,478,478,478,478,477,478,478,478,478,478,477,477], fps: 3, loop: true },
      { name: 'move', frames: [403,404,405,403,404,405,405,405,405,405,405,403,404,405,403,404,405,405,405,405,405,405,405], fps: 10, loop: true },
      { name: 'descend', frames: [405], fps: 15, loop: true },
      { name: 'ascend', frames: [403,404,405], fps: 15, loop: true },
      { name: 'die', frames: [471], fps: 10, loop: true },
      { name: 'spawn', frames: [405,403,404], fps: 15, loop: true }
    ]
  }, 
  dragonfly: {
    mass: 0.5,
    gravity: 0,
    bounce: 0.1,
    jumping: 0,
    collide: false,
    maxSpeed: 50,
    acceleration: 10, 
    animations: [
      { name: 'idle', frames: [337,338], fps: 12, loop: true },
      { name: 'move', frames: [337,338], fps: 12, loop: true },
      { name: 'turn', frames: [339,340], fps: 12, loop: true },
      { name: 'die', frames: [342], fps: 12, loop: true },
      { name: 'spawn', frames: [337,338], fps: 12, loop: true }
    ]
  },
  bat: {
    mass: 0.5,
    gravity: 0,
    bounce: 0.1,
    jumping: 0,
    collide: false,
    maxSpeed: 20,
    acceleration: 10, 
    animations: [
      { name: 'idle', frames: [351,352,351,351,351,351], fps: 10, loop: true },
      { name: 'move', frames: [357,359], fps: 10, loop: true },
      { name: 'die', frames: [362], fps: 10, loop: true },
      { name: 'spawn', frames: [357,359], fps: 10, loop: true }
    ]
  },
  spider: {
    mass: 0.3,
    jumping: 0,
    collide: true,
    bounce: 0,
    maxSpeed: 50,
    acceleration: 10,
    animations: [
      { name: 'idle', frames: [335], fps: 10, loop: true },
      { name: 'spawn', frames: [365,368,370,372], fps: 10, loop: false },
      { name: 'move', frames: [299,302,305,309], fps: 10, loop: true },
      { name: 'turn', frames: [319], fps: 10, loop: true },
      { name: 'climb', frames: [341,343,345,347], fps: 10, loop: true },
      { name: 'wait', frames: [332,335,372], fps: 10, loop: true },
      { name: 'die', frames: [322], fps: 10, loop: false }
    ]
  },
  native: {
    maxSpeed: 100,
    acceleration: 20,
    jumping: 0,
    animations: [
      { name: 'idle', frames: [373], fps: 10, loop: true },
      { name: 'move', frames: [373,376,378], fps: 10, loop: true },
      { name: 'die', frames: [380], fps: 10, loop: false },
      { name: 'spawn', frames: [373,376,378], fps: 10, loop: true }
    ]
  },
  parrot: {
    mass: 0.5,
    gravity: 0,
    bounce: 0.1,
    jumping: 0,
    collide: false,
    maxSpeed: 100,
    acceleration: 10,
    animations: [
      { name: 'idle', frames: [394,397,398], fps: 12, loop: true },
      { name: 'move', frames: [394,397,398], fps: 10, loop: true },
      { name: 'die', frames: [400], fps: 10, loop: false },
      { name: 'spawn', frames: [394,397,398], fps: 10, loop: true }
    ]
  },
  insect: {
    mass: 1,
    collide: true,
    bounce: 1.5,
    jumping: 300,
    maxSpeed: 50,
    acceleration: 25, 
    animations: [
      { name: 'idle', frames: [348,348,348,348,348,348,349], fps: 10, loop: true },
      { name: 'move', frames: [323,348,349], fps: 10, loop: true },
      { name: 'jump', frames: [323,348,349], fps: 10, loop: true },
      { name: 'die', frames: [348], fps: 10, loop: true },
      { name: 'spawn', frames: [323,348,349], fps: 10, loop: true }
    ]
  },
  bug: {
    mass: 1,
    collide: true,
    bounce: 1.5,
    jumping: 300,
    maxSpeed: 50,
    acceleration: 25, 
    animations: [
      { name: 'idle', frames: [344,344,344,344,344,344,344,344,346], fps: 10, loop: true },
      { name: 'move', frames: [344,346], fps: 10, loop: true },
      { name: 'jump', frames: [344,346], fps: 10, loop: true },
      { name: 'die', frames: [344], fps: 10, loop: true },
      { name: 'spawn', frames: [344,346], fps: 10, loop: true }
    ]
  },
  frog: {
    mass: 1,
    collide: true,
    bounce: 1.5,
    jumping: 500,
    maxSpeed: 80,
    acceleration: 40, 
    animations: [
      { name: 'idle', frames: [325], fps: 10, loop: true },
      { name: 'move', frames: [325,327,331,325], fps: 10, loop: false },
      { name: 'jump', frames: [325,327,331,325], fps: 10, loop: false },
      { name: 'die', frames: [334], fps: 10, loop: true },
      { name: 'spawn', frames: [325,327,331,325], fps: 10, loop: false }
    ]
  },
  turtle: {
    mass: 2,
    jumping: 0,
    collide: true,
    bounce: 0.3,
    maxSpeed: 50,
    acceleration: 10,
    animations: [
      { name: 'idle', frames: [390], fps: 10, loop: true },
      { name: 'spawn', frames: [377,381,384,385], fps: 10, loop: true },
      { name: 'move', frames: [387,389,390,391], fps: 10, loop: true },
      { name: 'die', frames: [392], fps: 10, loop: true }
    ]
  },
  jelly: {
    mass: 2,
    jumping: 0,
    collide: true,
    bounce: 1,
    maxSpeed: 5,
    acceleration: 1,
    animations: [
      { name: 'idle', frames: [420,433,434], fps: 3, loop: true },
      { name: 'spawn', frames: [420,433,434], fps: 3, loop: true },
      { name: 'move', frames: [420,433,434], fps: 3, loop: true },
      { name: 'die', frames: [420,433,434], fps: 3, loop: true }
    ]
  },
  gorilla: {
    mass: 5,
    jumping: 300,
    maxSpeed: 0,
    acceleration: 0, 
    animations: [
      { name: 'idle', frames: [411], fps: 5, loop: true },
      { name: 'move', frames: [411], fps: 10, loop: true },
      { name: 'jump', frames: [411], fps: 10, loop: true },
      { name: 'fall', frames: [411], fps: 10, loop: true },
      { name: 'die', frames: [411], fps: 10, loop: true },
      { name: 'spawn', frames: [411], fps: 10, loop: true }
    ]
  }
};

for(var creature in creatureConfigs){
  //creatureConfigs[creature] = _.merge({}, configs.creatureDefaults, configs[creature]);  
  var defaults = creatureConfigs['creatureDefaults'];
  for(var prop in defaults){
    if(creatureConfigs[creature][prop] === undefined){
      creatureConfigs[creature][prop] = defaults[prop];
    }
  }  
}

module.exports = creatureConfigs;