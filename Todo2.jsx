import React, { useState } from 'react'

export default function Todo2() {


    const[Text,setText]=useState('')
    const[state,setstate]=useState([])

    function handlechange(e){
        setText(e.target.value)
    }
    function handlesubmit(e){
        e.prevntDefault()
        setstate([...setstate,Text])
        setText('')
    }

   
    function Delete(id){
        let del = state.filter((el,i)=>{
            return i !=id
        })

        setstate(del)
    }
  return (
    <div>
      
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='enter name' value={Text} onChange={handlechange} />
        <input type="submit" />
      </form>

      {
        state.map((el,i)=>{
            return <>
            <li key={i}>{el}</li>
            <button onClick={()=> Delete}>Delete</button>


            </>
        })
      }
    </div>
  )
}


// import React, { useState } from 'react'

// export default function Todo2() {

//     const[text ,setText]=useState('')
//     const[state ,setstate]=useState([])

//     function hadlechange(e){
//         setText(e.target.value)
//     }
//     function handlesubmit(e){
//         e.preventDefault()
//         setstate([...setText,state])
//         setText('')
//     }

//     function Delete(id){
//         let del = state.filter((el,i)=>{
//             return i !=id
//         })
//         setstate(del)

//     }
//   return (
//     <div>
//       <form onSubmit={handlesubmit}>
//         <input type="text" placeholder='enter the name' value={Text} onChange={handlechange} />
//         <input type="submit" />
//       </form>

//       {
//         state.map((el,i)=>{
//             return <>
//             <li key={i}>{el}</li>
//             <button onClick={()=>Delete}>delete</button>
            
//             </>
//         })
//       }
//     </div>
//   )
// }

