import IconEjectFill0Wght100Grad0Opsz48 from '../components/EjectFill0Wght100Grad0Opsz48'
import IconEjectFill0Wght200Grad0Opsz48 from '../components/EjectFill0Wght200Grad0Opsz48'
import IconEjectFill0Wght300Grad0Opsz48 from '../components/EjectFill0Wght300Grad0Opsz48'
import IconEjectFill0Wght400Grad0Opsz48 from '../components/EjectFill0Wght400Grad0Opsz48'
import IconEjectFill0Wght500Grad0Opsz48 from '../components/EjectFill0Wght500Grad0Opsz48'
import IconEjectFill0Wght600Grad0Opsz48 from '../components/EjectFill0Wght600Grad0Opsz48'
import IconEjectFill0Wght700Grad0Opsz48 from '../components/EjectFill0Wght700Grad0Opsz48'
import IconEjectFill1Wght100Grad0Opsz48 from '../components/EjectFill1Wght100Grad0Opsz48'
import IconEjectFill1Wght200Grad0Opsz48 from '../components/EjectFill1Wght200Grad0Opsz48'
import IconEjectFill1Wght300Grad0Opsz48 from '../components/EjectFill1Wght300Grad0Opsz48'
import IconEjectFill1Wght400Grad0Opsz48 from '../components/EjectFill1Wght400Grad0Opsz48'
import IconEjectFill1Wght500Grad0Opsz48 from '../components/EjectFill1Wght500Grad0Opsz48'
import IconEjectFill1Wght600Grad0Opsz48 from '../components/EjectFill1Wght600Grad0Opsz48'
import IconEjectFill1Wght700Grad0Opsz48 from '../components/EjectFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEject = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEjectFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEjectFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEjectFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEjectFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEjectFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEjectFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEjectFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEjectFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEjectFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEjectFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEjectFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEjectFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEjectFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEjectFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
