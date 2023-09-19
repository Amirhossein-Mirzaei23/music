
let audio=document.getElementById("audio")
const prev=document.getElementById("prev")
const next=document.getElementById("next")
const play=document.getElementById("svgPlay")
const paues=document.getElementById("svgPause")
let songName=document.getElementById("h1")
let nameBgColor=document.getElementById("bg-Name")
let background=document.getElementById("body")
let main=document.querySelector("main")
let buttonDiv=document.getElementById("buttonDiv")
let eyeOpen=document.getElementById("svgEyeOpen")
let eyeClose=document.getElementById("svgEveClose")
//let nameBgColorMobile=document.getElementById("bg-NameMoblie")
////
let bgSrcSpace=["aa"]
let audioIndex=0
let bgsrcIndex=0
// song list tabee 
let songProp=0
let ul=document.getElementById("ul")

let li1=document.getElementById("li1")
/////theme
let bgIndex=0
////
let bgSrc=[
    "gif/snow.gif"
    ,"gif/space.gif"
    ,"gif/sunrise.gif"
    ,"gif/proggold.gif"
    ,"gif/cloud.gif"
    ,"gif/bangok.gif"
    ,"gif/lightgame.gif"
]

let musicSrc=[
    ,"song/01 The Rolling Stones - Start Me Up [Remastered 2009].mp3"
    ,"song/02 Robert Palmer - Addicted to Love.mp3"
    ,"song/03 The Human League - Don't You Want Me.mp3"
    ,"song/04 Mike Oldfield - Moonlight Shadow.mp3"
    ,"song/05 Soft Cell - Tainted Love.mp3"
    ,"song/06 Bee Gees - Night Fever (From Saturday Night Fever Soundtrack).mp3"
    ,"song/07 Katrina & The Waves - Walking on Sunshine.mp3"
    ,"song/08 Michael Sembello - Maniac (From Flashdance).mp3"
    ,"song/09 Kool & The Gang - Celebration (Single Version).mp3"
    ,"song/1.mp3"
    ,"song/10 Alan Sorrenti - Figli Delle Stelle.mp3"

]
let A=" "
let bgSrc1=[
    ,"bg-gradient-to-l" 
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r" 
    ,"bg-gradient-to-r" 
    ,"bg-gradient-to-r" 
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r" 
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r"
]
let bgSrc2=[
    ,"from-sky-900"
    ,"from-green-300"
    ,"from-pink-300"
    ,"from-pink-500"
    ,"from-yellow-100"
    ,"from-indigo-200"
    ,"from-yellow-200"
    ,"from-red-200"
    ,"from-gray-200"
    ,"from-green-200"
    ,"from-green-200"
    ,"from-green-200"
    ,"from-indigo-300"
    ,"from-gray-400"
    ,"from-green-200"
    ,"from-blue-100"
    ,"from-red-400"
]
let bgSrc3=[
    ,"via-blue-500"
    ,"via-purple-300"
    ,"via-red-500"
    ,"via-yellow-300"
    ,"via-red-200"
    ,"via-green-200"
    ,"via-red-300"
    ,"via-gray-400"
    ,"via-green-300"
    ,"via-green-400"
    ,"via-green-300"
    ,"via-gray-600"
    ,"to-green-500"
    ,"via-blue-300"
    ,"via-gray-300"
]
let bgSrc4=[
     "to-purple-600"
    ,"to-indigo-400"
    ,"to-yellow-500"
    ,"to-yellow-500"
    ,"to-yellow-100"
    ,"to-green-500"
    ,"to-yellow-200"
    ,"to-gray-600"
    ,"to-blue-500"
    ,"to-purple-700"
    ,"to-blue-400"
    ,"to-purple-400"
    ,"to-blue-800"
    ,"to-blue-500"
    ," to-blue-500"
]

console.log(audio)
//////////////

//**song list paly

function choose(){
let choosenLi=event.target
let nameSong=choosenLi.innerHTML
let amir =0
while(amir<musicSrc.length){
    amir++
    if(musicSrc[amir]==nameSong){
        console.log(musicSrc[amir])
        audio.setAttribute("src",musicSrc[amir])
        audio.play()
        songName.innerHTML=musicSrc[amir]
        newAudioo=amir
    }
}


 console.log(choosenLi)


}
/////////////
function previosHandeler(){
    li1.classList.add("hidden")
    audioIndex--
    if(audioIndex<0){
        audioIndex=musicSrc.length-1
    }
    let newAudioo=audioIndex
    console.log(musicSrc[newAudioo]);
    songName.innerHTML=musicSrc[newAudioo]
    audio.setAttribute("src",musicSrc[newAudioo])
    audio.play()

     while (songProp<musicSrc.length) {
        let songNumber=songProp+1
        songProp++
     let musicSrcName = musicSrc[songNumber]
     let li= document.createElement("li")
   
     li.className="hover:scale-90 hover:bg-slate-400 text-sm sm:text-lg my-1 hover:-translate-x-16 ease-linear transition-all"
     li.innerHTML=musicSrcName
    
     console.log(li)
     ul.append(li)
     li.addEventListener("click",choose)

  }

  ////////////////////////////bg.gradayant
  newBgSrc=bgsrcIndex+1
    bgsrcIndex++

    bgSrcNew=bgSrc1[newBgSrc]+bgSrcSpace[0]+bgSrc2[newBgSrc]+bgSrcSpace[0]+bgSrc3[newBgSrc]+bgSrcSpace[0]+bgSrc4[newBgSrc]
    bgSrcOld=bgSrc1[newBgSrc-1]+bgSrcSpace+bgSrc2[newBgSrc-1]+bgSrcSpace+bgSrc3[newBgSrc-1]+bgSrcSpace+bgSrc4[newBgSrc-1]
    if(newBgSrc>14){
        bgsrcIndex=1
        }
        nameBgColor.classList.remove("bg-teal-300")
        nameBgColor.classList.remove(bgSrc1[newBgSrc-1])
        nameBgColor.classList.remove(bgSrc2[newBgSrc-1])
        nameBgColor.classList.remove(bgSrc3[newBgSrc-1])
        nameBgColor.classList.remove(bgSrc4[newBgSrc-1])

        nameBgColor.classList.add(bgSrc1[newBgSrc])
        nameBgColor.classList.add(bgSrc2[newBgSrc])
        nameBgColor.classList.add(bgSrc3[newBgSrc])
        nameBgColor.classList.add(bgSrc4[newBgSrc]) 
 //       //mobile bg-gradiant
 //       nameBgColorMobile.classList.remove("bg-indigo-300")
 //       nameBgColorMobile.classList.remove(bgSrc1[newBgSrc-1])
 //       nameBgColorMobile.classList.remove(bgSrc2[newBgSrc-1])
 //       nameBgColorMobile.classList.remove(bgSrc3[newBgSrc-1])
 //       nameBgColorMobile.classList.remove(bgSrc4[newBgSrc-1])
//
 //       nameBgColorMobile.classList.add(bgSrc1[newBgSrc])
 //       nameBgColorMobile.classList.add(bgSrc2[newBgSrc])
 //       nameBgColorMobile.classList.add(bgSrc3[newBgSrc])
 //       nameBgColorMobile.classList.add(bgSrc4[newBgSrc])


}
//
function playHandeler(){

    if(play.classList.contains("hidden")){
        audio.pause()
        console.log("pause");
        paues.classList.add("hidden")
        play.classList.remove("hidden")
    }else{
        audio.play()
        console.log("play");
        paues.classList.remove("hidden")
        play.classList.add("hidden")
    }

    

     
}
//
function nextHandeler(){
    li1.classList.add("hidden")
     newAudio = audioIndex+1
    console.log(musicSrc[newAudio]);
    songName.innerHTML=musicSrc[newAudio]
    audioIndex++
    if (audioIndex>musicSrc.length-2){
        audioIndex=0
    }
    audio.setAttribute("src",musicSrc[newAudio])
    audio.play()
    ////////////
  while (songProp<musicSrc.length) {
    let songNumber=songProp+1
    songProp++
 let musicSrcName = musicSrc[songNumber]
 let li= document.createElement("li")

 li.className="hover:scale-90 hover:bg-slate-400 text-sm sm:text-lg my-1 hover:-translate-x-16 ease-linear transition-all"
 li.innerHTML=musicSrcName

 console.log(li)
 ul.append(li)
 li.addEventListener("click",choose)

}
////////////////////////////
    newBgSrc=bgsrcIndex+1
    bgsrcIndex++

    bgSrcNew=bgSrc1[newBgSrc]+bgSrcSpace[0]+bgSrc2[newBgSrc]+bgSrcSpace[0]+bgSrc3[newBgSrc]+bgSrcSpace[0]+bgSrc4[newBgSrc]
    bgSrcOld=bgSrc1[newBgSrc-1]+bgSrcSpace+bgSrc2[newBgSrc-1]+bgSrcSpace+bgSrc3[newBgSrc-1]+bgSrcSpace+bgSrc4[newBgSrc-1]
    if(newBgSrc>14){
        bgsrcIndex=1
        }
        nameBgColor.classList.remove("bg-teal-300")
        nameBgColor.classList.remove(bgSrc1[newBgSrc-1])
        nameBgColor.classList.remove(bgSrc2[newBgSrc-1])
        nameBgColor.classList.remove(bgSrc3[newBgSrc-1])
        nameBgColor.classList.remove(bgSrc4[newBgSrc-1])

        nameBgColor.classList.add(bgSrc1[newBgSrc])
        nameBgColor.classList.add(bgSrc2[newBgSrc])
        nameBgColor.classList.add(bgSrc3[newBgSrc])
        nameBgColor.classList.add(bgSrc4[newBgSrc]) 

  //        //mobile bg-gradiant
  //        nameBgColorMobile.classList.remove("bg-indigo-300")
  //        nameBgColorMobile.classList.remove(bgSrc1[newBgSrc-1])
  //        nameBgColorMobile.classList.remove(bgSrc2[newBgSrc-1])
  //        nameBgColorMobile.classList.remove(bgSrc3[newBgSrc-1])
  //        nameBgColorMobile.classList.remove(bgSrc4[newBgSrc-1])
//
  //        nameBgColorMobile.classList.add(bgSrc1[newBgSrc])
  //        nameBgColorMobile.classList.add(bgSrc2[newBgSrc])
  //        nameBgColorMobile.classList.add(bgSrc3[newBgSrc])
  //        nameBgColorMobile.classList.add(bgSrc4[newBgSrc])

    
     //       li7.innerHTML=musicSrc[newAudio+6]
    }
    setInterval(function (){
        newBgSrc=bgsrcIndex+1
        bgsrcIndex++

        if(newBgSrc>14){
            bgsrcIndex=1
            }

        background.classList.remove("bg-sky-400")
        background.classList.remove(bgSrc1[newBgSrc-1])
        background.classList.remove(bgSrc2[newBgSrc-1])
        background.classList.remove(bgSrc3[newBgSrc-1])
        background.classList.remove(bgSrc4[newBgSrc-1])
        background.classList.add(bgSrc1[newBgSrc])
        background.classList.add(bgSrc2[newBgSrc])
        background.classList.add(bgSrc3[newBgSrc])
        background.classList.add(bgSrc4[newBgSrc]) 
    },4000)
    function bgChanger(){
if (bgIndex<bgSrc.length){
    let bgProp=bgIndex+1
    bgIndex++
    background.setAttribute("style",`background-image: url(${bgSrc[bgProp-1]}); background-size: cover;background-repeat: no-repeat; background-attachment: fixed; background-position: center;`) 
console.log(bgProp)
}else{
    bgIndex=0
}

     let main=document.getElementById("main")
    }
    function hiddenn(){
        if(main.classList.contains("hidden")){
            console.log("amir2")
            main.classList.add("sm:grid")
            main.classList.add("grid-cols-2")
            main.classList.remove("hidden")
            buttonDiv.classList.remove("mx-auto")
            buttonDiv.classList.add("ml-6")
            eyeClose.classList.add("hidden")
            eyeOpen.classList.remove("hidden")
        }else{
            main.classList.remove("sm:grid")
            main.classList.remove("grid-cols-2")
            main.classList.add("hidden")
            buttonDiv.classList.add("mx-auto")
            buttonDiv.classList.remove("ml-2")
            console.log("amir")
            eyeOpen.classList.add("hidden")
            eyeClose.classList.remove("hidden")
        }
        
    }
