import IconAttachmentFill0Wght100Grad0Opsz48 from '../components/AttachmentFill0Wght100Grad0Opsz48'
import IconAttachmentFill0Wght200Grad0Opsz48 from '../components/AttachmentFill0Wght200Grad0Opsz48'
import IconAttachmentFill0Wght300Grad0Opsz48 from '../components/AttachmentFill0Wght300Grad0Opsz48'
import IconAttachmentFill0Wght400Grad0Opsz48 from '../components/AttachmentFill0Wght400Grad0Opsz48'
import IconAttachmentFill0Wght500Grad0Opsz48 from '../components/AttachmentFill0Wght500Grad0Opsz48'
import IconAttachmentFill0Wght600Grad0Opsz48 from '../components/AttachmentFill0Wght600Grad0Opsz48'
import IconAttachmentFill0Wght700Grad0Opsz48 from '../components/AttachmentFill0Wght700Grad0Opsz48'
import IconAttachmentFill1Wght100Grad0Opsz48 from '../components/AttachmentFill1Wght100Grad0Opsz48'
import IconAttachmentFill1Wght200Grad0Opsz48 from '../components/AttachmentFill1Wght200Grad0Opsz48'
import IconAttachmentFill1Wght300Grad0Opsz48 from '../components/AttachmentFill1Wght300Grad0Opsz48'
import IconAttachmentFill1Wght400Grad0Opsz48 from '../components/AttachmentFill1Wght400Grad0Opsz48'
import IconAttachmentFill1Wght500Grad0Opsz48 from '../components/AttachmentFill1Wght500Grad0Opsz48'
import IconAttachmentFill1Wght600Grad0Opsz48 from '../components/AttachmentFill1Wght600Grad0Opsz48'
import IconAttachmentFill1Wght700Grad0Opsz48 from '../components/AttachmentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAttachment = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAttachmentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAttachmentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAttachmentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAttachmentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAttachmentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAttachmentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAttachmentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAttachmentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAttachmentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAttachmentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAttachmentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAttachmentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAttachmentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAttachmentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
