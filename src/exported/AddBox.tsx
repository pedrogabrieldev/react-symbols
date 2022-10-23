import IconAddBoxFill0Wght100Grad0Opsz48 from '../components/AddBoxFill0Wght100Grad0Opsz48'
import IconAddBoxFill0Wght200Grad0Opsz48 from '../components/AddBoxFill0Wght200Grad0Opsz48'
import IconAddBoxFill0Wght300Grad0Opsz48 from '../components/AddBoxFill0Wght300Grad0Opsz48'
import IconAddBoxFill0Wght400Grad0Opsz48 from '../components/AddBoxFill0Wght400Grad0Opsz48'
import IconAddBoxFill0Wght500Grad0Opsz48 from '../components/AddBoxFill0Wght500Grad0Opsz48'
import IconAddBoxFill0Wght600Grad0Opsz48 from '../components/AddBoxFill0Wght600Grad0Opsz48'
import IconAddBoxFill0Wght700Grad0Opsz48 from '../components/AddBoxFill0Wght700Grad0Opsz48'
import IconAddBoxFill1Wght100Grad0Opsz48 from '../components/AddBoxFill1Wght100Grad0Opsz48'
import IconAddBoxFill1Wght200Grad0Opsz48 from '../components/AddBoxFill1Wght200Grad0Opsz48'
import IconAddBoxFill1Wght300Grad0Opsz48 from '../components/AddBoxFill1Wght300Grad0Opsz48'
import IconAddBoxFill1Wght400Grad0Opsz48 from '../components/AddBoxFill1Wght400Grad0Opsz48'
import IconAddBoxFill1Wght500Grad0Opsz48 from '../components/AddBoxFill1Wght500Grad0Opsz48'
import IconAddBoxFill1Wght600Grad0Opsz48 from '../components/AddBoxFill1Wght600Grad0Opsz48'
import IconAddBoxFill1Wght700Grad0Opsz48 from '../components/AddBoxFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddBox = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddBoxFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddBoxFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddBoxFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddBoxFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddBoxFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddBoxFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddBoxFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddBoxFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddBoxFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddBoxFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddBoxFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddBoxFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddBoxFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddBoxFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
