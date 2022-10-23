import IconDeckFill0Wght100Grad0Opsz48 from '../components/DeckFill0Wght100Grad0Opsz48'
import IconDeckFill0Wght200Grad0Opsz48 from '../components/DeckFill0Wght200Grad0Opsz48'
import IconDeckFill0Wght300Grad0Opsz48 from '../components/DeckFill0Wght300Grad0Opsz48'
import IconDeckFill0Wght400Grad0Opsz48 from '../components/DeckFill0Wght400Grad0Opsz48'
import IconDeckFill0Wght500Grad0Opsz48 from '../components/DeckFill0Wght500Grad0Opsz48'
import IconDeckFill0Wght600Grad0Opsz48 from '../components/DeckFill0Wght600Grad0Opsz48'
import IconDeckFill0Wght700Grad0Opsz48 from '../components/DeckFill0Wght700Grad0Opsz48'
import IconDeckFill1Wght100Grad0Opsz48 from '../components/DeckFill1Wght100Grad0Opsz48'
import IconDeckFill1Wght200Grad0Opsz48 from '../components/DeckFill1Wght200Grad0Opsz48'
import IconDeckFill1Wght300Grad0Opsz48 from '../components/DeckFill1Wght300Grad0Opsz48'
import IconDeckFill1Wght400Grad0Opsz48 from '../components/DeckFill1Wght400Grad0Opsz48'
import IconDeckFill1Wght500Grad0Opsz48 from '../components/DeckFill1Wght500Grad0Opsz48'
import IconDeckFill1Wght600Grad0Opsz48 from '../components/DeckFill1Wght600Grad0Opsz48'
import IconDeckFill1Wght700Grad0Opsz48 from '../components/DeckFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDeck = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDeckFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDeckFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDeckFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDeckFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDeckFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDeckFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDeckFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDeckFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDeckFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDeckFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDeckFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDeckFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDeckFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDeckFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
