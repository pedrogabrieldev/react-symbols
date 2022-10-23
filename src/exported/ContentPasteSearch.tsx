import IconContentPasteSearchFill0Wght100Grad0Opsz48 from '../components/ContentPasteSearchFill0Wght100Grad0Opsz48'
import IconContentPasteSearchFill0Wght200Grad0Opsz48 from '../components/ContentPasteSearchFill0Wght200Grad0Opsz48'
import IconContentPasteSearchFill0Wght300Grad0Opsz48 from '../components/ContentPasteSearchFill0Wght300Grad0Opsz48'
import IconContentPasteSearchFill0Wght400Grad0Opsz48 from '../components/ContentPasteSearchFill0Wght400Grad0Opsz48'
import IconContentPasteSearchFill0Wght500Grad0Opsz48 from '../components/ContentPasteSearchFill0Wght500Grad0Opsz48'
import IconContentPasteSearchFill0Wght600Grad0Opsz48 from '../components/ContentPasteSearchFill0Wght600Grad0Opsz48'
import IconContentPasteSearchFill0Wght700Grad0Opsz48 from '../components/ContentPasteSearchFill0Wght700Grad0Opsz48'
import IconContentPasteSearchFill1Wght100Grad0Opsz48 from '../components/ContentPasteSearchFill1Wght100Grad0Opsz48'
import IconContentPasteSearchFill1Wght200Grad0Opsz48 from '../components/ContentPasteSearchFill1Wght200Grad0Opsz48'
import IconContentPasteSearchFill1Wght300Grad0Opsz48 from '../components/ContentPasteSearchFill1Wght300Grad0Opsz48'
import IconContentPasteSearchFill1Wght400Grad0Opsz48 from '../components/ContentPasteSearchFill1Wght400Grad0Opsz48'
import IconContentPasteSearchFill1Wght500Grad0Opsz48 from '../components/ContentPasteSearchFill1Wght500Grad0Opsz48'
import IconContentPasteSearchFill1Wght600Grad0Opsz48 from '../components/ContentPasteSearchFill1Wght600Grad0Opsz48'
import IconContentPasteSearchFill1Wght700Grad0Opsz48 from '../components/ContentPasteSearchFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconContentPasteSearch = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconContentPasteSearchFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconContentPasteSearchFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconContentPasteSearchFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconContentPasteSearchFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconContentPasteSearchFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconContentPasteSearchFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconContentPasteSearchFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconContentPasteSearchFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconContentPasteSearchFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconContentPasteSearchFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconContentPasteSearchFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconContentPasteSearchFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconContentPasteSearchFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconContentPasteSearchFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
