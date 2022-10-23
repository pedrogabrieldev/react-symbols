import IconEdgesensorHighFill0Wght100Grad0Opsz48 from '../components/EdgesensorHighFill0Wght100Grad0Opsz48'
import IconEdgesensorHighFill0Wght200Grad0Opsz48 from '../components/EdgesensorHighFill0Wght200Grad0Opsz48'
import IconEdgesensorHighFill0Wght300Grad0Opsz48 from '../components/EdgesensorHighFill0Wght300Grad0Opsz48'
import IconEdgesensorHighFill0Wght400Grad0Opsz48 from '../components/EdgesensorHighFill0Wght400Grad0Opsz48'
import IconEdgesensorHighFill0Wght500Grad0Opsz48 from '../components/EdgesensorHighFill0Wght500Grad0Opsz48'
import IconEdgesensorHighFill0Wght600Grad0Opsz48 from '../components/EdgesensorHighFill0Wght600Grad0Opsz48'
import IconEdgesensorHighFill0Wght700Grad0Opsz48 from '../components/EdgesensorHighFill0Wght700Grad0Opsz48'
import IconEdgesensorHighFill1Wght100Grad0Opsz48 from '../components/EdgesensorHighFill1Wght100Grad0Opsz48'
import IconEdgesensorHighFill1Wght200Grad0Opsz48 from '../components/EdgesensorHighFill1Wght200Grad0Opsz48'
import IconEdgesensorHighFill1Wght300Grad0Opsz48 from '../components/EdgesensorHighFill1Wght300Grad0Opsz48'
import IconEdgesensorHighFill1Wght400Grad0Opsz48 from '../components/EdgesensorHighFill1Wght400Grad0Opsz48'
import IconEdgesensorHighFill1Wght500Grad0Opsz48 from '../components/EdgesensorHighFill1Wght500Grad0Opsz48'
import IconEdgesensorHighFill1Wght600Grad0Opsz48 from '../components/EdgesensorHighFill1Wght600Grad0Opsz48'
import IconEdgesensorHighFill1Wght700Grad0Opsz48 from '../components/EdgesensorHighFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEdgesensorHigh = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEdgesensorHighFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEdgesensorHighFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEdgesensorHighFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEdgesensorHighFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEdgesensorHighFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEdgesensorHighFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEdgesensorHighFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEdgesensorHighFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEdgesensorHighFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEdgesensorHighFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEdgesensorHighFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEdgesensorHighFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEdgesensorHighFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEdgesensorHighFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
