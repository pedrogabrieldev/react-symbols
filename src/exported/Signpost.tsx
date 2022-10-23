import IconSignpostFill0Wght100Grad0Opsz48 from '../components/SignpostFill0Wght100Grad0Opsz48'
import IconSignpostFill0Wght200Grad0Opsz48 from '../components/SignpostFill0Wght200Grad0Opsz48'
import IconSignpostFill0Wght300Grad0Opsz48 from '../components/SignpostFill0Wght300Grad0Opsz48'
import IconSignpostFill0Wght400Grad0Opsz48 from '../components/SignpostFill0Wght400Grad0Opsz48'
import IconSignpostFill0Wght500Grad0Opsz48 from '../components/SignpostFill0Wght500Grad0Opsz48'
import IconSignpostFill0Wght600Grad0Opsz48 from '../components/SignpostFill0Wght600Grad0Opsz48'
import IconSignpostFill0Wght700Grad0Opsz48 from '../components/SignpostFill0Wght700Grad0Opsz48'
import IconSignpostFill1Wght100Grad0Opsz48 from '../components/SignpostFill1Wght100Grad0Opsz48'
import IconSignpostFill1Wght200Grad0Opsz48 from '../components/SignpostFill1Wght200Grad0Opsz48'
import IconSignpostFill1Wght300Grad0Opsz48 from '../components/SignpostFill1Wght300Grad0Opsz48'
import IconSignpostFill1Wght400Grad0Opsz48 from '../components/SignpostFill1Wght400Grad0Opsz48'
import IconSignpostFill1Wght500Grad0Opsz48 from '../components/SignpostFill1Wght500Grad0Opsz48'
import IconSignpostFill1Wght600Grad0Opsz48 from '../components/SignpostFill1Wght600Grad0Opsz48'
import IconSignpostFill1Wght700Grad0Opsz48 from '../components/SignpostFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSignpost = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSignpostFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSignpostFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSignpostFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSignpostFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSignpostFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSignpostFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSignpostFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSignpostFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSignpostFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSignpostFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSignpostFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSignpostFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSignpostFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSignpostFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
