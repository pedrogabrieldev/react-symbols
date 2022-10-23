import IconContentCopyFill0Wght100Grad0Opsz48 from '../components/ContentCopyFill0Wght100Grad0Opsz48'
import IconContentCopyFill0Wght200Grad0Opsz48 from '../components/ContentCopyFill0Wght200Grad0Opsz48'
import IconContentCopyFill0Wght300Grad0Opsz48 from '../components/ContentCopyFill0Wght300Grad0Opsz48'
import IconContentCopyFill0Wght400Grad0Opsz48 from '../components/ContentCopyFill0Wght400Grad0Opsz48'
import IconContentCopyFill0Wght500Grad0Opsz48 from '../components/ContentCopyFill0Wght500Grad0Opsz48'
import IconContentCopyFill0Wght600Grad0Opsz48 from '../components/ContentCopyFill0Wght600Grad0Opsz48'
import IconContentCopyFill0Wght700Grad0Opsz48 from '../components/ContentCopyFill0Wght700Grad0Opsz48'
import IconContentCopyFill1Wght100Grad0Opsz48 from '../components/ContentCopyFill1Wght100Grad0Opsz48'
import IconContentCopyFill1Wght200Grad0Opsz48 from '../components/ContentCopyFill1Wght200Grad0Opsz48'
import IconContentCopyFill1Wght300Grad0Opsz48 from '../components/ContentCopyFill1Wght300Grad0Opsz48'
import IconContentCopyFill1Wght400Grad0Opsz48 from '../components/ContentCopyFill1Wght400Grad0Opsz48'
import IconContentCopyFill1Wght500Grad0Opsz48 from '../components/ContentCopyFill1Wght500Grad0Opsz48'
import IconContentCopyFill1Wght600Grad0Opsz48 from '../components/ContentCopyFill1Wght600Grad0Opsz48'
import IconContentCopyFill1Wght700Grad0Opsz48 from '../components/ContentCopyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconContentCopy = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconContentCopyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconContentCopyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconContentCopyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconContentCopyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconContentCopyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconContentCopyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconContentCopyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconContentCopyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconContentCopyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconContentCopyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconContentCopyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconContentCopyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconContentCopyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconContentCopyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
