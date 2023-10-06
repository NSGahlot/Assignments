// Step  1
// let url = "https://www.meme.net/babubhaiya.jpg";

// function download(url) {
//     console.log(`Downloading ${url}`);
// }

// function process(url) {
//     console.log(`Processing ${url}`);
// }

// download(url);
// process(url);

// Step 2

// let url = "https://www.meme.net/babubhaiya.jpg";

// function download(url) {
//     setTimeout(function (){
//         console.log(`Downloading ${url}`);
//     }, 3000);
    
// }

// function process(url) {
//     console.log(`Processing ${url}`);
// }

// download(url);
// process(url);

// Sometimes a function (code) is dependent on other function(code)

// Step 3

// let url = "https://www.meme.net/babubhaiya.jpg";

// function download(url, callback) {
//     setTimeout(function (){
//         console.log(`Downloading ${url}`);

//         callback(url); 
//     }, 3000);
    
// }

// function process(url) {
//     console.log(`Processing ${url}`);
// }

// download(url, process);

// We used a callback to create dependency

// Step 4

// function download(url, callback) {
//         setTimeout(function (){
//             console.log(`Downloading ${url}`);
    
//             callback(url); 
//         }, 3000);
        
//     }
    
//     // callback ==> process
    
//     download(url, function process(url) {
//         console.log(`Processing ${url}`);
//     });

// Step 5:

// let url1 = "https://www.meme.net/babubhaiya.jpg";
// let url2 = "https://www.meme.net/raju.jpg";
// let url3 = "https://www.meme.net/shyam.jpg";

// function download(url, callback){
//     setTimeout(function(){
//        console.log(`Downloading ${url}`);

//        callback(url);
//     }, 3000)
// }

// download(url1, function process(url1) {
//             console.log(`Processing ${url1}`); 
            
//             download(url1, function process(url1) {
//                 console.log(`Processing ${url1}`); 
            
//                 download(url1, function process(url1) {
//                     console.log(`Processing ${url1}`); 
//            });
//         }); 
//     });

// Step 6:

function checkTransaction(){
    return true;
}

const myPromise = new Promise(function(resolve, reject) {
          let transcation_status = true;

          setTimeout(function() {
            transcation_status = checkTransaction();

            if(transcation_status === true){
                resolve("Payment sucessfull");
            }
            else{
                reject("Payment failed");
            }
          }, 3000);
});

myPromise
.then(function(res){
    console.log("res:", res);
})
.catch(function(){
    console.log("err:", err)
});
 