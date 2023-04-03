import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { media, radius } from '../utils/constants'
import { useState } from 'react'
import { font, color, margin } from '../utils/constants'
import arrowUp from '../assets/arrow_up.svg'
import arrowDown from '../assets/arrow_down.svg'
import PropTypes from 'prop-types'

const CollapseWrapper = styled.div`
  width: ${(props) => (props.page === '/about' ? '82.5%' : '47%')};
  ${media.mobile} {
    width: 100%;
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: ${(props) => (props.page === '/about' ? '47px' : '52px')};
  padding: 0 13px 0 20px;
  font-size: ${(props) =>
    props.page === '/about' ? `${font.medium}` : `${font.small}`};
  font-weight: 500;
  color: white;
  background-color: ${color.primary};
  border-radius: ${(props) =>
    props.page === '/about' ? `${radius.tiny}` : `${radius.small}`};
  cursor: pointer;
  ${media.laptop} {
    font-size: ${font.small};
  }
  ${media.tablet} {
    font-size: 13px;
    height: 30px;
    padding: 0 9px 0 12px;
    border-radius: ${radius.tiny};
  }
`

const Arrow = styled.img`
  width: 24px;
  ${media.tablet} {
    width: 16px;
  }
`

const Content = styled.div`
  padding: ${margin.medium} ${margin.small} ${margin.small} ${margin.small};
  margin-top: -10px;
  background: ${color.secondary};
  font-size: ${(props) =>
    props.page === '/about' ? `${font.medium}` : `${font.small}`};
  font-weight: 400;
  line-height: 26px;
  border-radius: 0 0 ${radius.small} ${radius.small};
  ${media.laptop} {
    font-size: ${font.small};
  }
  ${media.tablet} {
    font-size: ${font.tiny};
    margin-top: -5px;
    line-height: 17px;
    padding: ${margin.small} ${margin.tiny} ${margin.tiny} ${margin.tiny};
    border-radius: 0 0 ${radius.tiny} ${radius.tiny};
  }
`

export default function Collapse({ title, desc, list }) {
  console.log('Collapse')
  const location = useLocation().pathname
  const [open, setOpen] = useState(false)
  return (
    <CollapseWrapper page={location}>
      <Title
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        page={location}
      >
        {title}
        {open ? (
          <Arrow src={arrowUp} alt="up arrow" />
        ) : (
          <Arrow src={arrowDown} alt="down arrow" />
        )}
      </Title>
      {open && desc ? (
        <Content page={location}>{desc}</Content>
      ) : open && list ? (
        <Content>
          {' '}
          <ul>
            {list.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        </Content>
      ) : null}
    </CollapseWrapper>
  )
}

Collapse.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  list: PropTypes.array,
}
