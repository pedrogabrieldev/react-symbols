import IconAodTabletFill0Wght100Grad0Opsz48 from '../components/AodTabletFill0Wght100Grad0Opsz48'
import IconAodTabletFill0Wght200Grad0Opsz48 from '../components/AodTabletFill0Wght200Grad0Opsz48'
import IconAodTabletFill0Wght300Grad0Opsz48 from '../components/AodTabletFill0Wght300Grad0Opsz48'
import IconAodTabletFill0Wght400Grad0Opsz48 from '../components/AodTabletFill0Wght400Grad0Opsz48'
import IconAodTabletFill0Wght500Grad0Opsz48 from '../components/AodTabletFill0Wght500Grad0Opsz48'
import IconAodTabletFill0Wght600Grad0Opsz48 from '../components/AodTabletFill0Wght600Grad0Opsz48'
import IconAodTabletFill0Wght700Grad0Opsz48 from '../components/AodTabletFill0Wght700Grad0Opsz48'
import IconAodTabletFill1Wght100Grad0Opsz48 from '../components/AodTabletFill1Wght100Grad0Opsz48'
import IconAodTabletFill1Wght200Grad0Opsz48 from '../components/AodTabletFill1Wght200Grad0Opsz48'
import IconAodTabletFill1Wght300Grad0Opsz48 from '../components/AodTabletFill1Wght300Grad0Opsz48'
import IconAodTabletFill1Wght400Grad0Opsz48 from '../components/AodTabletFill1Wght400Grad0Opsz48'
import IconAodTabletFill1Wght500Grad0Opsz48 from '../components/AodTabletFill1Wght500Grad0Opsz48'
import IconAodTabletFill1Wght600Grad0Opsz48 from '../components/AodTabletFill1Wght600Grad0Opsz48'
import IconAodTabletFill1Wght700Grad0Opsz48 from '../components/AodTabletFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAodTablet = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAodTabletFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAodTabletFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAodTabletFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAodTabletFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAodTabletFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAodTabletFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAodTabletFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAodTabletFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAodTabletFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAodTabletFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAodTabletFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAodTabletFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAodTabletFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAodTabletFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
