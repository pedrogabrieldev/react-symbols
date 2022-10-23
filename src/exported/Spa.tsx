import IconSpaFill0Wght100Grad0Opsz48 from '../components/SpaFill0Wght100Grad0Opsz48'
import IconSpaFill0Wght200Grad0Opsz48 from '../components/SpaFill0Wght200Grad0Opsz48'
import IconSpaFill0Wght300Grad0Opsz48 from '../components/SpaFill0Wght300Grad0Opsz48'
import IconSpaFill0Wght400Grad0Opsz48 from '../components/SpaFill0Wght400Grad0Opsz48'
import IconSpaFill0Wght500Grad0Opsz48 from '../components/SpaFill0Wght500Grad0Opsz48'
import IconSpaFill0Wght600Grad0Opsz48 from '../components/SpaFill0Wght600Grad0Opsz48'
import IconSpaFill0Wght700Grad0Opsz48 from '../components/SpaFill0Wght700Grad0Opsz48'
import IconSpaFill1Wght100Grad0Opsz48 from '../components/SpaFill1Wght100Grad0Opsz48'
import IconSpaFill1Wght200Grad0Opsz48 from '../components/SpaFill1Wght200Grad0Opsz48'
import IconSpaFill1Wght300Grad0Opsz48 from '../components/SpaFill1Wght300Grad0Opsz48'
import IconSpaFill1Wght400Grad0Opsz48 from '../components/SpaFill1Wght400Grad0Opsz48'
import IconSpaFill1Wght500Grad0Opsz48 from '../components/SpaFill1Wght500Grad0Opsz48'
import IconSpaFill1Wght600Grad0Opsz48 from '../components/SpaFill1Wght600Grad0Opsz48'
import IconSpaFill1Wght700Grad0Opsz48 from '../components/SpaFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSpa = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSpaFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSpaFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSpaFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSpaFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSpaFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSpaFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSpaFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSpaFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSpaFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSpaFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSpaFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSpaFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSpaFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSpaFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
