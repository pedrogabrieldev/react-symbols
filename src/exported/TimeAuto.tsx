import IconTimeAutoFill0Wght100Grad0Opsz48 from '../components/TimeAutoFill0Wght100Grad0Opsz48'
import IconTimeAutoFill0Wght200Grad0Opsz48 from '../components/TimeAutoFill0Wght200Grad0Opsz48'
import IconTimeAutoFill0Wght300Grad0Opsz48 from '../components/TimeAutoFill0Wght300Grad0Opsz48'
import IconTimeAutoFill0Wght400Grad0Opsz48 from '../components/TimeAutoFill0Wght400Grad0Opsz48'
import IconTimeAutoFill0Wght500Grad0Opsz48 from '../components/TimeAutoFill0Wght500Grad0Opsz48'
import IconTimeAutoFill0Wght600Grad0Opsz48 from '../components/TimeAutoFill0Wght600Grad0Opsz48'
import IconTimeAutoFill0Wght700Grad0Opsz48 from '../components/TimeAutoFill0Wght700Grad0Opsz48'
import IconTimeAutoFill1Wght100Grad0Opsz48 from '../components/TimeAutoFill1Wght100Grad0Opsz48'
import IconTimeAutoFill1Wght200Grad0Opsz48 from '../components/TimeAutoFill1Wght200Grad0Opsz48'
import IconTimeAutoFill1Wght300Grad0Opsz48 from '../components/TimeAutoFill1Wght300Grad0Opsz48'
import IconTimeAutoFill1Wght400Grad0Opsz48 from '../components/TimeAutoFill1Wght400Grad0Opsz48'
import IconTimeAutoFill1Wght500Grad0Opsz48 from '../components/TimeAutoFill1Wght500Grad0Opsz48'
import IconTimeAutoFill1Wght600Grad0Opsz48 from '../components/TimeAutoFill1Wght600Grad0Opsz48'
import IconTimeAutoFill1Wght700Grad0Opsz48 from '../components/TimeAutoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTimeAuto = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTimeAutoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTimeAutoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTimeAutoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTimeAutoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTimeAutoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTimeAutoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTimeAutoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTimeAutoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTimeAutoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTimeAutoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTimeAutoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTimeAutoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTimeAutoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTimeAutoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
