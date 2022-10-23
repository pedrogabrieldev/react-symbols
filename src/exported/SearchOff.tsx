import IconSearchOffFill0Wght100Grad0Opsz48 from '../components/SearchOffFill0Wght100Grad0Opsz48'
import IconSearchOffFill0Wght200Grad0Opsz48 from '../components/SearchOffFill0Wght200Grad0Opsz48'
import IconSearchOffFill0Wght300Grad0Opsz48 from '../components/SearchOffFill0Wght300Grad0Opsz48'
import IconSearchOffFill0Wght400Grad0Opsz48 from '../components/SearchOffFill0Wght400Grad0Opsz48'
import IconSearchOffFill0Wght500Grad0Opsz48 from '../components/SearchOffFill0Wght500Grad0Opsz48'
import IconSearchOffFill0Wght600Grad0Opsz48 from '../components/SearchOffFill0Wght600Grad0Opsz48'
import IconSearchOffFill0Wght700Grad0Opsz48 from '../components/SearchOffFill0Wght700Grad0Opsz48'
import IconSearchOffFill1Wght100Grad0Opsz48 from '../components/SearchOffFill1Wght100Grad0Opsz48'
import IconSearchOffFill1Wght200Grad0Opsz48 from '../components/SearchOffFill1Wght200Grad0Opsz48'
import IconSearchOffFill1Wght300Grad0Opsz48 from '../components/SearchOffFill1Wght300Grad0Opsz48'
import IconSearchOffFill1Wght400Grad0Opsz48 from '../components/SearchOffFill1Wght400Grad0Opsz48'
import IconSearchOffFill1Wght500Grad0Opsz48 from '../components/SearchOffFill1Wght500Grad0Opsz48'
import IconSearchOffFill1Wght600Grad0Opsz48 from '../components/SearchOffFill1Wght600Grad0Opsz48'
import IconSearchOffFill1Wght700Grad0Opsz48 from '../components/SearchOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSearchOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSearchOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSearchOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSearchOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSearchOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSearchOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSearchOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSearchOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSearchOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSearchOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSearchOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSearchOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSearchOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSearchOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSearchOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
