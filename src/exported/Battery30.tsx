import IconBattery30Fill0Wght100Grad0Opsz48 from '../components/Battery30Fill0Wght100Grad0Opsz48'
import IconBattery30Fill0Wght200Grad0Opsz48 from '../components/Battery30Fill0Wght200Grad0Opsz48'
import IconBattery30Fill0Wght300Grad0Opsz48 from '../components/Battery30Fill0Wght300Grad0Opsz48'
import IconBattery30Fill0Wght400Grad0Opsz48 from '../components/Battery30Fill0Wght400Grad0Opsz48'
import IconBattery30Fill0Wght500Grad0Opsz48 from '../components/Battery30Fill0Wght500Grad0Opsz48'
import IconBattery30Fill0Wght600Grad0Opsz48 from '../components/Battery30Fill0Wght600Grad0Opsz48'
import IconBattery30Fill0Wght700Grad0Opsz48 from '../components/Battery30Fill0Wght700Grad0Opsz48'
import IconBattery30Fill1Wght100Grad0Opsz48 from '../components/Battery30Fill1Wght100Grad0Opsz48'
import IconBattery30Fill1Wght200Grad0Opsz48 from '../components/Battery30Fill1Wght200Grad0Opsz48'
import IconBattery30Fill1Wght300Grad0Opsz48 from '../components/Battery30Fill1Wght300Grad0Opsz48'
import IconBattery30Fill1Wght400Grad0Opsz48 from '../components/Battery30Fill1Wght400Grad0Opsz48'
import IconBattery30Fill1Wght500Grad0Opsz48 from '../components/Battery30Fill1Wght500Grad0Opsz48'
import IconBattery30Fill1Wght600Grad0Opsz48 from '../components/Battery30Fill1Wght600Grad0Opsz48'
import IconBattery30Fill1Wght700Grad0Opsz48 from '../components/Battery30Fill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBattery30 = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBattery30Fill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBattery30Fill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBattery30Fill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBattery30Fill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBattery30Fill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBattery30Fill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBattery30Fill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBattery30Fill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBattery30Fill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBattery30Fill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBattery30Fill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBattery30Fill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBattery30Fill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBattery30Fill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}