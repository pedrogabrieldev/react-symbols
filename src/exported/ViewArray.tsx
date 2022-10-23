import IconViewArrayFill0Wght100Grad0Opsz48 from '../components/ViewArrayFill0Wght100Grad0Opsz48'
import IconViewArrayFill0Wght200Grad0Opsz48 from '../components/ViewArrayFill0Wght200Grad0Opsz48'
import IconViewArrayFill0Wght300Grad0Opsz48 from '../components/ViewArrayFill0Wght300Grad0Opsz48'
import IconViewArrayFill0Wght400Grad0Opsz48 from '../components/ViewArrayFill0Wght400Grad0Opsz48'
import IconViewArrayFill0Wght500Grad0Opsz48 from '../components/ViewArrayFill0Wght500Grad0Opsz48'
import IconViewArrayFill0Wght600Grad0Opsz48 from '../components/ViewArrayFill0Wght600Grad0Opsz48'
import IconViewArrayFill0Wght700Grad0Opsz48 from '../components/ViewArrayFill0Wght700Grad0Opsz48'
import IconViewArrayFill1Wght100Grad0Opsz48 from '../components/ViewArrayFill1Wght100Grad0Opsz48'
import IconViewArrayFill1Wght200Grad0Opsz48 from '../components/ViewArrayFill1Wght200Grad0Opsz48'
import IconViewArrayFill1Wght300Grad0Opsz48 from '../components/ViewArrayFill1Wght300Grad0Opsz48'
import IconViewArrayFill1Wght400Grad0Opsz48 from '../components/ViewArrayFill1Wght400Grad0Opsz48'
import IconViewArrayFill1Wght500Grad0Opsz48 from '../components/ViewArrayFill1Wght500Grad0Opsz48'
import IconViewArrayFill1Wght600Grad0Opsz48 from '../components/ViewArrayFill1Wght600Grad0Opsz48'
import IconViewArrayFill1Wght700Grad0Opsz48 from '../components/ViewArrayFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconViewArray = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconViewArrayFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconViewArrayFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconViewArrayFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconViewArrayFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconViewArrayFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconViewArrayFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconViewArrayFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconViewArrayFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconViewArrayFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconViewArrayFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconViewArrayFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconViewArrayFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconViewArrayFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconViewArrayFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
