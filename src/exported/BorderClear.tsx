import IconBorderClearFill0Wght100Grad0Opsz48 from '../components/BorderClearFill0Wght100Grad0Opsz48'
import IconBorderClearFill0Wght200Grad0Opsz48 from '../components/BorderClearFill0Wght200Grad0Opsz48'
import IconBorderClearFill0Wght300Grad0Opsz48 from '../components/BorderClearFill0Wght300Grad0Opsz48'
import IconBorderClearFill0Wght400Grad0Opsz48 from '../components/BorderClearFill0Wght400Grad0Opsz48'
import IconBorderClearFill0Wght500Grad0Opsz48 from '../components/BorderClearFill0Wght500Grad0Opsz48'
import IconBorderClearFill0Wght600Grad0Opsz48 from '../components/BorderClearFill0Wght600Grad0Opsz48'
import IconBorderClearFill0Wght700Grad0Opsz48 from '../components/BorderClearFill0Wght700Grad0Opsz48'
import IconBorderClearFill1Wght100Grad0Opsz48 from '../components/BorderClearFill1Wght100Grad0Opsz48'
import IconBorderClearFill1Wght200Grad0Opsz48 from '../components/BorderClearFill1Wght200Grad0Opsz48'
import IconBorderClearFill1Wght300Grad0Opsz48 from '../components/BorderClearFill1Wght300Grad0Opsz48'
import IconBorderClearFill1Wght400Grad0Opsz48 from '../components/BorderClearFill1Wght400Grad0Opsz48'
import IconBorderClearFill1Wght500Grad0Opsz48 from '../components/BorderClearFill1Wght500Grad0Opsz48'
import IconBorderClearFill1Wght600Grad0Opsz48 from '../components/BorderClearFill1Wght600Grad0Opsz48'
import IconBorderClearFill1Wght700Grad0Opsz48 from '../components/BorderClearFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBorderClear = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBorderClearFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBorderClearFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBorderClearFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBorderClearFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBorderClearFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBorderClearFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBorderClearFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBorderClearFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBorderClearFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBorderClearFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBorderClearFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBorderClearFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBorderClearFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBorderClearFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
