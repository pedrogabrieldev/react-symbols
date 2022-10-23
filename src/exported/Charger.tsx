import IconChargerFill0Wght100Grad0Opsz48 from '../components/ChargerFill0Wght100Grad0Opsz48'
import IconChargerFill0Wght200Grad0Opsz48 from '../components/ChargerFill0Wght200Grad0Opsz48'
import IconChargerFill0Wght300Grad0Opsz48 from '../components/ChargerFill0Wght300Grad0Opsz48'
import IconChargerFill0Wght400Grad0Opsz48 from '../components/ChargerFill0Wght400Grad0Opsz48'
import IconChargerFill0Wght500Grad0Opsz48 from '../components/ChargerFill0Wght500Grad0Opsz48'
import IconChargerFill0Wght600Grad0Opsz48 from '../components/ChargerFill0Wght600Grad0Opsz48'
import IconChargerFill0Wght700Grad0Opsz48 from '../components/ChargerFill0Wght700Grad0Opsz48'
import IconChargerFill1Wght100Grad0Opsz48 from '../components/ChargerFill1Wght100Grad0Opsz48'
import IconChargerFill1Wght200Grad0Opsz48 from '../components/ChargerFill1Wght200Grad0Opsz48'
import IconChargerFill1Wght300Grad0Opsz48 from '../components/ChargerFill1Wght300Grad0Opsz48'
import IconChargerFill1Wght400Grad0Opsz48 from '../components/ChargerFill1Wght400Grad0Opsz48'
import IconChargerFill1Wght500Grad0Opsz48 from '../components/ChargerFill1Wght500Grad0Opsz48'
import IconChargerFill1Wght600Grad0Opsz48 from '../components/ChargerFill1Wght600Grad0Opsz48'
import IconChargerFill1Wght700Grad0Opsz48 from '../components/ChargerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCharger = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconChargerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconChargerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconChargerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconChargerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconChargerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconChargerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconChargerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconChargerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconChargerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconChargerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconChargerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconChargerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconChargerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconChargerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
