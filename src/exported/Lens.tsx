import IconLensFill0Wght100Grad0Opsz48 from '../components/LensFill0Wght100Grad0Opsz48'
import IconLensFill0Wght200Grad0Opsz48 from '../components/LensFill0Wght200Grad0Opsz48'
import IconLensFill0Wght300Grad0Opsz48 from '../components/LensFill0Wght300Grad0Opsz48'
import IconLensFill0Wght400Grad0Opsz48 from '../components/LensFill0Wght400Grad0Opsz48'
import IconLensFill0Wght500Grad0Opsz48 from '../components/LensFill0Wght500Grad0Opsz48'
import IconLensFill0Wght600Grad0Opsz48 from '../components/LensFill0Wght600Grad0Opsz48'
import IconLensFill0Wght700Grad0Opsz48 from '../components/LensFill0Wght700Grad0Opsz48'
import IconLensFill1Wght100Grad0Opsz48 from '../components/LensFill1Wght100Grad0Opsz48'
import IconLensFill1Wght200Grad0Opsz48 from '../components/LensFill1Wght200Grad0Opsz48'
import IconLensFill1Wght300Grad0Opsz48 from '../components/LensFill1Wght300Grad0Opsz48'
import IconLensFill1Wght400Grad0Opsz48 from '../components/LensFill1Wght400Grad0Opsz48'
import IconLensFill1Wght500Grad0Opsz48 from '../components/LensFill1Wght500Grad0Opsz48'
import IconLensFill1Wght600Grad0Opsz48 from '../components/LensFill1Wght600Grad0Opsz48'
import IconLensFill1Wght700Grad0Opsz48 from '../components/LensFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLens = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLensFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLensFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLensFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLensFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLensFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLensFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLensFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLensFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLensFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLensFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLensFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLensFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLensFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLensFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
