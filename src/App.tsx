import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {NotesState} from './notesReducer';
import HomePage from './components/HomePage';

function App() {
   const dispatch = useDispatch();
   const notes = useSelector<NotesState, NotesState['notes']>((state) => state.notes);

   const addNote = (note: string) => {
      dispatch({type: 'ADD_NOTE', payload: note});
   }

   const removeNote = (note: string) => {
      const filteredData = notes.filter(del => del !== note);
      dispatch({type: 'REMOVE_NOTE', payload: filteredData});
   }
  return (
    <div className="App">
     <HomePage addNote={addNote} />
     <div>
        {notes.map((note, i) => (
           <p key={i} onClick={() => removeNote(note)}>{note}</p>
        ))}
     </div>
    </div>
  );
}

export default App;
