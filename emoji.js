let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

let pickFighters1 =Math.floor(Math.random()*fighters.length)
console.log(pickFighters1)
let pickFighters2 =Math.floor(Math.random()*fighters.length)
console.log(pickFighters2)
stageEl.textContent=fighters[pickFighters1] + " vs " + fighters[pickFighters2]
})