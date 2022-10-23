import IconUpgradeFill0Wght100Grad0Opsz48 from '../components/UpgradeFill0Wght100Grad0Opsz48'
import IconUpgradeFill0Wght200Grad0Opsz48 from '../components/UpgradeFill0Wght200Grad0Opsz48'
import IconUpgradeFill0Wght300Grad0Opsz48 from '../components/UpgradeFill0Wght300Grad0Opsz48'
import IconUpgradeFill0Wght400Grad0Opsz48 from '../components/UpgradeFill0Wght400Grad0Opsz48'
import IconUpgradeFill0Wght500Grad0Opsz48 from '../components/UpgradeFill0Wght500Grad0Opsz48'
import IconUpgradeFill0Wght600Grad0Opsz48 from '../components/UpgradeFill0Wght600Grad0Opsz48'
import IconUpgradeFill0Wght700Grad0Opsz48 from '../components/UpgradeFill0Wght700Grad0Opsz48'
import IconUpgradeFill1Wght100Grad0Opsz48 from '../components/UpgradeFill1Wght100Grad0Opsz48'
import IconUpgradeFill1Wght200Grad0Opsz48 from '../components/UpgradeFill1Wght200Grad0Opsz48'
import IconUpgradeFill1Wght300Grad0Opsz48 from '../components/UpgradeFill1Wght300Grad0Opsz48'
import IconUpgradeFill1Wght400Grad0Opsz48 from '../components/UpgradeFill1Wght400Grad0Opsz48'
import IconUpgradeFill1Wght500Grad0Opsz48 from '../components/UpgradeFill1Wght500Grad0Opsz48'
import IconUpgradeFill1Wght600Grad0Opsz48 from '../components/UpgradeFill1Wght600Grad0Opsz48'
import IconUpgradeFill1Wght700Grad0Opsz48 from '../components/UpgradeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconUpgrade = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconUpgradeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconUpgradeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconUpgradeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconUpgradeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconUpgradeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconUpgradeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconUpgradeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconUpgradeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconUpgradeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconUpgradeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconUpgradeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconUpgradeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconUpgradeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconUpgradeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
