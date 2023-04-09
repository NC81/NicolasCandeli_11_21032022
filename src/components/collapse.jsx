import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { media, radius } from '../utils/constants'
import { font, color } from '../utils/constants'
import arrowUp from '../assets/arrow_up.svg'
import arrowDown from '../assets/arrow_down.svg'
import PropTypes from 'prop-types'

const CollapseWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.page === '/about' ? '82.5%' : '47%')};
  ${media.mobile} {
    width: 100%;
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  line-height: ${(props) => (props.page === '/about' ? '47px' : '52px')};
  padding: ${(props) =>
    props.page === '/about' ? '0 33px 0 18px' : '0 13px 0 20px'};
  font-size: ${(props) => props.page === '/about' && `${font.medium}`};
  color: white;
  background-color: ${color.primary};
  border-radius: ${(props) =>
    props.page === '/about' ? `${radius.small}` : `${radius.medium}`};
  cursor: pointer;
  ${media.laptop} {
    font-size: ${(props) => props.page === '/about' && `${font.small}`};
  }
  ${media.tablet} {
    font-size: 13px;
    line-height: 30px;
    padding: 0 7px 0 12px;
    border-radius: ${radius.small};
  }
`

const Arrow = styled.img`
  width: 24px;
  ${media.tablet} {
    width: 16px;
  }
`

const Content = styled.div`
  height: 100%;
  padding: ${(props) =>
    props.page === '/about' ? '40px 27px 20px 20px' : '40px 12px 27px 20px'};
  margin-top: -10px;
  background: ${color.secondary};
  font-size: ${(props) => props.page === '/about' && `${font.medium}`};
  font-weight: 400;
  line-height: ${(props) => (props.page === '/about' ? '34px' : '26px')};
  border-radius: ${(props) =>
    props.page === '/about'
      ? `0 0 ${radius.small} ${radius.small}`
      : `0 0 ${radius.medium} ${radius.medium}`};
  ${media.laptop} {
    font-size: ${(props) => props.page === '/about' && `${font.small}`};
    line-height: ${(props) => props.page === '/about' && '26px'};
  }
  ${media.tablet} {
    font-size: ${font.tiny};
    margin-top: -5px;
    line-height: 17px;
    padding: 23px 7px 12px 12px;
    border-radius: 0 0 ${radius.small} ${radius.small};
  }
`

const ListElement = styled.li`
  font-weight: 400;
  ${media.tablet} {
    font-size: ${font.tiny};
  }
`

export default function Collapse({ title, desc, list }) {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <CollapseWrapper page={pathname}>
      <Title
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        page={pathname}
      >
        {title}
        {open ? (
          <Arrow src={arrowUp} alt="up arrow" />
        ) : (
          <Arrow src={arrowDown} alt="down arrow" />
        )}
      </Title>
      {open && desc ? (
        <Content as="p" page={pathname}>
          {desc}
        </Content>
      ) : open && list ? (
        <Content as="ul">
          {list.map((el, index) => (
            <ListElement key={index}>{el}</ListElement>
          ))}
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
