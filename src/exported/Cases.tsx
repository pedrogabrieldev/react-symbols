import IconCasesFill0Wght100Grad0Opsz48 from '../components/CasesFill0Wght100Grad0Opsz48'
import IconCasesFill0Wght200Grad0Opsz48 from '../components/CasesFill0Wght200Grad0Opsz48'
import IconCasesFill0Wght300Grad0Opsz48 from '../components/CasesFill0Wght300Grad0Opsz48'
import IconCasesFill0Wght400Grad0Opsz48 from '../components/CasesFill0Wght400Grad0Opsz48'
import IconCasesFill0Wght500Grad0Opsz48 from '../components/CasesFill0Wght500Grad0Opsz48'
import IconCasesFill0Wght600Grad0Opsz48 from '../components/CasesFill0Wght600Grad0Opsz48'
import IconCasesFill0Wght700Grad0Opsz48 from '../components/CasesFill0Wght700Grad0Opsz48'
import IconCasesFill1Wght100Grad0Opsz48 from '../components/CasesFill1Wght100Grad0Opsz48'
import IconCasesFill1Wght200Grad0Opsz48 from '../components/CasesFill1Wght200Grad0Opsz48'
import IconCasesFill1Wght300Grad0Opsz48 from '../components/CasesFill1Wght300Grad0Opsz48'
import IconCasesFill1Wght400Grad0Opsz48 from '../components/CasesFill1Wght400Grad0Opsz48'
import IconCasesFill1Wght500Grad0Opsz48 from '../components/CasesFill1Wght500Grad0Opsz48'
import IconCasesFill1Wght600Grad0Opsz48 from '../components/CasesFill1Wght600Grad0Opsz48'
import IconCasesFill1Wght700Grad0Opsz48 from '../components/CasesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCases = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCasesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCasesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCasesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCasesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCasesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCasesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCasesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCasesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCasesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCasesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCasesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCasesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCasesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCasesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
