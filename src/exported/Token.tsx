import IconTokenFill0Wght100Grad0Opsz48 from '../components/TokenFill0Wght100Grad0Opsz48'
import IconTokenFill0Wght200Grad0Opsz48 from '../components/TokenFill0Wght200Grad0Opsz48'
import IconTokenFill0Wght300Grad0Opsz48 from '../components/TokenFill0Wght300Grad0Opsz48'
import IconTokenFill0Wght400Grad0Opsz48 from '../components/TokenFill0Wght400Grad0Opsz48'
import IconTokenFill0Wght500Grad0Opsz48 from '../components/TokenFill0Wght500Grad0Opsz48'
import IconTokenFill0Wght600Grad0Opsz48 from '../components/TokenFill0Wght600Grad0Opsz48'
import IconTokenFill0Wght700Grad0Opsz48 from '../components/TokenFill0Wght700Grad0Opsz48'
import IconTokenFill1Wght100Grad0Opsz48 from '../components/TokenFill1Wght100Grad0Opsz48'
import IconTokenFill1Wght200Grad0Opsz48 from '../components/TokenFill1Wght200Grad0Opsz48'
import IconTokenFill1Wght300Grad0Opsz48 from '../components/TokenFill1Wght300Grad0Opsz48'
import IconTokenFill1Wght400Grad0Opsz48 from '../components/TokenFill1Wght400Grad0Opsz48'
import IconTokenFill1Wght500Grad0Opsz48 from '../components/TokenFill1Wght500Grad0Opsz48'
import IconTokenFill1Wght600Grad0Opsz48 from '../components/TokenFill1Wght600Grad0Opsz48'
import IconTokenFill1Wght700Grad0Opsz48 from '../components/TokenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconToken = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTokenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTokenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTokenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTokenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTokenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTokenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTokenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTokenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTokenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTokenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTokenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTokenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTokenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTokenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
