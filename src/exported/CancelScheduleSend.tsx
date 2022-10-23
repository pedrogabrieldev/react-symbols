import IconCancelScheduleSendFill0Wght100Grad0Opsz48 from '../components/CancelScheduleSendFill0Wght100Grad0Opsz48'
import IconCancelScheduleSendFill0Wght200Grad0Opsz48 from '../components/CancelScheduleSendFill0Wght200Grad0Opsz48'
import IconCancelScheduleSendFill0Wght300Grad0Opsz48 from '../components/CancelScheduleSendFill0Wght300Grad0Opsz48'
import IconCancelScheduleSendFill0Wght400Grad0Opsz48 from '../components/CancelScheduleSendFill0Wght400Grad0Opsz48'
import IconCancelScheduleSendFill0Wght500Grad0Opsz48 from '../components/CancelScheduleSendFill0Wght500Grad0Opsz48'
import IconCancelScheduleSendFill0Wght600Grad0Opsz48 from '../components/CancelScheduleSendFill0Wght600Grad0Opsz48'
import IconCancelScheduleSendFill0Wght700Grad0Opsz48 from '../components/CancelScheduleSendFill0Wght700Grad0Opsz48'
import IconCancelScheduleSendFill1Wght100Grad0Opsz48 from '../components/CancelScheduleSendFill1Wght100Grad0Opsz48'
import IconCancelScheduleSendFill1Wght200Grad0Opsz48 from '../components/CancelScheduleSendFill1Wght200Grad0Opsz48'
import IconCancelScheduleSendFill1Wght300Grad0Opsz48 from '../components/CancelScheduleSendFill1Wght300Grad0Opsz48'
import IconCancelScheduleSendFill1Wght400Grad0Opsz48 from '../components/CancelScheduleSendFill1Wght400Grad0Opsz48'
import IconCancelScheduleSendFill1Wght500Grad0Opsz48 from '../components/CancelScheduleSendFill1Wght500Grad0Opsz48'
import IconCancelScheduleSendFill1Wght600Grad0Opsz48 from '../components/CancelScheduleSendFill1Wght600Grad0Opsz48'
import IconCancelScheduleSendFill1Wght700Grad0Opsz48 from '../components/CancelScheduleSendFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCancelScheduleSend = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCancelScheduleSendFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCancelScheduleSendFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCancelScheduleSendFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCancelScheduleSendFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCancelScheduleSendFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCancelScheduleSendFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCancelScheduleSendFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCancelScheduleSendFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCancelScheduleSendFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCancelScheduleSendFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCancelScheduleSendFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCancelScheduleSendFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCancelScheduleSendFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCancelScheduleSendFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
