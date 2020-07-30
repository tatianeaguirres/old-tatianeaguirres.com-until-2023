import React from 'react'

const bottomImage = {
  height: '12rem',
  width: '60rem',
  overflow: 'hidden',
  position: 'fixed',
  zIndex: -1,
  bottom: 0,
  right: 0
}

const bottomImageCircle = {
  overflow: 'hidden',
  position: 'fixed',
  zIndex: -1,
  bottom: '-3.5rem',
  right: '27rem'
}

const bottomImageSvg = {
  height: '100%',
  width: '100%'
}

const bottomFirstColor = {
  stopColor: '#FFDF00',
  stopOpacity: 1
}

const bottomSecondColor = {
  stopColor: '#de3163',
  stopOpacity: 1
}

const bottomGradient = {
  stroke: 'none',
  fill: 'url(#bottomGradient)'
}

function BottomImage() {
  return (
    <div>
      <div style={bottomImageCircle}>
        <svg height='150' width='400'>
          <defs>
            <linearGradient
              id='bottomGradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='0%'
            >
              <stop offset='0%' style={bottomFirstColor} />
              <stop offset='100%' style={bottomSecondColor} />
            </linearGradient>
          </defs>
          <ellipse cx='200' cy='20' rx='20' ry='20' style={bottomGradient} />
        </svg>
      </div>

      <div style={bottomImage}>
        <svg
          viewBox='0 0 500 150'
          preserveAspectRatio='none'
          style={bottomImageSvg}
        >
          <defs>
            <linearGradient
              id='bottomGradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='0%'
            >
              <stop offset='0%' style={bottomFirstColor} />
              <stop offset='100%' style={bottomSecondColor} />
            </linearGradient>
          </defs>
          <path
            d='M66.03,69.56 C171.56,147.53 334.65,-69.56 500.00,49.98 L500.00,150.00 L0.00,150.00 Z'
            style={bottomGradient}
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default BottomImage
