import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { media, radius } from '../utils/constants'

const Figure = styled.figure`
  position: relative;
  flex: 1 340px;
  height: 340px;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    border-radius: ${radius.small};
  }
  ${media.laptop} {
    flex: 1 255px;
    height: 255px;
  }
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${radius.small};
`

const Figcaption = styled.figcaption`
  position: absolute;
  z-index: 1;
  left: 20px;
  bottom: 20px;
  color: white;
  width: 40%;
`

export default function Card({ id, title, cover }) {
  const navigate = useNavigate()

  return (
    <Figure onClick={() => navigate(`../sheet/${id}`)}>
      <Image src={cover} alt={title} />
      <Figcaption>{title}</Figcaption>
    </Figure>
  )
}
