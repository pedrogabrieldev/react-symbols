import IconUpdateDisabledFill0Wght100Grad0Opsz48 from '../components/UpdateDisabledFill0Wght100Grad0Opsz48'
import IconUpdateDisabledFill0Wght200Grad0Opsz48 from '../components/UpdateDisabledFill0Wght200Grad0Opsz48'
import IconUpdateDisabledFill0Wght300Grad0Opsz48 from '../components/UpdateDisabledFill0Wght300Grad0Opsz48'
import IconUpdateDisabledFill0Wght400Grad0Opsz48 from '../components/UpdateDisabledFill0Wght400Grad0Opsz48'
import IconUpdateDisabledFill0Wght500Grad0Opsz48 from '../components/UpdateDisabledFill0Wght500Grad0Opsz48'
import IconUpdateDisabledFill0Wght600Grad0Opsz48 from '../components/UpdateDisabledFill0Wght600Grad0Opsz48'
import IconUpdateDisabledFill0Wght700Grad0Opsz48 from '../components/UpdateDisabledFill0Wght700Grad0Opsz48'
import IconUpdateDisabledFill1Wght100Grad0Opsz48 from '../components/UpdateDisabledFill1Wght100Grad0Opsz48'
import IconUpdateDisabledFill1Wght200Grad0Opsz48 from '../components/UpdateDisabledFill1Wght200Grad0Opsz48'
import IconUpdateDisabledFill1Wght300Grad0Opsz48 from '../components/UpdateDisabledFill1Wght300Grad0Opsz48'
import IconUpdateDisabledFill1Wght400Grad0Opsz48 from '../components/UpdateDisabledFill1Wght400Grad0Opsz48'
import IconUpdateDisabledFill1Wght500Grad0Opsz48 from '../components/UpdateDisabledFill1Wght500Grad0Opsz48'
import IconUpdateDisabledFill1Wght600Grad0Opsz48 from '../components/UpdateDisabledFill1Wght600Grad0Opsz48'
import IconUpdateDisabledFill1Wght700Grad0Opsz48 from '../components/UpdateDisabledFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconUpdateDisabled = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconUpdateDisabledFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconUpdateDisabledFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconUpdateDisabledFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconUpdateDisabledFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconUpdateDisabledFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconUpdateDisabledFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconUpdateDisabledFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconUpdateDisabledFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconUpdateDisabledFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconUpdateDisabledFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconUpdateDisabledFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconUpdateDisabledFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconUpdateDisabledFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconUpdateDisabledFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
