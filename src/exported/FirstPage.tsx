import IconFirstPageFill0Wght100Grad0Opsz48 from '../components/FirstPageFill0Wght100Grad0Opsz48'
import IconFirstPageFill0Wght200Grad0Opsz48 from '../components/FirstPageFill0Wght200Grad0Opsz48'
import IconFirstPageFill0Wght300Grad0Opsz48 from '../components/FirstPageFill0Wght300Grad0Opsz48'
import IconFirstPageFill0Wght400Grad0Opsz48 from '../components/FirstPageFill0Wght400Grad0Opsz48'
import IconFirstPageFill0Wght500Grad0Opsz48 from '../components/FirstPageFill0Wght500Grad0Opsz48'
import IconFirstPageFill0Wght600Grad0Opsz48 from '../components/FirstPageFill0Wght600Grad0Opsz48'
import IconFirstPageFill0Wght700Grad0Opsz48 from '../components/FirstPageFill0Wght700Grad0Opsz48'
import IconFirstPageFill1Wght100Grad0Opsz48 from '../components/FirstPageFill1Wght100Grad0Opsz48'
import IconFirstPageFill1Wght200Grad0Opsz48 from '../components/FirstPageFill1Wght200Grad0Opsz48'
import IconFirstPageFill1Wght300Grad0Opsz48 from '../components/FirstPageFill1Wght300Grad0Opsz48'
import IconFirstPageFill1Wght400Grad0Opsz48 from '../components/FirstPageFill1Wght400Grad0Opsz48'
import IconFirstPageFill1Wght500Grad0Opsz48 from '../components/FirstPageFill1Wght500Grad0Opsz48'
import IconFirstPageFill1Wght600Grad0Opsz48 from '../components/FirstPageFill1Wght600Grad0Opsz48'
import IconFirstPageFill1Wght700Grad0Opsz48 from '../components/FirstPageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFirstPage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFirstPageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFirstPageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFirstPageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFirstPageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFirstPageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFirstPageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFirstPageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFirstPageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFirstPageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFirstPageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFirstPageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFirstPageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFirstPageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFirstPageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
