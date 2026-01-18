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
];

const games: Game[] = [
  { id: '1', name: 'Сапёр', icon: 'Bomb', description: 'Классическая логическая игра' },
  { id: '2', name: 'Шахматы', icon: 'Crown', description: 'Игра для двух игроков' },
  { id: '3', name: 'Пасьянс', icon: 'Spade', description: 'Классический карточный пасьянс' },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<AppCategory>('all');
  const [browserUrl, setBrowserUrl] = useState('https://poehali.dev');
  const [currentUrl, setCurrentUrl] = useState('https://poehali.dev');
  const [minesweeperActive, setMinesweeperActive] = useState(false);

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
                      <Button className="w-full mt-4 gradient-primary">
                        <Icon name="Download" size={16} className="mr-2" />
                        Установить
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
              </div>
            )}

            {activeSection === 'games' && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl font-bold text-white">Игры</h2>

                {!minesweeperActive ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {games.map((game) => (
                      <Card 
                        key={game.id} 
                        className="glass border-white/10 p-6 hover:scale-105 transition-all cursor-pointer hover:border-primary/50"
                        onClick={() => game.id === '1' && setMinesweeperActive(true)}
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
                      onClick={() => setMinesweeperActive(false)}
                    >
                      <Icon name="ArrowLeft" size={16} className="mr-2" />
                      Назад к играм
                    </Button>
                    <Minesweeper />
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

export default Index;
