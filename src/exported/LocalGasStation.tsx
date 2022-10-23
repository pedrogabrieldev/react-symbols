import IconLocalGasStationFill0Wght100Grad0Opsz48 from '../components/LocalGasStationFill0Wght100Grad0Opsz48'
import IconLocalGasStationFill0Wght200Grad0Opsz48 from '../components/LocalGasStationFill0Wght200Grad0Opsz48'
import IconLocalGasStationFill0Wght300Grad0Opsz48 from '../components/LocalGasStationFill0Wght300Grad0Opsz48'
import IconLocalGasStationFill0Wght400Grad0Opsz48 from '../components/LocalGasStationFill0Wght400Grad0Opsz48'
import IconLocalGasStationFill0Wght500Grad0Opsz48 from '../components/LocalGasStationFill0Wght500Grad0Opsz48'
import IconLocalGasStationFill0Wght600Grad0Opsz48 from '../components/LocalGasStationFill0Wght600Grad0Opsz48'
import IconLocalGasStationFill0Wght700Grad0Opsz48 from '../components/LocalGasStationFill0Wght700Grad0Opsz48'
import IconLocalGasStationFill1Wght100Grad0Opsz48 from '../components/LocalGasStationFill1Wght100Grad0Opsz48'
import IconLocalGasStationFill1Wght200Grad0Opsz48 from '../components/LocalGasStationFill1Wght200Grad0Opsz48'
import IconLocalGasStationFill1Wght300Grad0Opsz48 from '../components/LocalGasStationFill1Wght300Grad0Opsz48'
import IconLocalGasStationFill1Wght400Grad0Opsz48 from '../components/LocalGasStationFill1Wght400Grad0Opsz48'
import IconLocalGasStationFill1Wght500Grad0Opsz48 from '../components/LocalGasStationFill1Wght500Grad0Opsz48'
import IconLocalGasStationFill1Wght600Grad0Opsz48 from '../components/LocalGasStationFill1Wght600Grad0Opsz48'
import IconLocalGasStationFill1Wght700Grad0Opsz48 from '../components/LocalGasStationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalGasStation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalGasStationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalGasStationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalGasStationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalGasStationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalGasStationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalGasStationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalGasStationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalGasStationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalGasStationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalGasStationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalGasStationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalGasStationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalGasStationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalGasStationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
