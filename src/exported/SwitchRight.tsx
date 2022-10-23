import IconSwitchRightFill0Wght100Grad0Opsz48 from '../components/SwitchRightFill0Wght100Grad0Opsz48'
import IconSwitchRightFill0Wght200Grad0Opsz48 from '../components/SwitchRightFill0Wght200Grad0Opsz48'
import IconSwitchRightFill0Wght300Grad0Opsz48 from '../components/SwitchRightFill0Wght300Grad0Opsz48'
import IconSwitchRightFill0Wght400Grad0Opsz48 from '../components/SwitchRightFill0Wght400Grad0Opsz48'
import IconSwitchRightFill0Wght500Grad0Opsz48 from '../components/SwitchRightFill0Wght500Grad0Opsz48'
import IconSwitchRightFill0Wght600Grad0Opsz48 from '../components/SwitchRightFill0Wght600Grad0Opsz48'
import IconSwitchRightFill0Wght700Grad0Opsz48 from '../components/SwitchRightFill0Wght700Grad0Opsz48'
import IconSwitchRightFill1Wght100Grad0Opsz48 from '../components/SwitchRightFill1Wght100Grad0Opsz48'
import IconSwitchRightFill1Wght200Grad0Opsz48 from '../components/SwitchRightFill1Wght200Grad0Opsz48'
import IconSwitchRightFill1Wght300Grad0Opsz48 from '../components/SwitchRightFill1Wght300Grad0Opsz48'
import IconSwitchRightFill1Wght400Grad0Opsz48 from '../components/SwitchRightFill1Wght400Grad0Opsz48'
import IconSwitchRightFill1Wght500Grad0Opsz48 from '../components/SwitchRightFill1Wght500Grad0Opsz48'
import IconSwitchRightFill1Wght600Grad0Opsz48 from '../components/SwitchRightFill1Wght600Grad0Opsz48'
import IconSwitchRightFill1Wght700Grad0Opsz48 from '../components/SwitchRightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwitchRight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwitchRightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwitchRightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwitchRightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwitchRightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwitchRightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwitchRightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwitchRightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwitchRightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwitchRightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwitchRightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwitchRightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwitchRightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwitchRightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwitchRightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
