import IconSuperscriptFill0Wght100Grad0Opsz48 from '../components/SuperscriptFill0Wght100Grad0Opsz48'
import IconSuperscriptFill0Wght200Grad0Opsz48 from '../components/SuperscriptFill0Wght200Grad0Opsz48'
import IconSuperscriptFill0Wght300Grad0Opsz48 from '../components/SuperscriptFill0Wght300Grad0Opsz48'
import IconSuperscriptFill0Wght400Grad0Opsz48 from '../components/SuperscriptFill0Wght400Grad0Opsz48'
import IconSuperscriptFill0Wght500Grad0Opsz48 from '../components/SuperscriptFill0Wght500Grad0Opsz48'
import IconSuperscriptFill0Wght600Grad0Opsz48 from '../components/SuperscriptFill0Wght600Grad0Opsz48'
import IconSuperscriptFill0Wght700Grad0Opsz48 from '../components/SuperscriptFill0Wght700Grad0Opsz48'
import IconSuperscriptFill1Wght100Grad0Opsz48 from '../components/SuperscriptFill1Wght100Grad0Opsz48'
import IconSuperscriptFill1Wght200Grad0Opsz48 from '../components/SuperscriptFill1Wght200Grad0Opsz48'
import IconSuperscriptFill1Wght300Grad0Opsz48 from '../components/SuperscriptFill1Wght300Grad0Opsz48'
import IconSuperscriptFill1Wght400Grad0Opsz48 from '../components/SuperscriptFill1Wght400Grad0Opsz48'
import IconSuperscriptFill1Wght500Grad0Opsz48 from '../components/SuperscriptFill1Wght500Grad0Opsz48'
import IconSuperscriptFill1Wght600Grad0Opsz48 from '../components/SuperscriptFill1Wght600Grad0Opsz48'
import IconSuperscriptFill1Wght700Grad0Opsz48 from '../components/SuperscriptFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSuperscript = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSuperscriptFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSuperscriptFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSuperscriptFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSuperscriptFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSuperscriptFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSuperscriptFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSuperscriptFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSuperscriptFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSuperscriptFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSuperscriptFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSuperscriptFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSuperscriptFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSuperscriptFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSuperscriptFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
