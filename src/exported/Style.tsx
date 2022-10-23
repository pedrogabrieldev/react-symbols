import IconStyleFill0Wght100Grad0Opsz48 from '../components/StyleFill0Wght100Grad0Opsz48'
import IconStyleFill0Wght200Grad0Opsz48 from '../components/StyleFill0Wght200Grad0Opsz48'
import IconStyleFill0Wght300Grad0Opsz48 from '../components/StyleFill0Wght300Grad0Opsz48'
import IconStyleFill0Wght400Grad0Opsz48 from '../components/StyleFill0Wght400Grad0Opsz48'
import IconStyleFill0Wght500Grad0Opsz48 from '../components/StyleFill0Wght500Grad0Opsz48'
import IconStyleFill0Wght600Grad0Opsz48 from '../components/StyleFill0Wght600Grad0Opsz48'
import IconStyleFill0Wght700Grad0Opsz48 from '../components/StyleFill0Wght700Grad0Opsz48'
import IconStyleFill1Wght100Grad0Opsz48 from '../components/StyleFill1Wght100Grad0Opsz48'
import IconStyleFill1Wght200Grad0Opsz48 from '../components/StyleFill1Wght200Grad0Opsz48'
import IconStyleFill1Wght300Grad0Opsz48 from '../components/StyleFill1Wght300Grad0Opsz48'
import IconStyleFill1Wght400Grad0Opsz48 from '../components/StyleFill1Wght400Grad0Opsz48'
import IconStyleFill1Wght500Grad0Opsz48 from '../components/StyleFill1Wght500Grad0Opsz48'
import IconStyleFill1Wght600Grad0Opsz48 from '../components/StyleFill1Wght600Grad0Opsz48'
import IconStyleFill1Wght700Grad0Opsz48 from '../components/StyleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStyle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStyleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStyleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStyleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStyleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStyleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStyleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStyleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStyleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStyleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStyleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStyleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStyleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStyleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStyleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
