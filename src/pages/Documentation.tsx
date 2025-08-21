import { useState } from "react";
import { Container, Row, Col, Stack, Spacer } from "@/components/ui/grid";
import { Heading, Text, Code, Link, List, ListItem } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeSelector, ThemeToggle } from "@/components/ui/theme-selector";
import { useTheme } from "@/contexts/ThemeContext";
import { 
  ChevronRight, 
  Check, 
  Star, 
  Heart, 
  Search, 
  Home,
  ArrowLeft,
  Copy,
  ExternalLink,
  FileText
} from "@/components/ui/icons";
import { Palette, Book } from "lucide-react";

interface ComponentDocProps {
  title: string;
  description: string;
  children: React.ReactNode;
  codeExample?: string;
}

const ComponentDoc = ({ title, description, children, codeExample }: ComponentDocProps) => (
  <Card className="mb-8 bg-card/80 backdrop-blur-sm border-primary/20">
    <CardHeader>
      <CardTitle className="text-primary neon-glow flex items-center gap-2">
        <FileText className="h-5 w-5" />
        {title}
      </CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="p-6 rounded-lg border bg-muted/20">
        {children}
      </div>
      {codeExample && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <Text variant="accent" weight="bold">Code Example</Text>
            <Button variant="ghost" size="sm">
              <Copy className="h-4 w-4" />
              Copy
            </Button>
          </div>
          <Code variant="block" neon>
            {codeExample}
          </Code>
        </div>
      )}
    </CardContent>
  </Card>
);

export default function Documentation() {
  const [activeTab, setActiveTab] = useState("grid");
  const { theme, themes } = useTheme();
  const currentTheme = themes.find(t => t.value === theme);

  const gridExample = `import { Container, Row, Col, Stack } from '@/components/ui/grid';

<Container size="xl">
  <Row gutter="md">
    <Col span={4}>Content 1</Col>
    <Col span={4}>Content 2</Col>
    <Col span={4}>Content 3</Col>
  </Row>
</Container>`;

  const typographyExample = `import { Heading, Text, Code, Link } from '@/components/ui/typography';

<Heading level={1} variant="neon">Main Title</Heading>
<Text variant="cyber" size="lg">Description text</Text>
<Code variant="inline" neon>npm install</Code>
<Link variant="neon" href="#" external>External Link</Link>`;

  const buttonExample = `import { Button } from '@/components/ui/button';

<Button variant="neon" size="lg">
  <Star size="sm" />
  Neon Button
</Button>
<Button variant="cyber">Cyber Button</Button>
<Button variant="hero" size="lg">Hero Button</Button>`;

  const inputExample = `import { Input } from '@/components/ui/input';

<Input variant="neon" placeholder="Neon input..." />
<Input variant="cyber" placeholder="Cyber input..." />
<Input variant="matrix" placeholder="Matrix input..." />
<Input variant="glass" placeholder="Glass effect..." />`;

  const themeExample = `import { useTheme } from '@/contexts/ThemeContext';
import { ThemeSelector } from '@/components/ui/theme-selector';

function App() {
  const { theme, setTheme } = useTheme();
  
  return (
    <div>
      <ThemeSelector />
      <p>Current theme: {theme}</p>
    </div>
  );
}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Documentation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Container size="xl">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Book className="h-6 w-6 text-primary" />
              <Heading level={4} variant="neon" className="!text-2xl">
                Documentation
              </Heading>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <Text size="sm" variant="muted">Theme:</Text>
                <Badge variant="secondary">{currentTheme?.label}</Badge>
              </div>
              <ThemeSelector />
              <ThemeToggle />
              <Button variant="outline" size="sm" asChild>
                <a href="/">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </header>

      <div className="cyber-grid">
        <Container size="xl" className="py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Heading level={1} variant="gradient" animation="float">
              Component Documentation
            </Heading>
            <Spacer size="md" />
            <Text size="xl" variant="muted" className="max-w-3xl mx-auto">
              Comprehensive documentation for all NeoPOP UI components. 
              Each component includes examples, props, and code snippets.
            </Text>
            <Spacer size="sm" />
            <div className="flex justify-center gap-2 mb-8">
              <Badge variant="secondary">Interactive Examples</Badge>
              <Badge variant="outline">Copy-Paste Ready</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">5 Themes</Badge>
            </div>
          </div>

          {/* Component Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              <TabsTrigger value="grid">Layout</TabsTrigger>
              <TabsTrigger value="typography">Typography</TabsTrigger>
              <TabsTrigger value="buttons">Buttons</TabsTrigger>
              <TabsTrigger value="inputs">Inputs</TabsTrigger>
              <TabsTrigger value="theming">Theming</TabsTrigger>
            </TabsList>

            {/* Grid System Documentation */}
            <TabsContent value="grid" className="space-y-8">
              <ComponentDoc
                title="Grid System"
                description="Responsive layout components for building flexible interfaces"
                codeExample={gridExample}
              >
                <div className="space-y-6">
                  <div>
                    <Text variant="accent" weight="bold" className="mb-4">Container Sizes</Text>
                    <Row gutter="sm" className="mb-4">
                      <Col span={3}>
                        <div className="h-12 bg-primary/20 border border-primary rounded flex items-center justify-center">
                          <Text size="sm">xs</Text>
                        </div>
                      </Col>
                      <Col span={3}>
                        <div className="h-12 bg-secondary/20 border border-secondary rounded flex items-center justify-center">
                          <Text size="sm">sm</Text>
                        </div>
                      </Col>
                      <Col span={3}>
                        <div className="h-12 bg-success/20 border border-success rounded flex items-center justify-center">
                          <Text size="sm">md</Text>
                        </div>
                      </Col>
                      <Col span={3}>
                        <div className="h-12 bg-warning/20 border border-warning rounded flex items-center justify-center">
                          <Text size="sm">lg</Text>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  
                  <div>
                    <Text variant="accent" weight="bold" className="mb-4">Stack Component</Text>
                    <Stack direction="row" spacing="md" className="flex-wrap">
                      <div className="h-16 w-32 bg-neon-cyan/20 border border-neon-cyan rounded-lg flex items-center justify-center">
                        <Text variant="cyber" size="sm">Item 1</Text>
                      </div>
                      <div className="h-16 w-32 bg-neon-magenta/20 border border-neon-magenta rounded-lg flex items-center justify-center">
                        <Text variant="neon" size="sm">Item 2</Text>
                      </div>
                      <div className="h-16 w-32 bg-neon-green/20 border border-neon-green rounded-lg flex items-center justify-center">
                        <Text variant="success" size="sm">Item 3</Text>
                      </div>
                    </Stack>
                  </div>
                </div>
              </ComponentDoc>
            </TabsContent>

            {/* Typography Documentation */}
            <TabsContent value="typography" className="space-y-8">
              <ComponentDoc
                title="Typography System"
                description="Futuristic text components with multiple variants and animations"
                codeExample={typographyExample}
              >
                <div className="space-y-6">
                  <div>
                    <Text variant="accent" weight="bold" className="mb-4">Heading Variants</Text>
                    <Stack spacing="md">
                      <Heading level={2} variant="neon">Neon Heading</Heading>
                      <Heading level={3} variant="cyber">Cyber Heading</Heading>
                      <Heading level={4} variant="matrix">Matrix Heading</Heading>
                      <Heading level={5} variant="gradient" animation="glitch">Gradient with Glitch</Heading>
                    </Stack>
                  </div>
                  
                  <div>
                    <Text variant="accent" weight="bold" className="mb-4">Text Variants</Text>
                    <Stack spacing="sm">
                      <Text size="lg">Large default text</Text>
                      <Text variant="neon">Neon glowing text</Text>
                      <Text variant="cyber">Cyberpunk cyan text</Text>
                      <Text variant="muted">Muted secondary text</Text>
                      <Text variant="success">Success green text</Text>
                      <Text variant="warning">Warning text</Text>
                      <Text variant="destructive">Error text</Text>
                    </Stack>
                  </div>

                  <div>
                    <Text variant="accent" weight="bold" className="mb-4">Code Examples</Text>
                    <Stack spacing="sm">
                      <Code variant="inline" neon>inline code</Code>
                      <Code variant="block" neon>{`// Block code example
const greeting = "Hello, World!";`}</Code>
                    </Stack>
                  </div>

                  <div>
                    <Text variant="accent" weight="bold" className="mb-4">Links</Text>
                    <Stack direction="row" spacing="md" className="flex-wrap">
                      <Link variant="neon" href="#" external>Neon Link</Link>
                      <Link variant="cyber" href="#">Cyber Link</Link>
                      <Link variant="button" href="#">Button Link</Link>
                    </Stack>
                  </div>
                </div>
              </ComponentDoc>
            </TabsContent>

            {/* Buttons Documentation */}
            <TabsContent value="buttons" className="space-y-8">
              <ComponentDoc
                title="Button Components"
                description="Interactive buttons with 3D effects, neon styling, and multiple variants"
                codeExample={buttonExample}
              >
                <div className="space-y-6">
                  <div>
                    <Text variant="accent" weight="bold" className="mb-4">Primary Variants</Text>
                    <Stack direction="row" spacing="md" className="flex-wrap">
                      <Button variant="default">Default</Button>
                      <Button variant="neon">Neon Glow</Button>
                      <Button variant="cyber">Cyber</Button>
                      <Button variant="hero">Hero Button</Button>
                      <Button variant="matrix">Matrix</Button>
                    </Stack>
                  </div>

                  <div>
                    <Text variant="accent" weight="bold" className="mb-4">Secondary Variants</Text>
                    <Stack direction="row" spacing="md" className="flex-wrap">
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="destructive">Destructive</Button>
                    </Stack>
                  </div>

                  <div>
                    <Text variant="accent" weight="bold" className="mb-4">Sizes</Text>
                    <Stack direction="row" spacing="md" align="center" className="flex-wrap">
                      <Button variant="neon" size="sm">Small</Button>
                      <Button variant="neon" size="default">Default</Button>
                      <Button variant="neon" size="lg">Large</Button>
                      <Button variant="neon" size="icon">
                        <Star className="h-4 w-4" />
                      </Button>
                    </Stack>
                  </div>

                  <div>
                    <Text variant="accent" weight="bold" className="mb-4">With Icons</Text>
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
                      <Button variant="hero">
                        Get Started
                        <ChevronRight variant="neon" size="sm" />
                      </Button>
                    </Stack>
                  </div>
                </div>
              </ComponentDoc>
            </TabsContent>

            {/* Inputs Documentation */}
            <TabsContent value="inputs" className="space-y-8">
              <ComponentDoc
                title="Input Components"
                description="Futuristic form inputs with multiple styling options and effects"
                codeExample={inputExample}
              >
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Stack spacing="md">
                      <div>
                        <Text variant="accent" weight="bold" className="mb-2">Default Input</Text>
                        <Input placeholder="Enter your name..." />
                      </div>

                      <div>
                        <Text variant="neon" weight="bold" className="mb-2">Neon Input</Text>
                        <Input variant="neon" placeholder="Neon styled input..." />
                      </div>

                      <div>
                        <Text variant="cyber" weight="bold" className="mb-2">Cyber Input</Text>
                        <Input variant="cyber" placeholder="Cyberpunk input..." />
                      </div>
                    </Stack>

                    <Stack spacing="md">
                      <div>
                        <Text variant="success" weight="bold" className="mb-2">Matrix Input</Text>
                        <Input variant="matrix" placeholder="Matrix green..." />
                      </div>

                      <div>
                        <Text variant="muted" weight="bold" className="mb-2">Glass Effect</Text>
                        <Input variant="glass" placeholder="Glass morphism..." />
                      </div>

                      <div>
                        <Text variant="accent" weight="bold" className="mb-2">With Icon</Text>
                        <div className="relative">
                          <Search variant="muted" size="sm" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                          <Input variant="outline" placeholder="Search..." className="pl-10" />
                        </div>
                      </div>
                    </Stack>
                  </div>

                  <div>
                    <Text variant="accent" weight="bold" className="mb-4">Input Types</Text>
                    <Row gutter="md">
                      <Col span={4}>
                        <Input type="email" variant="cyber" placeholder="Email address..." />
                      </Col>
                      <Col span={4}>
                        <Input type="password" variant="neon" placeholder="Password..." />
                      </Col>
                      <Col span={4}>
                        <Input type="number" variant="matrix" placeholder="Number..." />
                      </Col>
                    </Row>
                  </div>
                </div>
              </ComponentDoc>
            </TabsContent>

            {/* Theming Documentation */}
            <TabsContent value="theming" className="space-y-8">
              <ComponentDoc
                title="Multi-Theme System"
                description="Dynamic theming system with 5 built-in themes and runtime switching"
                codeExample={themeExample}
              >
                <div className="space-y-6">
                  <div>
                    <Text variant="accent" weight="bold" className="mb-4">Available Themes</Text>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  </div>

                  <div>
                    <Text variant="accent" weight="bold" className="mb-4">Theme Selector</Text>
                    <div className="flex items-center gap-4">
                      <ThemeSelector />
                      <Text variant="muted">or</Text>
                      <ThemeToggle />
                    </div>
                  </div>

                  <div>
                    <Text variant="accent" weight="bold" className="mb-4">Theme Features</Text>
                    <List variant="unordered" neon>
                      <ListItem><Check variant="success" size="sm" className="inline mr-2" />Runtime theme switching</ListItem>
                      <ListItem><Check variant="success" size="sm" className="inline mr-2" />Persistent theme storage</ListItem>
                      <ListItem><Check variant="success" size="sm" className="inline mr-2" />System theme detection</ListItem>
                      <ListItem><Check variant="success" size="sm" className="inline mr-2" />Smooth transitions</ListItem>
                      <ListItem><Check variant="success" size="sm" className="inline mr-2" />WCAG contrast compliance</ListItem>
                      <ListItem><Check variant="success" size="sm" className="inline mr-2" />OLED optimization</ListItem>
                    </List>
                  </div>
                </div>
              </ComponentDoc>
            </TabsContent>
          </Tabs>

          {/* Quick Links */}
          <Card className="mt-12 bg-card/80 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary neon-glow">Quick Links</CardTitle>
              <CardDescription>Jump to external resources and tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="outline" className="h-20 flex-col">
                  <ExternalLink className="h-5 w-5 mb-2" />
                  <Text size="sm" weight="bold">GitHub</Text>
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <Book className="h-5 w-5 mb-2" />
                  <Text size="sm" weight="bold">Storybook</Text>
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <FileText className="h-5 w-5 mb-2" />
                  <Text size="sm" weight="bold">API Docs</Text>
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <Palette className="h-5 w-5 mb-2" />
                  <Text size="sm" weight="bold">Design System</Text>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Container>
      </div>
    </div>
  );
}