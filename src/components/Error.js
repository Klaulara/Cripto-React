import styled from '@emotion/styled'

const Texto = styled.div`
 background-color: #B7322C;
 color: #fff;
 padding: 15px;
 font-family: 'Lato', sans-serif;
 font-weight: 700;
 font-size: 22px;
 text-align: center;
`

const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error