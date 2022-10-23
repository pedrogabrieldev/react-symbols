import IconTransformFill0Wght100Grad0Opsz48 from '../components/TransformFill0Wght100Grad0Opsz48'
import IconTransformFill0Wght200Grad0Opsz48 from '../components/TransformFill0Wght200Grad0Opsz48'
import IconTransformFill0Wght300Grad0Opsz48 from '../components/TransformFill0Wght300Grad0Opsz48'
import IconTransformFill0Wght400Grad0Opsz48 from '../components/TransformFill0Wght400Grad0Opsz48'
import IconTransformFill0Wght500Grad0Opsz48 from '../components/TransformFill0Wght500Grad0Opsz48'
import IconTransformFill0Wght600Grad0Opsz48 from '../components/TransformFill0Wght600Grad0Opsz48'
import IconTransformFill0Wght700Grad0Opsz48 from '../components/TransformFill0Wght700Grad0Opsz48'
import IconTransformFill1Wght100Grad0Opsz48 from '../components/TransformFill1Wght100Grad0Opsz48'
import IconTransformFill1Wght200Grad0Opsz48 from '../components/TransformFill1Wght200Grad0Opsz48'
import IconTransformFill1Wght300Grad0Opsz48 from '../components/TransformFill1Wght300Grad0Opsz48'
import IconTransformFill1Wght400Grad0Opsz48 from '../components/TransformFill1Wght400Grad0Opsz48'
import IconTransformFill1Wght500Grad0Opsz48 from '../components/TransformFill1Wght500Grad0Opsz48'
import IconTransformFill1Wght600Grad0Opsz48 from '../components/TransformFill1Wght600Grad0Opsz48'
import IconTransformFill1Wght700Grad0Opsz48 from '../components/TransformFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTransform = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTransformFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTransformFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTransformFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTransformFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTransformFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTransformFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTransformFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTransformFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTransformFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTransformFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTransformFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTransformFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTransformFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTransformFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
