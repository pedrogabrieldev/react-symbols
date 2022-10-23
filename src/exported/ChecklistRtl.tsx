import IconChecklistRtlFill0Wght100Grad0Opsz48 from '../components/ChecklistRtlFill0Wght100Grad0Opsz48'
import IconChecklistRtlFill0Wght200Grad0Opsz48 from '../components/ChecklistRtlFill0Wght200Grad0Opsz48'
import IconChecklistRtlFill0Wght300Grad0Opsz48 from '../components/ChecklistRtlFill0Wght300Grad0Opsz48'
import IconChecklistRtlFill0Wght400Grad0Opsz48 from '../components/ChecklistRtlFill0Wght400Grad0Opsz48'
import IconChecklistRtlFill0Wght500Grad0Opsz48 from '../components/ChecklistRtlFill0Wght500Grad0Opsz48'
import IconChecklistRtlFill0Wght600Grad0Opsz48 from '../components/ChecklistRtlFill0Wght600Grad0Opsz48'
import IconChecklistRtlFill0Wght700Grad0Opsz48 from '../components/ChecklistRtlFill0Wght700Grad0Opsz48'
import IconChecklistRtlFill1Wght100Grad0Opsz48 from '../components/ChecklistRtlFill1Wght100Grad0Opsz48'
import IconChecklistRtlFill1Wght200Grad0Opsz48 from '../components/ChecklistRtlFill1Wght200Grad0Opsz48'
import IconChecklistRtlFill1Wght300Grad0Opsz48 from '../components/ChecklistRtlFill1Wght300Grad0Opsz48'
import IconChecklistRtlFill1Wght400Grad0Opsz48 from '../components/ChecklistRtlFill1Wght400Grad0Opsz48'
import IconChecklistRtlFill1Wght500Grad0Opsz48 from '../components/ChecklistRtlFill1Wght500Grad0Opsz48'
import IconChecklistRtlFill1Wght600Grad0Opsz48 from '../components/ChecklistRtlFill1Wght600Grad0Opsz48'
import IconChecklistRtlFill1Wght700Grad0Opsz48 from '../components/ChecklistRtlFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconChecklistRtl = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconChecklistRtlFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconChecklistRtlFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconChecklistRtlFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconChecklistRtlFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconChecklistRtlFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconChecklistRtlFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconChecklistRtlFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconChecklistRtlFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconChecklistRtlFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconChecklistRtlFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconChecklistRtlFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconChecklistRtlFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconChecklistRtlFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconChecklistRtlFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
