import IconExitToAppFill0Wght100Grad0Opsz48 from '../components/ExitToAppFill0Wght100Grad0Opsz48'
import IconExitToAppFill0Wght200Grad0Opsz48 from '../components/ExitToAppFill0Wght200Grad0Opsz48'
import IconExitToAppFill0Wght300Grad0Opsz48 from '../components/ExitToAppFill0Wght300Grad0Opsz48'
import IconExitToAppFill0Wght400Grad0Opsz48 from '../components/ExitToAppFill0Wght400Grad0Opsz48'
import IconExitToAppFill0Wght500Grad0Opsz48 from '../components/ExitToAppFill0Wght500Grad0Opsz48'
import IconExitToAppFill0Wght600Grad0Opsz48 from '../components/ExitToAppFill0Wght600Grad0Opsz48'
import IconExitToAppFill0Wght700Grad0Opsz48 from '../components/ExitToAppFill0Wght700Grad0Opsz48'
import IconExitToAppFill1Wght100Grad0Opsz48 from '../components/ExitToAppFill1Wght100Grad0Opsz48'
import IconExitToAppFill1Wght200Grad0Opsz48 from '../components/ExitToAppFill1Wght200Grad0Opsz48'
import IconExitToAppFill1Wght300Grad0Opsz48 from '../components/ExitToAppFill1Wght300Grad0Opsz48'
import IconExitToAppFill1Wght400Grad0Opsz48 from '../components/ExitToAppFill1Wght400Grad0Opsz48'
import IconExitToAppFill1Wght500Grad0Opsz48 from '../components/ExitToAppFill1Wght500Grad0Opsz48'
import IconExitToAppFill1Wght600Grad0Opsz48 from '../components/ExitToAppFill1Wght600Grad0Opsz48'
import IconExitToAppFill1Wght700Grad0Opsz48 from '../components/ExitToAppFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconExitToApp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconExitToAppFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconExitToAppFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconExitToAppFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconExitToAppFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconExitToAppFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconExitToAppFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconExitToAppFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconExitToAppFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconExitToAppFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconExitToAppFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconExitToAppFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconExitToAppFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconExitToAppFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconExitToAppFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
