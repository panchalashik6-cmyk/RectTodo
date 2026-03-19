import React, { useState } from 'react'

export default function Todo2() {

  const [Text, setText] = useState('')
  const [state, setstate] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  function handlechange(e) {
    setText(e.target.value)
  }

  function handlesubmit(e) {
    e.preventDefault()
    if (Text.trim() === '') return

    if (editIndex !== null) {
      // UPDATE
      let updated = [...state]
      updated[editIndex] = Text
      setstate(updated)
      setEditIndex(null)
    } else {
      // ADD
      setstate([...state, Text])
    }

    setText('')
  }

  function Delete(id) {
    let del = state.filter((el, i) => i !== id)
    setstate(del)
  }

  function Edit(id) {
    setText(state[id])
    setEditIndex(id)
  }

  return (
    <div style={{
      width: "300px",
      margin: "50px auto",
      textAlign: "center",
      fontFamily: "Arial",
      border: "1px solid #ddd",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    }}>

      <h2 style={{ marginBottom: "15px" }}>Todo App</h2>

      <form 
        onSubmit={handlesubmit} 
        style={{ display: "flex", gap: "10px", marginBottom: "15px" }}
      >
        <input
          type="text"
          placeholder="Enter task..."
          value={Text}
          onChange={handlechange}
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        <button
          type="submit"
          style={{
            padding: "8px 12px",
            border: "none",
            backgroundColor: editIndex !== null ? "#ffc107" : "#28a745",
            color: "#fff",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {
          state.map((el, i) => (
            <li 
              key={i} 
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px",
                marginBottom: "8px",
                background: "#f9f9f9",
                borderRadius: "5px"
              }}
            >
              {el}

              <div style={{ display: "flex", gap: "5px" }}>
                
                <button
                  onClick={() => Edit(i)}
                  style={{
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    padding: "5px 8px",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => Delete(i)}
                  style={{
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    border: "none",
                    padding: "5px 8px",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}
                >
                  Delete
                </button>

              </div>
            </li>
          ))
        }
      </ul>

    </div>
  )
}