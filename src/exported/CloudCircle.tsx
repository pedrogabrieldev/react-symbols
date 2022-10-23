import IconCloudCircleFill0Wght100Grad0Opsz48 from '../components/CloudCircleFill0Wght100Grad0Opsz48'
import IconCloudCircleFill0Wght200Grad0Opsz48 from '../components/CloudCircleFill0Wght200Grad0Opsz48'
import IconCloudCircleFill0Wght300Grad0Opsz48 from '../components/CloudCircleFill0Wght300Grad0Opsz48'
import IconCloudCircleFill0Wght400Grad0Opsz48 from '../components/CloudCircleFill0Wght400Grad0Opsz48'
import IconCloudCircleFill0Wght500Grad0Opsz48 from '../components/CloudCircleFill0Wght500Grad0Opsz48'
import IconCloudCircleFill0Wght600Grad0Opsz48 from '../components/CloudCircleFill0Wght600Grad0Opsz48'
import IconCloudCircleFill0Wght700Grad0Opsz48 from '../components/CloudCircleFill0Wght700Grad0Opsz48'
import IconCloudCircleFill1Wght100Grad0Opsz48 from '../components/CloudCircleFill1Wght100Grad0Opsz48'
import IconCloudCircleFill1Wght200Grad0Opsz48 from '../components/CloudCircleFill1Wght200Grad0Opsz48'
import IconCloudCircleFill1Wght300Grad0Opsz48 from '../components/CloudCircleFill1Wght300Grad0Opsz48'
import IconCloudCircleFill1Wght400Grad0Opsz48 from '../components/CloudCircleFill1Wght400Grad0Opsz48'
import IconCloudCircleFill1Wght500Grad0Opsz48 from '../components/CloudCircleFill1Wght500Grad0Opsz48'
import IconCloudCircleFill1Wght600Grad0Opsz48 from '../components/CloudCircleFill1Wght600Grad0Opsz48'
import IconCloudCircleFill1Wght700Grad0Opsz48 from '../components/CloudCircleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCloudCircle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCloudCircleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCloudCircleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCloudCircleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCloudCircleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCloudCircleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCloudCircleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCloudCircleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCloudCircleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCloudCircleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCloudCircleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCloudCircleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCloudCircleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCloudCircleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCloudCircleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
