import styled from 'styled-components'
import moment from 'moment'

const PostContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px;
  border-radius: 10px;
`

const StyledUserName = styled.p`
  font-weight: bold;
  font-size: 18px;
`

const StyledDate = styled.p`
  font-size: 12px;
  margin-top: 10px;
`
const ContainerText = styled.div`
  margin-top: 20px;
`


function Post ({ text, user, date }) {
  return (
  <>
    <PostContainer> 
      <StyledUserName>@{user}</StyledUserName>
      <StyledDate>{moment(date).format('LLL')}</StyledDate>
      <ContainerText>
        {text}
      </ContainerText>  
    </PostContainer>
  </>
    
  )
}

export default Post