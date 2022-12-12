// import React from "react";
// import Header from "./header.jsx";
// import Footer from "./footer.jsx";
// import Note from "./note.jsx";
// import notes from "../notes.js";
//
// // function returnNotes(notes){
// //   return (<Note
// //     key= {notes.key}
// //     title= {notes.title}
// //     content= {notes.content}
// //   />
// // )}
//
//
// function App(){
//   return (
//     <div>
//       <Header />
//       {notes.map(noteItem => (<Note key= {noteItem.key} title= {noteItem.title} content= {noteItem.content} />))}
//       <Footer />
//     </div>
//   );
// }
//
// export default App;

import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
