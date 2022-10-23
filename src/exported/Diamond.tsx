import IconDiamondFill0Wght100Grad0Opsz48 from '../components/DiamondFill0Wght100Grad0Opsz48'
import IconDiamondFill0Wght200Grad0Opsz48 from '../components/DiamondFill0Wght200Grad0Opsz48'
import IconDiamondFill0Wght300Grad0Opsz48 from '../components/DiamondFill0Wght300Grad0Opsz48'
import IconDiamondFill0Wght400Grad0Opsz48 from '../components/DiamondFill0Wght400Grad0Opsz48'
import IconDiamondFill0Wght500Grad0Opsz48 from '../components/DiamondFill0Wght500Grad0Opsz48'
import IconDiamondFill0Wght600Grad0Opsz48 from '../components/DiamondFill0Wght600Grad0Opsz48'
import IconDiamondFill0Wght700Grad0Opsz48 from '../components/DiamondFill0Wght700Grad0Opsz48'
import IconDiamondFill1Wght100Grad0Opsz48 from '../components/DiamondFill1Wght100Grad0Opsz48'
import IconDiamondFill1Wght200Grad0Opsz48 from '../components/DiamondFill1Wght200Grad0Opsz48'
import IconDiamondFill1Wght300Grad0Opsz48 from '../components/DiamondFill1Wght300Grad0Opsz48'
import IconDiamondFill1Wght400Grad0Opsz48 from '../components/DiamondFill1Wght400Grad0Opsz48'
import IconDiamondFill1Wght500Grad0Opsz48 from '../components/DiamondFill1Wght500Grad0Opsz48'
import IconDiamondFill1Wght600Grad0Opsz48 from '../components/DiamondFill1Wght600Grad0Opsz48'
import IconDiamondFill1Wght700Grad0Opsz48 from '../components/DiamondFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDiamond = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDiamondFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDiamondFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDiamondFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDiamondFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDiamondFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDiamondFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDiamondFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDiamondFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDiamondFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDiamondFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDiamondFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDiamondFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDiamondFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDiamondFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
