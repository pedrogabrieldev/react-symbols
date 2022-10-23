import IconWorkHistoryFill0Wght100Grad0Opsz48 from '../components/WorkHistoryFill0Wght100Grad0Opsz48'
import IconWorkHistoryFill0Wght200Grad0Opsz48 from '../components/WorkHistoryFill0Wght200Grad0Opsz48'
import IconWorkHistoryFill0Wght300Grad0Opsz48 from '../components/WorkHistoryFill0Wght300Grad0Opsz48'
import IconWorkHistoryFill0Wght400Grad0Opsz48 from '../components/WorkHistoryFill0Wght400Grad0Opsz48'
import IconWorkHistoryFill0Wght500Grad0Opsz48 from '../components/WorkHistoryFill0Wght500Grad0Opsz48'
import IconWorkHistoryFill0Wght600Grad0Opsz48 from '../components/WorkHistoryFill0Wght600Grad0Opsz48'
import IconWorkHistoryFill0Wght700Grad0Opsz48 from '../components/WorkHistoryFill0Wght700Grad0Opsz48'
import IconWorkHistoryFill1Wght100Grad0Opsz48 from '../components/WorkHistoryFill1Wght100Grad0Opsz48'
import IconWorkHistoryFill1Wght200Grad0Opsz48 from '../components/WorkHistoryFill1Wght200Grad0Opsz48'
import IconWorkHistoryFill1Wght300Grad0Opsz48 from '../components/WorkHistoryFill1Wght300Grad0Opsz48'
import IconWorkHistoryFill1Wght400Grad0Opsz48 from '../components/WorkHistoryFill1Wght400Grad0Opsz48'
import IconWorkHistoryFill1Wght500Grad0Opsz48 from '../components/WorkHistoryFill1Wght500Grad0Opsz48'
import IconWorkHistoryFill1Wght600Grad0Opsz48 from '../components/WorkHistoryFill1Wght600Grad0Opsz48'
import IconWorkHistoryFill1Wght700Grad0Opsz48 from '../components/WorkHistoryFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWorkHistory = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWorkHistoryFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWorkHistoryFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWorkHistoryFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWorkHistoryFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWorkHistoryFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWorkHistoryFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWorkHistoryFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWorkHistoryFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWorkHistoryFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWorkHistoryFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWorkHistoryFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWorkHistoryFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWorkHistoryFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWorkHistoryFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
