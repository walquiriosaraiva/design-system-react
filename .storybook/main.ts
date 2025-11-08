const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'vite.config.ts'
      }
    }
  },
  docs: {
    autodocs: true
  },
  core: {
    disableTelemetry: true
  },
  async viteFinal(config: any) {
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: '@components',
            replacement: '/src/components'
          },
          {
            find: '@tokens',
            replacement: '/src/tokens'
          },
          {
            find: '@hooks',
            replacement: '/src/hooks'
          },
          {
            find: '@assets',
            replacement: '/src/assets'
          }
        ]
      },
      // Não forçar a otimização de dependências de `storybook-dark-mode` aqui;
      // alguns pacotes podem depender de módulos internos do Storybook que não
      // são resolvíveis pelo Vite no contexto deste projeto. Se quiser usar o
      // addon, prefira registrá-lo como `addons` e instalar uma versão
      // compatível, ou otimizar individualmente em CI.
      optimizeDeps: {
        include: []
      },
      build: {
        commonjsOptions: {
          transformMixedEsModules: true
        },
        sourcemap: true
      },
      define: {
        'process.env': process.env
      }
    }
  }
}

export default config
