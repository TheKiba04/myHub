import { useState, useEffect, useCallback } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import StopIcon from "@mui/icons-material/Stop";
import "./timer.css";
import moment, { Moment } from "moment";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

const Timer = ({ distance }: { distance: number }) => {
  const initDistance = moment(distance * 60 * 1000);
  const [time, setTime] = useState<Moment>(initDistance);
  const [isPaused, setIsPaused] = useState<boolean>(true);

  const handleStart = () => {
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleStop = useCallback(() => {
    setTime(initDistance);
    setIsPaused(true);
  }, [initDistance]);

  const tick = useCallback(() => {
    setTime((prevTime) => moment(prevTime.valueOf() - 1000));
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (isPaused) {
        if (time.valueOf() <= 0) {
          clearInterval(timerId);
          return;
        }
      } else {
        if (time.valueOf() > 0) {
          tick();
        } else {
          handleStop();
        }
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [tick, time, isPaused, initDistance, handleStop]);

  useEffect(() => {
    setTime(moment(distance * 60 * 1000));
  }, [distance]);
  

  return (
    <>
      <Box className="Timer">{time.format("mm:ss")}</Box>
      <Box className="Timer_buttons_container">
        <IconButton onClick={handleStart} id="start">
          <PlayArrowIcon color="success" />
        </IconButton>
        <IconButton onClick={handlePause}>
          <PauseIcon />
        </IconButton>
        <IconButton onClick={handleStop}>
          <StopIcon color="error" />
        </IconButton>
      </Box>
    </>
  );
};
export default Timer;
