import IconDraftsFill0Wght100Grad0Opsz48 from '../components/DraftsFill0Wght100Grad0Opsz48'
import IconDraftsFill0Wght200Grad0Opsz48 from '../components/DraftsFill0Wght200Grad0Opsz48'
import IconDraftsFill0Wght300Grad0Opsz48 from '../components/DraftsFill0Wght300Grad0Opsz48'
import IconDraftsFill0Wght400Grad0Opsz48 from '../components/DraftsFill0Wght400Grad0Opsz48'
import IconDraftsFill0Wght500Grad0Opsz48 from '../components/DraftsFill0Wght500Grad0Opsz48'
import IconDraftsFill0Wght600Grad0Opsz48 from '../components/DraftsFill0Wght600Grad0Opsz48'
import IconDraftsFill0Wght700Grad0Opsz48 from '../components/DraftsFill0Wght700Grad0Opsz48'
import IconDraftsFill1Wght100Grad0Opsz48 from '../components/DraftsFill1Wght100Grad0Opsz48'
import IconDraftsFill1Wght200Grad0Opsz48 from '../components/DraftsFill1Wght200Grad0Opsz48'
import IconDraftsFill1Wght300Grad0Opsz48 from '../components/DraftsFill1Wght300Grad0Opsz48'
import IconDraftsFill1Wght400Grad0Opsz48 from '../components/DraftsFill1Wght400Grad0Opsz48'
import IconDraftsFill1Wght500Grad0Opsz48 from '../components/DraftsFill1Wght500Grad0Opsz48'
import IconDraftsFill1Wght600Grad0Opsz48 from '../components/DraftsFill1Wght600Grad0Opsz48'
import IconDraftsFill1Wght700Grad0Opsz48 from '../components/DraftsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDrafts = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDraftsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDraftsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDraftsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDraftsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDraftsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDraftsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDraftsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDraftsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDraftsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDraftsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDraftsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDraftsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDraftsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDraftsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
