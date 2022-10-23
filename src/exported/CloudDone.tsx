import IconCloudDoneFill0Wght100Grad0Opsz48 from '../components/CloudDoneFill0Wght100Grad0Opsz48'
import IconCloudDoneFill0Wght200Grad0Opsz48 from '../components/CloudDoneFill0Wght200Grad0Opsz48'
import IconCloudDoneFill0Wght300Grad0Opsz48 from '../components/CloudDoneFill0Wght300Grad0Opsz48'
import IconCloudDoneFill0Wght400Grad0Opsz48 from '../components/CloudDoneFill0Wght400Grad0Opsz48'
import IconCloudDoneFill0Wght500Grad0Opsz48 from '../components/CloudDoneFill0Wght500Grad0Opsz48'
import IconCloudDoneFill0Wght600Grad0Opsz48 from '../components/CloudDoneFill0Wght600Grad0Opsz48'
import IconCloudDoneFill0Wght700Grad0Opsz48 from '../components/CloudDoneFill0Wght700Grad0Opsz48'
import IconCloudDoneFill1Wght100Grad0Opsz48 from '../components/CloudDoneFill1Wght100Grad0Opsz48'
import IconCloudDoneFill1Wght200Grad0Opsz48 from '../components/CloudDoneFill1Wght200Grad0Opsz48'
import IconCloudDoneFill1Wght300Grad0Opsz48 from '../components/CloudDoneFill1Wght300Grad0Opsz48'
import IconCloudDoneFill1Wght400Grad0Opsz48 from '../components/CloudDoneFill1Wght400Grad0Opsz48'
import IconCloudDoneFill1Wght500Grad0Opsz48 from '../components/CloudDoneFill1Wght500Grad0Opsz48'
import IconCloudDoneFill1Wght600Grad0Opsz48 from '../components/CloudDoneFill1Wght600Grad0Opsz48'
import IconCloudDoneFill1Wght700Grad0Opsz48 from '../components/CloudDoneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCloudDone = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCloudDoneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCloudDoneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCloudDoneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCloudDoneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCloudDoneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCloudDoneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCloudDoneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCloudDoneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCloudDoneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCloudDoneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCloudDoneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCloudDoneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCloudDoneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCloudDoneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
