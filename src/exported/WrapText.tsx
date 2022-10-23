import IconWrapTextFill0Wght100Grad0Opsz48 from '../components/WrapTextFill0Wght100Grad0Opsz48'
import IconWrapTextFill0Wght200Grad0Opsz48 from '../components/WrapTextFill0Wght200Grad0Opsz48'
import IconWrapTextFill0Wght300Grad0Opsz48 from '../components/WrapTextFill0Wght300Grad0Opsz48'
import IconWrapTextFill0Wght400Grad0Opsz48 from '../components/WrapTextFill0Wght400Grad0Opsz48'
import IconWrapTextFill0Wght500Grad0Opsz48 from '../components/WrapTextFill0Wght500Grad0Opsz48'
import IconWrapTextFill0Wght600Grad0Opsz48 from '../components/WrapTextFill0Wght600Grad0Opsz48'
import IconWrapTextFill0Wght700Grad0Opsz48 from '../components/WrapTextFill0Wght700Grad0Opsz48'
import IconWrapTextFill1Wght100Grad0Opsz48 from '../components/WrapTextFill1Wght100Grad0Opsz48'
import IconWrapTextFill1Wght200Grad0Opsz48 from '../components/WrapTextFill1Wght200Grad0Opsz48'
import IconWrapTextFill1Wght300Grad0Opsz48 from '../components/WrapTextFill1Wght300Grad0Opsz48'
import IconWrapTextFill1Wght400Grad0Opsz48 from '../components/WrapTextFill1Wght400Grad0Opsz48'
import IconWrapTextFill1Wght500Grad0Opsz48 from '../components/WrapTextFill1Wght500Grad0Opsz48'
import IconWrapTextFill1Wght600Grad0Opsz48 from '../components/WrapTextFill1Wght600Grad0Opsz48'
import IconWrapTextFill1Wght700Grad0Opsz48 from '../components/WrapTextFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWrapText = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWrapTextFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWrapTextFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWrapTextFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWrapTextFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWrapTextFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWrapTextFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWrapTextFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWrapTextFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWrapTextFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWrapTextFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWrapTextFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWrapTextFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWrapTextFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWrapTextFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
