import { useState } from 'react'
import arrowUp from '../../assets/arrow_up.svg'
import arrowDown from '../../assets/arrow_down.svg'
import PropTypes from 'prop-types'

export default function Collapse({ page, title, desc, list }) {
  const [open, setOpen] = useState(false)

  return (
    <section className={`collapse collapse--${page}`}>
      <button
        className={`collapse-btn collapse-btn--${page}`}
        onClick={() => (open ? setOpen(false) : setOpen(true))}
      >
        <h2 className={`collapse-btn__title collapse-btn__title--${page}`}>
          {title}
        </h2>
        {open ? (
          <img className="collapse-btn__icon" src={arrowUp} alt="Réduire" />
        ) : (
          <img className="collapse-btn__icon" src={arrowDown} alt="Aggrandir" />
        )}
      </button>
      {open && desc ? (
        <p className={`collapse-content collapse-content--${page}`}>{desc}</p>
      ) : open && list ? (
        <ul className={`collapse-content collapse-content--${page}`}>
          {list.map((el, index) => (
            <li className="collapse-content__list-item" key={index}>
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
