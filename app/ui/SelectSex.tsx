import React from 'react'
import Select from 'react-select'

const options = [
  {value: 'Feminino', label: 'Feminino'},
  {value: 'Masculino', label: 'Masculino'}
]

const defaultValue = [{ value: 'Selecione uma opção', label: 'Selecione uma opção' }]

export default function selectFormSex () {
  return (
    <>
      <Select
        options={options}
        defaultValue={defaultValue[0]}
        className="text-black"
        name="sexo"
        required
      />
    </>
  )
}