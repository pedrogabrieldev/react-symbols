import IconAssuredWorkloadFill0Wght100Grad0Opsz48 from '../components/AssuredWorkloadFill0Wght100Grad0Opsz48'
import IconAssuredWorkloadFill0Wght200Grad0Opsz48 from '../components/AssuredWorkloadFill0Wght200Grad0Opsz48'
import IconAssuredWorkloadFill0Wght300Grad0Opsz48 from '../components/AssuredWorkloadFill0Wght300Grad0Opsz48'
import IconAssuredWorkloadFill0Wght400Grad0Opsz48 from '../components/AssuredWorkloadFill0Wght400Grad0Opsz48'
import IconAssuredWorkloadFill0Wght500Grad0Opsz48 from '../components/AssuredWorkloadFill0Wght500Grad0Opsz48'
import IconAssuredWorkloadFill0Wght600Grad0Opsz48 from '../components/AssuredWorkloadFill0Wght600Grad0Opsz48'
import IconAssuredWorkloadFill0Wght700Grad0Opsz48 from '../components/AssuredWorkloadFill0Wght700Grad0Opsz48'
import IconAssuredWorkloadFill1Wght100Grad0Opsz48 from '../components/AssuredWorkloadFill1Wght100Grad0Opsz48'
import IconAssuredWorkloadFill1Wght200Grad0Opsz48 from '../components/AssuredWorkloadFill1Wght200Grad0Opsz48'
import IconAssuredWorkloadFill1Wght300Grad0Opsz48 from '../components/AssuredWorkloadFill1Wght300Grad0Opsz48'
import IconAssuredWorkloadFill1Wght400Grad0Opsz48 from '../components/AssuredWorkloadFill1Wght400Grad0Opsz48'
import IconAssuredWorkloadFill1Wght500Grad0Opsz48 from '../components/AssuredWorkloadFill1Wght500Grad0Opsz48'
import IconAssuredWorkloadFill1Wght600Grad0Opsz48 from '../components/AssuredWorkloadFill1Wght600Grad0Opsz48'
import IconAssuredWorkloadFill1Wght700Grad0Opsz48 from '../components/AssuredWorkloadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAssuredWorkload = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAssuredWorkloadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAssuredWorkloadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAssuredWorkloadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAssuredWorkloadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAssuredWorkloadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAssuredWorkloadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAssuredWorkloadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAssuredWorkloadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAssuredWorkloadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAssuredWorkloadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAssuredWorkloadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAssuredWorkloadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAssuredWorkloadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAssuredWorkloadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
