import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Section = 'home' | 'apps' | 'browser' | 'games' | 'settings';
type AppCategory = 'all' | 'productivity' | 'creative' | 'entertainment' | 'development';

interface App {
  id: string;
  name: string;
  icon: string;
  category: AppCategory;
  description: string;
  size: string;
  rating: number;
}

interface Game {
  id: string;
  name: string;
  icon: string;
  description: string;
}

const apps: App[] = [
  { id: '1', name: 'Code Studio', icon: 'Code2', category: 'development', description: 'Редактор кода нового поколения', size: '145 МБ', rating: 4.9 },
  { id: '2', name: 'PhotoMaster', icon: 'Image', category: 'creative', description: 'Профессиональная обработка фото', size: '320 МБ', rating: 4.7 },
  { id: '3', name: 'TaskFlow', icon: 'CheckSquare', category: 'productivity', description: 'Управление задачами и проектами', size: '78 МБ', rating: 4.8 },
  { id: '4', name: 'MusicWave', icon: 'Music', category: 'entertainment', description: 'Музыкальный плеер с эквалайзером', size: '95 МБ', rating: 4.6 },
  { id: '5', name: 'VideoEdit Pro', icon: 'Video', category: 'creative', description: 'Монтаж видео профессионального уровня', size: '512 МБ', rating: 4.9 },
  { id: '6', name: 'NotePad++', icon: 'FileText', category: 'productivity', description: 'Заметки и документы', size: '42 МБ', rating: 4.5 },
  { id: '7', name: 'YouTube', icon: 'Youtube', category: 'entertainment', description: 'Смотрите видео со всего мира', size: '180 МБ', rating: 5.0 },
];

const games: Game[] = [
  { id: '1', name: 'Сапёр', icon: 'Bomb', description: 'Классическая логическая игра' },
  { id: '2', name: 'Minecraft', icon: 'Box', description: 'Исследуй и строй мир из кубиков' },
  { id: '3', name: 'Roblox', icon: 'Users', description: 'Платформа для создания игр' },
  { id: '4', name: 'Шахматы', icon: 'Crown', description: 'Игра для двух игроков' },
  { id: '5', name: 'Пасьянс', icon: 'Spade', description: 'Классический карточный пасьянс' },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<AppCategory>('all');
  const [browserUrl, setBrowserUrl] = useState('https://poehali.dev');
  const [currentUrl, setCurrentUrl] = useState('https://poehali.dev');
  const [minesweeperActive, setMinesweeperActive] = useState(false);
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [youtubeActive, setYoutubeActive] = useState(false);

  const filteredApps = apps.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         app.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || app.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const currentTime = new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  const currentDate = new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="h-screen w-screen overflow-hidden relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCA0NGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="glass border-b border-white/10 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="gradient-primary p-2 rounded-xl">
              <Icon name="Laptop" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-white">Windows 12</h1>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="text-sm font-semibold text-white">{currentTime}</div>
              <div className="text-xs text-white/70">{currentDate}</div>
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Icon name="Settings" size={20} />
            </Button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          <div className="glass w-20 flex flex-col items-center py-6 gap-4 border-r border-white/10">
            {[
              { id: 'home' as Section, icon: 'Home', label: 'Главная' },
              { id: 'apps' as Section, icon: 'Grid3x3', label: 'Приложения' },
              { id: 'browser' as Section, icon: 'Globe', label: 'Браузер' },
              { id: 'games' as Section, icon: 'Gamepad2', label: 'Игры' },
              { id: 'settings' as Section, icon: 'Settings', label: 'Настройки' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`group relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/50'
                    : 'hover:bg-white/10'
                }`}
              >
                <Icon name={item.icon} size={24} className="text-white" />
                <div className="absolute left-full ml-4 px-3 py-1.5 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
                  {item.label}
                </div>
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-8">
            {activeSection === 'home' && (
              <div className="space-y-8 animate-fade-in">
                <div className="text-center space-y-4 py-12">
                  <div className="inline-block gradient-primary p-4 rounded-3xl mb-4">
                    <Icon name="Sparkles" size={48} className="text-white" />
                  </div>
                  <h2 className="text-5xl font-bold text-white">Добро пожаловать в Windows 12</h2>
                  <p className="text-xl text-white/70 max-w-2xl mx-auto">
                    Операционная система нового поколения с современным дизайном и безграничными возможностями
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="glass border-white/10 p-6 hover:scale-105 transition-transform cursor-pointer" onClick={() => setActiveSection('apps')}>
                    <div className="gradient-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Icon name="Grid3x3" className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Приложения</h3>
                    <p className="text-white/70">{apps.length} доступных приложений</p>
                  </Card>

                  <Card className="glass border-white/10 p-6 hover:scale-105 transition-transform cursor-pointer" onClick={() => setActiveSection('browser')}>
                    <div className="gradient-accent w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Icon name="Globe" className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Браузер</h3>
                    <p className="text-white/70">Быстрый и безопасный интернет</p>
                  </Card>

                  <Card className="glass border-white/10 p-6 hover:scale-105 transition-transform cursor-pointer" onClick={() => setActiveSection('games')}>
                    <div className="bg-gradient-to-br from-pink-500 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Icon name="Gamepad2" className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Игры</h3>
                    <p className="text-white/70">{games.length} игры в комплекте</p>
                  </Card>
                </div>
              </div>
            )}

            {activeSection === 'apps' && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-white">Магазин приложений</h2>
                  
                  <div className="flex gap-4">
                    <div className="flex-1 relative">
                      <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={20} />
                      <Input
                        placeholder="Поиск приложений..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 glass border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {(['all', 'productivity', 'creative', 'entertainment', 'development'] as AppCategory[]).map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? 'default' : 'outline'}
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? 'gradient-primary' : 'glass border-white/20 text-white hover:bg-white/10'}
                      >
                        {category === 'all' && 'Все'}
                        {category === 'productivity' && 'Продуктивность'}
                        {category === 'creative' && 'Креатив'}
                        {category === 'entertainment' && 'Развлечения'}
                        {category === 'development' && 'Разработка'}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredApps.map((app) => (
                    <Card key={app.id} className="glass border-white/10 p-6 hover:scale-105 transition-all hover:border-primary/50">
                      <div className="flex items-start gap-4">
                        <div className="gradient-primary w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <Icon name={app.icon} className="text-white" size={28} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-white mb-1">{app.name}</h3>
                          <p className="text-sm text-white/70 mb-2">{app.description}</p>
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary" className="glass border-white/20 text-white">
                              {app.size}
                            </Badge>
                            <div className="flex items-center gap-1">
                              <Icon name="Star" className="text-yellow-400" size={16} fill="currentColor" />
                              <span className="text-sm text-white font-semibold">{app.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button 
                        className="w-full mt-4 gradient-primary"
                        onClick={() => {
                          if (app.id === '7') {
                            setYoutubeActive(true);
                            setActiveSection('browser');
                          }
                        }}
                      >
                        <Icon name="Download" size={16} className="mr-2" />
                        {app.id === '7' ? 'Открыть' : 'Установить'}
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'browser' && (
              <div className="space-y-6 animate-fade-in h-full flex flex-col">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-white">Веб-браузер</h2>
                  
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <Icon name="ChevronLeft" size={20} />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <Icon name="ChevronRight" size={20} />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <Icon name="RotateCw" size={20} />
                    </Button>
                    
                    <div className="flex-1 relative">
                      <Icon name="Lock" className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400" size={16} />
                      <Input
                        value={browserUrl}
                        onChange={(e) => setBrowserUrl(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && setCurrentUrl(browserUrl)}
                        className="pl-10 glass border-white/20 text-white"
                      />
                    </div>
                    
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <Icon name="Star" size={20} />
                    </Button>
                  </div>
                </div>

                {youtubeActive ? (
                  <YouTubeApp onClose={() => setYoutubeActive(false)} />
                ) : (
                  <Card className="flex-1 glass border-white/10 p-8 overflow-hidden">
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="gradient-accent p-6 rounded-3xl inline-block">
                          <Icon name="Globe" size={64} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold text-white">Введите адрес сайта</h3>
                        <p className="text-white/70 max-w-md">
                          Текущий адрес: <span className="text-accent font-mono">{currentUrl}</span>
                        </p>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            )}

            {activeSection === 'games' && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl font-bold text-white">Игры</h2>

{!activeGame ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {games.map((game) => (
                      <Card 
                        key={game.id} 
                        className="glass border-white/10 p-6 hover:scale-105 transition-all cursor-pointer hover:border-primary/50"
                        onClick={() => setActiveGame(game.id)}
                      >
                        <div className="bg-gradient-to-br from-pink-500 to-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                          <Icon name={game.icon} className="text-white" size={40} />
                        </div>
                        <h3 className="text-xl font-semibold text-white text-center mb-2">{game.name}</h3>
                        <p className="text-white/70 text-center mb-4">{game.description}</p>
                        <Button className="w-full gradient-primary">
                          <Icon name="Play" size={16} className="mr-2" />
                          Играть
                        </Button>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Button 
                      variant="outline" 
                      className="glass border-white/20 text-white hover:bg-white/10"
                      onClick={() => setActiveGame(null)}
                    >
                      <Icon name="ArrowLeft" size={16} className="mr-2" />
                      Назад к играм
                    </Button>
                    {activeGame === '1' && <Minesweeper />}
                    {activeGame === '2' && <MinecraftGame />}
                    {activeGame === '3' && <RobloxGame />}
                  </div>
                )}
              </div>
            )}

            {activeSection === 'settings' && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl font-bold text-white">Настройки системы</h2>

                <Tabs defaultValue="display" className="w-full">
                  <TabsList className="glass border-white/20">
                    <TabsTrigger value="display" className="data-[state=active]:bg-primary">
                      <Icon name="Monitor" size={16} className="mr-2" />
                      Дисплей
                    </TabsTrigger>
                    <TabsTrigger value="sound" className="data-[state=active]:bg-primary">
                      <Icon name="Volume2" size={16} className="mr-2" />
                      Звук
                    </TabsTrigger>
                    <TabsTrigger value="system" className="data-[state=active]:bg-primary">
                      <Icon name="Cpu" size={16} className="mr-2" />
                      Система
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="display" className="mt-6 space-y-4">
                    <Card className="glass border-white/10 p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Параметры дисплея</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-white">Разрешение экрана</span>
                          <Badge className="gradient-primary">1920 × 1080</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white">Частота обновления</span>
                          <Badge className="gradient-primary">60 Гц</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white">Масштабирование</span>
                          <Badge className="gradient-primary">100%</Badge>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="sound" className="mt-6 space-y-4">
                    <Card className="glass border-white/10 p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Параметры звука</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-white">Громкость системы</span>
                          <Badge className="gradient-primary">75%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white">Устройство вывода</span>
                          <Badge className="gradient-primary">Динамики</Badge>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="system" className="mt-6 space-y-4">
                    <Card className="glass border-white/10 p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Информация о системе</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-white">Версия Windows</span>
                          <Badge className="gradient-primary">Windows 12 Pro</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white">Процессор</span>
                          <Badge className="gradient-primary">Intel Core i7</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white">Оперативная память</span>
                          <Badge className="gradient-primary">16 ГБ</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white">Хранилище</span>
                          <Badge className="gradient-primary">512 ГБ SSD</Badge>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Minesweeper = () => {
  const ROWS = 10;
  const COLS = 10;
  const MINES = 15;

  interface Cell {
    isMine: boolean;
    isRevealed: boolean;
    isFlagged: boolean;
    adjacentMines: number;
  }

  const [board, setBoard] = useState<Cell[][]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const initializeBoard = () => {
    const newBoard: Cell[][] = Array(ROWS).fill(null).map(() =>
      Array(COLS).fill(null).map(() => ({
        isMine: false,
        isRevealed: false,
        isFlagged: false,
        adjacentMines: 0,
      }))
    );

    let minesPlaced = 0;
    while (minesPlaced < MINES) {
      const row = Math.floor(Math.random() * ROWS);
      const col = Math.floor(Math.random() * COLS);
      if (!newBoard[row][col].isMine) {
        newBoard[row][col].isMine = true;
        minesPlaced++;
      }
    }

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        if (!newBoard[row][col].isMine) {
          let count = 0;
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              const newRow = row + i;
              const newCol = col + j;
              if (
                newRow >= 0 &&
                newRow < ROWS &&
                newCol >= 0 &&
                newCol < COLS &&
                newBoard[newRow][newCol].isMine
              ) {
                count++;
              }
            }
          }
          newBoard[row][col].adjacentMines = count;
        }
      }
    }

    setBoard(newBoard);
    setGameOver(false);
    setGameWon(false);
  };

  useState(() => {
    initializeBoard();
  });

  const revealCell = (row: number, col: number) => {
    if (gameOver || gameWon || board[row][col].isRevealed || board[row][col].isFlagged) return;

    const newBoard = [...board];
    newBoard[row][col].isRevealed = true;

    if (newBoard[row][col].isMine) {
      setGameOver(true);
      newBoard.forEach(row => row.forEach(cell => {
        if (cell.isMine) cell.isRevealed = true;
      }));
    } else if (newBoard[row][col].adjacentMines === 0) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const newRow = row + i;
          const newCol = col + j;
          if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS) {
            if (!newBoard[newRow][newCol].isRevealed) {
              setTimeout(() => revealCell(newRow, newCol), 10);
            }
          }
        }
      }
    }

    setBoard(newBoard);
    checkWin(newBoard);
  };

  const toggleFlag = (e: React.MouseEvent, row: number, col: number) => {
    e.preventDefault();
    if (gameOver || gameWon || board[row][col].isRevealed) return;

    const newBoard = [...board];
    newBoard[row][col].isFlagged = !newBoard[row][col].isFlagged;
    setBoard(newBoard);
  };

  const checkWin = (currentBoard: Cell[][]) => {
    const allNonMinesRevealed = currentBoard.every(row =>
      row.every(cell => cell.isMine || cell.isRevealed)
    );
    if (allNonMinesRevealed) {
      setGameWon(true);
    }
  };

  const getCellColor = (cell: Cell) => {
    if (!cell.isRevealed) return 'glass border-white/20 hover:border-primary/50';
    if (cell.isMine) return 'bg-red-500/80';
    return 'bg-white/10';
  };

  const getNumberColor = (num: number) => {
    const colors = ['', 'text-blue-400', 'text-green-400', 'text-red-400', 'text-purple-400', 'text-yellow-400', 'text-pink-400', 'text-orange-400', 'text-cyan-400'];
    return colors[num] || 'text-white';
  };

  return (
    <Card className="glass border-white/10 p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-white">Сапёр</h3>
          <Button onClick={initializeBoard} className="gradient-primary">
            <Icon name="RotateCw" size={16} className="mr-2" />
            Новая игра
          </Button>
        </div>

        {gameOver && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 text-center">
            <p className="text-xl font-semibold text-red-400">Игра окончена! Вы попали на мину.</p>
          </div>
        )}

        {gameWon && (
          <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-center">
            <p className="text-xl font-semibold text-green-400">Поздравляем! Вы выиграли!</p>
          </div>
        )}

        <div className="inline-block">
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}>
            {board.map((row, rowIndex) =>
              row.map((cell, colIndex) => (
                <button
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all ${getCellColor(cell)}`}
                  onClick={() => revealCell(rowIndex, colIndex)}
                  onContextMenu={(e) => toggleFlag(e, rowIndex, colIndex)}
                >
                  {cell.isFlagged && !cell.isRevealed && <Icon name="Flag" size={16} className="text-red-400" />}
                  {cell.isRevealed && cell.isMine && <Icon name="Bomb" size={16} className="text-white" />}
                  {cell.isRevealed && !cell.isMine && cell.adjacentMines > 0 && (
                    <span className={`text-sm font-bold ${getNumberColor(cell.adjacentMines)}`}>
                      {cell.adjacentMines}
                    </span>
                  )}
                </button>
              ))
            )}
          </div>
        </div>

        <div className="text-white/70 text-sm space-y-1">
          <p>• Левый клик - открыть ячейку</p>
          <p>• Правый клик - установить флаг</p>
          <p>• Найдите все мины без подрыва!</p>
        </div>
      </div>
    </Card>
  );
};

const YouTubeApp = ({ onClose }: { onClose: () => void }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'trending' | 'subscriptions' | 'library'>('home');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [likes, setLikes] = useState<Set<string>>(new Set());
  const [subscribed, setSubscribed] = useState<Set<string>>(new Set());

  const channels = [
    { id: '1', name: 'TechMaster', avatar: '👨‍💻', subscribers: '2.5M', verified: true },
    { id: '2', name: 'GameZone', avatar: '🎮', subscribers: '1.8M', verified: true },
    { id: '3', name: 'MusicVibes', avatar: '🎵', subscribers: '5.2M', verified: true },
    { id: '4', name: 'CookingPro', avatar: '👨‍🍳', subscribers: '980K', verified: false },
    { id: '5', name: 'FitnessGuru', avatar: '💪', subscribers: '1.2M', verified: true },
    { id: '6', name: 'ArtStudio', avatar: '🎨', subscribers: '750K', verified: false },
  ];

  const videos = [
    { id: '1', title: 'Обзор Windows 12 - Революция в мире ОС!', channelId: '1', views: '1.2M', likes: '45K', duration: '12:34', uploaded: '2 дня назад', category: 'tech', isLive: false },
    { id: '2', title: 'ТОП 10 ИГР 2026 ГОДА', channelId: '2', views: '2.8M', likes: '89K', duration: '18:42', uploaded: '5 дней назад', category: 'gaming', isLive: false },
    { id: '3', title: '🔴 ПРЯМОЙ ЭФИР: Программирование на React', channelId: '1', views: '12K', likes: '1.2K', duration: 'LIVE', uploaded: 'В эфире', category: 'tech', isLive: true },
    { id: '4', title: 'Лучшая музыка для работы | 3 часа', channelId: '3', views: '5.3M', likes: '156K', duration: '3:00:00', uploaded: '1 месяц назад', category: 'music', isLive: false },
    { id: '5', title: 'Как создать сайт за 10 минут', channelId: '1', views: '620K', likes: '28K', duration: '10:15', uploaded: '1 неделю назад', category: 'tech', isLive: false },
    { id: '6', title: 'Minecraft: Строим ОГРОМНЫЙ замок!', channelId: '2', views: '3.8M', likes: '125K', duration: '25:18', uploaded: '3 дня назад', category: 'gaming', isLive: false },
    { id: '7', title: 'Рецепт идеальной пасты Карбонара', channelId: '4', views: '450K', likes: '18K', duration: '8:22', uploaded: '2 недели назад', category: 'cooking', isLive: false },
    { id: '8', title: '🔴 LIVE: Тренировка дома без оборудования', channelId: '5', views: '8.5K', likes: '890', duration: 'LIVE', uploaded: 'В эфире', category: 'fitness', isLive: true },
    { id: '9', title: 'Рисуем портрет маслом - урок для начинающих', channelId: '6', views: '280K', likes: '12K', duration: '32:45', uploaded: '5 дней назад', category: 'art', isLive: false },
    { id: '10', title: 'Обзор нейросети ChatGPT 5.0', channelId: '1', views: '1.5M', likes: '62K', duration: '15:30', uploaded: '1 день назад', category: 'tech', isLive: false },
  ];

  const getChannel = (channelId: string) => channels.find(c => c.id === channelId);
  
  const getVideosByTab = () => {
    if (activeTab === 'trending') return videos.filter(v => parseInt(v.views) > 1000000);
    if (activeTab === 'subscriptions') return videos.filter(v => subscribed.has(v.channelId));
    if (activeTab === 'library') return videos.filter(v => likes.has(v.id));
    return videos;
  };

  const filteredVideos = getVideosByTab().filter(v => {
    const channel = getChannel(v.channelId);
    return v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           channel?.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const toggleLike = (videoId: string) => {
    setLikes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(videoId)) {
        newSet.delete(videoId);
      } else {
        newSet.add(videoId);
      }
      return newSet;
    });
  };

  const toggleSubscribe = (channelId: string) => {
    setSubscribed(prev => {
      const newSet = new Set(prev);
      if (newSet.has(channelId)) {
        newSet.delete(channelId);
      } else {
        newSet.add(channelId);
      }
      return newSet;
    });
  };

  return (
    <Card className="flex-1 glass border-white/10 overflow-hidden flex flex-col">
      <div className="bg-[#0f0f0f] border-b border-white/10 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Icon name="Youtube" className="text-red-600" size={32} />
            <h2 className="text-xl font-bold text-white">YouTube</h2>
          </div>
          
          <div className="relative flex-1 max-w-2xl">
            <Input
              placeholder="Поиск"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-4 pr-12 bg-[#121212] border-white/20 text-white placeholder:text-white/50 h-10"
            />
            <Button size="icon" variant="ghost" className="absolute right-0 top-0 text-white hover:bg-white/10">
              <Icon name="Search" size={20} />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
            <Icon name="Video" size={20} />
          </Button>
          <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
            <Icon name="Bell" size={20} />
          </Button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold cursor-pointer">
            U
          </div>
          <Button size="icon" variant="ghost" onClick={onClose} className="text-white hover:bg-white/10">
            <Icon name="X" size={20} />
          </Button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="bg-[#0f0f0f] w-56 border-r border-white/10 overflow-y-auto py-3">
          {[
            { id: 'home' as const, icon: 'Home', label: 'Главная' },
            { id: 'trending' as const, icon: 'TrendingUp', label: 'В тренде' },
            { id: 'subscriptions' as const, icon: 'Users', label: 'Подписки' },
            { id: 'library' as const, icon: 'Library', label: 'Библиотека' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-4 px-4 py-2.5 transition-colors ${
                activeTab === tab.id ? 'bg-white/10' : 'hover:bg-white/5'
              }`}
            >
              <Icon name={tab.icon} size={20} className="text-white" />
              <span className="text-white text-sm">{tab.label}</span>
            </button>
          ))}

          <div className="border-t border-white/10 mt-3 pt-3 px-4">
            <p className="text-white/70 text-xs font-semibold mb-2">ПОДПИСКИ</p>
            {channels.filter(c => subscribed.has(c.id)).map((channel) => (
              <button key={channel.id} className="w-full flex items-center gap-3 py-2 hover:bg-white/5 rounded">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm">
                  {channel.avatar}
                </div>
                <span className="text-white text-sm flex-1 text-left truncate">{channel.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 bg-[#0f0f0f] overflow-y-auto">
          {selectedVideo ? (
            <div className="p-6 space-y-4">
              <div className="max-w-6xl mx-auto">
                <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4 relative group">
                  {isPlaying ? (
                    <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-black/40"></div>
                      <div className="relative z-10 text-center space-y-4">
                        <div className="text-8xl animate-pulse">▶️</div>
                        <p className="text-white text-2xl font-semibold">{selectedVideo.title}</p>
                        <div className="flex items-center gap-2 justify-center text-white/70">
                          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-red-600 transition-all duration-1000"
                              style={{ width: `${(currentTime / 100) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm">{Math.floor(currentTime)}:00 / {selectedVideo.duration}</span>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className="text-white hover:bg-white/20"
                          onClick={() => setIsPlaying(false)}
                        >
                          <Icon name="Pause" size={24} />
                        </Button>
                        <div className="flex items-center gap-2">
                          <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                            <Icon name="Volume2" size={20} />
                          </Button>
                          <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                            <Icon name="Settings" size={20} />
                          </Button>
                          <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                            <Icon name="Maximize" size={20} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-red-900 via-purple-900 to-blue-900 flex items-center justify-center cursor-pointer"
                         onClick={() => {
                           setIsPlaying(true);
                           const interval = setInterval(() => {
                             setCurrentTime(prev => {
                               if (prev >= 100) {
                                 clearInterval(interval);
                                 setIsPlaying(false);
                                 return 0;
                               }
                               return prev + 1;
                             });
                           }, 1000);
                         }}
                    >
                      <div className="text-center space-y-4">
                        <Button size="lg" className="w-20 h-20 rounded-full bg-red-600 hover:bg-red-700">
                          <Icon name="Play" size={40} />
                        </Button>
                        {selectedVideo.isLive && (
                          <Badge className="bg-red-600 text-white px-3 py-1">
                            🔴 В ЭФИРЕ
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <h1 className="text-white text-xl font-semibold mb-4">{selectedVideo.title}</h1>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl">
                        {getChannel(selectedVideo.channelId)?.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-white font-semibold">{getChannel(selectedVideo.channelId)?.name}</span>
                          {getChannel(selectedVideo.channelId)?.verified && (
                            <Icon name="BadgeCheck" size={16} className="text-white" />
                          )}
                        </div>
                        <span className="text-white/70 text-sm">{getChannel(selectedVideo.channelId)?.subscribers} подписчиков</span>
                      </div>
                    </div>
                    <Button 
                      className={subscribed.has(selectedVideo.channelId) ? 'bg-white/10 hover:bg-white/20' : 'bg-white hover:bg-white/90 text-black'}
                      onClick={() => toggleSubscribe(selectedVideo.channelId)}
                    >
                      {subscribed.has(selectedVideo.channelId) ? 'Вы подписаны' : 'Подписаться'}
                    </Button>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      className="glass border-white/20 text-white hover:bg-white/10"
                      onClick={() => toggleLike(selectedVideo.id)}
                    >
                      <Icon name={likes.has(selectedVideo.id) ? 'ThumbsUp' : 'ThumbsUp'} size={20} className={likes.has(selectedVideo.id) ? 'fill-current' : ''} />
                      <span className="ml-2">{selectedVideo.likes}</span>
                    </Button>
                    <Button variant="outline" className="glass border-white/20 text-white hover:bg-white/10">
                      <Icon name="Share2" size={20} />
                      <span className="ml-2">Поделиться</span>
                    </Button>
                  </div>
                </div>

                <Card className="glass border-white/10 p-4 mb-4">
                  <p className="text-white/70 text-sm">
                    {selectedVideo.views} просмотров • {selectedVideo.uploaded}
                  </p>
                  <p className="text-white/90 mt-2">
                    Описание видео появится здесь. Подпишитесь на канал чтобы не пропустить новые выпуски!
                  </p>
                </Card>

                <Button 
                  variant="outline" 
                  className="glass border-white/20 text-white hover:bg-white/10"
                  onClick={() => setSelectedVideo(null)}
                >
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  Назад к видео
                </Button>
              </div>
            </div>
          ) : (
            <div className="p-6">
              {activeTab === 'home' && (
                <div className="mb-6 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Добро пожаловать в YouTube!</h2>
                  <p className="text-white/90">Смотрите видео от любимых блогеров, подписывайтесь на каналы и наслаждайтесь контентом</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredVideos.map((video) => {
                  const channel = getChannel(video.channelId);
                  return (
                    <Card 
                      key={video.id} 
                      className="glass border-white/10 p-0 hover:scale-105 transition-all cursor-pointer overflow-hidden"
                      onClick={() => setSelectedVideo(video)}
                    >
                      <div className="aspect-video bg-gradient-to-br from-red-600 to-purple-600 flex items-center justify-center relative">
                        <Icon name="Play" size={48} className="text-white opacity-80" />
                        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-white text-xs font-semibold">
                          {video.duration}
                        </div>
                        {video.isLive && (
                          <div className="absolute top-2 left-2 bg-red-600 px-2 py-0.5 rounded text-white text-xs font-semibold">
                            🔴 LIVE
                          </div>
                        )}
                      </div>
                      <div className="p-3">
                        <div className="flex gap-3">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                            {channel?.avatar}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-white font-semibold text-sm line-clamp-2 mb-1">{video.title}</h4>
                            <div className="flex items-center gap-1 mb-0.5">
                              <p className="text-white/70 text-xs">{channel?.name}</p>
                              {channel?.verified && <Icon name="BadgeCheck" size={12} className="text-white/70" />}
                            </div>
                            <p className="text-white/50 text-xs">{video.views} • {video.uploaded}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

const MinecraftGame = () => {
  const [playerPos, setPlayerPos] = useState({ x: 5, y: 5 });
  const [inventory, setInventory] = useState({ wood: 0, stone: 0, dirt: 0 });
  const gridSize = 10;

  const grid = Array(gridSize).fill(null).map((_, y) =>
    Array(gridSize).fill(null).map((_, x) => {
      const random = Math.random();
      if (random > 0.7) return 'tree';
      if (random > 0.5) return 'stone';
      if (random > 0.3) return 'dirt';
      return 'grass';
    })
  );

  const movePlayer = (dx: number, dy: number) => {
    setPlayerPos(prev => ({
      x: Math.max(0, Math.min(gridSize - 1, prev.x + dx)),
      y: Math.max(0, Math.min(gridSize - 1, prev.y + dy))
    }));
  };

  const collectResource = () => {
    const cell = grid[playerPos.y][playerPos.x];
    if (cell === 'tree') {
      setInventory(prev => ({ ...prev, wood: prev.wood + 1 }));
    } else if (cell === 'stone') {
      setInventory(prev => ({ ...prev, stone: prev.stone + 1 }));
    } else if (cell === 'dirt') {
      setInventory(prev => ({ ...prev, dirt: prev.dirt + 1 }));
    }
  };

  const getCellEmoji = (type: string, isPlayer: boolean) => {
    if (isPlayer) return '🧍';
    if (type === 'tree') return '🌲';
    if (type === 'stone') return '🪨';
    if (type === 'dirt') return '🟫';
    return '🟩';
  };

  return (
    <Card className="glass border-white/10 p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-white">Minecraft</h3>
          <div className="flex gap-4">
            <Badge className="bg-green-600 text-white">🪵 Дерево: {inventory.wood}</Badge>
            <Badge className="bg-gray-600 text-white">🪨 Камень: {inventory.stone}</Badge>
            <Badge className="bg-amber-800 text-white">🟫 Земля: {inventory.dirt}</Badge>
          </div>
        </div>

        <div className="inline-block">
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}>
            {grid.map((row, y) =>
              row.map((cell, x) => (
                <div
                  key={`${x}-${y}`}
                  className="w-14 h-14 rounded-lg flex items-center justify-center text-3xl bg-white/5 border border-white/10"
                >
                  {getCellEmoji(cell, playerPos.x === x && playerPos.y === y)}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="flex gap-4">
          <div className="space-y-2">
            <p className="text-white font-semibold mb-2">Управление:</p>
            <div className="grid grid-cols-3 gap-2 w-40">
              <div></div>
              <Button onClick={() => movePlayer(0, -1)} className="gradient-primary">
                <Icon name="ChevronUp" size={20} />
              </Button>
              <div></div>
              <Button onClick={() => movePlayer(-1, 0)} className="gradient-primary">
                <Icon name="ChevronLeft" size={20} />
              </Button>
              <Button onClick={collectResource} className="bg-green-600 hover:bg-green-700">
                <Icon name="Pickaxe" size={20} />
              </Button>
              <Button onClick={() => movePlayer(1, 0)} className="gradient-primary">
                <Icon name="ChevronRight" size={20} />
              </Button>
              <div></div>
              <Button onClick={() => movePlayer(0, 1)} className="gradient-primary">
                <Icon name="ChevronDown" size={20} />
              </Button>
              <div></div>
            </div>
          </div>

          <div className="flex-1 glass border-white/10 p-4 rounded-xl">
            <p className="text-white/70 text-sm space-y-2">
              <p>• Используйте стрелки для перемещения</p>
              <p>• Нажмите среднюю кнопку для сбора ресурсов</p>
              <p>• 🌲 Дерево • 🪨 Камень • 🟫 Земля • 🟩 Трава</p>
              <p>• Собирайте ресурсы и стройте свой мир!</p>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

const RobloxGame = () => {
  const [playerPos, setPlayerPos] = useState({ x: 3, y: 7 });
  const [coins, setCoins] = useState(0);
  const [collectedCoins, setCollectedCoins] = useState<Set<string>>(new Set());
  const gridSize = 10;

  const coinPositions = [
    { x: 2, y: 2 }, { x: 5, y: 3 }, { x: 8, y: 2 },
    { x: 1, y: 5 }, { x: 7, y: 6 }, { x: 4, y: 8 },
  ];

  const obstacles = [
    { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 4 },
    { x: 6, y: 5 }, { x: 2, y: 7 },
  ];

  const movePlayer = (dx: number, dy: number) => {
    const newX = Math.max(0, Math.min(gridSize - 1, playerPos.x + dx));
    const newY = Math.max(0, Math.min(gridSize - 1, playerPos.y + dy));
    
    const hasObstacle = obstacles.some(obs => obs.x === newX && obs.y === newY);
    if (hasObstacle) return;

    setPlayerPos({ x: newX, y: newY });

    const coinKey = `${newX}-${newY}`;
    const hasCoin = coinPositions.some(coin => coin.x === newX && coin.y === newY);
    if (hasCoin && !collectedCoins.has(coinKey)) {
      setCoins(prev => prev + 1);
      setCollectedCoins(prev => new Set([...prev, coinKey]));
    }
  };

  const getCellContent = (x: number, y: number) => {
    if (playerPos.x === x && playerPos.y === y) return '🎮';
    if (obstacles.some(obs => obs.x === x && obs.y === y)) return '🧱';
    
    const coinKey = `${x}-${y}`;
    if (coinPositions.some(coin => coin.x === x && coin.y === y) && !collectedCoins.has(coinKey)) {
      return '🪙';
    }
    
    return '';
  };

  return (
    <Card className="glass border-white/10 p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-white">Roblox - Собери монеты</h3>
          <Badge className="bg-yellow-600 text-white text-lg px-4 py-2">
            🪙 Монеты: {coins} / {coinPositions.length}
          </Badge>
        </div>

        {coins === coinPositions.length && (
          <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-center">
            <p className="text-xl font-semibold text-green-400">🎉 Поздравляем! Вы собрали все монеты!</p>
          </div>
        )}

        <div className="inline-block">
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}>
            {Array(gridSize).fill(null).map((_, y) =>
              Array(gridSize).fill(null).map((_, x) => (
                <div
                  key={`${x}-${y}`}
                  className={`w-14 h-14 rounded-lg flex items-center justify-center text-3xl border transition-all ${
                    obstacles.some(obs => obs.x === x && obs.y === y)
                      ? 'bg-gray-700 border-gray-600'
                      : 'bg-blue-900/30 border-blue-500/20'
                  }`}
                >
                  {getCellContent(x, y)}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="flex gap-4">
          <div className="space-y-2">
            <p className="text-white font-semibold mb-2">Управление:</p>
            <div className="grid grid-cols-3 gap-2 w-40">
              <div></div>
              <Button onClick={() => movePlayer(0, -1)} className="gradient-primary">
                <Icon name="ChevronUp" size={20} />
              </Button>
              <div></div>
              <Button onClick={() => movePlayer(-1, 0)} className="gradient-primary">
                <Icon name="ChevronLeft" size={20} />
              </Button>
              <div className="flex items-center justify-center">
                <span className="text-2xl">🎮</span>
              </div>
              <Button onClick={() => movePlayer(1, 0)} className="gradient-primary">
                <Icon name="ChevronRight" size={20} />
              </Button>
              <div></div>
              <Button onClick={() => movePlayer(0, 1)} className="gradient-primary">
                <Icon name="ChevronDown" size={20} />
              </Button>
              <div></div>
            </div>
          </div>

          <div className="flex-1 glass border-white/10 p-4 rounded-xl">
            <p className="text-white/70 text-sm space-y-2">
              <p>• Управляйте персонажем стрелками</p>
              <p>• Собирайте монеты 🪙 на карте</p>
              <p>• Избегайте препятствия 🧱</p>
              <p>• Соберите все монеты чтобы выиграть!</p>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Index;