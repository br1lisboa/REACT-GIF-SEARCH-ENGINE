import { useState } from "react"
import PropTypes from 'prop-types'

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
    <form onSubmit={onSubmitForm} aria-label='form'>
      <input
        type="text"
        placeholder="Buscar gif"
        value={input}
        onChange={onInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}