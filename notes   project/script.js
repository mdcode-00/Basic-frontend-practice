// const notesContainer = document.querySelector(".notes-container");
// const createBtn = document.querySelector(".btn");
// let notes = document.querySelector(".input-box");

// function showNotes(){
//     const saveNotes = localStorage.getItem("notes");
//     if(saveNotes){
//         notesContainer.innerHTML = saveNotes;
//     }
// }


// function updateStorage(){
//     localStorage.setItem("notes", notesContainer.innerHTML);
// }

// showNotes();


// createBtn.addEventListener("click" ,()=> {
//     let inputBox = document.createElement("P");
//     let img = document.createElement("img");
//     inputBox.className = "input-box";
//     inputBox.setAttribute("contenteditable","true");
//     img.src = "images/delete.png";
//     notesContainer.appendChild(inputBox).appendChild(img);
// })

// notesContainer.addEventListener("click", function(e){
//     if(e.target.tagName === "IMG"){
//         e.target.parentElement.remove();
//         updateStorage();
//     }
//     else if(e.target.tagName === "p"){
//         notes = document.querySelectorAll(".input-box");
//         notes.forEach(nt => {
//             nt.onkeyup = function(){
//                 updateStorage();
//             }
//         })
//     }
// })

// document.addEventListener("keydown", event =>{
//     if(event.key === "Enter"){
//         document.exesCommend("insertLineBreak");
//         event.preventDefault();
//     }
// })


const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");

// Function to show notes from localStorage
function showNotes() {
    // Get the notes from localStorage and populate the container
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        notesContainer.innerHTML = savedNotes;
    }
}

// Function to update localStorage whenever the content changes
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Call the showNotes function to load saved notes on page load
showNotes();

// Event listener for creating new note
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("P");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    
    // Append new note with delete button
    notesContainer.appendChild(inputBox);
    inputBox.appendChild(img);

    // Focus on new note for editing
    inputBox.focus();

    // Update storage when a key is pressed
    inputBox.addEventListener("input", () => {
        updateStorage();
    });
});

// Event listener for delete button click
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        // If an image (delete button) is clicked, remove the note
        e.target.parentElement.remove();
        updateStorage();
    }
});

// Handle Enter key press to prevent default behavior (line break)
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        // For contenteditable element, insert line break manually
        if (document.activeElement && document.activeElement.isContentEditable) {
            event.preventDefault();
            document.execCommand("insertLineBreak");  // Create a line break
        }
    }
});
