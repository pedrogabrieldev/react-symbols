import IconChecklistFill0Wght100Grad0Opsz48 from '../components/ChecklistFill0Wght100Grad0Opsz48'
import IconChecklistFill0Wght200Grad0Opsz48 from '../components/ChecklistFill0Wght200Grad0Opsz48'
import IconChecklistFill0Wght300Grad0Opsz48 from '../components/ChecklistFill0Wght300Grad0Opsz48'
import IconChecklistFill0Wght400Grad0Opsz48 from '../components/ChecklistFill0Wght400Grad0Opsz48'
import IconChecklistFill0Wght500Grad0Opsz48 from '../components/ChecklistFill0Wght500Grad0Opsz48'
import IconChecklistFill0Wght600Grad0Opsz48 from '../components/ChecklistFill0Wght600Grad0Opsz48'
import IconChecklistFill0Wght700Grad0Opsz48 from '../components/ChecklistFill0Wght700Grad0Opsz48'
import IconChecklistFill1Wght100Grad0Opsz48 from '../components/ChecklistFill1Wght100Grad0Opsz48'
import IconChecklistFill1Wght200Grad0Opsz48 from '../components/ChecklistFill1Wght200Grad0Opsz48'
import IconChecklistFill1Wght300Grad0Opsz48 from '../components/ChecklistFill1Wght300Grad0Opsz48'
import IconChecklistFill1Wght400Grad0Opsz48 from '../components/ChecklistFill1Wght400Grad0Opsz48'
import IconChecklistFill1Wght500Grad0Opsz48 from '../components/ChecklistFill1Wght500Grad0Opsz48'
import IconChecklistFill1Wght600Grad0Opsz48 from '../components/ChecklistFill1Wght600Grad0Opsz48'
import IconChecklistFill1Wght700Grad0Opsz48 from '../components/ChecklistFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconChecklist = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconChecklistFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconChecklistFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconChecklistFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconChecklistFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconChecklistFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconChecklistFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconChecklistFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconChecklistFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconChecklistFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconChecklistFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconChecklistFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconChecklistFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconChecklistFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconChecklistFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
