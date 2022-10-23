import IconCloudySnowingFill0Wght100Grad0Opsz48 from '../components/CloudySnowingFill0Wght100Grad0Opsz48'
import IconCloudySnowingFill0Wght200Grad0Opsz48 from '../components/CloudySnowingFill0Wght200Grad0Opsz48'
import IconCloudySnowingFill0Wght300Grad0Opsz48 from '../components/CloudySnowingFill0Wght300Grad0Opsz48'
import IconCloudySnowingFill0Wght400Grad0Opsz48 from '../components/CloudySnowingFill0Wght400Grad0Opsz48'
import IconCloudySnowingFill0Wght500Grad0Opsz48 from '../components/CloudySnowingFill0Wght500Grad0Opsz48'
import IconCloudySnowingFill0Wght600Grad0Opsz48 from '../components/CloudySnowingFill0Wght600Grad0Opsz48'
import IconCloudySnowingFill0Wght700Grad0Opsz48 from '../components/CloudySnowingFill0Wght700Grad0Opsz48'
import IconCloudySnowingFill1Wght100Grad0Opsz48 from '../components/CloudySnowingFill1Wght100Grad0Opsz48'
import IconCloudySnowingFill1Wght200Grad0Opsz48 from '../components/CloudySnowingFill1Wght200Grad0Opsz48'
import IconCloudySnowingFill1Wght300Grad0Opsz48 from '../components/CloudySnowingFill1Wght300Grad0Opsz48'
import IconCloudySnowingFill1Wght400Grad0Opsz48 from '../components/CloudySnowingFill1Wght400Grad0Opsz48'
import IconCloudySnowingFill1Wght500Grad0Opsz48 from '../components/CloudySnowingFill1Wght500Grad0Opsz48'
import IconCloudySnowingFill1Wght600Grad0Opsz48 from '../components/CloudySnowingFill1Wght600Grad0Opsz48'
import IconCloudySnowingFill1Wght700Grad0Opsz48 from '../components/CloudySnowingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCloudySnowing = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCloudySnowingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCloudySnowingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCloudySnowingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCloudySnowingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCloudySnowingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCloudySnowingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCloudySnowingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCloudySnowingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCloudySnowingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCloudySnowingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCloudySnowingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCloudySnowingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCloudySnowingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCloudySnowingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
