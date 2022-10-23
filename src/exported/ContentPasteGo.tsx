import IconContentPasteGoFill0Wght100Grad0Opsz48 from '../components/ContentPasteGoFill0Wght100Grad0Opsz48'
import IconContentPasteGoFill0Wght200Grad0Opsz48 from '../components/ContentPasteGoFill0Wght200Grad0Opsz48'
import IconContentPasteGoFill0Wght300Grad0Opsz48 from '../components/ContentPasteGoFill0Wght300Grad0Opsz48'
import IconContentPasteGoFill0Wght400Grad0Opsz48 from '../components/ContentPasteGoFill0Wght400Grad0Opsz48'
import IconContentPasteGoFill0Wght500Grad0Opsz48 from '../components/ContentPasteGoFill0Wght500Grad0Opsz48'
import IconContentPasteGoFill0Wght600Grad0Opsz48 from '../components/ContentPasteGoFill0Wght600Grad0Opsz48'
import IconContentPasteGoFill0Wght700Grad0Opsz48 from '../components/ContentPasteGoFill0Wght700Grad0Opsz48'
import IconContentPasteGoFill1Wght100Grad0Opsz48 from '../components/ContentPasteGoFill1Wght100Grad0Opsz48'
import IconContentPasteGoFill1Wght200Grad0Opsz48 from '../components/ContentPasteGoFill1Wght200Grad0Opsz48'
import IconContentPasteGoFill1Wght300Grad0Opsz48 from '../components/ContentPasteGoFill1Wght300Grad0Opsz48'
import IconContentPasteGoFill1Wght400Grad0Opsz48 from '../components/ContentPasteGoFill1Wght400Grad0Opsz48'
import IconContentPasteGoFill1Wght500Grad0Opsz48 from '../components/ContentPasteGoFill1Wght500Grad0Opsz48'
import IconContentPasteGoFill1Wght600Grad0Opsz48 from '../components/ContentPasteGoFill1Wght600Grad0Opsz48'
import IconContentPasteGoFill1Wght700Grad0Opsz48 from '../components/ContentPasteGoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconContentPasteGo = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconContentPasteGoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconContentPasteGoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconContentPasteGoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconContentPasteGoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconContentPasteGoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconContentPasteGoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconContentPasteGoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconContentPasteGoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconContentPasteGoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconContentPasteGoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconContentPasteGoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconContentPasteGoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconContentPasteGoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconContentPasteGoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
