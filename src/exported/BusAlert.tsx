import IconBusAlertFill0Wght100Grad0Opsz48 from '../components/BusAlertFill0Wght100Grad0Opsz48'
import IconBusAlertFill0Wght200Grad0Opsz48 from '../components/BusAlertFill0Wght200Grad0Opsz48'
import IconBusAlertFill0Wght300Grad0Opsz48 from '../components/BusAlertFill0Wght300Grad0Opsz48'
import IconBusAlertFill0Wght400Grad0Opsz48 from '../components/BusAlertFill0Wght400Grad0Opsz48'
import IconBusAlertFill0Wght500Grad0Opsz48 from '../components/BusAlertFill0Wght500Grad0Opsz48'
import IconBusAlertFill0Wght600Grad0Opsz48 from '../components/BusAlertFill0Wght600Grad0Opsz48'
import IconBusAlertFill0Wght700Grad0Opsz48 from '../components/BusAlertFill0Wght700Grad0Opsz48'
import IconBusAlertFill1Wght100Grad0Opsz48 from '../components/BusAlertFill1Wght100Grad0Opsz48'
import IconBusAlertFill1Wght200Grad0Opsz48 from '../components/BusAlertFill1Wght200Grad0Opsz48'
import IconBusAlertFill1Wght300Grad0Opsz48 from '../components/BusAlertFill1Wght300Grad0Opsz48'
import IconBusAlertFill1Wght400Grad0Opsz48 from '../components/BusAlertFill1Wght400Grad0Opsz48'
import IconBusAlertFill1Wght500Grad0Opsz48 from '../components/BusAlertFill1Wght500Grad0Opsz48'
import IconBusAlertFill1Wght600Grad0Opsz48 from '../components/BusAlertFill1Wght600Grad0Opsz48'
import IconBusAlertFill1Wght700Grad0Opsz48 from '../components/BusAlertFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBusAlert = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBusAlertFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBusAlertFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBusAlertFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBusAlertFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBusAlertFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBusAlertFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBusAlertFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBusAlertFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBusAlertFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBusAlertFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBusAlertFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBusAlertFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBusAlertFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBusAlertFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
