import Grid  from '@mui/material/Grid'
import React, { useState } from 'react'
import DistanceSelector from '../DistanceSelector/DistanceSelector'
import Timer from '../Timer/Timer'

const Tracker = () => {
  const [distance, setDistance] = useState<number>(0);

  return (
    <Grid container rowGap={2}>
                  <Grid item xs={12}>
                    <DistanceSelector setDistance={setDistance} />
                  </Grid>
                  <Grid item xs={12}>
                    <Timer distance={distance} />
                  </Grid>
                </Grid> 
  )
}

export default Tracker