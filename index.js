const autoplay = document.getElementById('container')
const startBtn = document.getElementById('start-btn')

startBtn.addEventListener('click',startingSadhana)

function startingSadhana(){
// pathang asanam
    autoplay.innerHTML = `<div> <h1>pathanga asanam
    </h1>
    <audio   controls autoplay >
        <source src="files/bell-172780.mp3" type="audio/mp3"></audio> </div>`

// sisupala asanam right
setTimeout(function(){
    autoplay.innerHTML = `<div> <h1>sisupala asanam right
        </h1>
        <audio   controls autoplay >
            <source src="files/bell-172780.mp3" type="audio/mp3"></audio> </div>`
            
},2*60*1000)// pathang asanam time

// sisupala asanam left
setTimeout(function(){
    autoplay.innerHTML = `<div> <h1>sisupala asanam left
        </h1>
        <audio   controls autoplay >
            <source src="files/bell-172780.mp3" type="audio/mp3"></audio> </div>`
            
},4*60*1000)// sisupala asanam right

//nadii-vibajana asanam 3 sets
setTimeout(function(){
    autoplay.innerHTML = `<div> <h1>nadii-vibajana asanam 3 sets
        </h1>
        <audio   controls autoplay >
            <source src="files/bell-172780.mp3" type="audio/mp3"></audio> </div>`
            
},6*60*1000)// sisupala asanam left

//step 1 in shambavi 
setTimeout(function(){
    autoplay.innerHTML = `<div> <h1>step 1 in shambavi asanam 
        </h1>
        <audio   controls autoplay >
            <source src="files/bell-172780.mp3" type="audio/mp3"></audio> </div>`
            
},9*60*1000)//nadii-vibajana asanam 3 sets

//step 2 in shambavi (21 times om)
setTimeout(function(){
    autoplay.innerHTML = `<div> <h1>step 2 in shambavi chant 21 times om
        </h1>
        <audio   controls autoplay >
            <source src="files/bell-172780.mp3" type="audio/mp3"></audio> </div>`
            
},15*60*1000)//step 1 in shambavi 

//step 3 in shambavi (viparitha swasaa)
setTimeout(function(){
    autoplay.innerHTML = `<div> <h1>step 3 in shambavi (viparitha swasaa)
        </h1>
        <audio   controls autoplay >
            <source src="files/bell-172780.mp3" type="audio/mp3"></audio> </div>`
            
},18*60*1000)//step 2 in shambavi (21 times om)

//step 4 in shambavi nadi bandham 
setTimeout(function(){
    autoplay.innerHTML = `<div> <h1>step 4 in shambavi asanam
        </h1>
        <audio   controls autoplay >
            <source src="files/bell-172780.mp3" type="audio/mp3"></audio> </div>`
            
},23*60*1000)//step 3 in shambavi (viparitha swasaa)

////step 5 in shambavi (take a normal breath for 6 min)
setTimeout(function(){
    autoplay.innerHTML = `<div> <h1>step 5 in shambavi asanam
        </h1>
        <audio   controls autoplay >
            <source src="files/bell-172780.mp3" type="audio/mp3"></audio> </div>`
            
},25*60*1000)//step 4 in shambavi nadi bandham 

//challange completed
setTimeout(function(){
    autoplay.innerHTML = `<div> <h1>well done you complete the challange!
        </h1>
        </div>`
            
},31*60*1000)////step 5 in shambavi (take a normal breath for 6 min)


}

