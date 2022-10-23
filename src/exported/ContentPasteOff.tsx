import IconContentPasteOffFill0Wght100Grad0Opsz48 from '../components/ContentPasteOffFill0Wght100Grad0Opsz48'
import IconContentPasteOffFill0Wght200Grad0Opsz48 from '../components/ContentPasteOffFill0Wght200Grad0Opsz48'
import IconContentPasteOffFill0Wght300Grad0Opsz48 from '../components/ContentPasteOffFill0Wght300Grad0Opsz48'
import IconContentPasteOffFill0Wght400Grad0Opsz48 from '../components/ContentPasteOffFill0Wght400Grad0Opsz48'
import IconContentPasteOffFill0Wght500Grad0Opsz48 from '../components/ContentPasteOffFill0Wght500Grad0Opsz48'
import IconContentPasteOffFill0Wght600Grad0Opsz48 from '../components/ContentPasteOffFill0Wght600Grad0Opsz48'
import IconContentPasteOffFill0Wght700Grad0Opsz48 from '../components/ContentPasteOffFill0Wght700Grad0Opsz48'
import IconContentPasteOffFill1Wght100Grad0Opsz48 from '../components/ContentPasteOffFill1Wght100Grad0Opsz48'
import IconContentPasteOffFill1Wght200Grad0Opsz48 from '../components/ContentPasteOffFill1Wght200Grad0Opsz48'
import IconContentPasteOffFill1Wght300Grad0Opsz48 from '../components/ContentPasteOffFill1Wght300Grad0Opsz48'
import IconContentPasteOffFill1Wght400Grad0Opsz48 from '../components/ContentPasteOffFill1Wght400Grad0Opsz48'
import IconContentPasteOffFill1Wght500Grad0Opsz48 from '../components/ContentPasteOffFill1Wght500Grad0Opsz48'
import IconContentPasteOffFill1Wght600Grad0Opsz48 from '../components/ContentPasteOffFill1Wght600Grad0Opsz48'
import IconContentPasteOffFill1Wght700Grad0Opsz48 from '../components/ContentPasteOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconContentPasteOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconContentPasteOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconContentPasteOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconContentPasteOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconContentPasteOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconContentPasteOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconContentPasteOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconContentPasteOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconContentPasteOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconContentPasteOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconContentPasteOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconContentPasteOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconContentPasteOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconContentPasteOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconContentPasteOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
