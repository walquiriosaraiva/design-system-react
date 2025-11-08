// Utility to compute contrast color (light or dark) for a given background color.
// Uses relative luminance and WCAG contrast ratio to pick the best readable color.
export function hexToRgb(hex: string) {
  const cleaned = hex.replace('#', '').trim()
  if (cleaned.length === 3) {
    const r = parseInt(cleaned[0] + cleaned[0], 16)
    const g = parseInt(cleaned[1] + cleaned[1], 16)
    const b = parseInt(cleaned[2] + cleaned[2], 16)
    return { r, g, b }
  }
  if (cleaned.length === 6) {
    const r = parseInt(cleaned.substring(0, 2), 16)
    const g = parseInt(cleaned.substring(2, 4), 16)
    const b = parseInt(cleaned.substring(4, 6), 16)
    return { r, g, b }
  }
  return null
}

function srgbToLinear(value: number) {
  const srgb = value / 255
  return srgb <= 0.03928 ? srgb / 12.92 : Math.pow((srgb + 0.055) / 1.055, 2.4)
}

export function relativeLuminance(rgb: { r: number; g: number; b: number }) {
  const r = srgbToLinear(rgb.r)
  const g = srgbToLinear(rgb.g)
  const b = srgbToLinear(rgb.b)
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

export function contrastRatio(lumA: number, lumB: number) {
  const a = Math.max(lumA, lumB)
  const b = Math.min(lumA, lumB)
  return (a + 0.05) / (b + 0.05)
}

/**
 * Returns either `light` or `dark` color (hex) which has better contrast
 * against the provided background color. By default it uses white and a dark
 * navy fallback, but you can pass custom light/dark colors.
 */
export function getContrastColor(
  backgroundHex: string,
  light = '#ffffff',
  dark = '#0b2545'
): string {
  const bg = hexToRgb(backgroundHex) || { r: 255, g: 255, b: 255 }
  const lBg = relativeLuminance(bg)

  const lLight = relativeLuminance(hexToRgb(light) || { r: 255, g: 255, b: 255 })
  const lDark = relativeLuminance(hexToRgb(dark) || { r: 0, g: 0, b: 0 })

  const contrastWithLight = contrastRatio(lBg, lLight)
  const contrastWithDark = contrastRatio(lBg, lDark)

  // Prefer the color with better contrast. If both are below 3:1, still pick the highest.
  return contrastWithLight >= contrastWithDark ? light : dark
}

export default getContrastColor
