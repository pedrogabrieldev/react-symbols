import IconAttachMoneyFill0Wght100Grad0Opsz48 from '../components/AttachMoneyFill0Wght100Grad0Opsz48'
import IconAttachMoneyFill0Wght200Grad0Opsz48 from '../components/AttachMoneyFill0Wght200Grad0Opsz48'
import IconAttachMoneyFill0Wght300Grad0Opsz48 from '../components/AttachMoneyFill0Wght300Grad0Opsz48'
import IconAttachMoneyFill0Wght400Grad0Opsz48 from '../components/AttachMoneyFill0Wght400Grad0Opsz48'
import IconAttachMoneyFill0Wght500Grad0Opsz48 from '../components/AttachMoneyFill0Wght500Grad0Opsz48'
import IconAttachMoneyFill0Wght600Grad0Opsz48 from '../components/AttachMoneyFill0Wght600Grad0Opsz48'
import IconAttachMoneyFill0Wght700Grad0Opsz48 from '../components/AttachMoneyFill0Wght700Grad0Opsz48'
import IconAttachMoneyFill1Wght100Grad0Opsz48 from '../components/AttachMoneyFill1Wght100Grad0Opsz48'
import IconAttachMoneyFill1Wght200Grad0Opsz48 from '../components/AttachMoneyFill1Wght200Grad0Opsz48'
import IconAttachMoneyFill1Wght300Grad0Opsz48 from '../components/AttachMoneyFill1Wght300Grad0Opsz48'
import IconAttachMoneyFill1Wght400Grad0Opsz48 from '../components/AttachMoneyFill1Wght400Grad0Opsz48'
import IconAttachMoneyFill1Wght500Grad0Opsz48 from '../components/AttachMoneyFill1Wght500Grad0Opsz48'
import IconAttachMoneyFill1Wght600Grad0Opsz48 from '../components/AttachMoneyFill1Wght600Grad0Opsz48'
import IconAttachMoneyFill1Wght700Grad0Opsz48 from '../components/AttachMoneyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAttachMoney = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAttachMoneyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAttachMoneyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAttachMoneyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAttachMoneyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAttachMoneyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAttachMoneyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAttachMoneyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAttachMoneyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAttachMoneyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAttachMoneyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAttachMoneyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAttachMoneyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAttachMoneyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAttachMoneyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
