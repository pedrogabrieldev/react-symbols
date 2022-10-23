import IconEvChargerFill0Wght100Grad0Opsz48 from '../components/EvChargerFill0Wght100Grad0Opsz48'
import IconEvChargerFill0Wght200Grad0Opsz48 from '../components/EvChargerFill0Wght200Grad0Opsz48'
import IconEvChargerFill0Wght300Grad0Opsz48 from '../components/EvChargerFill0Wght300Grad0Opsz48'
import IconEvChargerFill0Wght400Grad0Opsz48 from '../components/EvChargerFill0Wght400Grad0Opsz48'
import IconEvChargerFill0Wght500Grad0Opsz48 from '../components/EvChargerFill0Wght500Grad0Opsz48'
import IconEvChargerFill0Wght600Grad0Opsz48 from '../components/EvChargerFill0Wght600Grad0Opsz48'
import IconEvChargerFill0Wght700Grad0Opsz48 from '../components/EvChargerFill0Wght700Grad0Opsz48'
import IconEvChargerFill1Wght100Grad0Opsz48 from '../components/EvChargerFill1Wght100Grad0Opsz48'
import IconEvChargerFill1Wght200Grad0Opsz48 from '../components/EvChargerFill1Wght200Grad0Opsz48'
import IconEvChargerFill1Wght300Grad0Opsz48 from '../components/EvChargerFill1Wght300Grad0Opsz48'
import IconEvChargerFill1Wght400Grad0Opsz48 from '../components/EvChargerFill1Wght400Grad0Opsz48'
import IconEvChargerFill1Wght500Grad0Opsz48 from '../components/EvChargerFill1Wght500Grad0Opsz48'
import IconEvChargerFill1Wght600Grad0Opsz48 from '../components/EvChargerFill1Wght600Grad0Opsz48'
import IconEvChargerFill1Wght700Grad0Opsz48 from '../components/EvChargerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEvCharger = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEvChargerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEvChargerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEvChargerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEvChargerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEvChargerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEvChargerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEvChargerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEvChargerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEvChargerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEvChargerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEvChargerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEvChargerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEvChargerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEvChargerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
