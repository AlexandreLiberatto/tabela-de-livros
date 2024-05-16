import { Component } from "react";
import TabelaHead from "./components/TabelaHead";
import TabelaBody from "./components/TabelaBody";
import TabelaFoot from "./components/TabelaFoot";

class App extends Component {
  state = {
    livros: [],
  };

  componentDidMount() {
    fetch('/api/livros.json')
      .then(response => response.json())
      .then(livros => this.setState({ livros }))
      .catch(error => {
        console.log('Erro na requisição:', error);
      })
      .finally(() => {
        console.log('Sempre retorna');
      });
  }
  handleRemoverLinha = (id) => {
    const livros = this.state.livros.filter(l => l.id !== id);
    this.setState({ livros });
  };
  handleOrdenarCrescente = (titulo) => {
    const livros = this.state.livros.sort((a, b) =>
    a.titulo < b.titulo ? -1 : 0
  );
  this.setState({ livros })
  }
  handleOrdenarDecrescente = titulo => {
    const livros = this.state.livros.sort((a, b) => 
    a.titulo < b.titulo ? -1 : 0
  );
  livros.reverse();
  this.setState({ livros })
  }
  render() {
    return (
      <table className="tabela">
        <TabelaHead 
        ordenarCrescente={ this.handleOrdenarCrescente }
        ordenarDecrescente={ this.handleOrdenarDecrescente }
        />
        <TabelaFoot qtdLivros={this.state.livros.length} />
        <TabelaBody livros={this.state.livros}
        removerLinha={this.handleRemoverLinha} />
      </table>
    );
  }
}

export default App;
