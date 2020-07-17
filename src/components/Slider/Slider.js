import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import './Slider.scss'
import { sliderPicturesData } from '../../utils/slider-pictures'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    }
  })

  return (
    <div className='slider'>
      <div className='navigation-wrapper'>
        <div ref={sliderRef} className='keen-slider'>
          {sliderPicturesData.map(picture => (
            <div className='keen-slider__slide' key={picture.id}>
              <img src={picture.url} alt={picture.description} />
              <p>{picture.description}</p>
            </div>
          ))}
        </div>
        {slider && (
          <>
            <ArrowLeft onClick={e => e.stopPropagation() || slider.prev()} />
            <ArrowRight onClick={e => e.stopPropagation() || slider.next()} />
          </>
        )}
      </div>
      {slider && (
        <div className='dots'>
          {[...Array(slider.details().size).keys()].map(index => {
            return (
              <button
                key={index}
                onClick={() => {
                  slider.moveToSlideRelative(index)
                }}
                aria-label={`see the image on the position ${index}`}
                className={'dot' + (currentSlide === index ? ' active' : '')}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

function ArrowLeft(props) {
  return (
    <svg
      onClick={props.onClick}
      className='arrow arrow--left'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='#f48fb1'
    >
      <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
    </svg>
  )
}

function ArrowRight(props) {
  return (
    <svg
      onClick={props.onClick}
      className='arrow arrow--right'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='#f48fb1'
    >
      <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
    </svg>
  )
}

export default Slider
