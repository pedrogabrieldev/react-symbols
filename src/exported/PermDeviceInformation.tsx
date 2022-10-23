import IconPermDeviceInformationFill0Wght100Grad0Opsz48 from '../components/PermDeviceInformationFill0Wght100Grad0Opsz48'
import IconPermDeviceInformationFill0Wght200Grad0Opsz48 from '../components/PermDeviceInformationFill0Wght200Grad0Opsz48'
import IconPermDeviceInformationFill0Wght300Grad0Opsz48 from '../components/PermDeviceInformationFill0Wght300Grad0Opsz48'
import IconPermDeviceInformationFill0Wght400Grad0Opsz48 from '../components/PermDeviceInformationFill0Wght400Grad0Opsz48'
import IconPermDeviceInformationFill0Wght500Grad0Opsz48 from '../components/PermDeviceInformationFill0Wght500Grad0Opsz48'
import IconPermDeviceInformationFill0Wght600Grad0Opsz48 from '../components/PermDeviceInformationFill0Wght600Grad0Opsz48'
import IconPermDeviceInformationFill0Wght700Grad0Opsz48 from '../components/PermDeviceInformationFill0Wght700Grad0Opsz48'
import IconPermDeviceInformationFill1Wght100Grad0Opsz48 from '../components/PermDeviceInformationFill1Wght100Grad0Opsz48'
import IconPermDeviceInformationFill1Wght200Grad0Opsz48 from '../components/PermDeviceInformationFill1Wght200Grad0Opsz48'
import IconPermDeviceInformationFill1Wght300Grad0Opsz48 from '../components/PermDeviceInformationFill1Wght300Grad0Opsz48'
import IconPermDeviceInformationFill1Wght400Grad0Opsz48 from '../components/PermDeviceInformationFill1Wght400Grad0Opsz48'
import IconPermDeviceInformationFill1Wght500Grad0Opsz48 from '../components/PermDeviceInformationFill1Wght500Grad0Opsz48'
import IconPermDeviceInformationFill1Wght600Grad0Opsz48 from '../components/PermDeviceInformationFill1Wght600Grad0Opsz48'
import IconPermDeviceInformationFill1Wght700Grad0Opsz48 from '../components/PermDeviceInformationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPermDeviceInformation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPermDeviceInformationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPermDeviceInformationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPermDeviceInformationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPermDeviceInformationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPermDeviceInformationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPermDeviceInformationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPermDeviceInformationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPermDeviceInformationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPermDeviceInformationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPermDeviceInformationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPermDeviceInformationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPermDeviceInformationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPermDeviceInformationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPermDeviceInformationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
