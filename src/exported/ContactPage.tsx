import IconContactPageFill0Wght100Grad0Opsz48 from '../components/ContactPageFill0Wght100Grad0Opsz48'
import IconContactPageFill0Wght200Grad0Opsz48 from '../components/ContactPageFill0Wght200Grad0Opsz48'
import IconContactPageFill0Wght300Grad0Opsz48 from '../components/ContactPageFill0Wght300Grad0Opsz48'
import IconContactPageFill0Wght400Grad0Opsz48 from '../components/ContactPageFill0Wght400Grad0Opsz48'
import IconContactPageFill0Wght500Grad0Opsz48 from '../components/ContactPageFill0Wght500Grad0Opsz48'
import IconContactPageFill0Wght600Grad0Opsz48 from '../components/ContactPageFill0Wght600Grad0Opsz48'
import IconContactPageFill0Wght700Grad0Opsz48 from '../components/ContactPageFill0Wght700Grad0Opsz48'
import IconContactPageFill1Wght100Grad0Opsz48 from '../components/ContactPageFill1Wght100Grad0Opsz48'
import IconContactPageFill1Wght200Grad0Opsz48 from '../components/ContactPageFill1Wght200Grad0Opsz48'
import IconContactPageFill1Wght300Grad0Opsz48 from '../components/ContactPageFill1Wght300Grad0Opsz48'
import IconContactPageFill1Wght400Grad0Opsz48 from '../components/ContactPageFill1Wght400Grad0Opsz48'
import IconContactPageFill1Wght500Grad0Opsz48 from '../components/ContactPageFill1Wght500Grad0Opsz48'
import IconContactPageFill1Wght600Grad0Opsz48 from '../components/ContactPageFill1Wght600Grad0Opsz48'
import IconContactPageFill1Wght700Grad0Opsz48 from '../components/ContactPageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconContactPage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconContactPageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconContactPageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconContactPageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconContactPageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconContactPageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconContactPageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconContactPageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconContactPageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconContactPageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconContactPageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconContactPageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconContactPageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconContactPageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconContactPageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
