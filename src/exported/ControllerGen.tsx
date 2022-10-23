import IconControllerGenFill0Wght100Grad0Opsz48 from '../components/ControllerGenFill0Wght100Grad0Opsz48'
import IconControllerGenFill0Wght200Grad0Opsz48 from '../components/ControllerGenFill0Wght200Grad0Opsz48'
import IconControllerGenFill0Wght300Grad0Opsz48 from '../components/ControllerGenFill0Wght300Grad0Opsz48'
import IconControllerGenFill0Wght400Grad0Opsz48 from '../components/ControllerGenFill0Wght400Grad0Opsz48'
import IconControllerGenFill0Wght500Grad0Opsz48 from '../components/ControllerGenFill0Wght500Grad0Opsz48'
import IconControllerGenFill0Wght600Grad0Opsz48 from '../components/ControllerGenFill0Wght600Grad0Opsz48'
import IconControllerGenFill0Wght700Grad0Opsz48 from '../components/ControllerGenFill0Wght700Grad0Opsz48'
import IconControllerGenFill1Wght100Grad0Opsz48 from '../components/ControllerGenFill1Wght100Grad0Opsz48'
import IconControllerGenFill1Wght200Grad0Opsz48 from '../components/ControllerGenFill1Wght200Grad0Opsz48'
import IconControllerGenFill1Wght300Grad0Opsz48 from '../components/ControllerGenFill1Wght300Grad0Opsz48'
import IconControllerGenFill1Wght400Grad0Opsz48 from '../components/ControllerGenFill1Wght400Grad0Opsz48'
import IconControllerGenFill1Wght500Grad0Opsz48 from '../components/ControllerGenFill1Wght500Grad0Opsz48'
import IconControllerGenFill1Wght600Grad0Opsz48 from '../components/ControllerGenFill1Wght600Grad0Opsz48'
import IconControllerGenFill1Wght700Grad0Opsz48 from '../components/ControllerGenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconControllerGen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconControllerGenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconControllerGenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconControllerGenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconControllerGenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconControllerGenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconControllerGenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconControllerGenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconControllerGenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconControllerGenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconControllerGenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconControllerGenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconControllerGenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconControllerGenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconControllerGenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
