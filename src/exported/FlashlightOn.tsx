import IconFlashlightOnFill0Wght100Grad0Opsz48 from '../components/FlashlightOnFill0Wght100Grad0Opsz48'
import IconFlashlightOnFill0Wght200Grad0Opsz48 from '../components/FlashlightOnFill0Wght200Grad0Opsz48'
import IconFlashlightOnFill0Wght300Grad0Opsz48 from '../components/FlashlightOnFill0Wght300Grad0Opsz48'
import IconFlashlightOnFill0Wght400Grad0Opsz48 from '../components/FlashlightOnFill0Wght400Grad0Opsz48'
import IconFlashlightOnFill0Wght500Grad0Opsz48 from '../components/FlashlightOnFill0Wght500Grad0Opsz48'
import IconFlashlightOnFill0Wght600Grad0Opsz48 from '../components/FlashlightOnFill0Wght600Grad0Opsz48'
import IconFlashlightOnFill0Wght700Grad0Opsz48 from '../components/FlashlightOnFill0Wght700Grad0Opsz48'
import IconFlashlightOnFill1Wght100Grad0Opsz48 from '../components/FlashlightOnFill1Wght100Grad0Opsz48'
import IconFlashlightOnFill1Wght200Grad0Opsz48 from '../components/FlashlightOnFill1Wght200Grad0Opsz48'
import IconFlashlightOnFill1Wght300Grad0Opsz48 from '../components/FlashlightOnFill1Wght300Grad0Opsz48'
import IconFlashlightOnFill1Wght400Grad0Opsz48 from '../components/FlashlightOnFill1Wght400Grad0Opsz48'
import IconFlashlightOnFill1Wght500Grad0Opsz48 from '../components/FlashlightOnFill1Wght500Grad0Opsz48'
import IconFlashlightOnFill1Wght600Grad0Opsz48 from '../components/FlashlightOnFill1Wght600Grad0Opsz48'
import IconFlashlightOnFill1Wght700Grad0Opsz48 from '../components/FlashlightOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFlashlightOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFlashlightOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFlashlightOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFlashlightOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFlashlightOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFlashlightOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFlashlightOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFlashlightOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFlashlightOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFlashlightOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFlashlightOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFlashlightOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFlashlightOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFlashlightOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFlashlightOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
