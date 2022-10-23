import IconRunningWithErrorsFill0Wght100Grad0Opsz48 from '../components/RunningWithErrorsFill0Wght100Grad0Opsz48'
import IconRunningWithErrorsFill0Wght200Grad0Opsz48 from '../components/RunningWithErrorsFill0Wght200Grad0Opsz48'
import IconRunningWithErrorsFill0Wght300Grad0Opsz48 from '../components/RunningWithErrorsFill0Wght300Grad0Opsz48'
import IconRunningWithErrorsFill0Wght400Grad0Opsz48 from '../components/RunningWithErrorsFill0Wght400Grad0Opsz48'
import IconRunningWithErrorsFill0Wght500Grad0Opsz48 from '../components/RunningWithErrorsFill0Wght500Grad0Opsz48'
import IconRunningWithErrorsFill0Wght600Grad0Opsz48 from '../components/RunningWithErrorsFill0Wght600Grad0Opsz48'
import IconRunningWithErrorsFill0Wght700Grad0Opsz48 from '../components/RunningWithErrorsFill0Wght700Grad0Opsz48'
import IconRunningWithErrorsFill1Wght100Grad0Opsz48 from '../components/RunningWithErrorsFill1Wght100Grad0Opsz48'
import IconRunningWithErrorsFill1Wght200Grad0Opsz48 from '../components/RunningWithErrorsFill1Wght200Grad0Opsz48'
import IconRunningWithErrorsFill1Wght300Grad0Opsz48 from '../components/RunningWithErrorsFill1Wght300Grad0Opsz48'
import IconRunningWithErrorsFill1Wght400Grad0Opsz48 from '../components/RunningWithErrorsFill1Wght400Grad0Opsz48'
import IconRunningWithErrorsFill1Wght500Grad0Opsz48 from '../components/RunningWithErrorsFill1Wght500Grad0Opsz48'
import IconRunningWithErrorsFill1Wght600Grad0Opsz48 from '../components/RunningWithErrorsFill1Wght600Grad0Opsz48'
import IconRunningWithErrorsFill1Wght700Grad0Opsz48 from '../components/RunningWithErrorsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRunningWithErrors = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRunningWithErrorsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRunningWithErrorsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRunningWithErrorsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRunningWithErrorsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRunningWithErrorsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRunningWithErrorsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRunningWithErrorsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRunningWithErrorsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRunningWithErrorsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRunningWithErrorsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRunningWithErrorsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRunningWithErrorsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRunningWithErrorsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRunningWithErrorsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
