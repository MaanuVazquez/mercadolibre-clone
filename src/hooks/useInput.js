import {useState} from 'react'

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  function onInput(e) {
    setValue(e.target.value)
  }

  return [value, onInput]
}

export default useInput
