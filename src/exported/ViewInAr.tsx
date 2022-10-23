import IconViewInArFill0Wght100Grad0Opsz48 from '../components/ViewInArFill0Wght100Grad0Opsz48'
import IconViewInArFill0Wght200Grad0Opsz48 from '../components/ViewInArFill0Wght200Grad0Opsz48'
import IconViewInArFill0Wght300Grad0Opsz48 from '../components/ViewInArFill0Wght300Grad0Opsz48'
import IconViewInArFill0Wght400Grad0Opsz48 from '../components/ViewInArFill0Wght400Grad0Opsz48'
import IconViewInArFill0Wght500Grad0Opsz48 from '../components/ViewInArFill0Wght500Grad0Opsz48'
import IconViewInArFill0Wght600Grad0Opsz48 from '../components/ViewInArFill0Wght600Grad0Opsz48'
import IconViewInArFill0Wght700Grad0Opsz48 from '../components/ViewInArFill0Wght700Grad0Opsz48'
import IconViewInArFill1Wght100Grad0Opsz48 from '../components/ViewInArFill1Wght100Grad0Opsz48'
import IconViewInArFill1Wght200Grad0Opsz48 from '../components/ViewInArFill1Wght200Grad0Opsz48'
import IconViewInArFill1Wght300Grad0Opsz48 from '../components/ViewInArFill1Wght300Grad0Opsz48'
import IconViewInArFill1Wght400Grad0Opsz48 from '../components/ViewInArFill1Wght400Grad0Opsz48'
import IconViewInArFill1Wght500Grad0Opsz48 from '../components/ViewInArFill1Wght500Grad0Opsz48'
import IconViewInArFill1Wght600Grad0Opsz48 from '../components/ViewInArFill1Wght600Grad0Opsz48'
import IconViewInArFill1Wght700Grad0Opsz48 from '../components/ViewInArFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconViewInAr = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconViewInArFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconViewInArFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconViewInArFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconViewInArFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconViewInArFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconViewInArFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconViewInArFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconViewInArFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconViewInArFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconViewInArFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconViewInArFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconViewInArFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconViewInArFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconViewInArFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
