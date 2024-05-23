import styled from 'styled-components'

import H4 from '../typography/H4'
import TextArea from '../inputs/TextArea'
import Button from '../inputs/Button'

const PostContainer = styled.div`
background-color: ${props => props.theme.white};
padding: 20px 40px;

@media (max-width: 500px){
  padding: 20px;
}
`

const Title = styled.div`
  font-weight: bold;
  text-align: center;
`
const TextContainer = styled.div`
  margin: 20px 0;
  width: 100%;
`
const BottonContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 500px){
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
  }
`
const BottonText = styled.p`
  flex: 1;
`

function CreatePost () {
  return (
    <PostContainer>
      <H4><Title>No que você está pensando, @nick?</Title></H4>
      <TextContainer>
        <TextArea placeholder='Digite sua mensagem' rows='4' type='text' />
      </TextContainer>
      <BottonContainer>
        <BottonText>A sua mensagem será pública.</BottonText>
        <Button>Enviar mensagem</Button>
      </BottonContainer>
    </PostContainer>
  )
}

export default CreatePost
