import IconBatteryVert050Fill0Wght100Grad0Opsz48 from '../components/BatteryVert050Fill0Wght100Grad0Opsz48'
import IconBatteryVert050Fill0Wght200Grad0Opsz48 from '../components/BatteryVert050Fill0Wght200Grad0Opsz48'
import IconBatteryVert050Fill0Wght300Grad0Opsz48 from '../components/BatteryVert050Fill0Wght300Grad0Opsz48'
import IconBatteryVert050Fill0Wght400Grad0Opsz48 from '../components/BatteryVert050Fill0Wght400Grad0Opsz48'
import IconBatteryVert050Fill0Wght500Grad0Opsz48 from '../components/BatteryVert050Fill0Wght500Grad0Opsz48'
import IconBatteryVert050Fill0Wght600Grad0Opsz48 from '../components/BatteryVert050Fill0Wght600Grad0Opsz48'
import IconBatteryVert050Fill0Wght700Grad0Opsz48 from '../components/BatteryVert050Fill0Wght700Grad0Opsz48'
import IconBatteryVert050Fill1Wght100Grad0Opsz48 from '../components/BatteryVert050Fill1Wght100Grad0Opsz48'
import IconBatteryVert050Fill1Wght200Grad0Opsz48 from '../components/BatteryVert050Fill1Wght200Grad0Opsz48'
import IconBatteryVert050Fill1Wght300Grad0Opsz48 from '../components/BatteryVert050Fill1Wght300Grad0Opsz48'
import IconBatteryVert050Fill1Wght400Grad0Opsz48 from '../components/BatteryVert050Fill1Wght400Grad0Opsz48'
import IconBatteryVert050Fill1Wght500Grad0Opsz48 from '../components/BatteryVert050Fill1Wght500Grad0Opsz48'
import IconBatteryVert050Fill1Wght600Grad0Opsz48 from '../components/BatteryVert050Fill1Wght600Grad0Opsz48'
import IconBatteryVert050Fill1Wght700Grad0Opsz48 from '../components/BatteryVert050Fill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBatteryVert050 = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBatteryVert050Fill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBatteryVert050Fill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBatteryVert050Fill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBatteryVert050Fill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBatteryVert050Fill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBatteryVert050Fill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBatteryVert050Fill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBatteryVert050Fill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBatteryVert050Fill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBatteryVert050Fill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBatteryVert050Fill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBatteryVert050Fill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBatteryVert050Fill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBatteryVert050Fill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
