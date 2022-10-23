import IconSwitchVideoFill0Wght100Grad0Opsz48 from '../components/SwitchVideoFill0Wght100Grad0Opsz48'
import IconSwitchVideoFill0Wght200Grad0Opsz48 from '../components/SwitchVideoFill0Wght200Grad0Opsz48'
import IconSwitchVideoFill0Wght300Grad0Opsz48 from '../components/SwitchVideoFill0Wght300Grad0Opsz48'
import IconSwitchVideoFill0Wght400Grad0Opsz48 from '../components/SwitchVideoFill0Wght400Grad0Opsz48'
import IconSwitchVideoFill0Wght500Grad0Opsz48 from '../components/SwitchVideoFill0Wght500Grad0Opsz48'
import IconSwitchVideoFill0Wght600Grad0Opsz48 from '../components/SwitchVideoFill0Wght600Grad0Opsz48'
import IconSwitchVideoFill0Wght700Grad0Opsz48 from '../components/SwitchVideoFill0Wght700Grad0Opsz48'
import IconSwitchVideoFill1Wght100Grad0Opsz48 from '../components/SwitchVideoFill1Wght100Grad0Opsz48'
import IconSwitchVideoFill1Wght200Grad0Opsz48 from '../components/SwitchVideoFill1Wght200Grad0Opsz48'
import IconSwitchVideoFill1Wght300Grad0Opsz48 from '../components/SwitchVideoFill1Wght300Grad0Opsz48'
import IconSwitchVideoFill1Wght400Grad0Opsz48 from '../components/SwitchVideoFill1Wght400Grad0Opsz48'
import IconSwitchVideoFill1Wght500Grad0Opsz48 from '../components/SwitchVideoFill1Wght500Grad0Opsz48'
import IconSwitchVideoFill1Wght600Grad0Opsz48 from '../components/SwitchVideoFill1Wght600Grad0Opsz48'
import IconSwitchVideoFill1Wght700Grad0Opsz48 from '../components/SwitchVideoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwitchVideo = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwitchVideoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwitchVideoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwitchVideoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwitchVideoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwitchVideoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwitchVideoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwitchVideoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwitchVideoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwitchVideoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwitchVideoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwitchVideoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwitchVideoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwitchVideoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwitchVideoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
