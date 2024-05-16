const TabelaFoot = (props) => (
    <tfoot>
      <tr>
        <td colSpan="4">Quantidade de livros na tabela: { props.qtdLivros }</td>
      </tr>
    </tfoot>
  );


export default TabelaFoot;
