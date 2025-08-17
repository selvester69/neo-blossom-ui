import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "@/contexts/ThemeContext";
import { Monitor, Moon, Sun, Contrast, ShoppingBag } from "lucide-react";

const themeIcons = {
  light: Sun,
  dark: Moon,
  'pure-white': Contrast,
  'true-black': Monitor,
  'ecommerce-dark': ShoppingBag,
};

export function ThemeSelector() {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Select value={theme} onValueChange={setTheme}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent>
          {themes.map((themeOption) => {
            const Icon = themeIcons[themeOption.value];
            return (
              <SelectItem key={themeOption.value} value={themeOption.value}>
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <div>
                    <div className="font-medium">{themeOption.label}</div>
                    <div className="text-xs text-muted-foreground">
                      {themeOption.description}
                    </div>
                  </div>
                </div>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const Icon = themeIcons[theme];

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="w-9 h-9 p-0"
    >
      <Icon className="h-4 w-4" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}