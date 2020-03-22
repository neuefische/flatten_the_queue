import { Slider, Rail, Handles, Tracks } from 'react-compound-slider'
import Handle from './Handles'
import Track from './Track'

import React from 'react'

export default function RangeDistance({ setDistance }) {
  return (
    <Slider rootStyle={sliderStyle} domain={[1, 20]} step={1} values={[2]}>
      <Rail>
        {({ getRailProps }) => <div style={railStyle} {...getRailProps()} />}
      </Rail>
      <Handles>
        {({ handles, getHandleProps }) => (
          <div>
            {handles.map(handle => (
              <Handle
                key={handle.id}
                handle={handle}
                getHandleProps={getHandleProps}
                setDistance={setDistance}
              />
            ))}
          </div>
        )}
      </Handles>
      <Tracks right={false}>
        {({ tracks, getTrackProps }) => (
          <div>
            {tracks.map(({ id, source, target }) => (
              <Track
                key={id}
                source={source}
                target={target}
                getTrackProps={getTrackProps}
              />
            ))}
          </div>
        )}
      </Tracks>
    </Slider>
  )
}
const sliderStyle = {
  position: 'relative',
  width: '100%',
  height: 80,
}

const railStyle = {
  position: 'absolute',
  width: '100%',
  height: 12,
  marginTop: 35,
  borderRadius: 7,
  backgroundColor: '#D8D8D8',
}
