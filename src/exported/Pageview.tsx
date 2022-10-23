import IconPageviewFill0Wght100Grad0Opsz48 from '../components/PageviewFill0Wght100Grad0Opsz48'
import IconPageviewFill0Wght200Grad0Opsz48 from '../components/PageviewFill0Wght200Grad0Opsz48'
import IconPageviewFill0Wght300Grad0Opsz48 from '../components/PageviewFill0Wght300Grad0Opsz48'
import IconPageviewFill0Wght400Grad0Opsz48 from '../components/PageviewFill0Wght400Grad0Opsz48'
import IconPageviewFill0Wght500Grad0Opsz48 from '../components/PageviewFill0Wght500Grad0Opsz48'
import IconPageviewFill0Wght600Grad0Opsz48 from '../components/PageviewFill0Wght600Grad0Opsz48'
import IconPageviewFill0Wght700Grad0Opsz48 from '../components/PageviewFill0Wght700Grad0Opsz48'
import IconPageviewFill1Wght100Grad0Opsz48 from '../components/PageviewFill1Wght100Grad0Opsz48'
import IconPageviewFill1Wght200Grad0Opsz48 from '../components/PageviewFill1Wght200Grad0Opsz48'
import IconPageviewFill1Wght300Grad0Opsz48 from '../components/PageviewFill1Wght300Grad0Opsz48'
import IconPageviewFill1Wght400Grad0Opsz48 from '../components/PageviewFill1Wght400Grad0Opsz48'
import IconPageviewFill1Wght500Grad0Opsz48 from '../components/PageviewFill1Wght500Grad0Opsz48'
import IconPageviewFill1Wght600Grad0Opsz48 from '../components/PageviewFill1Wght600Grad0Opsz48'
import IconPageviewFill1Wght700Grad0Opsz48 from '../components/PageviewFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPageview = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPageviewFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPageviewFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPageviewFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPageviewFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPageviewFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPageviewFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPageviewFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPageviewFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPageviewFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPageviewFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPageviewFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPageviewFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPageviewFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPageviewFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
