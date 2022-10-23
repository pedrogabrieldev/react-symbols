import IconLocalParkingFill0Wght100Grad0Opsz48 from '../components/LocalParkingFill0Wght100Grad0Opsz48'
import IconLocalParkingFill0Wght200Grad0Opsz48 from '../components/LocalParkingFill0Wght200Grad0Opsz48'
import IconLocalParkingFill0Wght300Grad0Opsz48 from '../components/LocalParkingFill0Wght300Grad0Opsz48'
import IconLocalParkingFill0Wght400Grad0Opsz48 from '../components/LocalParkingFill0Wght400Grad0Opsz48'
import IconLocalParkingFill0Wght500Grad0Opsz48 from '../components/LocalParkingFill0Wght500Grad0Opsz48'
import IconLocalParkingFill0Wght600Grad0Opsz48 from '../components/LocalParkingFill0Wght600Grad0Opsz48'
import IconLocalParkingFill0Wght700Grad0Opsz48 from '../components/LocalParkingFill0Wght700Grad0Opsz48'
import IconLocalParkingFill1Wght100Grad0Opsz48 from '../components/LocalParkingFill1Wght100Grad0Opsz48'
import IconLocalParkingFill1Wght200Grad0Opsz48 from '../components/LocalParkingFill1Wght200Grad0Opsz48'
import IconLocalParkingFill1Wght300Grad0Opsz48 from '../components/LocalParkingFill1Wght300Grad0Opsz48'
import IconLocalParkingFill1Wght400Grad0Opsz48 from '../components/LocalParkingFill1Wght400Grad0Opsz48'
import IconLocalParkingFill1Wght500Grad0Opsz48 from '../components/LocalParkingFill1Wght500Grad0Opsz48'
import IconLocalParkingFill1Wght600Grad0Opsz48 from '../components/LocalParkingFill1Wght600Grad0Opsz48'
import IconLocalParkingFill1Wght700Grad0Opsz48 from '../components/LocalParkingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalParking = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalParkingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalParkingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalParkingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalParkingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalParkingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalParkingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalParkingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalParkingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalParkingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalParkingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalParkingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalParkingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalParkingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalParkingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
