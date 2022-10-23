import IconFlashlightOffFill0Wght100Grad0Opsz48 from '../components/FlashlightOffFill0Wght100Grad0Opsz48'
import IconFlashlightOffFill0Wght200Grad0Opsz48 from '../components/FlashlightOffFill0Wght200Grad0Opsz48'
import IconFlashlightOffFill0Wght300Grad0Opsz48 from '../components/FlashlightOffFill0Wght300Grad0Opsz48'
import IconFlashlightOffFill0Wght400Grad0Opsz48 from '../components/FlashlightOffFill0Wght400Grad0Opsz48'
import IconFlashlightOffFill0Wght500Grad0Opsz48 from '../components/FlashlightOffFill0Wght500Grad0Opsz48'
import IconFlashlightOffFill0Wght600Grad0Opsz48 from '../components/FlashlightOffFill0Wght600Grad0Opsz48'
import IconFlashlightOffFill0Wght700Grad0Opsz48 from '../components/FlashlightOffFill0Wght700Grad0Opsz48'
import IconFlashlightOffFill1Wght100Grad0Opsz48 from '../components/FlashlightOffFill1Wght100Grad0Opsz48'
import IconFlashlightOffFill1Wght200Grad0Opsz48 from '../components/FlashlightOffFill1Wght200Grad0Opsz48'
import IconFlashlightOffFill1Wght300Grad0Opsz48 from '../components/FlashlightOffFill1Wght300Grad0Opsz48'
import IconFlashlightOffFill1Wght400Grad0Opsz48 from '../components/FlashlightOffFill1Wght400Grad0Opsz48'
import IconFlashlightOffFill1Wght500Grad0Opsz48 from '../components/FlashlightOffFill1Wght500Grad0Opsz48'
import IconFlashlightOffFill1Wght600Grad0Opsz48 from '../components/FlashlightOffFill1Wght600Grad0Opsz48'
import IconFlashlightOffFill1Wght700Grad0Opsz48 from '../components/FlashlightOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFlashlightOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFlashlightOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFlashlightOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFlashlightOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFlashlightOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFlashlightOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFlashlightOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFlashlightOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFlashlightOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFlashlightOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFlashlightOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFlashlightOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFlashlightOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFlashlightOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFlashlightOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
