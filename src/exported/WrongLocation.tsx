import IconWrongLocationFill0Wght100Grad0Opsz48 from '../components/WrongLocationFill0Wght100Grad0Opsz48'
import IconWrongLocationFill0Wght200Grad0Opsz48 from '../components/WrongLocationFill0Wght200Grad0Opsz48'
import IconWrongLocationFill0Wght300Grad0Opsz48 from '../components/WrongLocationFill0Wght300Grad0Opsz48'
import IconWrongLocationFill0Wght400Grad0Opsz48 from '../components/WrongLocationFill0Wght400Grad0Opsz48'
import IconWrongLocationFill0Wght500Grad0Opsz48 from '../components/WrongLocationFill0Wght500Grad0Opsz48'
import IconWrongLocationFill0Wght600Grad0Opsz48 from '../components/WrongLocationFill0Wght600Grad0Opsz48'
import IconWrongLocationFill0Wght700Grad0Opsz48 from '../components/WrongLocationFill0Wght700Grad0Opsz48'
import IconWrongLocationFill1Wght100Grad0Opsz48 from '../components/WrongLocationFill1Wght100Grad0Opsz48'
import IconWrongLocationFill1Wght200Grad0Opsz48 from '../components/WrongLocationFill1Wght200Grad0Opsz48'
import IconWrongLocationFill1Wght300Grad0Opsz48 from '../components/WrongLocationFill1Wght300Grad0Opsz48'
import IconWrongLocationFill1Wght400Grad0Opsz48 from '../components/WrongLocationFill1Wght400Grad0Opsz48'
import IconWrongLocationFill1Wght500Grad0Opsz48 from '../components/WrongLocationFill1Wght500Grad0Opsz48'
import IconWrongLocationFill1Wght600Grad0Opsz48 from '../components/WrongLocationFill1Wght600Grad0Opsz48'
import IconWrongLocationFill1Wght700Grad0Opsz48 from '../components/WrongLocationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWrongLocation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWrongLocationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWrongLocationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWrongLocationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWrongLocationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWrongLocationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWrongLocationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWrongLocationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWrongLocationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWrongLocationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWrongLocationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWrongLocationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWrongLocationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWrongLocationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWrongLocationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
