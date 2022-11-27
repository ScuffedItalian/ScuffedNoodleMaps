import { activeDiff, CUT, Difficulty, Note, notesBetween, NOTETYPE, rand, Wall, wallsBetween } from "https://deno.land/x/remapper@3.0.0/src/mod.ts" // MAKE SURE THIS IS ON THE LATEST REMAPPER VERSION!!!!!!!!!
import { CustomEvent, Event } from "https://deno.land/x/remapper@3.0.0/src/mod.ts";
//import at the latest version, change the import version here v
import { animatePlayer, despawn, } from "https://deno.land/x/enviromodder@1.0.3/src/exports.ts";
const map = new Difficulty("HardStandard.dat", "ExpertPlusStandard.dat");

// SCRIPT






//consts
const starWall1 = new Wall(0, 36, 1, 1, 1, 1);



despawn("Contains", [ //Sexy MapLock effect!!!
    "RocketEnvironment.[0]Environment.[6]PlayersPlace",
    "RocketEnvironment.[0]Environment.[7]RocketCarL",
    "RocketEnvironment.[0]Environment.[8]RocketCarR",
    "RocketEnvironment.[0]Environment.[8]RocketCarR.[0]Shadow",
    "RocketEnvironment.[0]Environment.[7]RocketCarL.[0]Shadow",
    "RocketEnvironment.[0]Environment.[3]Mirror",
    "RocketEnvironment.[0]Environment.[4]RocketArena",
    "RocketEnvironment.[0]Environment.[39]BackColumns",
    "RocketEnvironment.[0]Environment.[5]Construction"
])



//36.1, 52

for(let i = 0; i < 200; i++){
    
    starWall1.scale = [0.1, 0.1, 0.1]
    starWall1.animate.definitePosition = [rand(-10, 10),rand(-10, 10),rand(-10, 10)]
    starWall1.animate.position = [
        [rand(-10, 10),rand(-10, 10),rand(-10, 10), 0],
        [rand(-10, 10),rand(-10, 10),rand(-10, 10), 0.2],
        [rand(-10, 10),rand(-10, 10),rand(-10, 10), 0.4],
        [rand(-10, 10),rand(-10, 10),rand(-10, 10), 0.6],
        [rand(-10, 10),rand(-10, 10),rand(-10, 10), 0.8],
        [rand(-10, 10),rand(-10, 10),rand(-10, 10), 1]
    ]
    starWall1.animate.localRotation = [
        [rand(-360, 360),rand(-360, 360),rand(-360, 360),0],
        [rand(-360, 360),rand(-360, 360),rand(-360, 360),0.1],
        [rand(-360, 360),rand(-360, 360),rand(-360, 360),0.2],
        [rand(-360, 360),rand(-360, 360),rand(-360, 360),0.3],
        [rand(-360, 360),rand(-360, 360),rand(-360, 360),0.4],
        [rand(-360, 360),rand(-360, 360),rand(-360, 360),0.5],
        [rand(-360, 360),rand(-360, 360),rand(-360, 360),0.6],
        [rand(-360, 360),rand(-360, 360),rand(-360, 360),0.7],
        [rand(-360, 360),rand(-360, 360),rand(-360, 360),0.8],
        [rand(-360, 360),rand(-360, 360),rand(-360, 360),0.9],
        [rand(-360, 360),rand(-360, 360),rand(-360, 360),1]
    ]
    starWall1.animate.dissolve = [
        [1, 0],
        [1, 0.1],
        [1, 0.2],
        [1, 0.3],
        [1, 0.4],
        [1, 0.5],
        [1, 0.6],
        [1, 0.7],
        [1, 0.8],
        [0.8, 0.9],
        [0, 1],
    ]
    starWall1.push();
}
//68.2





notesBetween(0, 36, (note) => {
    note.noteLook = false
    note.animate.position = [
        [rand(-10, 10), rand(-10, 10), rand(-10, 10), 0],
        [rand(-10, 10), rand(-10, 10), rand(-10, 10), 0.1, "splineCatmullRom"],
        [0, 0, 0, 0.3]
    ]
    note.animate.dissolve = [
        [0, 0],
        [0, 0.1],
        [0.5, 0.2],
        [0.8, 0.4],
        [1, 0.6]
    ]
    note.offset = 2
})

notesBetween(36.1, 52, (n) => {
    n.animate.dissolveArrow = [
        [1, 0],
        [0.8, 0.1],
        [0.5, 0.2],
        [0.3, 0.3],
        [0.4, 0.4],
        [0.9, 0.5],
        [0.6, 0.6],
        [0.2, 0.7],
        [0.4, 0.8],
        [0.1, 0.9],
        [0.6, 1],
    ]
    n.animate.color = [
        [rand(0, 1),rand(0, 1),rand(0, 1),1,0],
        [rand(0, 1),rand(0, 1),rand(0, 1),1,0.2],
        [rand(0, 1),rand(0, 1),rand(0, 1),1,0.4],
        [rand(0, 1),rand(0, 1),rand(0, 1),1,0.6],
        [rand(0, 1),rand(0, 1),rand(0, 1),1,0.8],
        [rand(0, 1),rand(0, 1),rand(0, 1),1,0.1]
    ]
    rand
})
//1 fully opaque

notesBetween(52.1, 69, (n) =>{
    n.animate.position = [
        [rand(-30, 30), rand(-20, 30), 0, 0],
        [rand(-30, 30), rand(-20, 30), 0, 0.1],
        [0, 0, 0, 0.3, "easeOutCirc", "splineCatmullRom"]
        
    ]
    n.offset = 1
    n.animate.dissolve = [
        [1, 0],
        [0.8, 0.1],
        [0.5, 0.2],
        [0.3, 0.3],
        [0.4, 0.4],
        [0.9, 0.5],
        [0.6, 0.6],
        [0.2, 0.7],
        [0.4, 0.8],
        [0.1, 0.9],
        [0.6, 1],
    ]
})


notesBetween(85, 85.6, (n) => {
    if(n.time === 85.23){
        const fakeN = new Note(85.23, NOTETYPE.BLUE, CUT.DOT, 3, 0)
        fakeN.animate.color = [
            [rand(0, 1),rand(0, 1),rand(0, 1),1,0],
            [rand(0, 1),rand(0, 1),rand(0, 1),1,0.2],
            [rand(0, 1),rand(0, 1),rand(0, 1),1,0.4],
            [rand(0, 1),rand(0, 1),rand(0, 1),1,0.6],
            [rand(0, 1),rand(0, 1),rand(0, 1),1,0.8],
            [rand(0, 1),rand(0, 1),rand(0, 1),1,0.1]
        ]
        fakeN.push();
        const fakeN1 = new Note(85.23, NOTETYPE.RED, CUT.DOWN_RIGHT, 1, 1)
        fakeN1.animate.color = [
            [rand(0, 1),rand(0, 1),rand(0, 1),1,0],
            [rand(0, 1),rand(0, 1),rand(0, 1),1,0.2],
            [rand(0, 1),rand(0, 1),rand(0, 1),1,0.4],
            [rand(0, 1),rand(0, 1),rand(0, 1),1,0.6],
            [rand(0, 1),rand(0, 1),rand(0, 1),1,0.8],
            [rand(0, 1),rand(0, 1),rand(0, 1),1,0.1]
        ]
        fakeN1.push();
    }
})


//Fake note stuff :]

const fakeN2 = new Note(87.23, NOTETYPE.BLUE, CUT.RIGHT, 2, 2)
fakeN2.animate.color = [
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.2],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.4],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.6],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.8],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.1]
]
fakeN2.push();

const fakeN3 = new Note(87.23, NOTETYPE.RED, CUT.DOWN_RIGHT, 2, 1)
fakeN3.animate.color = [
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.2],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.4],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.6],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.8],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.1]
]
fakeN3.push();



const fakeN4 = new Note(88.483, NOTETYPE.BLUE, CUT.LEFT, 1, 1)
fakeN4.animate.color = [
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.2],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.4],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.6],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.8],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.1]
]
fakeN4.push();

const fakeN5 = new Note(89.2, NOTETYPE.BLUE, CUT.RIGHT, 2, 2)
fakeN5.animate.color = [
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.2],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.4],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.6],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.8],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.1]
]
fakeN5.push();

const fakeN6 = new Note(89.2, NOTETYPE.RED, CUT.DOWN, 1, 1)
fakeN6.animate.color = [
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.2],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.4],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.6],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.8],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.1]
]
fakeN6.push();



const fakeN7 = new Note(90.483, NOTETYPE.BLUE, CUT.DOWN_LEFT, 2, 1)
fakeN7.animate.color = [
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.2],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.4],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.6],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.8],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.1]
]
fakeN7.push();

const fakeN8 = new Note(91.23, NOTETYPE.BLUE, CUT.UP_RIGHT, 2, 1)
fakeN8.animate.color = [
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.2],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.4],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.6],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.8],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.1]
]
fakeN8.push();

const fakeN9 = new Note(91.23, NOTETYPE.RED, CUT.DOWN_RIGHT, 1, 1)
fakeN9.animate.color = [
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.2],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.4],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.6],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.8],
    [rand(0, 1),rand(0, 1),rand(0, 1),1,0.1]
]
fakeN9.push();

notesBetween(92, 100.243, (n) => {
    n.animate.color = [
        [rand(0, 1),rand(0, 1),rand(0, 1),1,0],
        [rand(0, 1),rand(0, 1),rand(0, 1),1,0.1],
        [rand(0, 1),rand(0, 1),rand(0, 1),1,0.2],
        [rand(0, 1),rand(0, 1),rand(0, 1),1,0.3],
        [rand(0, 1),rand(0, 1),rand(0, 1),1,0.4],
        [rand(0, 1),rand(0, 1),rand(0, 1),1,0.5],
        [rand(0, 1),rand(0, 1),rand(0, 1),1,0.6],
        [rand(0, 1),rand(0, 1),rand(0, 1),1,0.7],
        [rand(0, 1),rand(0, 1),rand(0, 1),1,0.8],
        [rand(0, 1),rand(0, 1),rand(0, 1),1,0.9],
        [rand(0, 1),rand(0, 1),rand(0, 1),1,0.1]
        
    
    ]
    
})


notesBetween(100, 117, (n) => {
    n.animate.rotation = [
        [rand(-360, 360),rand(-360, 360),rand(-360, 360), 0],
        [0, 0, 0, 0.3, "easeOutQuad"]
    ]
    n.animate.position = [
        [rand(-10, 10), rand(0, 5), rand(-20, -10), 0],
        [0, 0, 0, 0.2, "splineCatmullRom"]
    ]
    n.animate.color = [
        [rand(0, 1), rand(0, 1), rand(0, 1), 1, 0],
        [rand(0, 1), rand(0, 1), rand(0, 1), 1, 0.2],
        [rand(0, 1), rand(0, 1), rand(0, 1), 1, 0.4],
        [rand(0, 1), rand(0, 1), rand(0, 1), 1, 0.6],
        [rand(0, 1), rand(0, 1), rand(0, 1), 1, 0.8],
        [rand(0, 1), rand(0, 1), rand(0, 1), 1, 1]
    ]
    n.offset = 1
})


notesBetween(118, 125, (n) => {
    n.animate.dissolveArrow = [
        [1, 0],
        [rand(0,1), 0.2],
        [rand(0,1), 0.4],
        [rand(0,1), 0.6],
        [rand(0,1), 0.8],
        [rand(0,1), 1]

    ]
    n.animate.dissolve = [
        [1, 0],
        [rand(0,1), 0.2],
        [rand(0,1), 0.4],
        [rand(0,1), 0.6],
        [rand(0,1), 0.8],
        [rand(0,1), 1]

    ]
})

notesBetween(125.1, 132, (n) => {
    n.animate.color = [
        [0.431372549, 0.8392156863, 1, 1, 0],
        [0.9803921569, 0.431372549, 1, 1, 0.2],
        [0.431372549, 0.8392156863, 1, 1, 0.4],
        [0.9803921569, 0.431372549, 1, 1, 0.6],
        [0.431372549, 0.8392156863, 1, 1, 0.8],
        [0.9803921569, 0.431372549, 1, 1, 1],
    ]
    n.animate.localRotation = [
        [rand(-360, 360),rand(-360, 360),rand(-360, 360), 0],
        [rand(-360, 360),rand(-360, 360),rand(-360, 360), 0.2],
        [0,0,0, 0.4],
        [0, 0, 0, 0.8],
        [0, 0, 0, 1],
    ]
})

notesBetween(132.1, 149, (n) => {
    n.animate.dissolveArrow = [
        [1, 0],
        [rand(0,1), 0.2],
        [rand(0,1), 0.4],
        [rand(0,1), 0.6],
        [rand(0,1), 0.8],
        [rand(0,1), 1]

    ]
    n.animate.dissolve = [
        [1, 0],
        [rand(0,1), 0.2],
        [rand(0,1), 0.4],
        [rand(0,1), 0.6],
        [rand(0,1), 0.8],
        [rand(0,1), 1]

    ]
   


})
notesBetween(149, 180.2, (n) => {
    n.animate.position = [
        [0, -20, 0, 0],
        [0, 0, 5, 0.4, "splineCatmullRom"]

    ]
    
})

notesBetween(180.3, 213, (n) => {
    n.animate.color = [
        [1, 0, 0, 1, 0],  //red
        [1, 0.493, 0, 1, 0.2], //orange
        [1, 0, 0, 1, 0.4],
        [1, 0.493, 0, 1, 0.8],
        [1, 0, 0, 1, 1],  
    ]
})
//228 to 260.8 MAP NEXT INTENSEEE

notesBetween(228, 260.8, (n) => {
    n.animate.position = [
        [rand(-10, 10),rand(-10, 10),rand(10, 20),0],
        [0, 0, 0, 0.3, "splineCatmullRom"]
    ]
})

notesBetween(260, 293, (n) => {
    n.animate.dissolve = [
        [rand(0, 1), 0],
        [rand(0, 1), 0.2],
        [rand(0, 1), 0.4],
        [rand(0, 1), 0.6],
        [rand(0, 1), 0.8],
        [rand(0, 1), 1],

    ]
})

notesBetween(296.457, 329, (n) => {
    n.animate.dissolve = [
        [rand(0, 1), 0],
        [rand(0, 1), 0.2],
        [rand(0, 1), 0.4],
        [rand(0, 1), 0.6],
        [rand(0, 1), 0.8],
        [rand(0, 1), 1],

    ]
    n.animate.position = [
        [rand(-10, 10), rand(-10, 10), rand(-10, 10), 0],
        [rand(-10, 10), rand(-10, 10), rand(-10, 10), 0.1, "splineCatmullRom"],
        [0, 0, 0, 0.3]
    ]
    n.offset = 2
    


})

//296.457 to 329
map.colorRight = [1,0,0]
map.colorLeft = [1, 0.493, 0]
console.log(map.fakeWalls.length);
map.require("Noodle Extensions", true)
map.require("Chroma", true)
map.save();
