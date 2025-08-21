import { useState } from "react";
import { Container, Row, Col, Stack, Spacer } from "@/components/ui/grid";
import { Heading, Text, Code, Link, List, ListItem } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeSelector, ThemeToggle } from "@/components/ui/theme-selector";
import { useTheme } from "@/contexts/ThemeContext";
import { ChevronRight, Check, Star, Heart, Search, Home } from "@/components/ui/icons";
import { Palette } from "lucide-react";

export const ComponentShowcase = () => {
  const [inputValue, setInputValue] = useState("");
  const { theme, themes } = useTheme();
  const currentTheme = themes.find(t => t.value === theme);

  return (
    <div className="min-h-screen bg-background">
      {/* Theme Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Container size="xl">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Palette className="h-6 w-6 text-primary" />
              <Heading level={4} variant="neon" className="!text-2xl">
                NeoPOP UI
              </Heading>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <Text size="sm" variant="muted">Current:</Text>
                <Badge variant="secondary">{currentTheme?.label}</Badge>
              </div>
              <ThemeSelector />
              <ThemeToggle />
            </div>
          </div>
        </Container>
      </header>

      <div className="cyber-grid">
        <Container size="xl" className="py-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Heading level={1} variant="gradient" animation="float">
              NeoPOP UI Library
            </Heading>
            <Spacer size="md" />
            <Text size="xl" variant="muted" className="max-w-2xl mx-auto">
              A comprehensive React component library with 5 stunning themes, 
              cyberpunk aesthetics, and modern design patterns.
            </Text>
            <Spacer size="sm" />
            <div className="flex justify-center gap-2 mb-8">
              <Badge variant="secondary">5 Themes</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">Responsive</Badge>
              <Badge variant="outline">Accessible</Badge>
            </div>
            <Stack direction="row" spacing="md" justify="center" className="flex-wrap">
              <Button variant="hero" size="lg" asChild>
                <Link href="/documentation">
                  Get Started
                  <ChevronRight variant="neon" size="sm" />
                </Link>
              </Button>
              <Button variant="cyber" size="lg" asChild>
                <Link href="/documentation">
                  View Components
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/documentation">
                  Documentation
                </Link>
              </Button>
            </Stack>
          </div>

        {/* Grid System Demo */}
        <Card className="mb-12 bg-card/80 backdrop-blur-sm border-primary/30">
          <CardHeader>
            <CardTitle className="text-neon-cyan neon-glow">Grid System</CardTitle>
            <CardDescription>Responsive layout components with NeoPOP styling</CardDescription>
          </CardHeader>
          <CardContent>
            <Row gutter="md" className="mb-6">
              <Col span={4}>
                <div className="h-20 bg-gradient-neon rounded-lg flex items-center justify-center">
                  <Text variant="default" weight="bold">Col 1/3</Text>
                </div>
              </Col>
              <Col span={4}>
                <div className="h-20 bg-gradient-sunset rounded-lg flex items-center justify-center">
                  <Text variant="default" weight="bold">Col 2/3</Text>
                </div>
              </Col>
              <Col span={4}>
                <div className="h-20 bg-gradient-cyber rounded-lg flex items-center justify-center">
                  <Text variant="default" weight="bold">Col 3/3</Text>
                </div>
              </Col>
            </Row>
            
            <Stack direction="row" spacing="sm" className="flex-wrap">
              <div className="h-16 w-32 bg-neon-green/20 border border-neon-green rounded-lg flex items-center justify-center">
                <Text variant="cyber" size="sm">Stack Item</Text>
              </div>
              <div className="h-16 w-32 bg-neon-magenta/20 border border-neon-magenta rounded-lg flex items-center justify-center">
                <Text variant="neon" size="sm">Stack Item</Text>
              </div>
              <div className="h-16 w-32 bg-neon-orange/20 border border-neon-orange rounded-lg flex items-center justify-center">
                <Text variant="warning" size="sm">Stack Item</Text>
              </div>
            </Stack>
          </CardContent>
        </Card>

        {/* Typography Demo */}
        <Card className="mb-12 bg-card/80 backdrop-blur-sm border-secondary/30">
          <CardHeader>
            <CardTitle className="text-neon-magenta neon-glow">Typography</CardTitle>
            <CardDescription>Futuristic text components with multiple variants</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Heading level={2} variant="neon">Neon Heading</Heading>
              <Heading level={3} variant="cyber">Cyber Heading</Heading>
              <Heading level={4} variant="matrix">Matrix Heading</Heading>
              <Heading level={5} variant="gradient" animation="glitch">Glitch Heading</Heading>
            </div>
            
            <div className="space-y-4">
              <Text size="lg">Large text with default styling</Text>
              <Text variant="neon">Neon glowing text effect</Text>
              <Text variant="cyber">Cyberpunk cyan text</Text>
              <Text variant="muted">Muted secondary text</Text>
            </div>

            <div>
              <Code variant="inline" neon>npm install neopop-ui</Code>
              <Spacer size="sm" />
              <Code variant="block" neon>
{`import { Button, Input } from 'neopop-ui';

function App() {
  return (
    <div>
      <Button variant="neon">Click me</Button>
      <Input variant="cyber" placeholder="Enter text..." />
    </div>
  );
}`}
              </Code>
            </div>

            <div>
              <Link variant="neon" href="#" external>Neon Link</Link> • {" "}
              <Link variant="cyber" href="#">Cyber Link</Link> • {" "}
              <Link variant="button" href="#">Button Link</Link>
            </div>
          </CardContent>
        </Card>

        {/* Buttons Demo */}
        <Card className="mb-12 bg-card/80 backdrop-blur-sm border-success/30">
          <CardHeader>
            <CardTitle className="text-neon-green neon-glow">Button Variants</CardTitle>
            <CardDescription>Interactive buttons with 3D effects and neon styling</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Stack spacing="sm">
                <Text variant="accent" weight="bold">Primary Variants</Text>
                <Button variant="default">Default</Button>
                <Button variant="neon">Neon Glow</Button>
                <Button variant="cyber">Cyber</Button>
                <Button variant="hero">Hero Button</Button>
              </Stack>

              <Stack spacing="sm">
                <Text variant="accent" weight="bold">Secondary Variants</Text>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="matrix">Matrix</Button>
              </Stack>

              <Stack spacing="sm">
                <Text variant="accent" weight="bold">Sizes & States</Text>
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button variant="destructive">Destructive</Button>
              </Stack>
            </div>

            <Spacer size="lg" />
            
            <Stack direction="row" spacing="md" className="flex-wrap">
              <Button variant="neon">
                <Star variant="neon" size="sm" />
                Favorite
              </Button>
              <Button variant="cyber">
                <Heart variant="cyber" size="sm" />
                Like
              </Button>
              <Button variant="outline">
                <Home variant="primary" size="sm" />
                Home
              </Button>
            </Stack>
          </CardContent>
        </Card>

        {/* Input Demo */}
        <Card className="mb-12 bg-card/80 backdrop-blur-sm border-warning/30">
          <CardHeader>
            <CardTitle className="text-neon-yellow neon-glow">Input Components</CardTitle>
            <CardDescription>Futuristic form inputs with multiple styling options</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Stack spacing="md">
                <div>
                  <Text variant="accent" weight="bold" className="mb-2">Default Input</Text>
                  <Input 
                    placeholder="Enter your name..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>

                <div>
                  <Text variant="neon" weight="bold" className="mb-2">Neon Input</Text>
                  <Input 
                    variant="neon"
                    placeholder="Neon styled input..."
                  />
                </div>

                <div>
                  <Text variant="cyber" weight="bold" className="mb-2">Cyber Input</Text>
                  <Input 
                    variant="cyber"
                    placeholder="Cyberpunk input..."
                  />
                </div>
              </Stack>

              <Stack spacing="md">
                <div>
                  <Text variant="success" weight="bold" className="mb-2">Matrix Input</Text>
                  <Input 
                    variant="matrix"
                    placeholder="Matrix green..."
                  />
                </div>

                <div>
                  <Text variant="muted" weight="bold" className="mb-2">Glass Effect</Text>
                  <Input 
                    variant="glass"
                    placeholder="Glass morphism..."
                  />
                </div>

                <div>
                  <Text variant="accent" weight="bold" className="mb-2">With Icon</Text>
                  <div className="relative">
                    <Search variant="muted" size="sm" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <Input 
                      variant="outline"
                      placeholder="Search..."
                      className="pl-10"
                    />
                  </div>
                </div>
              </Stack>
            </div>
          </CardContent>
        </Card>

        {/* Theme Showcase */}
        <Card className="mb-12 bg-card/80 backdrop-blur-sm border-primary/30">
          <CardHeader>
            <CardTitle className="text-primary neon-glow">Multi-Theme System</CardTitle>
            <CardDescription>
              Experience 5 carefully crafted themes - switch between them using the selector above
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {themes.map((themeOption) => (
                <div 
                  key={themeOption.value}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    theme === themeOption.value 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-4 h-4 rounded-full ${
                      themeOption.value === 'light' ? 'bg-gray-900' :
                      themeOption.value === 'dark' ? 'bg-purple-500' :
                      themeOption.value === 'pure-white' ? 'bg-black' :
                      themeOption.value === 'true-black' ? 'bg-white' :
                      'bg-yellow-500'
                    }`} />
                    <Text weight="bold">{themeOption.label}</Text>
                    {theme === themeOption.value && (
                      <Badge variant="secondary" className="ml-auto">Active</Badge>
                    )}
                  </div>
                  <Text size="sm" variant="muted">
                    {themeOption.description}
                  </Text>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features List */}
        <Card className="mb-12 bg-card/80 backdrop-blur-sm border-neon-purple/30">
          <CardHeader>
            <CardTitle className="text-neon-purple neon-glow">Library Features</CardTitle>
            <CardDescription>What makes this UI library special</CardDescription>
          </CardHeader>
          <CardContent>
            <Row gutter="lg">
              <Col span={6}>
                <List variant="unordered" neon>
                  <ListItem><Check variant="success" size="sm" className="inline mr-2" />5 Stunning Themes</ListItem>
                  <ListItem><Check variant="success" size="sm" className="inline mr-2" />Responsive Grid System</ListItem>
                  <ListItem><Check variant="success" size="sm" className="inline mr-2" />Typography Components</ListItem>
                  <ListItem><Check variant="success" size="sm" className="inline mr-2" />Button Variants</ListItem>
                  <ListItem><Check variant="success" size="sm" className="inline mr-2" />Form Inputs</ListItem>
                  <ListItem><Check variant="success" size="sm" className="inline mr-2" />Icon System</ListItem>
                </List>
              </Col>
              <Col span={6}>
                <List variant="unordered" neon>
                  <ListItem><Check variant="success" size="sm" className="inline mr-2" />Runtime Theme Switching</ListItem>
                  <ListItem><Check variant="success" size="sm" className="inline mr-2" />3D Shadow Effects</ListItem>
                  <ListItem><Check variant="success" size="sm" className="inline mr-2" />Neon Glow Animations</ListItem>
                  <ListItem><Check variant="success" size="sm" className="inline mr-2" />Cyberpunk Aesthetics</ListItem>
                  <ListItem><Check variant="success" size="sm" className="inline mr-2" />TypeScript Support</ListItem>
                  <ListItem><Check variant="success" size="sm" className="inline mr-2" />Accessible Design</ListItem>
                </List>
              </Col>
            </Row>
          </CardContent>
        </Card>

          {/* Footer */}
          <div className="text-center pt-12 border-t border-border/30">
            <Text variant="muted">
              Built with ❤️ using React, TypeScript, and Tailwind CSS
            </Text>
            <Spacer size="sm" />
            <Stack direction="row" spacing="lg" justify="center" className="flex-wrap">
              <a href="/documentation" className="text-neon-cyan hover:text-neon-cyan/80 transition-colors">GitHub</a>
              <a href="/documentation" className="text-neon-cyan hover:text-neon-cyan/80 transition-colors">Documentation</a>
              <a href="/documentation" className="text-neon-cyan hover:text-neon-cyan/80 transition-colors">Storybook</a>
              <a href="/documentation" className="text-neon-cyan hover:text-neon-cyan/80 transition-colors">NPM Package</a>
            </Stack>
          </div>
        </Container>
      </div>
    </div>
  );
};