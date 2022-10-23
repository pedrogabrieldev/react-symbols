import IconAutoFixFill0Wght100Grad0Opsz48 from '../components/AutoFixFill0Wght100Grad0Opsz48'
import IconAutoFixFill0Wght200Grad0Opsz48 from '../components/AutoFixFill0Wght200Grad0Opsz48'
import IconAutoFixFill0Wght300Grad0Opsz48 from '../components/AutoFixFill0Wght300Grad0Opsz48'
import IconAutoFixFill0Wght400Grad0Opsz48 from '../components/AutoFixFill0Wght400Grad0Opsz48'
import IconAutoFixFill0Wght500Grad0Opsz48 from '../components/AutoFixFill0Wght500Grad0Opsz48'
import IconAutoFixFill0Wght600Grad0Opsz48 from '../components/AutoFixFill0Wght600Grad0Opsz48'
import IconAutoFixFill0Wght700Grad0Opsz48 from '../components/AutoFixFill0Wght700Grad0Opsz48'
import IconAutoFixFill1Wght100Grad0Opsz48 from '../components/AutoFixFill1Wght100Grad0Opsz48'
import IconAutoFixFill1Wght200Grad0Opsz48 from '../components/AutoFixFill1Wght200Grad0Opsz48'
import IconAutoFixFill1Wght300Grad0Opsz48 from '../components/AutoFixFill1Wght300Grad0Opsz48'
import IconAutoFixFill1Wght400Grad0Opsz48 from '../components/AutoFixFill1Wght400Grad0Opsz48'
import IconAutoFixFill1Wght500Grad0Opsz48 from '../components/AutoFixFill1Wght500Grad0Opsz48'
import IconAutoFixFill1Wght600Grad0Opsz48 from '../components/AutoFixFill1Wght600Grad0Opsz48'
import IconAutoFixFill1Wght700Grad0Opsz48 from '../components/AutoFixFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAutoFix = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAutoFixFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAutoFixFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAutoFixFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAutoFixFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAutoFixFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAutoFixFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAutoFixFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAutoFixFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAutoFixFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAutoFixFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAutoFixFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAutoFixFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAutoFixFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAutoFixFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
