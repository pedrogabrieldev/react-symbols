import IconHandGestureFill0Wght100Grad0Opsz48 from '../components/HandGestureFill0Wght100Grad0Opsz48'
import IconHandGestureFill0Wght200Grad0Opsz48 from '../components/HandGestureFill0Wght200Grad0Opsz48'
import IconHandGestureFill0Wght300Grad0Opsz48 from '../components/HandGestureFill0Wght300Grad0Opsz48'
import IconHandGestureFill0Wght400Grad0Opsz48 from '../components/HandGestureFill0Wght400Grad0Opsz48'
import IconHandGestureFill0Wght500Grad0Opsz48 from '../components/HandGestureFill0Wght500Grad0Opsz48'
import IconHandGestureFill0Wght600Grad0Opsz48 from '../components/HandGestureFill0Wght600Grad0Opsz48'
import IconHandGestureFill0Wght700Grad0Opsz48 from '../components/HandGestureFill0Wght700Grad0Opsz48'
import IconHandGestureFill1Wght100Grad0Opsz48 from '../components/HandGestureFill1Wght100Grad0Opsz48'
import IconHandGestureFill1Wght200Grad0Opsz48 from '../components/HandGestureFill1Wght200Grad0Opsz48'
import IconHandGestureFill1Wght300Grad0Opsz48 from '../components/HandGestureFill1Wght300Grad0Opsz48'
import IconHandGestureFill1Wght400Grad0Opsz48 from '../components/HandGestureFill1Wght400Grad0Opsz48'
import IconHandGestureFill1Wght500Grad0Opsz48 from '../components/HandGestureFill1Wght500Grad0Opsz48'
import IconHandGestureFill1Wght600Grad0Opsz48 from '../components/HandGestureFill1Wght600Grad0Opsz48'
import IconHandGestureFill1Wght700Grad0Opsz48 from '../components/HandGestureFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHandGesture = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHandGestureFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHandGestureFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHandGestureFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHandGestureFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHandGestureFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHandGestureFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHandGestureFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHandGestureFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHandGestureFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHandGestureFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHandGestureFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHandGestureFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHandGestureFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHandGestureFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
