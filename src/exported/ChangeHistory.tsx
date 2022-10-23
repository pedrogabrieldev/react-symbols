import IconChangeHistoryFill0Wght100Grad0Opsz48 from '../components/ChangeHistoryFill0Wght100Grad0Opsz48'
import IconChangeHistoryFill0Wght200Grad0Opsz48 from '../components/ChangeHistoryFill0Wght200Grad0Opsz48'
import IconChangeHistoryFill0Wght300Grad0Opsz48 from '../components/ChangeHistoryFill0Wght300Grad0Opsz48'
import IconChangeHistoryFill0Wght400Grad0Opsz48 from '../components/ChangeHistoryFill0Wght400Grad0Opsz48'
import IconChangeHistoryFill0Wght500Grad0Opsz48 from '../components/ChangeHistoryFill0Wght500Grad0Opsz48'
import IconChangeHistoryFill0Wght600Grad0Opsz48 from '../components/ChangeHistoryFill0Wght600Grad0Opsz48'
import IconChangeHistoryFill0Wght700Grad0Opsz48 from '../components/ChangeHistoryFill0Wght700Grad0Opsz48'
import IconChangeHistoryFill1Wght100Grad0Opsz48 from '../components/ChangeHistoryFill1Wght100Grad0Opsz48'
import IconChangeHistoryFill1Wght200Grad0Opsz48 from '../components/ChangeHistoryFill1Wght200Grad0Opsz48'
import IconChangeHistoryFill1Wght300Grad0Opsz48 from '../components/ChangeHistoryFill1Wght300Grad0Opsz48'
import IconChangeHistoryFill1Wght400Grad0Opsz48 from '../components/ChangeHistoryFill1Wght400Grad0Opsz48'
import IconChangeHistoryFill1Wght500Grad0Opsz48 from '../components/ChangeHistoryFill1Wght500Grad0Opsz48'
import IconChangeHistoryFill1Wght600Grad0Opsz48 from '../components/ChangeHistoryFill1Wght600Grad0Opsz48'
import IconChangeHistoryFill1Wght700Grad0Opsz48 from '../components/ChangeHistoryFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconChangeHistory = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconChangeHistoryFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconChangeHistoryFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconChangeHistoryFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconChangeHistoryFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconChangeHistoryFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconChangeHistoryFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconChangeHistoryFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconChangeHistoryFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconChangeHistoryFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconChangeHistoryFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconChangeHistoryFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconChangeHistoryFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconChangeHistoryFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconChangeHistoryFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
