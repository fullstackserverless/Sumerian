// useOrientation.tsx
import { useWindowDimensions } from 'react-native'

export function useOrientation(): 'PORTRAIT' | 'LANDSCAPE' {
  const dim = useWindowDimensions()
  const isPortrait = () => {
    return dim.height >= dim.width
  }

  const orientation = isPortrait() ? 'PORTRAIT' : 'LANDSCAPE'

  return orientation
}
