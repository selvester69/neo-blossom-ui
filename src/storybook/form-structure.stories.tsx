import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { FormGroup } from '../components/ui/form-group';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { FormHelperText } from '../components/ui/form-helper-text';
import { FormErrorMessage } from '../components/ui/form-error-message';
import { RequiredIndicator } from '../components/ui/required-indicator';
import { CharacterCount } from '../components/ui/character-count';
import { Textarea } from '../components/ui/textarea';

const FormStructureDemo = () => {
    const [text, setText] = React.useState('');
    const maxLength = 100;
    const hasError = text.length > 0 && text.length < 5;

    return (
        <div className="w-96 space-y-8">
            <FormGroup>
                <Label htmlFor="name">
                    Name
                    <RequiredIndicator />
                </Label>
                <Input id="name" placeholder="Enter your name" />
                <FormHelperText>This is your public display name.</FormHelperText>
            </FormGroup>

            <FormGroup>
                <div className="flex justify-between items-center">
                    <Label htmlFor="bio">
                        Biography
                    </Label>
                    <CharacterCount count={text.length} maxLength={maxLength} />
                </div>
                <Textarea
                    id="bio"
                    placeholder="Tell us about yourself"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    maxLength={maxLength}
                    className={hasError ? 'border-destructive' : ''}
                />
                {hasError && <FormErrorMessage>Biography must be at least 5 characters long.</FormErrorMessage>}
            </FormGroup>
        </div>
    );
}

const meta: Meta = {
  title: 'UI/Form Structure',
  component: FormStructureDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
