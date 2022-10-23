import IconRestartAltFill0Wght100Grad0Opsz48 from '../components/RestartAltFill0Wght100Grad0Opsz48'
import IconRestartAltFill0Wght200Grad0Opsz48 from '../components/RestartAltFill0Wght200Grad0Opsz48'
import IconRestartAltFill0Wght300Grad0Opsz48 from '../components/RestartAltFill0Wght300Grad0Opsz48'
import IconRestartAltFill0Wght400Grad0Opsz48 from '../components/RestartAltFill0Wght400Grad0Opsz48'
import IconRestartAltFill0Wght500Grad0Opsz48 from '../components/RestartAltFill0Wght500Grad0Opsz48'
import IconRestartAltFill0Wght600Grad0Opsz48 from '../components/RestartAltFill0Wght600Grad0Opsz48'
import IconRestartAltFill0Wght700Grad0Opsz48 from '../components/RestartAltFill0Wght700Grad0Opsz48'
import IconRestartAltFill1Wght100Grad0Opsz48 from '../components/RestartAltFill1Wght100Grad0Opsz48'
import IconRestartAltFill1Wght200Grad0Opsz48 from '../components/RestartAltFill1Wght200Grad0Opsz48'
import IconRestartAltFill1Wght300Grad0Opsz48 from '../components/RestartAltFill1Wght300Grad0Opsz48'
import IconRestartAltFill1Wght400Grad0Opsz48 from '../components/RestartAltFill1Wght400Grad0Opsz48'
import IconRestartAltFill1Wght500Grad0Opsz48 from '../components/RestartAltFill1Wght500Grad0Opsz48'
import IconRestartAltFill1Wght600Grad0Opsz48 from '../components/RestartAltFill1Wght600Grad0Opsz48'
import IconRestartAltFill1Wght700Grad0Opsz48 from '../components/RestartAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRestartAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRestartAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRestartAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRestartAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRestartAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRestartAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRestartAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRestartAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRestartAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRestartAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRestartAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRestartAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRestartAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRestartAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRestartAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
