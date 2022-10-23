import IconTtyFill0Wght100Grad0Opsz48 from '../components/TtyFill0Wght100Grad0Opsz48'
import IconTtyFill0Wght200Grad0Opsz48 from '../components/TtyFill0Wght200Grad0Opsz48'
import IconTtyFill0Wght300Grad0Opsz48 from '../components/TtyFill0Wght300Grad0Opsz48'
import IconTtyFill0Wght400Grad0Opsz48 from '../components/TtyFill0Wght400Grad0Opsz48'
import IconTtyFill0Wght500Grad0Opsz48 from '../components/TtyFill0Wght500Grad0Opsz48'
import IconTtyFill0Wght600Grad0Opsz48 from '../components/TtyFill0Wght600Grad0Opsz48'
import IconTtyFill0Wght700Grad0Opsz48 from '../components/TtyFill0Wght700Grad0Opsz48'
import IconTtyFill1Wght100Grad0Opsz48 from '../components/TtyFill1Wght100Grad0Opsz48'
import IconTtyFill1Wght200Grad0Opsz48 from '../components/TtyFill1Wght200Grad0Opsz48'
import IconTtyFill1Wght300Grad0Opsz48 from '../components/TtyFill1Wght300Grad0Opsz48'
import IconTtyFill1Wght400Grad0Opsz48 from '../components/TtyFill1Wght400Grad0Opsz48'
import IconTtyFill1Wght500Grad0Opsz48 from '../components/TtyFill1Wght500Grad0Opsz48'
import IconTtyFill1Wght600Grad0Opsz48 from '../components/TtyFill1Wght600Grad0Opsz48'
import IconTtyFill1Wght700Grad0Opsz48 from '../components/TtyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTty = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTtyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTtyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTtyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTtyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTtyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTtyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTtyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTtyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTtyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTtyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTtyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTtyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTtyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTtyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
