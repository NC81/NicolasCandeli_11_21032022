import styled from 'styled-components'
import { media, radius } from '../utils/constants'
import { useState } from 'react'
import { font, color, margin } from '../utils/constants'
import arrowUp from '../assets/arrow_up.svg'
import arrowDown from '../assets/arrow_down.svg'
import PropTypes from 'prop-types'

const CollapseWrapper = styled.div`
  width: 46.5%;
  ${media.mobile} {
    width: 100%;
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 52px;
  color: white;
  padding: 0 13px 0 20px;
  background-color: ${color.primary};
  border-radius: ${radius.small};
  cursor: pointer;
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
  width: 100%;
  padding: ${margin.medium} ${margin.small} ${margin.small} ${margin.small};
  margin-top: -10px;
  background: ${color.secondary};
  font-weight: 400;
  line-height: 26px;
  border-radius: 0 0 ${radius.small} ${radius.small};
  ${media.tablet} {
    font-size: ${font.tiny};
    margin-top: -5px;
    line-height: 17px;
    padding: ${margin.small} ${margin.tiny} ${margin.tiny} ${margin.tiny};
    border-radius: 0 0 ${radius.tiny} ${radius.tiny};
  }
`

export default function Collapse({ desc, list }) {
  const [open, resize] = useState(false)

  return (
    <CollapseWrapper>
      <Title onClick={() => (open ? resize(false) : resize(true))}>
        {desc ? 'Descripton' : 'Équipements'}
        {open ? (
          <Arrow src={arrowUp} alt="up arrow" />
        ) : (
          <Arrow src={arrowDown} alt="down arrow" />
        )}
      </Title>
      {open && desc && <Content>{desc}</Content>}
      {open && list && (
        <Content>
          {' '}
          <ul>
            {list.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        </Content>
      )}
    </CollapseWrapper>
  )
}

Collapse.propTypes = {
  desc: PropTypes.string,
  list: PropTypes.array,
}
