import IconAutoAwesomeMotionFill0Wght100Grad0Opsz48 from '../components/AutoAwesomeMotionFill0Wght100Grad0Opsz48'
import IconAutoAwesomeMotionFill0Wght200Grad0Opsz48 from '../components/AutoAwesomeMotionFill0Wght200Grad0Opsz48'
import IconAutoAwesomeMotionFill0Wght300Grad0Opsz48 from '../components/AutoAwesomeMotionFill0Wght300Grad0Opsz48'
import IconAutoAwesomeMotionFill0Wght400Grad0Opsz48 from '../components/AutoAwesomeMotionFill0Wght400Grad0Opsz48'
import IconAutoAwesomeMotionFill0Wght500Grad0Opsz48 from '../components/AutoAwesomeMotionFill0Wght500Grad0Opsz48'
import IconAutoAwesomeMotionFill0Wght600Grad0Opsz48 from '../components/AutoAwesomeMotionFill0Wght600Grad0Opsz48'
import IconAutoAwesomeMotionFill0Wght700Grad0Opsz48 from '../components/AutoAwesomeMotionFill0Wght700Grad0Opsz48'
import IconAutoAwesomeMotionFill1Wght100Grad0Opsz48 from '../components/AutoAwesomeMotionFill1Wght100Grad0Opsz48'
import IconAutoAwesomeMotionFill1Wght200Grad0Opsz48 from '../components/AutoAwesomeMotionFill1Wght200Grad0Opsz48'
import IconAutoAwesomeMotionFill1Wght300Grad0Opsz48 from '../components/AutoAwesomeMotionFill1Wght300Grad0Opsz48'
import IconAutoAwesomeMotionFill1Wght400Grad0Opsz48 from '../components/AutoAwesomeMotionFill1Wght400Grad0Opsz48'
import IconAutoAwesomeMotionFill1Wght500Grad0Opsz48 from '../components/AutoAwesomeMotionFill1Wght500Grad0Opsz48'
import IconAutoAwesomeMotionFill1Wght600Grad0Opsz48 from '../components/AutoAwesomeMotionFill1Wght600Grad0Opsz48'
import IconAutoAwesomeMotionFill1Wght700Grad0Opsz48 from '../components/AutoAwesomeMotionFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAutoAwesomeMotion = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAutoAwesomeMotionFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAutoAwesomeMotionFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAutoAwesomeMotionFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAutoAwesomeMotionFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAutoAwesomeMotionFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAutoAwesomeMotionFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAutoAwesomeMotionFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAutoAwesomeMotionFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAutoAwesomeMotionFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAutoAwesomeMotionFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAutoAwesomeMotionFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAutoAwesomeMotionFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAutoAwesomeMotionFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAutoAwesomeMotionFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
