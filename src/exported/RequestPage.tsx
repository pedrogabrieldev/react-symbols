import IconRequestPageFill0Wght100Grad0Opsz48 from '../components/RequestPageFill0Wght100Grad0Opsz48'
import IconRequestPageFill0Wght200Grad0Opsz48 from '../components/RequestPageFill0Wght200Grad0Opsz48'
import IconRequestPageFill0Wght300Grad0Opsz48 from '../components/RequestPageFill0Wght300Grad0Opsz48'
import IconRequestPageFill0Wght400Grad0Opsz48 from '../components/RequestPageFill0Wght400Grad0Opsz48'
import IconRequestPageFill0Wght500Grad0Opsz48 from '../components/RequestPageFill0Wght500Grad0Opsz48'
import IconRequestPageFill0Wght600Grad0Opsz48 from '../components/RequestPageFill0Wght600Grad0Opsz48'
import IconRequestPageFill0Wght700Grad0Opsz48 from '../components/RequestPageFill0Wght700Grad0Opsz48'
import IconRequestPageFill1Wght100Grad0Opsz48 from '../components/RequestPageFill1Wght100Grad0Opsz48'
import IconRequestPageFill1Wght200Grad0Opsz48 from '../components/RequestPageFill1Wght200Grad0Opsz48'
import IconRequestPageFill1Wght300Grad0Opsz48 from '../components/RequestPageFill1Wght300Grad0Opsz48'
import IconRequestPageFill1Wght400Grad0Opsz48 from '../components/RequestPageFill1Wght400Grad0Opsz48'
import IconRequestPageFill1Wght500Grad0Opsz48 from '../components/RequestPageFill1Wght500Grad0Opsz48'
import IconRequestPageFill1Wght600Grad0Opsz48 from '../components/RequestPageFill1Wght600Grad0Opsz48'
import IconRequestPageFill1Wght700Grad0Opsz48 from '../components/RequestPageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRequestPage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRequestPageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRequestPageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRequestPageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRequestPageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRequestPageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRequestPageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRequestPageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRequestPageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRequestPageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRequestPageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRequestPageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRequestPageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRequestPageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRequestPageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
