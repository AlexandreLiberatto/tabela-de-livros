

const TabelaHead = (props) => {
  return (
    
        <thead>
            <tr>
                <th colSpan='4'>Tabela de Livros
                <div className="container-setinhas">
                    <div onClick={ () => props.ordenarCrescente()}>&#129093;</div>
                    <div onClick={ () => props.ordenarDecrescente()}>&#129095;</div>
                </div>
                </th>
            </tr>
            <tr>
                <th>ISBN</th>
                <th>Título</th>
                <th>Autor</th>
                <th></th>
            </tr>
        </thead>
   
  )
}

export default TabelaHead