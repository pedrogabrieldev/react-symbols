import IconExpandContentFill0Wght100Grad0Opsz48 from '../components/ExpandContentFill0Wght100Grad0Opsz48'
import IconExpandContentFill0Wght200Grad0Opsz48 from '../components/ExpandContentFill0Wght200Grad0Opsz48'
import IconExpandContentFill0Wght300Grad0Opsz48 from '../components/ExpandContentFill0Wght300Grad0Opsz48'
import IconExpandContentFill0Wght400Grad0Opsz48 from '../components/ExpandContentFill0Wght400Grad0Opsz48'
import IconExpandContentFill0Wght500Grad0Opsz48 from '../components/ExpandContentFill0Wght500Grad0Opsz48'
import IconExpandContentFill0Wght600Grad0Opsz48 from '../components/ExpandContentFill0Wght600Grad0Opsz48'
import IconExpandContentFill0Wght700Grad0Opsz48 from '../components/ExpandContentFill0Wght700Grad0Opsz48'
import IconExpandContentFill1Wght100Grad0Opsz48 from '../components/ExpandContentFill1Wght100Grad0Opsz48'
import IconExpandContentFill1Wght200Grad0Opsz48 from '../components/ExpandContentFill1Wght200Grad0Opsz48'
import IconExpandContentFill1Wght300Grad0Opsz48 from '../components/ExpandContentFill1Wght300Grad0Opsz48'
import IconExpandContentFill1Wght400Grad0Opsz48 from '../components/ExpandContentFill1Wght400Grad0Opsz48'
import IconExpandContentFill1Wght500Grad0Opsz48 from '../components/ExpandContentFill1Wght500Grad0Opsz48'
import IconExpandContentFill1Wght600Grad0Opsz48 from '../components/ExpandContentFill1Wght600Grad0Opsz48'
import IconExpandContentFill1Wght700Grad0Opsz48 from '../components/ExpandContentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconExpandContent = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconExpandContentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconExpandContentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconExpandContentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconExpandContentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconExpandContentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconExpandContentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconExpandContentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconExpandContentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconExpandContentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconExpandContentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconExpandContentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconExpandContentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconExpandContentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconExpandContentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
