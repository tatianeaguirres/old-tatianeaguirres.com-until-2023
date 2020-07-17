import React from 'react'

const topImage = {
  height: '11rem',
  width: '40rem',
  position: 'fixed',
  overflow: 'hidden',
  zIndex: -1,
  top: 0,
  left: 0
}

const topImageSvg = {
  height: '100%',
  width: '100%'
}

const firstColor = {
  stopColor: '#de3163',
  stopOpacity: 1
}

const secondColor = {
  stopColor: '#FFDF00',
  stopOpacity: 1
}

const gradient = {
  stroke: 'none',
  fill: 'url(#gradient)'
}

function TopImage() {
  return (
    <div className='u-desktop-only'>
      <div style={topImage}>
        <svg
          viewBox='0 0 500 150'
          preserveAspectRatio='none'
          style={topImageSvg}
        >
          <defs>
            <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' style={firstColor} />
              <stop offset='100%' style={secondColor} />
            </linearGradient>
          </defs>
          <path
            d='M-1.69,145.55 C316.58,146.53 314.90,38.97 500.56,1.48 L500.56,-0.48 L0.00,0.00 Z'
            style={gradient}
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default TopImage
