import IconGestureFill0Wght100Grad0Opsz48 from '../components/GestureFill0Wght100Grad0Opsz48'
import IconGestureFill0Wght200Grad0Opsz48 from '../components/GestureFill0Wght200Grad0Opsz48'
import IconGestureFill0Wght300Grad0Opsz48 from '../components/GestureFill0Wght300Grad0Opsz48'
import IconGestureFill0Wght400Grad0Opsz48 from '../components/GestureFill0Wght400Grad0Opsz48'
import IconGestureFill0Wght500Grad0Opsz48 from '../components/GestureFill0Wght500Grad0Opsz48'
import IconGestureFill0Wght600Grad0Opsz48 from '../components/GestureFill0Wght600Grad0Opsz48'
import IconGestureFill0Wght700Grad0Opsz48 from '../components/GestureFill0Wght700Grad0Opsz48'
import IconGestureFill1Wght100Grad0Opsz48 from '../components/GestureFill1Wght100Grad0Opsz48'
import IconGestureFill1Wght200Grad0Opsz48 from '../components/GestureFill1Wght200Grad0Opsz48'
import IconGestureFill1Wght300Grad0Opsz48 from '../components/GestureFill1Wght300Grad0Opsz48'
import IconGestureFill1Wght400Grad0Opsz48 from '../components/GestureFill1Wght400Grad0Opsz48'
import IconGestureFill1Wght500Grad0Opsz48 from '../components/GestureFill1Wght500Grad0Opsz48'
import IconGestureFill1Wght600Grad0Opsz48 from '../components/GestureFill1Wght600Grad0Opsz48'
import IconGestureFill1Wght700Grad0Opsz48 from '../components/GestureFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGesture = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGestureFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGestureFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGestureFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGestureFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGestureFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGestureFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGestureFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGestureFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGestureFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGestureFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGestureFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGestureFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGestureFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGestureFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
