import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AudioPlayer } from '../components/ui/audio-player';
import {
  AudioPlayPauseButton,
  AudioVolumeControl,
  AudioSeekBar,
} from '../components/ui/audio-controls';
import { Waveform } from '../components/ui/waveform';
import ReactPlayer from 'react-player';
import WaveSurfer from 'wavesurfer.js';

const meta: Meta<typeof AudioPlayer> = {
  title: 'UI/AudioPlayer',
  component: AudioPlayer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AudioPlayer>;

export const Default: Story = {
  render: (args) => {
    const playerRef = React.useRef<ReactPlayer>(null);
    const wavesurferRef = React.useRef<WaveSurfer>(null);

    const [playing, setPlaying] = React.useState(false);
    const [volume, setVolume] = React.useState(0.5);
    const [played, setPlayed] = React.useState(0);

    const handlePlayPause = () => {
      setPlaying(!playing);
    };

    const handleVolumeChange = (newVolume: number) => {
      setVolume(newVolume);
    };

    const handleSeek = (newPlayed: number) => {
      setPlayed(newPlayed);
      playerRef.current?.seekTo(newPlayed);
      wavesurferRef.current?.seekTo(newPlayed);
    };

    const handleProgress = (progress: {
      played: number;
      playedSeconds: number;
      loaded: number;
      loadedSeconds: number;
    }) => {
      setPlayed(progress.played);
    };

    return (
      <div className="w-full max-w-2xl">
        <AudioPlayer
          {...args}
          ref={playerRef}
          playing={playing}
          volume={volume}
          onProgress={handleProgress}
          style={{ display: 'none' }} // Hide the default player
        />
        <Waveform
          ref={wavesurferRef}
          url={args.url}
          onSeek={(time) => handleSeek(time)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        <div className="flex items-center gap-4 mt-4 p-2 bg-muted rounded-md">
          <AudioPlayPauseButton playing={playing} onClick={handlePlayPause} />
          <AudioSeekBar played={played} onSeek={handleSeek} />
          <AudioVolumeControl
            volume={volume}
            onVolumeChange={handleVolumeChange}
          />
        </div>
      </div>
    );
  },
  args: {
    url: 'https://www.mfiles.co.uk/mp3-files/brahms-symphony-4-op-98-1-opening.mp3',
  },
};
