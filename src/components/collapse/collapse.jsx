import { useState } from 'react'
// import { useLocation } from 'react-router-dom'
// import styled from 'styled-components'
// import { media, radius } from '../../utils/constants'
// import { font, color } from '../../utils/constants'
import arrowUp from '../../assets/arrow_up.svg'
import arrowDown from '../../assets/arrow_down.svg'
import PropTypes from 'prop-types'

// const CollapseWrapper = styled.section`
//   display: flex;
//   flex-direction: column;
//   width: ${(props) => (props.page === '/about' ? '82.5%' : '47%')};
//   ${media.mobile} {
//     width: 100%;
//   }
// `

// const Title = styled.h2`
//   display: flex;
//   justify-content: space-between;
//   z-index: 1;
//   line-height: ${(props) => (props.page === '/about' ? '47px' : '52px')};
//   padding: ${(props) =>
//     props.page === '/about' ? '0 33px 0 18px' : '0 13px 0 20px'};
//   font-size: ${(props) => props.page === '/about' && `${font.medium}`};
//   color: white;
//   background-color: ${color.primary};
//   border-radius: ${(props) =>
//     props.page === '/about' ? `${radius.small}` : `${radius.medium}`};
//   cursor: pointer;
//   ${media.laptop} {
//     font-size: ${(props) => props.page === '/about' && `${font.small}`};
//   }
//   ${media.tablet} {
//     font-size: 13px;
//     line-height: 30px;
//     padding: 0 7px 0 12px;
//     border-radius: ${radius.small};
//   }
// `

// const Arrow = styled.img`
//   width: 24px;
//   ${media.tablet} {
//     width: 16px;
//   }
// `

// const Content = styled.div`
//   height: 100%;
//   margin-top: -10px;
//   background: ${color.secondary};
//   font-weight: 400;
//   padding: ${(props) =>
//     props.page === '/about' ? '40px 27px 20px 20px' : '40px 12px 27px 20px'};
//   font-size: ${(props) => props.page === '/about' && `${font.medium}`};
//   line-height: ${(props) => (props.page === '/about' ? '34px' : '26px')};
//   border-radius: ${(props) =>
//     props.page === '/about'
//       ? `0 0 ${radius.small} ${radius.small}`
//       : `0 0 ${radius.medium} ${radius.medium}`};
//   ${media.laptop} {
//     font-size: ${(props) => props.page === '/about' && `${font.small}`};
//     line-height: ${(props) => props.page === '/about' && '26px'};
//   }
//   ${media.tablet} {
//     font-size: ${font.tiny};
//     margin-top: -5px;
//     line-height: 17px;
//     padding: 23px 7px 12px 12px;
//     border-radius: 0 0 ${radius.small} ${radius.small};
//   }
// `

// const ListElement = styled.li`
//   font-weight: 400;
//   ${media.tablet} {
//     font-size: ${font.tiny};
//   }
// `

export default function Collapse({ page, title, desc, list }) {
  const [open, setOpen] = useState(false)

  return (
    <section className={`collap collap--${page}`}>
      <button
        className={`collap-btn collap-btn--${page}`}
        onClick={() => (open ? setOpen(false) : setOpen(true))}
      >
        <h2 className={`collap-btn__title collap-btn__title--${page}`}>
          {title}
        </h2>
        {open ? (
          <img className="collap-btn__icon" src={arrowUp} alt="up arrow icon" />
        ) : (
          <img
            className="collap-btn__icon"
            src={arrowDown}
            alt="down arrow icon"
          />
        )}
      </button>
      {open && desc ? (
        <p className={`collap-content collap-content--${page}`}>{desc}</p>
      ) : open && list ? (
        <ul className={`collap-content collap-content--${page}`}>
          {list.map((el, index) => (
            <li className="collap-content__list-item" key={index}>
              {el}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}

Collapse.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  list: PropTypes.array,
}
