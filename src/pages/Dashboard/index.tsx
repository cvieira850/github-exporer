import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="" >
        <input placeholder="Digite o nome do repositório"type="text"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/45169261?s=460&u=16cae4a6a0db89ff9dc027fd1e487ee07d421647&v=4" alt="Caio Vieira"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable reactJS React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/45169261?s=460&u=16cae4a6a0db89ff9dc027fd1e487ee07d421647&v=4" alt="Caio Vieira"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable reactJS React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/45169261?s=460&u=16cae4a6a0db89ff9dc027fd1e487ee07d421647&v=4" alt="Caio Vieira"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable reactJS React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
