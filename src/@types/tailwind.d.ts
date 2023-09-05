// Utile seulement dans LinearGradient pour la version avec Color
type ColorName =
  | 'rose'
  | 'pink'
  | 'fuchsia'
  | 'purple'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'sky'
  | 'cyan'
  | 'teal'
  | 'emerald'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'amber'
  | 'orange'
  | 'red'
  | 'warmGray'
  | 'trueGray'
  | 'gray'
  | 'coolGray'
  | 'blueGray'

type ColorVariation = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

type MainColor = 'black' | 'white'

type HexColor = string & { __type: 'HexColor' }

type Color = MainColor | `${ColorName}-${ColorVariation}` | `[${HexColor}]`
