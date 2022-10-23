import IconLocalFloristFill0Wght100Grad0Opsz48 from '../components/LocalFloristFill0Wght100Grad0Opsz48'
import IconLocalFloristFill0Wght200Grad0Opsz48 from '../components/LocalFloristFill0Wght200Grad0Opsz48'
import IconLocalFloristFill0Wght300Grad0Opsz48 from '../components/LocalFloristFill0Wght300Grad0Opsz48'
import IconLocalFloristFill0Wght400Grad0Opsz48 from '../components/LocalFloristFill0Wght400Grad0Opsz48'
import IconLocalFloristFill0Wght500Grad0Opsz48 from '../components/LocalFloristFill0Wght500Grad0Opsz48'
import IconLocalFloristFill0Wght600Grad0Opsz48 from '../components/LocalFloristFill0Wght600Grad0Opsz48'
import IconLocalFloristFill0Wght700Grad0Opsz48 from '../components/LocalFloristFill0Wght700Grad0Opsz48'
import IconLocalFloristFill1Wght100Grad0Opsz48 from '../components/LocalFloristFill1Wght100Grad0Opsz48'
import IconLocalFloristFill1Wght200Grad0Opsz48 from '../components/LocalFloristFill1Wght200Grad0Opsz48'
import IconLocalFloristFill1Wght300Grad0Opsz48 from '../components/LocalFloristFill1Wght300Grad0Opsz48'
import IconLocalFloristFill1Wght400Grad0Opsz48 from '../components/LocalFloristFill1Wght400Grad0Opsz48'
import IconLocalFloristFill1Wght500Grad0Opsz48 from '../components/LocalFloristFill1Wght500Grad0Opsz48'
import IconLocalFloristFill1Wght600Grad0Opsz48 from '../components/LocalFloristFill1Wght600Grad0Opsz48'
import IconLocalFloristFill1Wght700Grad0Opsz48 from '../components/LocalFloristFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalFlorist = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalFloristFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalFloristFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalFloristFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalFloristFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalFloristFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalFloristFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalFloristFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalFloristFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalFloristFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalFloristFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalFloristFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalFloristFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalFloristFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalFloristFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
