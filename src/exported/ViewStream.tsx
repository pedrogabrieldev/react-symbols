import IconViewStreamFill0Wght100Grad0Opsz48 from '../components/ViewStreamFill0Wght100Grad0Opsz48'
import IconViewStreamFill0Wght200Grad0Opsz48 from '../components/ViewStreamFill0Wght200Grad0Opsz48'
import IconViewStreamFill0Wght300Grad0Opsz48 from '../components/ViewStreamFill0Wght300Grad0Opsz48'
import IconViewStreamFill0Wght400Grad0Opsz48 from '../components/ViewStreamFill0Wght400Grad0Opsz48'
import IconViewStreamFill0Wght500Grad0Opsz48 from '../components/ViewStreamFill0Wght500Grad0Opsz48'
import IconViewStreamFill0Wght600Grad0Opsz48 from '../components/ViewStreamFill0Wght600Grad0Opsz48'
import IconViewStreamFill0Wght700Grad0Opsz48 from '../components/ViewStreamFill0Wght700Grad0Opsz48'
import IconViewStreamFill1Wght100Grad0Opsz48 from '../components/ViewStreamFill1Wght100Grad0Opsz48'
import IconViewStreamFill1Wght200Grad0Opsz48 from '../components/ViewStreamFill1Wght200Grad0Opsz48'
import IconViewStreamFill1Wght300Grad0Opsz48 from '../components/ViewStreamFill1Wght300Grad0Opsz48'
import IconViewStreamFill1Wght400Grad0Opsz48 from '../components/ViewStreamFill1Wght400Grad0Opsz48'
import IconViewStreamFill1Wght500Grad0Opsz48 from '../components/ViewStreamFill1Wght500Grad0Opsz48'
import IconViewStreamFill1Wght600Grad0Opsz48 from '../components/ViewStreamFill1Wght600Grad0Opsz48'
import IconViewStreamFill1Wght700Grad0Opsz48 from '../components/ViewStreamFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconViewStream = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconViewStreamFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconViewStreamFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconViewStreamFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconViewStreamFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconViewStreamFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconViewStreamFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconViewStreamFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconViewStreamFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconViewStreamFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconViewStreamFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconViewStreamFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconViewStreamFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconViewStreamFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconViewStreamFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
