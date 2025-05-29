const testimonial = [
    {
        name:"cherise G",
        photoUrl:"https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text:"Would definitely recommend apple and will definitely be ordering again"

    },
    {
        name:"bruse A",
        photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfDJ8MHx8fDA%3D",
        text:"With apple, communication between all of us is far more efficient. A game changer."
    },
    {
        name:"pilar",
        photoUrl:"https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfDJ8MHx8fDA%3D",
        text:"If you are a business owner, and you don't have apple in your toolkit just yet, I highly recommend that you check it out."
    },
    {
        name:"Rav",
        photoUrl:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfDJ8MHx8fDA%3D",
        text:"If you want to take your business to the next level, use apple and don't look any further."
    },
];


const imgE1 = document.querySelector(".img")
const textE1 = document.querySelector(".text")
const usernameE1 = document.querySelector("username")

let idx = 0;

updateTestimonial();

function updateTestimonial(){
    const {name, photoUrl, text} = testimonial[idx];
    imgE1.src = photoUrl
    textE1.innerText = text;
    usernameE1.innerText = name;
    idx++;
    if(idx === testimonial.length){
        idx = 0;
    }
    setTimeout(() => {
            updateTestimonial();
    },1000);
   

}