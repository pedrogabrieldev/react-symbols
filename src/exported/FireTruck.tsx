import IconFireTruckFill0Wght100Grad0Opsz48 from '../components/FireTruckFill0Wght100Grad0Opsz48'
import IconFireTruckFill0Wght200Grad0Opsz48 from '../components/FireTruckFill0Wght200Grad0Opsz48'
import IconFireTruckFill0Wght300Grad0Opsz48 from '../components/FireTruckFill0Wght300Grad0Opsz48'
import IconFireTruckFill0Wght400Grad0Opsz48 from '../components/FireTruckFill0Wght400Grad0Opsz48'
import IconFireTruckFill0Wght500Grad0Opsz48 from '../components/FireTruckFill0Wght500Grad0Opsz48'
import IconFireTruckFill0Wght600Grad0Opsz48 from '../components/FireTruckFill0Wght600Grad0Opsz48'
import IconFireTruckFill0Wght700Grad0Opsz48 from '../components/FireTruckFill0Wght700Grad0Opsz48'
import IconFireTruckFill1Wght100Grad0Opsz48 from '../components/FireTruckFill1Wght100Grad0Opsz48'
import IconFireTruckFill1Wght200Grad0Opsz48 from '../components/FireTruckFill1Wght200Grad0Opsz48'
import IconFireTruckFill1Wght300Grad0Opsz48 from '../components/FireTruckFill1Wght300Grad0Opsz48'
import IconFireTruckFill1Wght400Grad0Opsz48 from '../components/FireTruckFill1Wght400Grad0Opsz48'
import IconFireTruckFill1Wght500Grad0Opsz48 from '../components/FireTruckFill1Wght500Grad0Opsz48'
import IconFireTruckFill1Wght600Grad0Opsz48 from '../components/FireTruckFill1Wght600Grad0Opsz48'
import IconFireTruckFill1Wght700Grad0Opsz48 from '../components/FireTruckFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFireTruck = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFireTruckFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFireTruckFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFireTruckFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFireTruckFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFireTruckFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFireTruckFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFireTruckFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFireTruckFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFireTruckFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFireTruckFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFireTruckFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFireTruckFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFireTruckFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFireTruckFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
