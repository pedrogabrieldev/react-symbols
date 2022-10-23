import IconAttachFileAddFill0Wght100Grad0Opsz48 from '../components/AttachFileAddFill0Wght100Grad0Opsz48'
import IconAttachFileAddFill0Wght200Grad0Opsz48 from '../components/AttachFileAddFill0Wght200Grad0Opsz48'
import IconAttachFileAddFill0Wght300Grad0Opsz48 from '../components/AttachFileAddFill0Wght300Grad0Opsz48'
import IconAttachFileAddFill0Wght400Grad0Opsz48 from '../components/AttachFileAddFill0Wght400Grad0Opsz48'
import IconAttachFileAddFill0Wght500Grad0Opsz48 from '../components/AttachFileAddFill0Wght500Grad0Opsz48'
import IconAttachFileAddFill0Wght600Grad0Opsz48 from '../components/AttachFileAddFill0Wght600Grad0Opsz48'
import IconAttachFileAddFill0Wght700Grad0Opsz48 from '../components/AttachFileAddFill0Wght700Grad0Opsz48'
import IconAttachFileAddFill1Wght100Grad0Opsz48 from '../components/AttachFileAddFill1Wght100Grad0Opsz48'
import IconAttachFileAddFill1Wght200Grad0Opsz48 from '../components/AttachFileAddFill1Wght200Grad0Opsz48'
import IconAttachFileAddFill1Wght300Grad0Opsz48 from '../components/AttachFileAddFill1Wght300Grad0Opsz48'
import IconAttachFileAddFill1Wght400Grad0Opsz48 from '../components/AttachFileAddFill1Wght400Grad0Opsz48'
import IconAttachFileAddFill1Wght500Grad0Opsz48 from '../components/AttachFileAddFill1Wght500Grad0Opsz48'
import IconAttachFileAddFill1Wght600Grad0Opsz48 from '../components/AttachFileAddFill1Wght600Grad0Opsz48'
import IconAttachFileAddFill1Wght700Grad0Opsz48 from '../components/AttachFileAddFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAttachFileAdd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAttachFileAddFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAttachFileAddFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAttachFileAddFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAttachFileAddFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAttachFileAddFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAttachFileAddFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAttachFileAddFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAttachFileAddFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAttachFileAddFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAttachFileAddFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAttachFileAddFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAttachFileAddFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAttachFileAddFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAttachFileAddFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
