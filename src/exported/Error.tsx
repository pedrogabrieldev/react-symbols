import IconErrorFill0Wght100Grad0Opsz48 from '../components/ErrorFill0Wght100Grad0Opsz48'
import IconErrorFill0Wght200Grad0Opsz48 from '../components/ErrorFill0Wght200Grad0Opsz48'
import IconErrorFill0Wght300Grad0Opsz48 from '../components/ErrorFill0Wght300Grad0Opsz48'
import IconErrorFill0Wght400Grad0Opsz48 from '../components/ErrorFill0Wght400Grad0Opsz48'
import IconErrorFill0Wght500Grad0Opsz48 from '../components/ErrorFill0Wght500Grad0Opsz48'
import IconErrorFill0Wght600Grad0Opsz48 from '../components/ErrorFill0Wght600Grad0Opsz48'
import IconErrorFill0Wght700Grad0Opsz48 from '../components/ErrorFill0Wght700Grad0Opsz48'
import IconErrorFill1Wght100Grad0Opsz48 from '../components/ErrorFill1Wght100Grad0Opsz48'
import IconErrorFill1Wght200Grad0Opsz48 from '../components/ErrorFill1Wght200Grad0Opsz48'
import IconErrorFill1Wght300Grad0Opsz48 from '../components/ErrorFill1Wght300Grad0Opsz48'
import IconErrorFill1Wght400Grad0Opsz48 from '../components/ErrorFill1Wght400Grad0Opsz48'
import IconErrorFill1Wght500Grad0Opsz48 from '../components/ErrorFill1Wght500Grad0Opsz48'
import IconErrorFill1Wght600Grad0Opsz48 from '../components/ErrorFill1Wght600Grad0Opsz48'
import IconErrorFill1Wght700Grad0Opsz48 from '../components/ErrorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconError = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconErrorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconErrorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconErrorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconErrorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconErrorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconErrorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconErrorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconErrorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconErrorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconErrorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconErrorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconErrorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconErrorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconErrorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
