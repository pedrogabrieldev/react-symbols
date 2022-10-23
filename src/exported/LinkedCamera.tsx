import IconLinkedCameraFill0Wght100Grad0Opsz48 from '../components/LinkedCameraFill0Wght100Grad0Opsz48'
import IconLinkedCameraFill0Wght200Grad0Opsz48 from '../components/LinkedCameraFill0Wght200Grad0Opsz48'
import IconLinkedCameraFill0Wght300Grad0Opsz48 from '../components/LinkedCameraFill0Wght300Grad0Opsz48'
import IconLinkedCameraFill0Wght400Grad0Opsz48 from '../components/LinkedCameraFill0Wght400Grad0Opsz48'
import IconLinkedCameraFill0Wght500Grad0Opsz48 from '../components/LinkedCameraFill0Wght500Grad0Opsz48'
import IconLinkedCameraFill0Wght600Grad0Opsz48 from '../components/LinkedCameraFill0Wght600Grad0Opsz48'
import IconLinkedCameraFill0Wght700Grad0Opsz48 from '../components/LinkedCameraFill0Wght700Grad0Opsz48'
import IconLinkedCameraFill1Wght100Grad0Opsz48 from '../components/LinkedCameraFill1Wght100Grad0Opsz48'
import IconLinkedCameraFill1Wght200Grad0Opsz48 from '../components/LinkedCameraFill1Wght200Grad0Opsz48'
import IconLinkedCameraFill1Wght300Grad0Opsz48 from '../components/LinkedCameraFill1Wght300Grad0Opsz48'
import IconLinkedCameraFill1Wght400Grad0Opsz48 from '../components/LinkedCameraFill1Wght400Grad0Opsz48'
import IconLinkedCameraFill1Wght500Grad0Opsz48 from '../components/LinkedCameraFill1Wght500Grad0Opsz48'
import IconLinkedCameraFill1Wght600Grad0Opsz48 from '../components/LinkedCameraFill1Wght600Grad0Opsz48'
import IconLinkedCameraFill1Wght700Grad0Opsz48 from '../components/LinkedCameraFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLinkedCamera = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLinkedCameraFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLinkedCameraFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLinkedCameraFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLinkedCameraFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLinkedCameraFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLinkedCameraFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLinkedCameraFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLinkedCameraFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLinkedCameraFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLinkedCameraFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLinkedCameraFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLinkedCameraFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLinkedCameraFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLinkedCameraFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
