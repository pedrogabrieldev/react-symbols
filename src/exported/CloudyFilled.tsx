import IconCloudyFilledFill0Wght100Grad0Opsz48 from '../components/CloudyFilledFill0Wght100Grad0Opsz48'
import IconCloudyFilledFill0Wght200Grad0Opsz48 from '../components/CloudyFilledFill0Wght200Grad0Opsz48'
import IconCloudyFilledFill0Wght300Grad0Opsz48 from '../components/CloudyFilledFill0Wght300Grad0Opsz48'
import IconCloudyFilledFill0Wght400Grad0Opsz48 from '../components/CloudyFilledFill0Wght400Grad0Opsz48'
import IconCloudyFilledFill0Wght500Grad0Opsz48 from '../components/CloudyFilledFill0Wght500Grad0Opsz48'
import IconCloudyFilledFill0Wght600Grad0Opsz48 from '../components/CloudyFilledFill0Wght600Grad0Opsz48'
import IconCloudyFilledFill0Wght700Grad0Opsz48 from '../components/CloudyFilledFill0Wght700Grad0Opsz48'
import IconCloudyFilledFill1Wght100Grad0Opsz48 from '../components/CloudyFilledFill1Wght100Grad0Opsz48'
import IconCloudyFilledFill1Wght200Grad0Opsz48 from '../components/CloudyFilledFill1Wght200Grad0Opsz48'
import IconCloudyFilledFill1Wght300Grad0Opsz48 from '../components/CloudyFilledFill1Wght300Grad0Opsz48'
import IconCloudyFilledFill1Wght400Grad0Opsz48 from '../components/CloudyFilledFill1Wght400Grad0Opsz48'
import IconCloudyFilledFill1Wght500Grad0Opsz48 from '../components/CloudyFilledFill1Wght500Grad0Opsz48'
import IconCloudyFilledFill1Wght600Grad0Opsz48 from '../components/CloudyFilledFill1Wght600Grad0Opsz48'
import IconCloudyFilledFill1Wght700Grad0Opsz48 from '../components/CloudyFilledFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCloudyFilled = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCloudyFilledFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCloudyFilledFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCloudyFilledFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCloudyFilledFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCloudyFilledFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCloudyFilledFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCloudyFilledFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCloudyFilledFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCloudyFilledFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCloudyFilledFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCloudyFilledFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCloudyFilledFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCloudyFilledFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCloudyFilledFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
