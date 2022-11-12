
import { RGB } from "https://cdn.skypack.dev/-/three@v0.146.0-32KZuHtb79LAER0munou/dist=es2019,mode=types/index.d.ts";
import { Difficulty, notesBetween, Wall, Note, CUT, NOTETYPE, rand} from "https://deno.land/x/remapper@3.0.0/src/mod.ts" // MAKE SURE THIS IS ON THE LATEST REMAPPER VERSION!!!!!!!!!
import * as MapL from './src/exports.ts'
const map = new Difficulty("NormalStandard.dat", "HardStandard.dat");

//Functions to make life easier
function RC(value: number) {
  return value / 255; 
}
function RandInt(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Wall Stuff
const wall2 = new Wall(192.291,7.709,4,1,3,1)
wall2.animate.color = [[RC(255), RC(0), RC(0), 1, 0], [RC(255), RC(85), RC(0), 1, 0.1], [RC(255), RC(187), RC(0), 1, 0.2], [RC(43), RC(255), RC(5), 1, 0.3], [RC(5), RC(68), RC(255), 1, 0.4], [RC(80), RC(5), RC(255), 1, 0.5], [RC(87), RC(0), RC(173), 1, 0.6], [RC(62), RC(2), RC(117), 1, 0.7], [RC(255), RC(0), RC(0), 1, 0.8], [RC(255), RC(0), RC(0), 1, 0.9], [RC(255), RC(0), RC(0), 1, 1]]
wall2.animate.dissolve = [[1, 0], [1, 0.1], [1, 0.2], [1, 0.3], [1, 0.4], [1, 0.5], [1, 0.6], [1, 0.7], [1, 0.8], [0.5, 0.9], [0, 1]]
wall2.push();

const wall3 = new Wall(192.291,7.709,-1,1,3,1)
wall3.animate.color = [[RC(255), RC(0), RC(0), 1, 0], [RC(255), RC(85), RC(0), 1, 0.1], [RC(255), RC(187), RC(0), 1, 0.2], [RC(43), RC(255), RC(5), 1, 0.3], [RC(5), RC(68), RC(255), 1, 0.4], [RC(80), RC(5), RC(255), 1, 0.5], [RC(87), RC(0), RC(173), 1, 0.6], [RC(62), RC(2), RC(117), 1, 0.7], [RC(255), RC(0), RC(0), 1, 0.8], [RC(255), RC(0), RC(0), 1, 0.9], [RC(255), RC(0), RC(0), 1, 1]]
wall3.animate.dissolve = [[1, 0], [1, 0.1], [1, 0.2], [1, 0.3], [1, 0.4], [1, 0.5], [1, 0.6], [1, 0.7], [1, 0.8], [0.5, 0.9], [0, 1]]
wall3.push();




//For loops and stuff OUI OUI BONJOUR 



for(let i = 0; i < 300; i++){
  const wall1 = new Wall(128,16,1,1,1,1);
  wall1.scale = [0.3, 0.3, 0.3]
  wall1.animate.dissolve = [[0, 0], [0.2, 0.2], [1, 0.4], [1, 0.6], [1, 0.8], [0, 1]]
  wall1.animate.definitePosition = [rand(-25, 20), rand(-25, 20), rand(-25, 20)]
  wall1.animate.position = [[rand(-30, 30), rand(-30, 30), rand(-30, 30), 0, "easeInCirc"], [rand(-30, 30), rand(-30, 30), rand(-30, 30), 0.2, "easeOutCirc"], [rand(-30, 30), rand(-30, 30), rand(-30, 30), 0.4, "easeInCirc"], [rand(-30, 30), rand(-30, 30), rand(-30, 30), 0.6, "easeOutCirc"], [rand(-30, 30), rand(-30, 30), rand(-30, 30), 0.8, "easeInCirc"], [rand(-30, 30), rand(-30, 30), rand(-30, 30), 1, "easeOutCirc"]]
  wall1.push();
}


for(let i = 0; i < 100; i++){
    const noteE = new Note(112, 113)
    noteE.animate.dissolve = [[1, 0], [0, 1]]
    noteE.type = 1
    noteE.animate.definitePosition = [rand(-25, 20), rand(-25, 20), rand(-25, 20)]
    noteE.rotation = [RandInt(-360, 360), RandInt(-360, 360), RandInt(-360, 360)]
    noteE.push(false, false)
    
    
}

for(let i = 0; i < 69; i++){
    const noteE2 = new Note(116, 117)
    noteE2.animate.dissolve = [[1, 0], [0, 1]]
    noteE2.color = [RandInt(0, 1), RandInt(0, 1), RandInt(0, 1)]
    noteE2.type = 1
    noteE2.animate.definitePosition = [rand(-25, 20), rand(-25, 20), rand(-25, 20)]
    noteE2.rotation = [RandInt(-360, 360), RandInt(-360, 360), RandInt(-360, 360)]
    noteE2.push(false, false)
}









//Note mods

notesBetween(201, 232, (note) => {
  //Right 2 lanes
  if(note.x == 3 && note.y == 2){
    note.animate.position = [[0, -50, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  if(note.x == 3 && note.y == 1){
    note.animate.position = [[0, -50, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  if(note.x == 3 && note.y == 0){
    note.animate.position = [[0, -50, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  if(note.x == 2 && note.y == 2){
    note.animate.position = [[0, -50, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  if(note.x == 2 && note.y == 1){
    note.animate.position = [[0, -50, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  if(note.x == 2 && note.y == 0){
    note.animate.position = [[0, -50, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  //Left 2 lanes
  if(note.x == 0 && note.y == 2){
    note.animate.position = [[0, 50, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  if(note.x == 0 && note.y == 1){
    note.animate.position = [[0, 50, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  if(note.x == 0 && note.y == 0){
    note.animate.position = [[0, 50, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  if(note.x == 1 && note.y == 2){
    note.animate.position = [[0, 50, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  if(note.x == 1 && note.y == 1){
    note.animate.position = [[0, 50, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  if(note.x == 1 && note.y == 0){
    note.animate.position = [[0, 50, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
})





notesBetween(192.291, 200, (note) => {
  //Right 2 lanes
  if(note.x == 3 && note.y == 2){
    note.animate.position = [[50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  if(note.x == 3 && note.y == 1){
    note.animate.position = [[50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  if(note.x == 3 && note.y == 0){
    note.animate.position = [[50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  if(note.x == 2 && note.y == 2){
    note.animate.position = [[50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  if(note.x == 2 && note.y == 1){
    note.animate.position = [[50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  if(note.x == 2 && note.y == 0){
    note.animate.position = [[50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  //Left 2 lanes
  if(note.x == 0 && note.y == 2){
    note.animate.position = [[-50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  if(note.x == 0 && note.y == 1){
    note.animate.position = [[-50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  if(note.x == 0 && note.y == 0){
    note.animate.position = [[-50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  if(note.x == 1 && note.y == 2){
    note.animate.position = [[-50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  if(note.x == 1 && note.y == 1){
    note.animate.position = [[-50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
  if(note.x == 1 && note.y == 0){
    note.animate.position = [[-50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
    note.NJS = 10
  }
})



notesBetween(0, 32, (note) => {
    //Right 2 lanes
    if(note.x == 3 && note.y == 2){
      note.animate.position = [[50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
      note.NJS = 9
    }
    if(note.x == 3 && note.y == 1){
      note.animate.position = [[50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
      note.NJS = 9
    }
    if(note.x == 3 && note.y == 0){
      note.animate.position = [[50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
      note.NJS = 9
    }
    if(note.x == 2 && note.y == 2){
      note.animate.position = [[50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
      note.NJS = 9
    }
    if(note.x == 2 && note.y == 1){
      note.animate.position = [[50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
      note.NJS = 9
    }
    if(note.x == 2 && note.y == 0){
      note.animate.position = [[50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
      note.NJS = 9
    }
    //Left 2 lanes
    if(note.x == 0 && note.y == 2){
      note.animate.position = [[-50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
      note.NJS = 9
    }
    if(note.x == 0 && note.y == 1){
      note.animate.position = [[-50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
      note.NJS = 9
    }
    if(note.x == 0 && note.y == 0){
      note.animate.position = [[-50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
      note.NJS = 9
    }
    if(note.x == 1 && note.y == 2){
      note.animate.position = [[-50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
      note.NJS = 9
    }
    if(note.x == 1 && note.y == 1){
      note.animate.position = [[-50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
      note.NJS = 9
    }
    if(note.x == 1 && note.y == 0){
      note.animate.position = [[-50, 0, 0, 0], [0, 0, 0, 0.3, "easeInOutCirc"]]
      note.NJS = 9
    }
  })

notesBetween(64, 80, (note) => {
    note.animate.dissolve = [[1, 0], [0.9, 0.1], [0.8, 0.2], [0.7, 0.3], [0.6, 0.4], [0.5, 0.5], [0.4, 0.6], [0.3, 0.7], [0.2, 0.8], [0.1, 0.9], [0, 1]]
})

notesBetween(81, 96, (note) => {
    note.animate.dissolveArrow = [[1, 0], [0.9, 0.1], [0.8, 0.2], [0.7, 0.3], [0.6, 0.4], [0.5, 0.5], [0.4, 0.6], [0.3, 0.7], [0.2, 0.8], [0.1, 0.9], [0, 1]]
})  

notesBetween(98.2, 100, (note) => {
    note.animate.dissolve =  [[1, 0], [0.5, 0.5], [0.9, 1]]
}) 
//map setup
MapL.despawn("Contains", [
    "TimbalandLogo",
    "BackColumns",
    "TrackMirror",
    "TrackConstruction",
    "MainStructure",
    "TopStructure",
    "Buildings",
    "Spectrograms.[1]Spectrogram",
    "Spectrograms.[0]Spectrogram"
])



//Water Waves

/*
waterW.color = [0.2392156863, 0.792156862745098, 0.890196078431372, 1];
waterW.scale = [100, 20, 100];
waterW.customData = {
    fake: true,
    position: [1, 1, 1],
}
*/





// SCRIPT
map.settings.noHud = true
map.NJS = 12
map.require("Chroma", true)
map.require("Noodle Extensions", true)
map.save();

// Time stamps
//0 - 32
//238
// 111.9 to 112.946
//64 - 96
//128 to 144
