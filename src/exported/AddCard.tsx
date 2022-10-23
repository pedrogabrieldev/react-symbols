import IconAddCardFill0Wght100Grad0Opsz48 from '../components/AddCardFill0Wght100Grad0Opsz48'
import IconAddCardFill0Wght200Grad0Opsz48 from '../components/AddCardFill0Wght200Grad0Opsz48'
import IconAddCardFill0Wght300Grad0Opsz48 from '../components/AddCardFill0Wght300Grad0Opsz48'
import IconAddCardFill0Wght400Grad0Opsz48 from '../components/AddCardFill0Wght400Grad0Opsz48'
import IconAddCardFill0Wght500Grad0Opsz48 from '../components/AddCardFill0Wght500Grad0Opsz48'
import IconAddCardFill0Wght600Grad0Opsz48 from '../components/AddCardFill0Wght600Grad0Opsz48'
import IconAddCardFill0Wght700Grad0Opsz48 from '../components/AddCardFill0Wght700Grad0Opsz48'
import IconAddCardFill1Wght100Grad0Opsz48 from '../components/AddCardFill1Wght100Grad0Opsz48'
import IconAddCardFill1Wght200Grad0Opsz48 from '../components/AddCardFill1Wght200Grad0Opsz48'
import IconAddCardFill1Wght300Grad0Opsz48 from '../components/AddCardFill1Wght300Grad0Opsz48'
import IconAddCardFill1Wght400Grad0Opsz48 from '../components/AddCardFill1Wght400Grad0Opsz48'
import IconAddCardFill1Wght500Grad0Opsz48 from '../components/AddCardFill1Wght500Grad0Opsz48'
import IconAddCardFill1Wght600Grad0Opsz48 from '../components/AddCardFill1Wght600Grad0Opsz48'
import IconAddCardFill1Wght700Grad0Opsz48 from '../components/AddCardFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddCard = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddCardFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddCardFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddCardFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddCardFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddCardFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddCardFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddCardFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddCardFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddCardFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddCardFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddCardFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddCardFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddCardFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddCardFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
