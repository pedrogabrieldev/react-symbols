import IconNoFlashFill0Wght100Grad0Opsz48 from '../components/NoFlashFill0Wght100Grad0Opsz48'
import IconNoFlashFill0Wght200Grad0Opsz48 from '../components/NoFlashFill0Wght200Grad0Opsz48'
import IconNoFlashFill0Wght300Grad0Opsz48 from '../components/NoFlashFill0Wght300Grad0Opsz48'
import IconNoFlashFill0Wght400Grad0Opsz48 from '../components/NoFlashFill0Wght400Grad0Opsz48'
import IconNoFlashFill0Wght500Grad0Opsz48 from '../components/NoFlashFill0Wght500Grad0Opsz48'
import IconNoFlashFill0Wght600Grad0Opsz48 from '../components/NoFlashFill0Wght600Grad0Opsz48'
import IconNoFlashFill0Wght700Grad0Opsz48 from '../components/NoFlashFill0Wght700Grad0Opsz48'
import IconNoFlashFill1Wght100Grad0Opsz48 from '../components/NoFlashFill1Wght100Grad0Opsz48'
import IconNoFlashFill1Wght200Grad0Opsz48 from '../components/NoFlashFill1Wght200Grad0Opsz48'
import IconNoFlashFill1Wght300Grad0Opsz48 from '../components/NoFlashFill1Wght300Grad0Opsz48'
import IconNoFlashFill1Wght400Grad0Opsz48 from '../components/NoFlashFill1Wght400Grad0Opsz48'
import IconNoFlashFill1Wght500Grad0Opsz48 from '../components/NoFlashFill1Wght500Grad0Opsz48'
import IconNoFlashFill1Wght600Grad0Opsz48 from '../components/NoFlashFill1Wght600Grad0Opsz48'
import IconNoFlashFill1Wght700Grad0Opsz48 from '../components/NoFlashFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNoFlash = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNoFlashFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNoFlashFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNoFlashFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNoFlashFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNoFlashFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNoFlashFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNoFlashFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNoFlashFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNoFlashFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNoFlashFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNoFlashFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNoFlashFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNoFlashFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNoFlashFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
