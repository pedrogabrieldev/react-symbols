import IconAddLocationAltFill0Wght100Grad0Opsz48 from '../components/AddLocationAltFill0Wght100Grad0Opsz48'
import IconAddLocationAltFill0Wght200Grad0Opsz48 from '../components/AddLocationAltFill0Wght200Grad0Opsz48'
import IconAddLocationAltFill0Wght300Grad0Opsz48 from '../components/AddLocationAltFill0Wght300Grad0Opsz48'
import IconAddLocationAltFill0Wght400Grad0Opsz48 from '../components/AddLocationAltFill0Wght400Grad0Opsz48'
import IconAddLocationAltFill0Wght500Grad0Opsz48 from '../components/AddLocationAltFill0Wght500Grad0Opsz48'
import IconAddLocationAltFill0Wght600Grad0Opsz48 from '../components/AddLocationAltFill0Wght600Grad0Opsz48'
import IconAddLocationAltFill0Wght700Grad0Opsz48 from '../components/AddLocationAltFill0Wght700Grad0Opsz48'
import IconAddLocationAltFill1Wght100Grad0Opsz48 from '../components/AddLocationAltFill1Wght100Grad0Opsz48'
import IconAddLocationAltFill1Wght200Grad0Opsz48 from '../components/AddLocationAltFill1Wght200Grad0Opsz48'
import IconAddLocationAltFill1Wght300Grad0Opsz48 from '../components/AddLocationAltFill1Wght300Grad0Opsz48'
import IconAddLocationAltFill1Wght400Grad0Opsz48 from '../components/AddLocationAltFill1Wght400Grad0Opsz48'
import IconAddLocationAltFill1Wght500Grad0Opsz48 from '../components/AddLocationAltFill1Wght500Grad0Opsz48'
import IconAddLocationAltFill1Wght600Grad0Opsz48 from '../components/AddLocationAltFill1Wght600Grad0Opsz48'
import IconAddLocationAltFill1Wght700Grad0Opsz48 from '../components/AddLocationAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddLocationAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddLocationAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddLocationAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddLocationAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddLocationAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddLocationAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddLocationAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddLocationAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddLocationAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddLocationAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddLocationAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddLocationAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddLocationAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddLocationAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddLocationAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
