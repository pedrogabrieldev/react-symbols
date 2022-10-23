import IconBlanketFill0Wght100Grad0Opsz48 from '../components/BlanketFill0Wght100Grad0Opsz48'
import IconBlanketFill0Wght200Grad0Opsz48 from '../components/BlanketFill0Wght200Grad0Opsz48'
import IconBlanketFill0Wght300Grad0Opsz48 from '../components/BlanketFill0Wght300Grad0Opsz48'
import IconBlanketFill0Wght400Grad0Opsz48 from '../components/BlanketFill0Wght400Grad0Opsz48'
import IconBlanketFill0Wght500Grad0Opsz48 from '../components/BlanketFill0Wght500Grad0Opsz48'
import IconBlanketFill0Wght600Grad0Opsz48 from '../components/BlanketFill0Wght600Grad0Opsz48'
import IconBlanketFill0Wght700Grad0Opsz48 from '../components/BlanketFill0Wght700Grad0Opsz48'
import IconBlanketFill1Wght100Grad0Opsz48 from '../components/BlanketFill1Wght100Grad0Opsz48'
import IconBlanketFill1Wght200Grad0Opsz48 from '../components/BlanketFill1Wght200Grad0Opsz48'
import IconBlanketFill1Wght300Grad0Opsz48 from '../components/BlanketFill1Wght300Grad0Opsz48'
import IconBlanketFill1Wght400Grad0Opsz48 from '../components/BlanketFill1Wght400Grad0Opsz48'
import IconBlanketFill1Wght500Grad0Opsz48 from '../components/BlanketFill1Wght500Grad0Opsz48'
import IconBlanketFill1Wght600Grad0Opsz48 from '../components/BlanketFill1Wght600Grad0Opsz48'
import IconBlanketFill1Wght700Grad0Opsz48 from '../components/BlanketFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBlanket = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBlanketFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBlanketFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBlanketFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBlanketFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBlanketFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBlanketFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBlanketFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBlanketFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBlanketFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBlanketFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBlanketFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBlanketFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBlanketFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBlanketFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
