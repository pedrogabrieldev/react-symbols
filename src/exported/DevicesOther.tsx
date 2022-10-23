import IconDevicesOtherFill0Wght100Grad0Opsz48 from '../components/DevicesOtherFill0Wght100Grad0Opsz48'
import IconDevicesOtherFill0Wght200Grad0Opsz48 from '../components/DevicesOtherFill0Wght200Grad0Opsz48'
import IconDevicesOtherFill0Wght300Grad0Opsz48 from '../components/DevicesOtherFill0Wght300Grad0Opsz48'
import IconDevicesOtherFill0Wght400Grad0Opsz48 from '../components/DevicesOtherFill0Wght400Grad0Opsz48'
import IconDevicesOtherFill0Wght500Grad0Opsz48 from '../components/DevicesOtherFill0Wght500Grad0Opsz48'
import IconDevicesOtherFill0Wght600Grad0Opsz48 from '../components/DevicesOtherFill0Wght600Grad0Opsz48'
import IconDevicesOtherFill0Wght700Grad0Opsz48 from '../components/DevicesOtherFill0Wght700Grad0Opsz48'
import IconDevicesOtherFill1Wght100Grad0Opsz48 from '../components/DevicesOtherFill1Wght100Grad0Opsz48'
import IconDevicesOtherFill1Wght200Grad0Opsz48 from '../components/DevicesOtherFill1Wght200Grad0Opsz48'
import IconDevicesOtherFill1Wght300Grad0Opsz48 from '../components/DevicesOtherFill1Wght300Grad0Opsz48'
import IconDevicesOtherFill1Wght400Grad0Opsz48 from '../components/DevicesOtherFill1Wght400Grad0Opsz48'
import IconDevicesOtherFill1Wght500Grad0Opsz48 from '../components/DevicesOtherFill1Wght500Grad0Opsz48'
import IconDevicesOtherFill1Wght600Grad0Opsz48 from '../components/DevicesOtherFill1Wght600Grad0Opsz48'
import IconDevicesOtherFill1Wght700Grad0Opsz48 from '../components/DevicesOtherFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDevicesOther = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDevicesOtherFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDevicesOtherFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDevicesOtherFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDevicesOtherFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDevicesOtherFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDevicesOtherFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDevicesOtherFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDevicesOtherFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDevicesOtherFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDevicesOtherFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDevicesOtherFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDevicesOtherFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDevicesOtherFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDevicesOtherFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
