import IconTipsAndUpdatesFill0Wght100Grad0Opsz48 from '../components/TipsAndUpdatesFill0Wght100Grad0Opsz48'
import IconTipsAndUpdatesFill0Wght200Grad0Opsz48 from '../components/TipsAndUpdatesFill0Wght200Grad0Opsz48'
import IconTipsAndUpdatesFill0Wght300Grad0Opsz48 from '../components/TipsAndUpdatesFill0Wght300Grad0Opsz48'
import IconTipsAndUpdatesFill0Wght400Grad0Opsz48 from '../components/TipsAndUpdatesFill0Wght400Grad0Opsz48'
import IconTipsAndUpdatesFill0Wght500Grad0Opsz48 from '../components/TipsAndUpdatesFill0Wght500Grad0Opsz48'
import IconTipsAndUpdatesFill0Wght600Grad0Opsz48 from '../components/TipsAndUpdatesFill0Wght600Grad0Opsz48'
import IconTipsAndUpdatesFill0Wght700Grad0Opsz48 from '../components/TipsAndUpdatesFill0Wght700Grad0Opsz48'
import IconTipsAndUpdatesFill1Wght100Grad0Opsz48 from '../components/TipsAndUpdatesFill1Wght100Grad0Opsz48'
import IconTipsAndUpdatesFill1Wght200Grad0Opsz48 from '../components/TipsAndUpdatesFill1Wght200Grad0Opsz48'
import IconTipsAndUpdatesFill1Wght300Grad0Opsz48 from '../components/TipsAndUpdatesFill1Wght300Grad0Opsz48'
import IconTipsAndUpdatesFill1Wght400Grad0Opsz48 from '../components/TipsAndUpdatesFill1Wght400Grad0Opsz48'
import IconTipsAndUpdatesFill1Wght500Grad0Opsz48 from '../components/TipsAndUpdatesFill1Wght500Grad0Opsz48'
import IconTipsAndUpdatesFill1Wght600Grad0Opsz48 from '../components/TipsAndUpdatesFill1Wght600Grad0Opsz48'
import IconTipsAndUpdatesFill1Wght700Grad0Opsz48 from '../components/TipsAndUpdatesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTipsAndUpdates = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTipsAndUpdatesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTipsAndUpdatesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTipsAndUpdatesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTipsAndUpdatesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTipsAndUpdatesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTipsAndUpdatesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTipsAndUpdatesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTipsAndUpdatesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTipsAndUpdatesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTipsAndUpdatesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTipsAndUpdatesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTipsAndUpdatesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTipsAndUpdatesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTipsAndUpdatesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
