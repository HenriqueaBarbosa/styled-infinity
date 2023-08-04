import React, { useState } from 'react';
import { Header } from './Header';
import { Body } from './Body';
import { MainApp } from './MainApp';
import { Footer } from './Footer';

export default function UserContext() {
  const [listaDeUsuarios, setListaDeUsuarios] = useState([]);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [profissao, setProfissao] = useState('');
  const [tempoExperiencia, setTempoExperiencia] = useState('');

  const adicionarUsuario = (event) => {
    event.preventDefault();

    if (!nome.trim() || !idade.trim() || !profissao.trim() || !tempoExperiencia.trim()) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const novoUsuario = {
      nome: nome.trim(),
      idade: parseInt(idade),
      profissao: profissao.trim(),
      tempoExperiencia: parseInt(tempoExperiencia),
    };
    setListaDeUsuarios([...listaDeUsuarios, novoUsuario]);

    setNome('');
    setIdade('');
    setProfissao('');
    setTempoExperiencia('');
  };

  return (
    <Body>
      <Header>
        <h1>Nomes:</h1>
        <ul>
          {listaDeUsuarios.map((usuario, index) => (
            <li key={index}>
              Nome: {usuario.nome}
            </li>
          ))}
        </ul>
      </Header>
      <MainApp>
        <h1>Dados:</h1>
        <ul>
          {listaDeUsuarios.map((usuario, index) => (
            <li key={index}>
              Idade: {usuario.idade}, Profissão: {usuario.profissao}, Tempo de Experiência: {usuario.tempoExperiencia} anos
            </li>
          ))}
        </ul>
      </MainApp>
      <Footer>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Nome:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Idade:</label>
              </td>
              <td>
                <input
                  type="number"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Profissão:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={profissao}
                  onChange={(e) => setProfissao(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Tempo de Experiência (anos):</label>
              </td>
              <td>
                <input
                  type="number"
                  value={tempoExperiencia}
                  onChange={(e) => setTempoExperiencia(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button className="form-table" type="submit" onClick={adicionarUsuario}>Adicionar Novo Usuário</button>
              </td>
            </tr>
          </tbody>
        </table>
      </Footer>
    </Body>
  );
}