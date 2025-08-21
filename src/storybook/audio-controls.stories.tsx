import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  AudioPlayPauseButton,
  AudioVolumeControl,
  AudioSeekBar,
} from '../components/ui/audio-controls';

const meta: Meta = {
  title: 'UI/AudioControls',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const PlayPauseButton: StoryObj<typeof AudioPlayPauseButton> = {
  name: 'Play/Pause Button',
  render: (args) => {
    const [playing, setPlaying] = React.useState(false);
    return (
      <AudioPlayPauseButton
        {...args}
        playing={playing}
        onClick={() => setPlaying(!playing)}
      />
    );
  },
};

export const VolumeControl: StoryObj<typeof AudioVolumeControl> = {
  name: 'Volume Control',
  render: (args) => {
    const [volume, setVolume] = React.useState(0.5);
    return (
      <AudioVolumeControl
        {...args}
        volume={volume}
        onVolumeChange={setVolume}
      />
    );
  },
};

export const SeekBar: StoryObj<typeof AudioSeekBar> = {
  name: 'Seek Bar',
  render: (args) => {
    const [played, setPlayed] = React.useState(0.25);
    return (
      <div className="w-64">
        <AudioSeekBar {...args} played={played} onSeek={setPlayed} />
      </div>
    );
  },
};
