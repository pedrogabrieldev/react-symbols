import IconAddLocationFill0Wght100Grad0Opsz48 from '../components/AddLocationFill0Wght100Grad0Opsz48'
import IconAddLocationFill0Wght200Grad0Opsz48 from '../components/AddLocationFill0Wght200Grad0Opsz48'
import IconAddLocationFill0Wght300Grad0Opsz48 from '../components/AddLocationFill0Wght300Grad0Opsz48'
import IconAddLocationFill0Wght400Grad0Opsz48 from '../components/AddLocationFill0Wght400Grad0Opsz48'
import IconAddLocationFill0Wght500Grad0Opsz48 from '../components/AddLocationFill0Wght500Grad0Opsz48'
import IconAddLocationFill0Wght600Grad0Opsz48 from '../components/AddLocationFill0Wght600Grad0Opsz48'
import IconAddLocationFill0Wght700Grad0Opsz48 from '../components/AddLocationFill0Wght700Grad0Opsz48'
import IconAddLocationFill1Wght100Grad0Opsz48 from '../components/AddLocationFill1Wght100Grad0Opsz48'
import IconAddLocationFill1Wght200Grad0Opsz48 from '../components/AddLocationFill1Wght200Grad0Opsz48'
import IconAddLocationFill1Wght300Grad0Opsz48 from '../components/AddLocationFill1Wght300Grad0Opsz48'
import IconAddLocationFill1Wght400Grad0Opsz48 from '../components/AddLocationFill1Wght400Grad0Opsz48'
import IconAddLocationFill1Wght500Grad0Opsz48 from '../components/AddLocationFill1Wght500Grad0Opsz48'
import IconAddLocationFill1Wght600Grad0Opsz48 from '../components/AddLocationFill1Wght600Grad0Opsz48'
import IconAddLocationFill1Wght700Grad0Opsz48 from '../components/AddLocationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddLocation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddLocationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddLocationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddLocationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddLocationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddLocationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddLocationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddLocationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddLocationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddLocationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddLocationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddLocationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddLocationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddLocationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddLocationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
