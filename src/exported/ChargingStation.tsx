import IconChargingStationFill0Wght100Grad0Opsz48 from '../components/ChargingStationFill0Wght100Grad0Opsz48'
import IconChargingStationFill0Wght200Grad0Opsz48 from '../components/ChargingStationFill0Wght200Grad0Opsz48'
import IconChargingStationFill0Wght300Grad0Opsz48 from '../components/ChargingStationFill0Wght300Grad0Opsz48'
import IconChargingStationFill0Wght400Grad0Opsz48 from '../components/ChargingStationFill0Wght400Grad0Opsz48'
import IconChargingStationFill0Wght500Grad0Opsz48 from '../components/ChargingStationFill0Wght500Grad0Opsz48'
import IconChargingStationFill0Wght600Grad0Opsz48 from '../components/ChargingStationFill0Wght600Grad0Opsz48'
import IconChargingStationFill0Wght700Grad0Opsz48 from '../components/ChargingStationFill0Wght700Grad0Opsz48'
import IconChargingStationFill1Wght100Grad0Opsz48 from '../components/ChargingStationFill1Wght100Grad0Opsz48'
import IconChargingStationFill1Wght200Grad0Opsz48 from '../components/ChargingStationFill1Wght200Grad0Opsz48'
import IconChargingStationFill1Wght300Grad0Opsz48 from '../components/ChargingStationFill1Wght300Grad0Opsz48'
import IconChargingStationFill1Wght400Grad0Opsz48 from '../components/ChargingStationFill1Wght400Grad0Opsz48'
import IconChargingStationFill1Wght500Grad0Opsz48 from '../components/ChargingStationFill1Wght500Grad0Opsz48'
import IconChargingStationFill1Wght600Grad0Opsz48 from '../components/ChargingStationFill1Wght600Grad0Opsz48'
import IconChargingStationFill1Wght700Grad0Opsz48 from '../components/ChargingStationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconChargingStation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconChargingStationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconChargingStationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconChargingStationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconChargingStationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconChargingStationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconChargingStationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconChargingStationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconChargingStationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconChargingStationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconChargingStationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconChargingStationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconChargingStationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconChargingStationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconChargingStationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
