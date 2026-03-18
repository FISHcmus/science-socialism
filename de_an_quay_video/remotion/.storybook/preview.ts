import type { Preview } from "@storybook/react-vite";
import { DarkDecorator } from "./decorators/RemotionDecorator";
import { loadFont } from "@remotion/google-fonts/CormorantGaramond";

loadFont();

const preview: Preview = {
  decorators: [DarkDecorator],
  parameters: {
    backgrounds: {
      default: "darkest",
      values: [
        { name: "darkest", value: "#0a0a0f" },
        { name: "dark", value: "#1a1a2e" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
