import React from 'react';
import * as S from './styles';

function Header() {
  return (
    <S.Container>
      <img src="" alt="Logo" />

      <S.ContainerText>
        <S.Text>
          Nome do candidato:
          {' '}
          <p>Marco Auréllio de Oliveira Pereira</p>
        </S.Text>
      </S.ContainerText>

    </S.Container>
  );
}

export default Header;
