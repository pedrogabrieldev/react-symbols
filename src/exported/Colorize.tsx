import IconColorizeFill0Wght100Grad0Opsz48 from '../components/ColorizeFill0Wght100Grad0Opsz48'
import IconColorizeFill0Wght200Grad0Opsz48 from '../components/ColorizeFill0Wght200Grad0Opsz48'
import IconColorizeFill0Wght300Grad0Opsz48 from '../components/ColorizeFill0Wght300Grad0Opsz48'
import IconColorizeFill0Wght400Grad0Opsz48 from '../components/ColorizeFill0Wght400Grad0Opsz48'
import IconColorizeFill0Wght500Grad0Opsz48 from '../components/ColorizeFill0Wght500Grad0Opsz48'
import IconColorizeFill0Wght600Grad0Opsz48 from '../components/ColorizeFill0Wght600Grad0Opsz48'
import IconColorizeFill0Wght700Grad0Opsz48 from '../components/ColorizeFill0Wght700Grad0Opsz48'
import IconColorizeFill1Wght100Grad0Opsz48 from '../components/ColorizeFill1Wght100Grad0Opsz48'
import IconColorizeFill1Wght200Grad0Opsz48 from '../components/ColorizeFill1Wght200Grad0Opsz48'
import IconColorizeFill1Wght300Grad0Opsz48 from '../components/ColorizeFill1Wght300Grad0Opsz48'
import IconColorizeFill1Wght400Grad0Opsz48 from '../components/ColorizeFill1Wght400Grad0Opsz48'
import IconColorizeFill1Wght500Grad0Opsz48 from '../components/ColorizeFill1Wght500Grad0Opsz48'
import IconColorizeFill1Wght600Grad0Opsz48 from '../components/ColorizeFill1Wght600Grad0Opsz48'
import IconColorizeFill1Wght700Grad0Opsz48 from '../components/ColorizeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconColorize = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconColorizeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconColorizeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconColorizeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconColorizeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconColorizeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconColorizeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconColorizeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconColorizeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconColorizeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconColorizeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconColorizeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconColorizeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconColorizeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconColorizeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
