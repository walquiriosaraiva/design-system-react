import { useEffect, useState } from 'react'

export function useTheme() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Detect theme by checking for the 'dark' class in the preview iframe's document.
    // Storybook's dark-mode addon toggles a `dark` class on the preview documentElement/body.
    const iframe = window.frameElement as HTMLIFrameElement | null
    if (!iframe || !iframe.contentDocument) return

    const doc = iframe.contentDocument

    const checkDark = () => {
      const isDocDark =
        doc.documentElement.classList.contains('dark') || doc.body.classList.contains('dark')
      setIsDark(!!isDocDark)
    }

    // initial
    checkDark()

    // observe class attribute changes on documentElement and body
    const observer = new MutationObserver(mutations => {
      for (const m of mutations) {
        if (
          m.type === 'attributes' &&
          (m.target === doc.documentElement || m.target === doc.body)
        ) {
          checkDark()
          break
        }
      }
    })

    observer.observe(doc.documentElement, { attributes: true })
    observer.observe(doc.body, { attributes: true })

    return () => observer.disconnect()
  }, [])

  return { isDark }
}
