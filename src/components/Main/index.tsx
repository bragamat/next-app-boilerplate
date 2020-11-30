import * as S from './styles'

const Main = ({
  title = 'React Avancado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de  um atemos e react avancado escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="um Desenvolvedor de frente para uma tela com codigo"
    />
  </S.Wrapper>
)
export default Main
