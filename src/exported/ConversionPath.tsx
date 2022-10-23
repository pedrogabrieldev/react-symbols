import IconConversionPathFill0Wght100Grad0Opsz48 from '../components/ConversionPathFill0Wght100Grad0Opsz48'
import IconConversionPathFill0Wght200Grad0Opsz48 from '../components/ConversionPathFill0Wght200Grad0Opsz48'
import IconConversionPathFill0Wght300Grad0Opsz48 from '../components/ConversionPathFill0Wght300Grad0Opsz48'
import IconConversionPathFill0Wght400Grad0Opsz48 from '../components/ConversionPathFill0Wght400Grad0Opsz48'
import IconConversionPathFill0Wght500Grad0Opsz48 from '../components/ConversionPathFill0Wght500Grad0Opsz48'
import IconConversionPathFill0Wght600Grad0Opsz48 from '../components/ConversionPathFill0Wght600Grad0Opsz48'
import IconConversionPathFill0Wght700Grad0Opsz48 from '../components/ConversionPathFill0Wght700Grad0Opsz48'
import IconConversionPathFill1Wght100Grad0Opsz48 from '../components/ConversionPathFill1Wght100Grad0Opsz48'
import IconConversionPathFill1Wght200Grad0Opsz48 from '../components/ConversionPathFill1Wght200Grad0Opsz48'
import IconConversionPathFill1Wght300Grad0Opsz48 from '../components/ConversionPathFill1Wght300Grad0Opsz48'
import IconConversionPathFill1Wght400Grad0Opsz48 from '../components/ConversionPathFill1Wght400Grad0Opsz48'
import IconConversionPathFill1Wght500Grad0Opsz48 from '../components/ConversionPathFill1Wght500Grad0Opsz48'
import IconConversionPathFill1Wght600Grad0Opsz48 from '../components/ConversionPathFill1Wght600Grad0Opsz48'
import IconConversionPathFill1Wght700Grad0Opsz48 from '../components/ConversionPathFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconConversionPath = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconConversionPathFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconConversionPathFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconConversionPathFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconConversionPathFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconConversionPathFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconConversionPathFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconConversionPathFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconConversionPathFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconConversionPathFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconConversionPathFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconConversionPathFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconConversionPathFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconConversionPathFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconConversionPathFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
