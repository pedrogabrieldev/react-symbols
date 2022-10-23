import IconCloudyFill0Wght100Grad0Opsz48 from '../components/CloudyFill0Wght100Grad0Opsz48'
import IconCloudyFill0Wght200Grad0Opsz48 from '../components/CloudyFill0Wght200Grad0Opsz48'
import IconCloudyFill0Wght300Grad0Opsz48 from '../components/CloudyFill0Wght300Grad0Opsz48'
import IconCloudyFill0Wght400Grad0Opsz48 from '../components/CloudyFill0Wght400Grad0Opsz48'
import IconCloudyFill0Wght500Grad0Opsz48 from '../components/CloudyFill0Wght500Grad0Opsz48'
import IconCloudyFill0Wght600Grad0Opsz48 from '../components/CloudyFill0Wght600Grad0Opsz48'
import IconCloudyFill0Wght700Grad0Opsz48 from '../components/CloudyFill0Wght700Grad0Opsz48'
import IconCloudyFill1Wght100Grad0Opsz48 from '../components/CloudyFill1Wght100Grad0Opsz48'
import IconCloudyFill1Wght200Grad0Opsz48 from '../components/CloudyFill1Wght200Grad0Opsz48'
import IconCloudyFill1Wght300Grad0Opsz48 from '../components/CloudyFill1Wght300Grad0Opsz48'
import IconCloudyFill1Wght400Grad0Opsz48 from '../components/CloudyFill1Wght400Grad0Opsz48'
import IconCloudyFill1Wght500Grad0Opsz48 from '../components/CloudyFill1Wght500Grad0Opsz48'
import IconCloudyFill1Wght600Grad0Opsz48 from '../components/CloudyFill1Wght600Grad0Opsz48'
import IconCloudyFill1Wght700Grad0Opsz48 from '../components/CloudyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCloudy = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCloudyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCloudyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCloudyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCloudyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCloudyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCloudyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCloudyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCloudyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCloudyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCloudyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCloudyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCloudyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCloudyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCloudyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
