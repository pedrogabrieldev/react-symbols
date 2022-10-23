import IconRefreshFill0Wght100Grad0Opsz48 from '../components/RefreshFill0Wght100Grad0Opsz48'
import IconRefreshFill0Wght200Grad0Opsz48 from '../components/RefreshFill0Wght200Grad0Opsz48'
import IconRefreshFill0Wght300Grad0Opsz48 from '../components/RefreshFill0Wght300Grad0Opsz48'
import IconRefreshFill0Wght400Grad0Opsz48 from '../components/RefreshFill0Wght400Grad0Opsz48'
import IconRefreshFill0Wght500Grad0Opsz48 from '../components/RefreshFill0Wght500Grad0Opsz48'
import IconRefreshFill0Wght600Grad0Opsz48 from '../components/RefreshFill0Wght600Grad0Opsz48'
import IconRefreshFill0Wght700Grad0Opsz48 from '../components/RefreshFill0Wght700Grad0Opsz48'
import IconRefreshFill1Wght100Grad0Opsz48 from '../components/RefreshFill1Wght100Grad0Opsz48'
import IconRefreshFill1Wght200Grad0Opsz48 from '../components/RefreshFill1Wght200Grad0Opsz48'
import IconRefreshFill1Wght300Grad0Opsz48 from '../components/RefreshFill1Wght300Grad0Opsz48'
import IconRefreshFill1Wght400Grad0Opsz48 from '../components/RefreshFill1Wght400Grad0Opsz48'
import IconRefreshFill1Wght500Grad0Opsz48 from '../components/RefreshFill1Wght500Grad0Opsz48'
import IconRefreshFill1Wght600Grad0Opsz48 from '../components/RefreshFill1Wght600Grad0Opsz48'
import IconRefreshFill1Wght700Grad0Opsz48 from '../components/RefreshFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRefresh = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRefreshFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRefreshFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRefreshFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRefreshFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRefreshFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRefreshFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRefreshFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRefreshFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRefreshFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRefreshFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRefreshFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRefreshFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRefreshFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRefreshFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
