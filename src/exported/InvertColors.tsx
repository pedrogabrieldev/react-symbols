import IconInvertColorsFill0Wght100Grad0Opsz48 from '../components/InvertColorsFill0Wght100Grad0Opsz48'
import IconInvertColorsFill0Wght200Grad0Opsz48 from '../components/InvertColorsFill0Wght200Grad0Opsz48'
import IconInvertColorsFill0Wght300Grad0Opsz48 from '../components/InvertColorsFill0Wght300Grad0Opsz48'
import IconInvertColorsFill0Wght400Grad0Opsz48 from '../components/InvertColorsFill0Wght400Grad0Opsz48'
import IconInvertColorsFill0Wght500Grad0Opsz48 from '../components/InvertColorsFill0Wght500Grad0Opsz48'
import IconInvertColorsFill0Wght600Grad0Opsz48 from '../components/InvertColorsFill0Wght600Grad0Opsz48'
import IconInvertColorsFill0Wght700Grad0Opsz48 from '../components/InvertColorsFill0Wght700Grad0Opsz48'
import IconInvertColorsFill1Wght100Grad0Opsz48 from '../components/InvertColorsFill1Wght100Grad0Opsz48'
import IconInvertColorsFill1Wght200Grad0Opsz48 from '../components/InvertColorsFill1Wght200Grad0Opsz48'
import IconInvertColorsFill1Wght300Grad0Opsz48 from '../components/InvertColorsFill1Wght300Grad0Opsz48'
import IconInvertColorsFill1Wght400Grad0Opsz48 from '../components/InvertColorsFill1Wght400Grad0Opsz48'
import IconInvertColorsFill1Wght500Grad0Opsz48 from '../components/InvertColorsFill1Wght500Grad0Opsz48'
import IconInvertColorsFill1Wght600Grad0Opsz48 from '../components/InvertColorsFill1Wght600Grad0Opsz48'
import IconInvertColorsFill1Wght700Grad0Opsz48 from '../components/InvertColorsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconInvertColors = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconInvertColorsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconInvertColorsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconInvertColorsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconInvertColorsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconInvertColorsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconInvertColorsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconInvertColorsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconInvertColorsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconInvertColorsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconInvertColorsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconInvertColorsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconInvertColorsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconInvertColorsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconInvertColorsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
