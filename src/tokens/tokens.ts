export const colors = {
  brand: {
    blue: '#003366',
    gold: '#D4AF37',
    gray: '#F5F5F5',
    black: '#222222'
  },
  feedback: {
    success: '#007E33',
    error: '#C62828',
    warning: '#FFA000'
  },
  neutrals: {
    white: '#FFFFFF',
    lightGray: '#E0E0E0',
    darkGray: '#4F4F4F'
  },
  backgrounds: {
    light: '#FAFAFA',
    dark: '#121212'
  }
}

export const tokens = {
  colors: {
    light: {
      primary: '#003366', // Azul
      // texto primário em tema claro deve ser escuro para legibilidade
      primaryText: '#12324b',
      secondary: '#f8fafc',
      secondaryText: '#1e293b',
      ghostBorder: '#e2e8f0',
      ghostText: '#1e293b',
      background: '#f8fafc',
      success: '#007E33',
      error: '#C62828',
      warning: '#FFA000',
      info: '#003366'
    },
    dark: {
      primary: '#D4AF37', // Dourado
      // texto primário em tema escuro deve ser claro
      primaryText: '#f8fafc',
      secondary: '#1e293b',
      secondaryText: '#f8fafc',
      ghostBorder: '#334155',
      ghostText: '#f8fafc',
      background: '#0f172a',
      success: '#00C851',
      error: '#FF4444',
      warning: '#FFBB33',
      info: '#D4AF37'
    }
  }
}
