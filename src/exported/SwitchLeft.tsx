import IconSwitchLeftFill0Wght100Grad0Opsz48 from '../components/SwitchLeftFill0Wght100Grad0Opsz48'
import IconSwitchLeftFill0Wght200Grad0Opsz48 from '../components/SwitchLeftFill0Wght200Grad0Opsz48'
import IconSwitchLeftFill0Wght300Grad0Opsz48 from '../components/SwitchLeftFill0Wght300Grad0Opsz48'
import IconSwitchLeftFill0Wght400Grad0Opsz48 from '../components/SwitchLeftFill0Wght400Grad0Opsz48'
import IconSwitchLeftFill0Wght500Grad0Opsz48 from '../components/SwitchLeftFill0Wght500Grad0Opsz48'
import IconSwitchLeftFill0Wght600Grad0Opsz48 from '../components/SwitchLeftFill0Wght600Grad0Opsz48'
import IconSwitchLeftFill0Wght700Grad0Opsz48 from '../components/SwitchLeftFill0Wght700Grad0Opsz48'
import IconSwitchLeftFill1Wght100Grad0Opsz48 from '../components/SwitchLeftFill1Wght100Grad0Opsz48'
import IconSwitchLeftFill1Wght200Grad0Opsz48 from '../components/SwitchLeftFill1Wght200Grad0Opsz48'
import IconSwitchLeftFill1Wght300Grad0Opsz48 from '../components/SwitchLeftFill1Wght300Grad0Opsz48'
import IconSwitchLeftFill1Wght400Grad0Opsz48 from '../components/SwitchLeftFill1Wght400Grad0Opsz48'
import IconSwitchLeftFill1Wght500Grad0Opsz48 from '../components/SwitchLeftFill1Wght500Grad0Opsz48'
import IconSwitchLeftFill1Wght600Grad0Opsz48 from '../components/SwitchLeftFill1Wght600Grad0Opsz48'
import IconSwitchLeftFill1Wght700Grad0Opsz48 from '../components/SwitchLeftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwitchLeft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwitchLeftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwitchLeftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwitchLeftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwitchLeftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwitchLeftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwitchLeftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwitchLeftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwitchLeftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwitchLeftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwitchLeftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwitchLeftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwitchLeftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwitchLeftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwitchLeftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
