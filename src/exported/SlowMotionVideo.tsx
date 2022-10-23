import IconSlowMotionVideoFill0Wght100Grad0Opsz48 from '../components/SlowMotionVideoFill0Wght100Grad0Opsz48'
import IconSlowMotionVideoFill0Wght200Grad0Opsz48 from '../components/SlowMotionVideoFill0Wght200Grad0Opsz48'
import IconSlowMotionVideoFill0Wght300Grad0Opsz48 from '../components/SlowMotionVideoFill0Wght300Grad0Opsz48'
import IconSlowMotionVideoFill0Wght400Grad0Opsz48 from '../components/SlowMotionVideoFill0Wght400Grad0Opsz48'
import IconSlowMotionVideoFill0Wght500Grad0Opsz48 from '../components/SlowMotionVideoFill0Wght500Grad0Opsz48'
import IconSlowMotionVideoFill0Wght600Grad0Opsz48 from '../components/SlowMotionVideoFill0Wght600Grad0Opsz48'
import IconSlowMotionVideoFill0Wght700Grad0Opsz48 from '../components/SlowMotionVideoFill0Wght700Grad0Opsz48'
import IconSlowMotionVideoFill1Wght100Grad0Opsz48 from '../components/SlowMotionVideoFill1Wght100Grad0Opsz48'
import IconSlowMotionVideoFill1Wght200Grad0Opsz48 from '../components/SlowMotionVideoFill1Wght200Grad0Opsz48'
import IconSlowMotionVideoFill1Wght300Grad0Opsz48 from '../components/SlowMotionVideoFill1Wght300Grad0Opsz48'
import IconSlowMotionVideoFill1Wght400Grad0Opsz48 from '../components/SlowMotionVideoFill1Wght400Grad0Opsz48'
import IconSlowMotionVideoFill1Wght500Grad0Opsz48 from '../components/SlowMotionVideoFill1Wght500Grad0Opsz48'
import IconSlowMotionVideoFill1Wght600Grad0Opsz48 from '../components/SlowMotionVideoFill1Wght600Grad0Opsz48'
import IconSlowMotionVideoFill1Wght700Grad0Opsz48 from '../components/SlowMotionVideoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSlowMotionVideo = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSlowMotionVideoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSlowMotionVideoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSlowMotionVideoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSlowMotionVideoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSlowMotionVideoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSlowMotionVideoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSlowMotionVideoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSlowMotionVideoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSlowMotionVideoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSlowMotionVideoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSlowMotionVideoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSlowMotionVideoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSlowMotionVideoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSlowMotionVideoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
