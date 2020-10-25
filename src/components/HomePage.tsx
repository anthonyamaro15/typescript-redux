import React, {useState} from 'react';

interface Props {
   addNote: (note: string)  => void;
}

const HomePage: React.FC<Props> = ({addNote}) => {
   const [note, setNote] = useState('');

   const getNoteValue = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setNote(e.target.value);
   }

   const onAddNoteClick = () => {
      addNote(note);
      setNote('');
   }
   return (
      <div>
         <input onChange={getNoteValue} value={note} type="text" name="note" placeholder="enter note"/>
         <button onClick={onAddNoteClick}>add note</button>
      </div>
   )
}

export default HomePage;