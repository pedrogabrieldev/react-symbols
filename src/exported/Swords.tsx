import IconSwordsFill0Wght100Grad0Opsz48 from '../components/SwordsFill0Wght100Grad0Opsz48'
import IconSwordsFill0Wght200Grad0Opsz48 from '../components/SwordsFill0Wght200Grad0Opsz48'
import IconSwordsFill0Wght300Grad0Opsz48 from '../components/SwordsFill0Wght300Grad0Opsz48'
import IconSwordsFill0Wght400Grad0Opsz48 from '../components/SwordsFill0Wght400Grad0Opsz48'
import IconSwordsFill0Wght500Grad0Opsz48 from '../components/SwordsFill0Wght500Grad0Opsz48'
import IconSwordsFill0Wght600Grad0Opsz48 from '../components/SwordsFill0Wght600Grad0Opsz48'
import IconSwordsFill0Wght700Grad0Opsz48 from '../components/SwordsFill0Wght700Grad0Opsz48'
import IconSwordsFill1Wght100Grad0Opsz48 from '../components/SwordsFill1Wght100Grad0Opsz48'
import IconSwordsFill1Wght200Grad0Opsz48 from '../components/SwordsFill1Wght200Grad0Opsz48'
import IconSwordsFill1Wght300Grad0Opsz48 from '../components/SwordsFill1Wght300Grad0Opsz48'
import IconSwordsFill1Wght400Grad0Opsz48 from '../components/SwordsFill1Wght400Grad0Opsz48'
import IconSwordsFill1Wght500Grad0Opsz48 from '../components/SwordsFill1Wght500Grad0Opsz48'
import IconSwordsFill1Wght600Grad0Opsz48 from '../components/SwordsFill1Wght600Grad0Opsz48'
import IconSwordsFill1Wght700Grad0Opsz48 from '../components/SwordsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwords = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwordsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwordsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwordsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwordsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwordsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwordsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwordsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwordsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwordsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwordsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwordsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwordsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwordsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwordsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
