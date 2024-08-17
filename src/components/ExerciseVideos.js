import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos = [], name }) => {
  if (!Array.isArray(exerciseVideos) || exerciseVideos.length === 0) return <Loader />;

  const videosToDisplay = exerciseVideos.length < 900 ? [...exerciseVideos, ...Array(900 - exerciseVideos.length).fill({ video: {} })] : exerciseVideos;

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: '44px', xs: '25px' } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '110px', xs: '0px' },
        }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {videosToDisplay.slice(0, 3).map((item, index) => {
          const video = item.video || {};
          const thumbnails = video.thumbnails || [];
          const videoId = video.videoId || '';
          const thumbnailUrl = thumbnails[0]?.url || '';
          const title = video.title || 'No title';
          const channelName = video.channelName || 'Unknown channel';

          return (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ borderTopLeftRadius: '20px' }}
                src={thumbnailUrl}
                alt={title}
              />
              <Box>
                <Typography
                  sx={{ fontSize: { lg: '28px', xs: '18px' } }}
                  fontWeight={600}
                  color="#000"
                >
                  {title}
                </Typography>
                <Typography fontSize="14px" color="#000">
                  {channelName}
                </Typography>
              </Box>
            </a>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
