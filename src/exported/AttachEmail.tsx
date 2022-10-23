import IconAttachEmailFill0Wght100Grad0Opsz48 from '../components/AttachEmailFill0Wght100Grad0Opsz48'
import IconAttachEmailFill0Wght200Grad0Opsz48 from '../components/AttachEmailFill0Wght200Grad0Opsz48'
import IconAttachEmailFill0Wght300Grad0Opsz48 from '../components/AttachEmailFill0Wght300Grad0Opsz48'
import IconAttachEmailFill0Wght400Grad0Opsz48 from '../components/AttachEmailFill0Wght400Grad0Opsz48'
import IconAttachEmailFill0Wght500Grad0Opsz48 from '../components/AttachEmailFill0Wght500Grad0Opsz48'
import IconAttachEmailFill0Wght600Grad0Opsz48 from '../components/AttachEmailFill0Wght600Grad0Opsz48'
import IconAttachEmailFill0Wght700Grad0Opsz48 from '../components/AttachEmailFill0Wght700Grad0Opsz48'
import IconAttachEmailFill1Wght100Grad0Opsz48 from '../components/AttachEmailFill1Wght100Grad0Opsz48'
import IconAttachEmailFill1Wght200Grad0Opsz48 from '../components/AttachEmailFill1Wght200Grad0Opsz48'
import IconAttachEmailFill1Wght300Grad0Opsz48 from '../components/AttachEmailFill1Wght300Grad0Opsz48'
import IconAttachEmailFill1Wght400Grad0Opsz48 from '../components/AttachEmailFill1Wght400Grad0Opsz48'
import IconAttachEmailFill1Wght500Grad0Opsz48 from '../components/AttachEmailFill1Wght500Grad0Opsz48'
import IconAttachEmailFill1Wght600Grad0Opsz48 from '../components/AttachEmailFill1Wght600Grad0Opsz48'
import IconAttachEmailFill1Wght700Grad0Opsz48 from '../components/AttachEmailFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAttachEmail = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAttachEmailFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAttachEmailFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAttachEmailFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAttachEmailFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAttachEmailFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAttachEmailFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAttachEmailFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAttachEmailFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAttachEmailFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAttachEmailFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAttachEmailFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAttachEmailFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAttachEmailFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAttachEmailFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
