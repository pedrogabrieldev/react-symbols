import IconDraftFill0Wght100Grad0Opsz48 from '../components/DraftFill0Wght100Grad0Opsz48'
import IconDraftFill0Wght200Grad0Opsz48 from '../components/DraftFill0Wght200Grad0Opsz48'
import IconDraftFill0Wght300Grad0Opsz48 from '../components/DraftFill0Wght300Grad0Opsz48'
import IconDraftFill0Wght400Grad0Opsz48 from '../components/DraftFill0Wght400Grad0Opsz48'
import IconDraftFill0Wght500Grad0Opsz48 from '../components/DraftFill0Wght500Grad0Opsz48'
import IconDraftFill0Wght600Grad0Opsz48 from '../components/DraftFill0Wght600Grad0Opsz48'
import IconDraftFill0Wght700Grad0Opsz48 from '../components/DraftFill0Wght700Grad0Opsz48'
import IconDraftFill1Wght100Grad0Opsz48 from '../components/DraftFill1Wght100Grad0Opsz48'
import IconDraftFill1Wght200Grad0Opsz48 from '../components/DraftFill1Wght200Grad0Opsz48'
import IconDraftFill1Wght300Grad0Opsz48 from '../components/DraftFill1Wght300Grad0Opsz48'
import IconDraftFill1Wght400Grad0Opsz48 from '../components/DraftFill1Wght400Grad0Opsz48'
import IconDraftFill1Wght500Grad0Opsz48 from '../components/DraftFill1Wght500Grad0Opsz48'
import IconDraftFill1Wght600Grad0Opsz48 from '../components/DraftFill1Wght600Grad0Opsz48'
import IconDraftFill1Wght700Grad0Opsz48 from '../components/DraftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDraft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDraftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDraftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDraftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDraftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDraftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDraftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDraftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDraftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDraftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDraftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDraftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDraftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDraftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDraftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
