import styled from "styled-components";

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
`
const ContainerText = styled.div`
  margin-top: 20px;
`


function Post () {
  return (
    <>
      <PostContainer> 
        <StyledUserName>@UserName</StyledUserName>
        <StyledDate>23 de Maio de 2024</StyledDate>
        <ContainerText>Este é um texto de teste.</ContainerText>  
      </PostContainer>
    </>
  )
}

export default Post