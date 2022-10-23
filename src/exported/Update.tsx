import IconUpdateFill0Wght100Grad0Opsz48 from '../components/UpdateFill0Wght100Grad0Opsz48'
import IconUpdateFill0Wght200Grad0Opsz48 from '../components/UpdateFill0Wght200Grad0Opsz48'
import IconUpdateFill0Wght300Grad0Opsz48 from '../components/UpdateFill0Wght300Grad0Opsz48'
import IconUpdateFill0Wght400Grad0Opsz48 from '../components/UpdateFill0Wght400Grad0Opsz48'
import IconUpdateFill0Wght500Grad0Opsz48 from '../components/UpdateFill0Wght500Grad0Opsz48'
import IconUpdateFill0Wght600Grad0Opsz48 from '../components/UpdateFill0Wght600Grad0Opsz48'
import IconUpdateFill0Wght700Grad0Opsz48 from '../components/UpdateFill0Wght700Grad0Opsz48'
import IconUpdateFill1Wght100Grad0Opsz48 from '../components/UpdateFill1Wght100Grad0Opsz48'
import IconUpdateFill1Wght200Grad0Opsz48 from '../components/UpdateFill1Wght200Grad0Opsz48'
import IconUpdateFill1Wght300Grad0Opsz48 from '../components/UpdateFill1Wght300Grad0Opsz48'
import IconUpdateFill1Wght400Grad0Opsz48 from '../components/UpdateFill1Wght400Grad0Opsz48'
import IconUpdateFill1Wght500Grad0Opsz48 from '../components/UpdateFill1Wght500Grad0Opsz48'
import IconUpdateFill1Wght600Grad0Opsz48 from '../components/UpdateFill1Wght600Grad0Opsz48'
import IconUpdateFill1Wght700Grad0Opsz48 from '../components/UpdateFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconUpdate = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconUpdateFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconUpdateFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconUpdateFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconUpdateFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconUpdateFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconUpdateFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconUpdateFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconUpdateFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconUpdateFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconUpdateFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconUpdateFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconUpdateFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconUpdateFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconUpdateFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
