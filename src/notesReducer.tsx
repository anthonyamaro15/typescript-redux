export interface NotesState {
   notes: string[]
}


const initialState = {
   notes: []
}


type Action = {
   type: string
   payload: any
}
export const notesReducer = (state: NotesState = initialState, action: Action) => {
   switch(action.type) {
      case 'ADD_NOTE': {
         return {
            ...state,
            notes: [...state.notes, action.payload]
         }
         
      }
      case "REMOVE_NOTE": {
         return {
            ...state,
            notes: action.payload
         }
      }
      
      default:
         return state;
   }
}