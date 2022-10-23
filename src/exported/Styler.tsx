import IconStylerFill0Wght100Grad0Opsz48 from '../components/StylerFill0Wght100Grad0Opsz48'
import IconStylerFill0Wght200Grad0Opsz48 from '../components/StylerFill0Wght200Grad0Opsz48'
import IconStylerFill0Wght300Grad0Opsz48 from '../components/StylerFill0Wght300Grad0Opsz48'
import IconStylerFill0Wght400Grad0Opsz48 from '../components/StylerFill0Wght400Grad0Opsz48'
import IconStylerFill0Wght500Grad0Opsz48 from '../components/StylerFill0Wght500Grad0Opsz48'
import IconStylerFill0Wght600Grad0Opsz48 from '../components/StylerFill0Wght600Grad0Opsz48'
import IconStylerFill0Wght700Grad0Opsz48 from '../components/StylerFill0Wght700Grad0Opsz48'
import IconStylerFill1Wght100Grad0Opsz48 from '../components/StylerFill1Wght100Grad0Opsz48'
import IconStylerFill1Wght200Grad0Opsz48 from '../components/StylerFill1Wght200Grad0Opsz48'
import IconStylerFill1Wght300Grad0Opsz48 from '../components/StylerFill1Wght300Grad0Opsz48'
import IconStylerFill1Wght400Grad0Opsz48 from '../components/StylerFill1Wght400Grad0Opsz48'
import IconStylerFill1Wght500Grad0Opsz48 from '../components/StylerFill1Wght500Grad0Opsz48'
import IconStylerFill1Wght600Grad0Opsz48 from '../components/StylerFill1Wght600Grad0Opsz48'
import IconStylerFill1Wght700Grad0Opsz48 from '../components/StylerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStyler = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStylerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStylerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStylerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStylerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStylerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStylerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStylerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStylerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStylerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStylerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStylerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStylerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStylerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStylerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
