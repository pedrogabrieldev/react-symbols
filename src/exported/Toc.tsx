import IconTocFill0Wght100Grad0Opsz48 from '../components/TocFill0Wght100Grad0Opsz48'
import IconTocFill0Wght200Grad0Opsz48 from '../components/TocFill0Wght200Grad0Opsz48'
import IconTocFill0Wght300Grad0Opsz48 from '../components/TocFill0Wght300Grad0Opsz48'
import IconTocFill0Wght400Grad0Opsz48 from '../components/TocFill0Wght400Grad0Opsz48'
import IconTocFill0Wght500Grad0Opsz48 from '../components/TocFill0Wght500Grad0Opsz48'
import IconTocFill0Wght600Grad0Opsz48 from '../components/TocFill0Wght600Grad0Opsz48'
import IconTocFill0Wght700Grad0Opsz48 from '../components/TocFill0Wght700Grad0Opsz48'
import IconTocFill1Wght100Grad0Opsz48 from '../components/TocFill1Wght100Grad0Opsz48'
import IconTocFill1Wght200Grad0Opsz48 from '../components/TocFill1Wght200Grad0Opsz48'
import IconTocFill1Wght300Grad0Opsz48 from '../components/TocFill1Wght300Grad0Opsz48'
import IconTocFill1Wght400Grad0Opsz48 from '../components/TocFill1Wght400Grad0Opsz48'
import IconTocFill1Wght500Grad0Opsz48 from '../components/TocFill1Wght500Grad0Opsz48'
import IconTocFill1Wght600Grad0Opsz48 from '../components/TocFill1Wght600Grad0Opsz48'
import IconTocFill1Wght700Grad0Opsz48 from '../components/TocFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconToc = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTocFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTocFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTocFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTocFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTocFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTocFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTocFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTocFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTocFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTocFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTocFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTocFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTocFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTocFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
