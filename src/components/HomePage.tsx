import React, {useState} from 'react';

interface Props {
   addNote: (note: string)  => void;
}

const HomePage: React.FC<Props> = ({addNote}) => {
   const [note, setNote] = useState('');

   const getNoteValue = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setNote(e.target.value);
   }


   const onSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      addNote(note);
      setNote('');
   }
   return (
      <div>
         <form onSubmit={onSubmit}>
            <input onChange={getNoteValue} value={note} type="text" name="note" placeholder="enter note"/>
            <button type="submit">add note</button>
         </form>
      </div>
   )
}

export default HomePage;