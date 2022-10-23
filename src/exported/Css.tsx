import IconCssFill0Wght100Grad0Opsz48 from '../components/CssFill0Wght100Grad0Opsz48'
import IconCssFill0Wght200Grad0Opsz48 from '../components/CssFill0Wght200Grad0Opsz48'
import IconCssFill0Wght300Grad0Opsz48 from '../components/CssFill0Wght300Grad0Opsz48'
import IconCssFill0Wght400Grad0Opsz48 from '../components/CssFill0Wght400Grad0Opsz48'
import IconCssFill0Wght500Grad0Opsz48 from '../components/CssFill0Wght500Grad0Opsz48'
import IconCssFill0Wght600Grad0Opsz48 from '../components/CssFill0Wght600Grad0Opsz48'
import IconCssFill0Wght700Grad0Opsz48 from '../components/CssFill0Wght700Grad0Opsz48'
import IconCssFill1Wght100Grad0Opsz48 from '../components/CssFill1Wght100Grad0Opsz48'
import IconCssFill1Wght200Grad0Opsz48 from '../components/CssFill1Wght200Grad0Opsz48'
import IconCssFill1Wght300Grad0Opsz48 from '../components/CssFill1Wght300Grad0Opsz48'
import IconCssFill1Wght400Grad0Opsz48 from '../components/CssFill1Wght400Grad0Opsz48'
import IconCssFill1Wght500Grad0Opsz48 from '../components/CssFill1Wght500Grad0Opsz48'
import IconCssFill1Wght600Grad0Opsz48 from '../components/CssFill1Wght600Grad0Opsz48'
import IconCssFill1Wght700Grad0Opsz48 from '../components/CssFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCss = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCssFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCssFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCssFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCssFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCssFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCssFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCssFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCssFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCssFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCssFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCssFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCssFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCssFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCssFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
