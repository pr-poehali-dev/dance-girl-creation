import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const skills = [
    { name: 'React', color: 'bg-primary/10 text-primary border-primary/20' },
    { name: 'TypeScript', color: 'bg-accent/10 text-accent-foreground border-accent/20' },
    { name: 'UI/UX Design', color: 'bg-secondary/10 text-secondary border-secondary/20' },
    { name: 'Tailwind CSS', color: 'bg-primary/10 text-primary border-primary/20' },
    { name: 'Node.js', color: 'bg-accent/10 text-accent-foreground border-accent/20' },
    { name: 'Figma', color: 'bg-secondary/10 text-secondary border-secondary/20' },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Современная платформа для онлайн-торговли с интеграцией платежных систем',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
      color: 'from-primary/20 to-accent/20'
    },
    {
      title: 'Mobile Banking App',
      description: 'Интуитивное мобильное приложение для управления финансами',
      tags: ['React Native', 'TypeScript', 'API'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      color: 'from-secondary/20 to-primary/20'
    },
    {
      title: 'Design System',
      description: 'Комплексная система дизайна для корпоративных продуктов',
      tags: ['Figma', 'React', 'Storybook'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop',
      color: 'from-accent/20 to-secondary/20'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Интерактивная панель для визуализации бизнес-метрик',
      tags: ['D3.js', 'React', 'Charts'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      color: 'from-primary/20 to-secondary/20'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.1),transparent_50%)]" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <Badge className="text-lg px-4 py-2 bg-gradient-to-r from-primary to-accent text-white border-0">
                  Creative Portfolio
                </Badge>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Творческое
                </span>
                <br />
                <span className="text-foreground">Портфолио</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Создаю современные цифровые решения, которые объединяют креативный дизайн и передовые технологии
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all hover:scale-105">
                  <Icon name="Mail" className="mr-2" size={20} />
                  Связаться
                </Button>
                <Button size="lg" variant="outline" className="hover:scale-105 transition-all">
                  <Icon name="Github" className="mr-2" size={20} />
                  GitHub
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 animate-dance">
                <img 
                  src="https://cdn.poehali.dev/files/113821b4-36cc-47d0-bde7-4e748c6e6f04.jpg"
                  alt="Portfolio"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-secondary to-accent rounded-full blur-2xl opacity-60 animate-float" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-60 animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Обо мне
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Веб-разработчик и дизайнер с опытом создания современных, функциональных и красивых цифровых продуктов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="Code2" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Разработка</h3>
                <p className="text-muted-foreground">
                  Создание быстрых и масштабируемых веб-приложений с использованием современных технологий
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="Palette" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Дизайн</h3>
                <p className="text-muted-foreground">
                  Разработка пользовательских интерфейсов, которые радуют глаз и удобны в использовании
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="Sparkles" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Инновации</h3>
                <p className="text-muted-foreground">
                  Внедрение передовых решений для создания уникального пользовательского опыта
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8">Навыки</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className={`text-base px-6 py-2 hover:scale-110 transition-all cursor-pointer ${skill.color} border-2`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Проекты
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Избранные работы, демонстрирующие мой подход к созданию цифровых продуктов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <Button className="bg-white text-foreground hover:bg-white/90">
                      <Icon name="ArrowRight" className="mr-2" size={20} />
                      Подробнее
                    </Button>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="flex justify-center gap-6 mb-6">
            <Button size="icon" variant="ghost" className="hover:bg-white/10 text-white hover:text-white">
              <Icon name="Github" size={24} />
            </Button>
            <Button size="icon" variant="ghost" className="hover:bg-white/10 text-white hover:text-white">
              <Icon name="Linkedin" size={24} />
            </Button>
            <Button size="icon" variant="ghost" className="hover:bg-white/10 text-white hover:text-white">
              <Icon name="Mail" size={24} />
            </Button>
          </div>
          <p className="text-white/80">
            © 2024 Creative Portfolio. Создано с ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
