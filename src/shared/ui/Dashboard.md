# Dashboard Component

Компонент панели приборов с четырьмя кнопками для мобильного приложения.

## Использование

```vue
<template>
  <Dashboard
    :buttons="buttons"
    :active-button="activeButtonIndex"
    @button-click="handleButtonClick"
  />
</template>

<script setup>
import { Dashboard } from '@/shared/ui'

const activeButtonIndex = ref(0)

const buttons = ref([
  {
    text: 'Главная',
    icon: '🏠',
    iconType: 'emoji',
    action: () => console.log('Переход на главную')
  },
  {
    text: 'Поиск',
    icon: '🔍',
    iconType: 'emoji'
  },
  {
    text: 'Чат',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    iconType: 'svg'
  },
  {
    text: 'Профиль',
    icon: '👤',
    iconType: 'emoji'
  }
])

function handleButtonClick(index) {
  console.log(`Клик по кнопке: ${buttons.value[index].text}`)
}
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `buttons` | `DashboardButton[]` | См. ниже | Массив кнопок |
| `activeButton` | `number` | `0` | Индекс активной кнопки |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `button-click` | `index: number` | Вызывается при клике на кнопку |

## Types

### DashboardButton

```typescript
interface DashboardButton {
  text: string           // Текст кнопки
  icon: string          // Иконка (эмодзи или SVG path)
  iconType?: 'emoji' | 'svg'  // Тип иконки
  action?: () => void   // Дополнительное действие при клике
}
```

## Значения по умолчанию

По умолчанию компонент создает 4 кнопки:
- Главная (🏠)
- Поиск (🔍)
- Чат (💬)
- Профиль (👤)

## Особенности

- Адаптивный дизайн для разных размеров экрана
- Поддержка эмодзи и SVG иконок
- Анимации при нажатии (для мобильных устройств)
- Использует CSS переменные Telegram Web App
- Фиксированное позиционирование внизу экрана
- Поддержка safe area для устройств с вырезами

## Стилизация

Компонент использует CSS переменные Telegram Web App:
- `--tg-theme-bg-color` - цвет фона
- `--tg-theme-button-color` - цвет активной кнопки
- `--tg-theme-button-text-color` - цвет текста активной кнопки
- `--tg-theme-secondary-bg-color` - цвет фона при наведении
- `--tg-theme-text-color` - цвет текста
