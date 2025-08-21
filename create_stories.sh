#!/bin/bash

# Directory containing the components
COMPONENT_DIR="src/components/ui"

# Directory where the stories will be created
STORY_DIR="src/storybook"

# Create the story directory if it doesn't exist
mkdir -p "$STORY_DIR"

# Loop through each component file in the component directory
for component_file in "$COMPONENT_DIR"/*.tsx; do
  # Get the component name from the file name (e.g., "button" from "button.tsx")
  component_name=$(basename "$component_file" .tsx)

  # Capitalize the first letter of the component name (e.g., "Button")
  component_name_capitalized="$(tr '[:lower:]' '[:upper:]' <<< ${component_name:0:1})${component_name:1}"

  # Create the story file name (e.g., "button.stories.tsx")
  story_file="$STORY_DIR/$component_name.stories.tsx"

  # Create the story file with a basic template
  cat > "$story_file" << EOL
import type { Meta, StoryObj } from '@storybook/react';
import { ${component_name_capitalized} } from '../components/ui/${component_name}';

const meta: Meta<typeof ${component_name_capitalized}> = {
  title: 'UI/${component_name_capitalized}',
  component: ${component_name_capitalized},
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
EOL

  echo "Created story for ${component_name_capitalized} at ${story_file}"
done
