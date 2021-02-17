let initialState={

    exercises:[],
    planExercises:[],
    
}

const reducer=(state=initialState,action)=>{

    let excercise ;
    let index;
    let exercises=[]
   
    switch(action.type)
    {
        
        
        case 'ADD_TO_PLAN':
            console.log(action)
            const check=state.planExercises.find((value)=>{
                
                return value.id===action.payload.id
            })            
      
            if(check)
            {
                return state
            }
            else
            {
            
                excercise=action.payload;

             
              
                localStorage.setItem('store',JSON.stringify(state))
                return {
                    ...state,
                    exercises:[excercise,...state.exercises]
                 }

        

            }
                      
            break;
           
           case 'delete':
            excercise =action.payload;
            exercises=state.exercises.filter((value)=>{
              return  value.id!=excercise.id

            })
            
            return {
                ...state,
                exercises
            }
             break;
        case "Empty":
            return initialState;       
        
        case 'ADD_EXERCISE_PLAN':
            const checks=state.planExercises.find((value)=>{
                console.log(value,action.payload)    
                 return value.id===action.payload.id
            })            
            console.log(checks)
            if(checks)
            {
                return state
            }
            else
            {
            
                excercise=action.payload;

                return {
                    ...state,
                    planExercises:[excercise,...state.planExercises]
                 }
            }
            break;

        case 'delete_from_plan':
                excercise =action.payload;
               var planExercises=state.planExercises.filter((value)=>{
                  return  value.id!=excercise.id
    
                })
                
                return {
                    ...state,
                    planExercises
                }
                 break;
        case 'ADD_EXERCISES_EDIT_PLAN':
               var planExercises=action.payload
                return{
                    ...state,
                    planExercises
                }

        default:
            return {...state}
            break;   

            
            }
}

export default reducer



