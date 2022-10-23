import IconAutoDeleteFill0Wght100Grad0Opsz48 from '../components/AutoDeleteFill0Wght100Grad0Opsz48'
import IconAutoDeleteFill0Wght200Grad0Opsz48 from '../components/AutoDeleteFill0Wght200Grad0Opsz48'
import IconAutoDeleteFill0Wght300Grad0Opsz48 from '../components/AutoDeleteFill0Wght300Grad0Opsz48'
import IconAutoDeleteFill0Wght400Grad0Opsz48 from '../components/AutoDeleteFill0Wght400Grad0Opsz48'
import IconAutoDeleteFill0Wght500Grad0Opsz48 from '../components/AutoDeleteFill0Wght500Grad0Opsz48'
import IconAutoDeleteFill0Wght600Grad0Opsz48 from '../components/AutoDeleteFill0Wght600Grad0Opsz48'
import IconAutoDeleteFill0Wght700Grad0Opsz48 from '../components/AutoDeleteFill0Wght700Grad0Opsz48'
import IconAutoDeleteFill1Wght100Grad0Opsz48 from '../components/AutoDeleteFill1Wght100Grad0Opsz48'
import IconAutoDeleteFill1Wght200Grad0Opsz48 from '../components/AutoDeleteFill1Wght200Grad0Opsz48'
import IconAutoDeleteFill1Wght300Grad0Opsz48 from '../components/AutoDeleteFill1Wght300Grad0Opsz48'
import IconAutoDeleteFill1Wght400Grad0Opsz48 from '../components/AutoDeleteFill1Wght400Grad0Opsz48'
import IconAutoDeleteFill1Wght500Grad0Opsz48 from '../components/AutoDeleteFill1Wght500Grad0Opsz48'
import IconAutoDeleteFill1Wght600Grad0Opsz48 from '../components/AutoDeleteFill1Wght600Grad0Opsz48'
import IconAutoDeleteFill1Wght700Grad0Opsz48 from '../components/AutoDeleteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAutoDelete = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAutoDeleteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAutoDeleteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAutoDeleteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAutoDeleteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAutoDeleteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAutoDeleteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAutoDeleteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAutoDeleteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAutoDeleteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAutoDeleteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAutoDeleteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAutoDeleteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAutoDeleteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAutoDeleteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
