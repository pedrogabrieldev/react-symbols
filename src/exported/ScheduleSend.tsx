import IconScheduleSendFill0Wght100Grad0Opsz48 from '../components/ScheduleSendFill0Wght100Grad0Opsz48'
import IconScheduleSendFill0Wght200Grad0Opsz48 from '../components/ScheduleSendFill0Wght200Grad0Opsz48'
import IconScheduleSendFill0Wght300Grad0Opsz48 from '../components/ScheduleSendFill0Wght300Grad0Opsz48'
import IconScheduleSendFill0Wght400Grad0Opsz48 from '../components/ScheduleSendFill0Wght400Grad0Opsz48'
import IconScheduleSendFill0Wght500Grad0Opsz48 from '../components/ScheduleSendFill0Wght500Grad0Opsz48'
import IconScheduleSendFill0Wght600Grad0Opsz48 from '../components/ScheduleSendFill0Wght600Grad0Opsz48'
import IconScheduleSendFill0Wght700Grad0Opsz48 from '../components/ScheduleSendFill0Wght700Grad0Opsz48'
import IconScheduleSendFill1Wght100Grad0Opsz48 from '../components/ScheduleSendFill1Wght100Grad0Opsz48'
import IconScheduleSendFill1Wght200Grad0Opsz48 from '../components/ScheduleSendFill1Wght200Grad0Opsz48'
import IconScheduleSendFill1Wght300Grad0Opsz48 from '../components/ScheduleSendFill1Wght300Grad0Opsz48'
import IconScheduleSendFill1Wght400Grad0Opsz48 from '../components/ScheduleSendFill1Wght400Grad0Opsz48'
import IconScheduleSendFill1Wght500Grad0Opsz48 from '../components/ScheduleSendFill1Wght500Grad0Opsz48'
import IconScheduleSendFill1Wght600Grad0Opsz48 from '../components/ScheduleSendFill1Wght600Grad0Opsz48'
import IconScheduleSendFill1Wght700Grad0Opsz48 from '../components/ScheduleSendFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconScheduleSend = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconScheduleSendFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconScheduleSendFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconScheduleSendFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconScheduleSendFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconScheduleSendFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconScheduleSendFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconScheduleSendFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconScheduleSendFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconScheduleSendFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconScheduleSendFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconScheduleSendFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconScheduleSendFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconScheduleSendFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconScheduleSendFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
