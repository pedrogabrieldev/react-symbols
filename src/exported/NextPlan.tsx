import IconNextPlanFill0Wght100Grad0Opsz48 from '../components/NextPlanFill0Wght100Grad0Opsz48'
import IconNextPlanFill0Wght200Grad0Opsz48 from '../components/NextPlanFill0Wght200Grad0Opsz48'
import IconNextPlanFill0Wght300Grad0Opsz48 from '../components/NextPlanFill0Wght300Grad0Opsz48'
import IconNextPlanFill0Wght400Grad0Opsz48 from '../components/NextPlanFill0Wght400Grad0Opsz48'
import IconNextPlanFill0Wght500Grad0Opsz48 from '../components/NextPlanFill0Wght500Grad0Opsz48'
import IconNextPlanFill0Wght600Grad0Opsz48 from '../components/NextPlanFill0Wght600Grad0Opsz48'
import IconNextPlanFill0Wght700Grad0Opsz48 from '../components/NextPlanFill0Wght700Grad0Opsz48'
import IconNextPlanFill1Wght100Grad0Opsz48 from '../components/NextPlanFill1Wght100Grad0Opsz48'
import IconNextPlanFill1Wght200Grad0Opsz48 from '../components/NextPlanFill1Wght200Grad0Opsz48'
import IconNextPlanFill1Wght300Grad0Opsz48 from '../components/NextPlanFill1Wght300Grad0Opsz48'
import IconNextPlanFill1Wght400Grad0Opsz48 from '../components/NextPlanFill1Wght400Grad0Opsz48'
import IconNextPlanFill1Wght500Grad0Opsz48 from '../components/NextPlanFill1Wght500Grad0Opsz48'
import IconNextPlanFill1Wght600Grad0Opsz48 from '../components/NextPlanFill1Wght600Grad0Opsz48'
import IconNextPlanFill1Wght700Grad0Opsz48 from '../components/NextPlanFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNextPlan = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNextPlanFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNextPlanFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNextPlanFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNextPlanFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNextPlanFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNextPlanFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNextPlanFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNextPlanFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNextPlanFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNextPlanFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNextPlanFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNextPlanFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNextPlanFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNextPlanFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
