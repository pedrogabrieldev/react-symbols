import IconHttpFill0Wght100Grad0Opsz48 from '../components/HttpFill0Wght100Grad0Opsz48'
import IconHttpFill0Wght200Grad0Opsz48 from '../components/HttpFill0Wght200Grad0Opsz48'
import IconHttpFill0Wght300Grad0Opsz48 from '../components/HttpFill0Wght300Grad0Opsz48'
import IconHttpFill0Wght400Grad0Opsz48 from '../components/HttpFill0Wght400Grad0Opsz48'
import IconHttpFill0Wght500Grad0Opsz48 from '../components/HttpFill0Wght500Grad0Opsz48'
import IconHttpFill0Wght600Grad0Opsz48 from '../components/HttpFill0Wght600Grad0Opsz48'
import IconHttpFill0Wght700Grad0Opsz48 from '../components/HttpFill0Wght700Grad0Opsz48'
import IconHttpFill1Wght100Grad0Opsz48 from '../components/HttpFill1Wght100Grad0Opsz48'
import IconHttpFill1Wght200Grad0Opsz48 from '../components/HttpFill1Wght200Grad0Opsz48'
import IconHttpFill1Wght300Grad0Opsz48 from '../components/HttpFill1Wght300Grad0Opsz48'
import IconHttpFill1Wght400Grad0Opsz48 from '../components/HttpFill1Wght400Grad0Opsz48'
import IconHttpFill1Wght500Grad0Opsz48 from '../components/HttpFill1Wght500Grad0Opsz48'
import IconHttpFill1Wght600Grad0Opsz48 from '../components/HttpFill1Wght600Grad0Opsz48'
import IconHttpFill1Wght700Grad0Opsz48 from '../components/HttpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHttp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHttpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHttpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHttpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHttpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHttpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHttpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHttpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHttpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHttpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHttpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHttpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHttpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHttpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHttpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
