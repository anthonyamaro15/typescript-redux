import React, {useState} from 'react';



const HomePage = () => {
   const [note, setNote] = useState('');

   const getNoteValue = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setNote(e.target.value);
   }

   const onAddNoteClick = () => {
      console.log('what is this value? ', note);
   }
   return (
      <div>
         <input onChange={getNoteValue} value={note} type="text" name="note" placeholder="enter note"/>
         <button onClick={onAddNoteClick}>add note</button>
      </div>
   )
}

export default HomePage;