import IconEnableFill0Wght100Grad0Opsz48 from '../components/EnableFill0Wght100Grad0Opsz48'
import IconEnableFill0Wght200Grad0Opsz48 from '../components/EnableFill0Wght200Grad0Opsz48'
import IconEnableFill0Wght300Grad0Opsz48 from '../components/EnableFill0Wght300Grad0Opsz48'
import IconEnableFill0Wght400Grad0Opsz48 from '../components/EnableFill0Wght400Grad0Opsz48'
import IconEnableFill0Wght500Grad0Opsz48 from '../components/EnableFill0Wght500Grad0Opsz48'
import IconEnableFill0Wght600Grad0Opsz48 from '../components/EnableFill0Wght600Grad0Opsz48'
import IconEnableFill0Wght700Grad0Opsz48 from '../components/EnableFill0Wght700Grad0Opsz48'
import IconEnableFill1Wght100Grad0Opsz48 from '../components/EnableFill1Wght100Grad0Opsz48'
import IconEnableFill1Wght200Grad0Opsz48 from '../components/EnableFill1Wght200Grad0Opsz48'
import IconEnableFill1Wght300Grad0Opsz48 from '../components/EnableFill1Wght300Grad0Opsz48'
import IconEnableFill1Wght400Grad0Opsz48 from '../components/EnableFill1Wght400Grad0Opsz48'
import IconEnableFill1Wght500Grad0Opsz48 from '../components/EnableFill1Wght500Grad0Opsz48'
import IconEnableFill1Wght600Grad0Opsz48 from '../components/EnableFill1Wght600Grad0Opsz48'
import IconEnableFill1Wght700Grad0Opsz48 from '../components/EnableFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEnable = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEnableFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEnableFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEnableFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEnableFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEnableFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEnableFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEnableFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEnableFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEnableFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEnableFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEnableFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEnableFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEnableFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEnableFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
