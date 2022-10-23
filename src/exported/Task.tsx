import IconTaskFill0Wght100Grad0Opsz48 from '../components/TaskFill0Wght100Grad0Opsz48'
import IconTaskFill0Wght200Grad0Opsz48 from '../components/TaskFill0Wght200Grad0Opsz48'
import IconTaskFill0Wght300Grad0Opsz48 from '../components/TaskFill0Wght300Grad0Opsz48'
import IconTaskFill0Wght400Grad0Opsz48 from '../components/TaskFill0Wght400Grad0Opsz48'
import IconTaskFill0Wght500Grad0Opsz48 from '../components/TaskFill0Wght500Grad0Opsz48'
import IconTaskFill0Wght600Grad0Opsz48 from '../components/TaskFill0Wght600Grad0Opsz48'
import IconTaskFill0Wght700Grad0Opsz48 from '../components/TaskFill0Wght700Grad0Opsz48'
import IconTaskFill1Wght100Grad0Opsz48 from '../components/TaskFill1Wght100Grad0Opsz48'
import IconTaskFill1Wght200Grad0Opsz48 from '../components/TaskFill1Wght200Grad0Opsz48'
import IconTaskFill1Wght300Grad0Opsz48 from '../components/TaskFill1Wght300Grad0Opsz48'
import IconTaskFill1Wght400Grad0Opsz48 from '../components/TaskFill1Wght400Grad0Opsz48'
import IconTaskFill1Wght500Grad0Opsz48 from '../components/TaskFill1Wght500Grad0Opsz48'
import IconTaskFill1Wght600Grad0Opsz48 from '../components/TaskFill1Wght600Grad0Opsz48'
import IconTaskFill1Wght700Grad0Opsz48 from '../components/TaskFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTask = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTaskFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTaskFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTaskFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTaskFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTaskFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTaskFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTaskFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTaskFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTaskFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTaskFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTaskFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTaskFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTaskFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTaskFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
