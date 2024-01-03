import React from 'react'
import Select from 'react-select'

const options = [
  {value: 'Antônia e Vinícius | Combate', label: 'Antônia e Vinícius | Combate'},
  {value: 'Guilherme e Isabel | Lions', label: 'Guilherme e Isabel | Lions'},
  {value: 'Nádia | Alpha', label: 'Nádia | Alpha'},
]

const defaultValue = [{ value: 'Selecione uma opção', label: 'Selecione uma opção' }]

export default function SelectFormLeader () {
  return (
    <>
      <Select
        options={options}
        defaultValue={defaultValue[0]}
        className="
        text-black
        "
      />
    </>
  )
}