import { useState } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState('')
  const [participantes, setParticipantes] = useState([])

  function adicionarParticipante() {
    const nomeFormatado = nome.trim()

    if (nomeFormatado === '') {
      return
    }

    setParticipantes([...participantes, nomeFormatado])
    setNome('')
  }

  function removerParticipante(indexParaRemover) {
    const novaLista = participantes.filter(
      (_, index) => index !== indexParaRemover
    )

    setParticipantes(novaLista)
  }

  function pressionarEnter(evento) {
    if (evento.key === 'Enter') {
      adicionarParticipante()
    }
  }

  return (
    <main className="container">
      <section className="card">

        <h1>Lista de Participantes</h1>

        <p className="subtitulo">
          Mostra de Tecnologia
        </p>

        <div className="formulario">
          <input
            type="text"
            placeholder="Digite o nome do participante"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            onKeyDown={pressionarEnter}
          />

          <button
            type="button"
            onClick={adicionarParticipante}
          >
            Adicionar
          </button>
        </div>

        <div className="contador">
          <span>Participantes cadastrados</span>
          <strong>{participantes.length}</strong>
        </div>

        {participantes.length === 0 ? (
          <p className="mensagem-vazia">
            Nenhum participante cadastrado.
          </p>
        ) : (
          <ul className="lista">
            {participantes.map((participante, index) => (
              <li key={`${participante}-${index}`}>
                <span>
                  {index + 1}. {participante}
                </span>

                <button
                  type="button"
                  onClick={() => removerParticipante(index)}
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        )}

      </section>
    </main>
  )
}

export default App