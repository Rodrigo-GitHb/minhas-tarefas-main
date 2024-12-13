import * as enums from '../utils/enums/tarefa'

class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
  id: number

  // eslint-disable-next-line prettier/prettier
  constructor(titulo: string, prioridade: enums.Prioridade, status: enums.Status, descricao: string, id: number){
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}

export default Tarefa
