import IconRowingFill0Wght100Grad0Opsz48 from '../components/RowingFill0Wght100Grad0Opsz48'
import IconRowingFill0Wght200Grad0Opsz48 from '../components/RowingFill0Wght200Grad0Opsz48'
import IconRowingFill0Wght300Grad0Opsz48 from '../components/RowingFill0Wght300Grad0Opsz48'
import IconRowingFill0Wght400Grad0Opsz48 from '../components/RowingFill0Wght400Grad0Opsz48'
import IconRowingFill0Wght500Grad0Opsz48 from '../components/RowingFill0Wght500Grad0Opsz48'
import IconRowingFill0Wght600Grad0Opsz48 from '../components/RowingFill0Wght600Grad0Opsz48'
import IconRowingFill0Wght700Grad0Opsz48 from '../components/RowingFill0Wght700Grad0Opsz48'
import IconRowingFill1Wght100Grad0Opsz48 from '../components/RowingFill1Wght100Grad0Opsz48'
import IconRowingFill1Wght200Grad0Opsz48 from '../components/RowingFill1Wght200Grad0Opsz48'
import IconRowingFill1Wght300Grad0Opsz48 from '../components/RowingFill1Wght300Grad0Opsz48'
import IconRowingFill1Wght400Grad0Opsz48 from '../components/RowingFill1Wght400Grad0Opsz48'
import IconRowingFill1Wght500Grad0Opsz48 from '../components/RowingFill1Wght500Grad0Opsz48'
import IconRowingFill1Wght600Grad0Opsz48 from '../components/RowingFill1Wght600Grad0Opsz48'
import IconRowingFill1Wght700Grad0Opsz48 from '../components/RowingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRowing = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRowingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRowingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRowingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRowingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRowingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRowingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRowingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRowingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRowingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRowingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRowingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRowingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRowingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRowingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
