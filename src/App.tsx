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
  return (
    <div className="App">
     <HomePage addNote={addNote} />
     <div>
        {notes.map((note, i) => (
           <p key={i}>{note}</p>
        ))}
     </div>
    </div>
  );
}

export default App;
