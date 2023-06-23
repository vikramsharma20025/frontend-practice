function ageindayss(){
    const Year = new Date().getFullYear(); 
    var birthyear = prompt('Enter your birth year');
    var ageindays = (Year-birthyear)*365;
    var h1 = document.createElement('h1');
    h1.setAttribute('id','addedageindays');
    h1.appendChild(document.createTextNode('You are '+ageindays+' days old'));
    document.getElementById('output-1').appendChild(h1);
}
function reset(){
    document.getElementById('addedageindays').remove();
}
function generatecat(){
    var image = document.createElement('img');
    var div = document.getElementById('output-2');
    image.src = "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg";
    image.setAttribute('id','addedcat');
    image.setAttribute('width','150px');
    image.setAttribute('height','180px');
    div.appendChild(image);
}
function rockpaperscisor(){
    var outputt = Math.random();
    outputt = outputt*3;
    outputt = Math.floor(outputt);
    var output = ['rock','paper','scissor'];
    var computerinput = output[outputt];
    var image = document.createElement('img');
    image.setAttribute('id','addedimage');
    image.setAttribute('width','150px');
    image.setAttribute('height','180px');
    var div = document.getElementById('output-3');
    if(computerinput == 'rock'){
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQURRXMrcqSwUakqkJlGctmSqvY3HueOSKw3xdDhgGpOwlSaG9gsJ9iBCKh65RE7bjp-v4&usqp=CAU";
    }
    else if(computerinput == 'paper'){
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46qLLJk3772plFAia5-Ty2rv2as6vj6rf0ep0uNl3RvdxjIYPaRi5n5IlfnQrvazs6t0&usqp=CAU";
    }
    else{
        image.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400144/rock-paper-scissors/scissors.png";
    }
    div.appendChild(image);
}
function playagain(){
    var div = document.getElementById('addedimage');
    div.remove();
}