import IconContentPasteFill0Wght100Grad0Opsz48 from '../components/ContentPasteFill0Wght100Grad0Opsz48'
import IconContentPasteFill0Wght200Grad0Opsz48 from '../components/ContentPasteFill0Wght200Grad0Opsz48'
import IconContentPasteFill0Wght300Grad0Opsz48 from '../components/ContentPasteFill0Wght300Grad0Opsz48'
import IconContentPasteFill0Wght400Grad0Opsz48 from '../components/ContentPasteFill0Wght400Grad0Opsz48'
import IconContentPasteFill0Wght500Grad0Opsz48 from '../components/ContentPasteFill0Wght500Grad0Opsz48'
import IconContentPasteFill0Wght600Grad0Opsz48 from '../components/ContentPasteFill0Wght600Grad0Opsz48'
import IconContentPasteFill0Wght700Grad0Opsz48 from '../components/ContentPasteFill0Wght700Grad0Opsz48'
import IconContentPasteFill1Wght100Grad0Opsz48 from '../components/ContentPasteFill1Wght100Grad0Opsz48'
import IconContentPasteFill1Wght200Grad0Opsz48 from '../components/ContentPasteFill1Wght200Grad0Opsz48'
import IconContentPasteFill1Wght300Grad0Opsz48 from '../components/ContentPasteFill1Wght300Grad0Opsz48'
import IconContentPasteFill1Wght400Grad0Opsz48 from '../components/ContentPasteFill1Wght400Grad0Opsz48'
import IconContentPasteFill1Wght500Grad0Opsz48 from '../components/ContentPasteFill1Wght500Grad0Opsz48'
import IconContentPasteFill1Wght600Grad0Opsz48 from '../components/ContentPasteFill1Wght600Grad0Opsz48'
import IconContentPasteFill1Wght700Grad0Opsz48 from '../components/ContentPasteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconContentPaste = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconContentPasteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconContentPasteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconContentPasteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconContentPasteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconContentPasteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconContentPasteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconContentPasteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconContentPasteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconContentPasteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconContentPasteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconContentPasteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconContentPasteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconContentPasteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconContentPasteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
