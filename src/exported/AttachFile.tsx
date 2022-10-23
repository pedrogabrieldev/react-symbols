import IconAttachFileFill0Wght100Grad0Opsz48 from '../components/AttachFileFill0Wght100Grad0Opsz48'
import IconAttachFileFill0Wght200Grad0Opsz48 from '../components/AttachFileFill0Wght200Grad0Opsz48'
import IconAttachFileFill0Wght300Grad0Opsz48 from '../components/AttachFileFill0Wght300Grad0Opsz48'
import IconAttachFileFill0Wght400Grad0Opsz48 from '../components/AttachFileFill0Wght400Grad0Opsz48'
import IconAttachFileFill0Wght500Grad0Opsz48 from '../components/AttachFileFill0Wght500Grad0Opsz48'
import IconAttachFileFill0Wght600Grad0Opsz48 from '../components/AttachFileFill0Wght600Grad0Opsz48'
import IconAttachFileFill0Wght700Grad0Opsz48 from '../components/AttachFileFill0Wght700Grad0Opsz48'
import IconAttachFileFill1Wght100Grad0Opsz48 from '../components/AttachFileFill1Wght100Grad0Opsz48'
import IconAttachFileFill1Wght200Grad0Opsz48 from '../components/AttachFileFill1Wght200Grad0Opsz48'
import IconAttachFileFill1Wght300Grad0Opsz48 from '../components/AttachFileFill1Wght300Grad0Opsz48'
import IconAttachFileFill1Wght400Grad0Opsz48 from '../components/AttachFileFill1Wght400Grad0Opsz48'
import IconAttachFileFill1Wght500Grad0Opsz48 from '../components/AttachFileFill1Wght500Grad0Opsz48'
import IconAttachFileFill1Wght600Grad0Opsz48 from '../components/AttachFileFill1Wght600Grad0Opsz48'
import IconAttachFileFill1Wght700Grad0Opsz48 from '../components/AttachFileFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAttachFile = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAttachFileFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAttachFileFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAttachFileFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAttachFileFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAttachFileFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAttachFileFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAttachFileFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAttachFileFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAttachFileFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAttachFileFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAttachFileFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAttachFileFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAttachFileFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAttachFileFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
