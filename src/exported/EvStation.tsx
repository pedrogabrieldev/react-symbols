import IconEvStationFill0Wght100Grad0Opsz48 from '../components/EvStationFill0Wght100Grad0Opsz48'
import IconEvStationFill0Wght200Grad0Opsz48 from '../components/EvStationFill0Wght200Grad0Opsz48'
import IconEvStationFill0Wght300Grad0Opsz48 from '../components/EvStationFill0Wght300Grad0Opsz48'
import IconEvStationFill0Wght400Grad0Opsz48 from '../components/EvStationFill0Wght400Grad0Opsz48'
import IconEvStationFill0Wght500Grad0Opsz48 from '../components/EvStationFill0Wght500Grad0Opsz48'
import IconEvStationFill0Wght600Grad0Opsz48 from '../components/EvStationFill0Wght600Grad0Opsz48'
import IconEvStationFill0Wght700Grad0Opsz48 from '../components/EvStationFill0Wght700Grad0Opsz48'
import IconEvStationFill1Wght100Grad0Opsz48 from '../components/EvStationFill1Wght100Grad0Opsz48'
import IconEvStationFill1Wght200Grad0Opsz48 from '../components/EvStationFill1Wght200Grad0Opsz48'
import IconEvStationFill1Wght300Grad0Opsz48 from '../components/EvStationFill1Wght300Grad0Opsz48'
import IconEvStationFill1Wght400Grad0Opsz48 from '../components/EvStationFill1Wght400Grad0Opsz48'
import IconEvStationFill1Wght500Grad0Opsz48 from '../components/EvStationFill1Wght500Grad0Opsz48'
import IconEvStationFill1Wght600Grad0Opsz48 from '../components/EvStationFill1Wght600Grad0Opsz48'
import IconEvStationFill1Wght700Grad0Opsz48 from '../components/EvStationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEvStation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEvStationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEvStationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEvStationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEvStationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEvStationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEvStationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEvStationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEvStationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEvStationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEvStationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEvStationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEvStationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEvStationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEvStationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
