import { easeInOutQuad, easeOutBounce } from "https://deno.land/x/remapper@2.1.0/src/easings.ts";
import { Difficulty, info, Environment, Animation, notesBetween, Note } from "https://deno.land/x/remapper@2.1.0/src/mod.ts" // MAKE SURE THIS IS ON THE LATEST REMAPPER VERSION!!!!!!!!!
import * as MapL from './src/exports.ts'

const map = new Difficulty("HardStandard.dat", "ExpertStandard.dat");
//Info or somethin
console.log(map.rawEnvironment)
console.log("Song BPM is:" +  info.BPM)
console.log("Song Environment is:" + info.environment)
map.require("Chroma", true)
map.require("Noodle Extensions", true)
map.NJS = 10
map.settings.smoke = false
map.settings.screenDistortion = false
map.settings.hideSpawnEffect = true



//Environment
MapL.despawn("Contains", [
    "TimbalandEnvironment.[0]Environment.[20]TimbalandLogo (1)",
    "TimbalandEnvironment.[0]Environment.[21]TimbalandLogo (2)",
    "TimbalandEnvironment.[0]Environment.[22]TimbalandLogo (3)",
    "TimbalandEnvironment.[0]Environment.[17]TimbalandLogo",
    "TimbalandEnvironment.[0]Environment.[5]Buildings",
    "TimbalandEnvironment.[0]Environment.[3]MainStructure",
    "TimbalandEnvironment.[0]Environment.[24]GlowLineR",
    "TimbalandEnvironment.[0]Environment.[11]PlayersPlace",
    "TimbalandEnvironment.[0]Environment.[12]DustPS",
    "TimbalandEnvironment.[0]Environment.[4]TopStructure",
    "TimbalandEnvironment.[0]Environment.[7]TrackConstruction",
    "TimbalandEnvironment.[0]Environment.[0]DecoratorContext",
    "TimbalandEnvironment.[0]Environment.[10]BasicGameHUD",
    "TimbalandEnvironment.[0]Environment.[9]Spectrograms",
    "TimbalandEnvironment.[0]Environment.[15]BigSmokePS",
    "TimbalandEnvironment.[0]Environment.[16]CoreLighting.[1]DirectionalLight",
    "TimbalandEnvironment.[0]Environment.[16]CoreLighting.[0]LightManager",
    "TimbalandEnvironment.[0]Environment.[16]CoreLighting",
    "TimbalandEnvironment.[0]Environment.[23]GlowLineL"
    
])




// SCRIPT stuff uwu
notesBetween(36, 66, (note) => {
    note.animate.position = [[0, 20, 0, 0], [0, 0, 0, 0.1, "easeOutCirc"]] 
})

notesBetween(0, 35, (note) => {
    note.animate.localRotation = [[270, 0, 0, 0], [0, 0, 0, 0.5, "easeInOutCirc"]]
})

notesBetween(67, 83.5, (note) => {
    note.animate.dissolve = [[1, 0], [0.3, 0.5]]
})

notesBetween(83.5, 100, (note) => {
    note.animate.dissolveArrow = [[1, 0], [0.3, 0.5]]
})

notesBetween(132, 163.318, (note) => {
    note.animate.localRotation = [[0, 0, 0, 0], [32, 3, 3, 0.5, "easeInOutCirc"]]
})

notesBetween(195.378, 195.6, (note) => {
    note.animate.dissolve = [[1, 0], [0.3, 0.2]]
})

notesBetween(196, 226, (note) => {
    
    
    note.animate.dissolve = [[0.3, 0.0], [0.8, 0.2], [0.3, 0.4], [0.9, 0.8], [0.5, 1]]
})

notesBetween(259, 291, (note) => {
    note.animate.position = [[0, 20, 0, 0], [0, 0, 0, 0.1, "easeInOutQuad"]] 
})
map.save();  

//TIME STAMPS 
//67 - 100
//196 - 203