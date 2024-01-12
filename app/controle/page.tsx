import { mulish } from '@/app/ui/fonts'
import Search from '@/app/ui/search'
import { fetchPessoas } from '@/app/lib/data'
import { Pessoa } from "../lib/definitions"

function nomeSobrenome(str: string) {
  var arr = str.split(' ');
  if(
    arr[1] == 'de' ||
    arr[1] == 'De' ||
    arr[1] == 'da' ||
    arr[1] == 'Da' ||
    arr[1] == 'do' ||
    arr[1] == 'Do' ||
    arr[1] == 'das' ||
    arr[1] == 'Das' ||
    arr[1] == 'dos' ||
    arr[1] == 'Dos'
    ) {
      return arr[0] + " " + arr[1] + " " + arr[2]
  } else if (
    arr[1] == null ||
    arr[1] == undefined
    ){
      return arr[0]
    } else {
      return arr[0] + " " + arr[1]
  }
}

export default async function PessoasTable(){
  const people = await fetchPessoas()
  
  return (
    <div className="w-full text-white flex justify-center items-center pt-10">
      <div>
        <h1 className="mb-8 text-xl md:text-5xl text-center">
          CONTROLE
        </h1>
        <div className={`
          ${mulish.className}
        bg-[#1E1E1E]
          p-8 rounded-[10px]
          w-[562px]
          flex
          justify-between
          grid
          grid-cols-2
          gap-2
          `
          }
        >
          {people.map((pessoa) => {
            return (
              <div className="
                w-[240px]
                p-2
                rounded-[10px]
                bsw
                bw
                transition
                flex
                "
              >
                <div className="
                  rounded-full
                  size-10
                  bw
                  flex
                  justify-center
                  items-center
                  "
                >
                  <h2 className="text-2xl">
                    {pessoa.nome_pessoa.substring(0,1)}
                  </h2>
                </div>
                <div className="ml-3 flex flex-col">
                  <p className="justify-start">
                    {nomeSobrenome(`${pessoa.nome_pessoa}`)}
                  </p>
                  <p className="text-[13px] justify-end">Guilherme e Isabel | Lions</p>
                </div>
              </div>
            )
          })}
          {/* <Table.Root className={`${mulish.className} text-left`}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell className="pr-[80px]">Nome completo</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="pr-14">Data de nascimento</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="pr-14">Sexo</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="pr-14">Lider e Equipe</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="pr-14">Telefone</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          {people.map((pessoa) => {
            // const dataNascimento = formatDate(pessoa.data_nascimento)
            return (
              <Table.Body key={`${pessoa.id}`}>
                <Table.Row>
                  <Table.Cell className="pr-[60px]">{pessoa.nome_pessoa}</Table.Cell>
                  <Table.Cell className="pr-14">{pessoa.data_nascimento}</Table.Cell>
                  <Table.Cell className="pr-14">{pessoa.sexo}</Table.Cell>
                  <Table.Cell className="pr-14">{pessoa.lider_equipe}</Table.Cell>
                  <Table.Cell className="pr-14">{pessoa.telefone}</Table.Cell>
                </Table.Row>
              </Table.Body>
            )
          })}
          </Table.Root> */}
        </div>
      </div>
    </div>
  )
}
