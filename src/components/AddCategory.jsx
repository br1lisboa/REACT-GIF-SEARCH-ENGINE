import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

  const [input, setInput] = useState('')

  const onInputChange = (event) => {
    setInput(event.target.value)
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    if (input.trim().length <= 1) return;
    onNewCategory(input.trim())
    setInput('')
  }

  
  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="Buscar gif"
        onChange={onInputChange}
      />
    </form>
  )
}
