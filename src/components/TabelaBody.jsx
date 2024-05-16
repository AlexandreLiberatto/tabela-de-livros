const TabelaBody = (props) => (
  <tbody>
    {props.livros.map((livro, index) => (
      <tr key={livro.id}>
        <td>{livro.id}</td>
        <td>{livro.titulo}</td>
        <td>{livro.autor}Silva</td>
        <td>
          <button className="botao remover"
          onClick={() => props.removerLinha(livro.id)}
          id={livro.id}
          >Remover</button>
        </td>
      </tr>
    ))}
  </tbody>
);

export default TabelaBody;
