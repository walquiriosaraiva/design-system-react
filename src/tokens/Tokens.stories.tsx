import type { Meta } from '@storybook/react'
import { colors } from './tokens'

const meta: Meta = {
  title: 'Customization/Tokens'
}
export default meta

export function Cores() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', padding: '1rem' }}>
      {Object.entries(colors.brand).map(([name, value]) => (
        <div key={name} style={{ textAlign: 'center' }}>
          <div
            style={{
              backgroundColor: value,
              width: '80px',
              height: '80px',
              borderRadius: '8px',
              border: '1px solid #ddd'
            }}
          />
          <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>{name}</p>
          <code>{value}</code>
        </div>
      ))}
      {Object.entries(colors.feedback).map(([name, value]) => (
        <div key={name} style={{ textAlign: 'center' }}>
          <div
            style={{
              backgroundColor: value,
              width: '80px',
              height: '80px',
              borderRadius: '8px',
              border: '1px solid #ddd'
            }}
          />
          <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>{name}</p>
          <code>{value}</code>
        </div>
      ))}
    </div>
  )
}
